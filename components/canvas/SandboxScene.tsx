"use client";

import { useRef, Suspense, useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { Environment, useGLTF, PresentationControls, Html, Float, MeshDistortMaterial, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

// --- RESPONSIVE CAMERA CONTROLLER ---
function ResponsiveCamera() {
  const { camera, size } = useThree();
  
  useEffect(() => {
    const isMobile = size.width < 768;
    
    if (isMobile) {
      // Pull camera back further on mobile and increase FOV to fit the wide block
      camera.position.set(20, 18, 20); 
      camera.fov = 45;
    } else {
      // Desktop default
      camera.position.set(15, 12, 15);
      camera.fov = 28;
    }
    camera.updateProjectionMatrix();
  }, [size.width, camera]);

  return null;
}

// --- LEVEL WRAPPER (Handles Mobile Y-Offset) ---
function LevelWrapper({ children }: { children: React.ReactNode }) {
  const { size } = useThree();
  const isMobile = size.width < 768;
  
  // On mobile, we push the model "up" in the 3D space so it sits above 
  // the bottom interface sheet we built.
  const yOffset = isMobile ? 1.5 : 0;

  return (
    <group position={[0, yOffset, 0]}>
      {children}
    </group>
  );
}

// --- LEVEL 1: AERIAL ---
function AerialLevel() {
  const { scene } = useGLTF("/models/drone.glb");
  return (
    <Float speed={3} rotationIntensity={1} floatIntensity={2}>
      <primitive object={scene} scale={1.8} />
      <mesh position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[10, 10]} />
        <MeshDistortMaterial color="#FF4D00" opacity={0.1} transparent speed={2} factor={0.4} wireframe />
      </mesh>
    </Float>
  );
}

// --- LEVEL 2: LAND SURVEY ---
function SurveyLevel() {
  const { scene: camera } = useGLTF("/models/camera.glb");
  const { scene: block } = useGLTF("/models/block.glb");
  return (
    <group>
      <primitive object={block} position={[0, -0.6, 0]} scale={[8, 0.4, 8]} />
      <primitive object={camera} position={[-2.5, 0.4, 2.5]} scale={1.5} />
    </group>
  );
}

// --- LEVEL 3: CIVIL ---
function CivilLevel() {
  const { scene: pipes } = useGLTF("/models/pipes.glb");
  const { scene: block } = useGLTF("/models/block.glb");
  return (
    <group>
      <primitive object={block} position={[0, -0.6, 0]} scale={[8, 0.4, 8]} />
      <primitive object={pipes} position={[0, 0.6, 0]} scale={3} />
    </group>
  );
}

// --- LEVEL 4: ENVIRONMENTAL ---
function EnvLevel() {
  const { scene: trees } = useGLTF("/models/trees.glb");
  const { scene: block } = useGLTF("/models/block.glb");
  return (
    <group>
      <primitive object={block} position={[0, -0.6, 0]} scale={[8, 0.4, 8]} />
      <primitive object={trees} position={[0, 0.6, 0]} scale={3.5} />
    </group>
  );
}

// --- LEVEL 5: PLANNING ---
function PlanningLevel() {
  const { scene: city } = useGLTF("/models/city.glb");
  const { scene: block } = useGLTF("/models/block.glb");
  return (
    <group>
      <primitive object={block} position={[0, -0.6, 0]} scale={[8, 0.4, 8]} />
      <primitive object={city} position={[0, 0.8, 0]} scale={3.5} />
    </group>
  );
}

export default function SandboxScene({ phase }: { phase: number }) {
  return (
    <Canvas 
      camera={{ position: [15, 12, 15], fov: 28 }} 
      dpr={[1, 2]}
      className="touch-none"
    >
      <color attach="background" args={["#050505"]} />
      
      <Suspense fallback={
        <Html center>
          <div className="flex flex-col items-center gap-2">
            <div className="w-8 h-8 border-2 border-[var(--accent)] border-t-transparent rounded-full animate-spin" />
            <span className="text-[var(--accent)] font-black text-[10px] tracking-[0.3em] uppercase whitespace-nowrap">
              Initializing...
            </span>
          </div>
        </Html>
      }>
        <ResponsiveCamera />
        <Environment preset="city" />
        <ambientLight intensity={0.9} />
        <spotLight position={[20, 30, 20]} angle={0.2} penumbra={1} intensity={3.5} castShadow />

        <PresentationControls 
          global 
          snap={true} 
          speed={1.5} 
          rotation={[0, -Math.PI / 4, 0]} 
          polar={[-0.1, 0.3]} 
          azimuth={[-0.6, 0.6]}
        >
          <LevelWrapper>
            <group>
              {phase === 1 && <AerialLevel />}
              {phase === 2 && <SurveyLevel />}
              {phase === 3 && <CivilLevel />}
              {phase === 4 && <EnvLevel />}
              {phase === 5 && <PlanningLevel />}
              
              {phase === 0 && (
                <mesh>
                  <boxGeometry args={[2, 2, 2]} />
                  <meshStandardMaterial color="#FF4D00" wireframe />
                </mesh>
              )}
            </group>
          </LevelWrapper>
        </PresentationControls>

        <ContactShadows position={[0, -0.61, 0]} opacity={0.6} scale={25} blur={3} far={10} />
      </Suspense>
    </Canvas>
  );
}

useGLTF.preload("/models/drone.glb");
useGLTF.preload("/models/camera.glb");
useGLTF.preload("/models/block.glb");
useGLTF.preload("/models/pipes.glb");
useGLTF.preload("/models/trees.glb");
useGLTF.preload("/models/city.glb");