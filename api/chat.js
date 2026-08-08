// Serverless backend API endpoint for Vercel / Netlify
export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,OPTIONS,PATCH,DELETE,POST,PUT"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed. Use POST." });
  }

  const apiKey = process.env.GEMINI_API_KEY || process.env.VITE_GEMINI_API_KEY;

  if (!apiKey) {
    return res.status(500).json({
      error:
        "GEMINI_API_KEY is not configured on the server. Please add it to your environment variables.",
    });
  }

  try {
    const { contents, systemPrompt, message, history } = req.body || {};

    let payloadContents = contents;

    if (!payloadContents) {
      const fullPrompt = `${systemPrompt || ""}\n\n${
        history ? `Recent conversation:\n${history}\n\n` : ""
      }User: ${message || ""}`;

      payloadContents = [
        {
          role: "user",
          parts: [{ text: fullPrompt }],
        },
      ];
    }

    const modelsToTry = [
      { version: "v1beta", model: "gemini-1.5-flash" },
      { version: "v1beta", model: "gemini-2.0-flash" },
      { version: "v1beta", model: "gemini-1.5-pro" },
      { version: "v1beta", model: "gemini-pro" },
      { version: "v1", model: "gemini-1.5-flash" },
      { version: "v1", model: "gemini-pro" },
    ];

    let reply = "";
    let lastErr = "";
    let lastStatus = 500;

    for (const item of modelsToTry) {
      try {
        const response = await fetch(
          `https://generativelanguage.googleapis.com/${item.version}/models/${item.model}:generateContent?key=${apiKey}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              contents: payloadContents,
              generationConfig: {
                temperature: 0.7,
                maxOutputTokens: 600,
              },
            }),
          }
        );

        const data = await response.json();

        if (response.ok) {
          reply =
            data?.candidates?.[0]?.content?.parts?.[0]?.text || "";
          if (reply) break;
        } else {
          lastStatus = response.status;
          lastErr = data?.error?.message || `Status ${response.status}`;
          if (lastErr.includes("API key not valid")) break;
        }
      } catch (e) {
        lastErr = e.message;
      }
    }

    if (!reply) {
      return res
        .status(lastStatus || 400)
        .json({ error: lastErr || "Error calling Gemini API" });
    }

    return res.status(200).json({ reply });
  } catch (error) {
    console.error("Server API Chatbot error:", error);
    return res
      .status(500)
      .json({ error: error?.message || "Internal server error" });
  }
}
