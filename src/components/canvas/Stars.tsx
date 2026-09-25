import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import { random } from "maath";
import { TypedArray } from "three";

const NeuralStars = (props: any) => {
  const ref1 = useRef<THREE.Points>();
  const ref2 = useRef<THREE.Points>();

  const [sphere1] = useState<TypedArray>(() =>
    random.inSphere(new Float32Array(4002), { radius: 1.2 })
  );
  const [sphere2] = useState<TypedArray>(() =>
    random.inSphere(new Float32Array(2502), { radius: 1.35 })
  );

  useFrame((_state, delta) => {
    if (ref1.current) {
      ref1.current.rotation.x -= delta / 12;
      ref1.current.rotation.y -= delta / 16;
    }
    if (ref2.current) {
      ref2.current.rotation.x += delta / 18;
      ref2.current.rotation.y += delta / 22;
    }
  });

  return (
    <>
      <group rotation={[0, 0, Math.PI / 4]}>
        <Points ref={ref1} positions={sphere1} stride={3} frustumCulled {...props}>
          <PointMaterial
            transparent
            color="#915eff"
            size={0.0022}
            sizeAttenuation={true}
            depthWrite={false}
          />
        </Points>
      </group>
      <group rotation={[0, 0, -Math.PI / 6]}>
        <Points ref={ref2} positions={sphere2} stride={3} frustumCulled {...props}>
          <PointMaterial
            transparent
            color="#00f2fe"
            size={0.0018}
            sizeAttenuation={true}
            depthWrite={false}
          />
        </Points>
      </group>
    </>
  );
};

const StarsCanvas = () => {
  return (
    <div className="fixed inset-0 z-0 h-full w-full pointer-events-none overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 1] }}
        gl={{ alpha: true, antialias: false, powerPreference: "high-performance" }}
        dpr={[1, 1.5]}
      >
        <Suspense fallback={null}>
          <NeuralStars />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;

