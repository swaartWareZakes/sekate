"use client";

import { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function DroneModel() {
  const { scene } = useGLTF("/models/drone.glb");
  const droneRef = useRef<THREE.Group>(null);

  useEffect(() => {
    const drone = droneRef.current;
    if (!drone) return;

    gsap.set(drone.position, { x: 3, y: 2, z: 0 });
    gsap.set(drone.scale, { x: 0.6, y: 0.6, z: 0.6 });

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "bottom bottom",
          scrub: 1, // Smooth scrolling
        },
      });

      // Journey down the page
      tl.to(drone.position, { y: -4, x: -2.5, ease: "power1.inOut" }, 0)
        .to(drone.position, { y: -12, x: 2.5, ease: "power1.inOut" }, 0.5)
        .to(drone.position, { y: -20, x: 0, z: 2, ease: "power1.inOut" }, 1); // Flies closer to camera at the end
    });

    return () => ctx.revert();
  }, []);

  // MAKE IT USEFUL: Make the drone "look" at the user's mouse
  useFrame((state) => {
    if (droneRef.current) {
      // 1. Natural hover bobbing
      droneRef.current.position.y += Math.sin(state.clock.elapsedTime * 3) * 0.003;
      
      // 2. Mouse tracking (drone tilts towards cursor)
      const targetRotationX = (state.pointer.y * Math.PI) / 4;
      const targetRotationY = (state.pointer.x * Math.PI) / 4;
      
      droneRef.current.rotation.x = THREE.MathUtils.lerp(droneRef.current.rotation.x, targetRotationX, 0.05);
      droneRef.current.rotation.y = THREE.MathUtils.lerp(droneRef.current.rotation.y, targetRotationY, 0.05);
      
      // Add a slight banking tilt on the Z axis based on X movement
      droneRef.current.rotation.z = THREE.MathUtils.lerp(droneRef.current.rotation.z, -state.pointer.x * 0.5, 0.05);
    }
  });

  return (
    <group ref={droneRef} dispose={null}>
      <primitive object={scene} />
    </group>
  );
}