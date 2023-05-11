import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Scene } from "./Scene";

export function FiberContainer() {
  return (
    <Canvas camera={{position: [14.4666, 2.036, 5.5], fov: 40 }}>
      
      <Scene />
      
      <OrbitControls minDistance={1} maxDistance={200} />
    </Canvas>
  );
}

