"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, Preload } from "@react-three/drei";
import DroneModel from "./DroneModel";
import FooterDiorama from "./FooterDiorama";
import BentoPortals from "./BentoPortals";

export default function Scene() {
  return (
    // The canvas is fixed, covers the whole screen, and ignores pointer events 
    // so you can still click the HTML buttons underneath.
    <div className="fixed inset-0 z-40 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 35 }}
        gl={{ antialias: true, alpha: true }} // alpha: true makes the background transparent
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
        <Environment preset="city" />

        {/* We will build these three components next */}
        <DroneModel />
        <FooterDiorama />
        <BentoPortals />

        {/* Preload ensures models are ready before they are needed */}
        <Preload all />
      </Canvas>
    </div>
  );
}