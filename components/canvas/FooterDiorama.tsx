"use client";

import { useRef, useEffect, useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function FooterDiorama() {
  const { scene: blockScene } = useGLTF("/models/block.glb");
  const { scene: pipesScene } = useGLTF("/models/pipes.glb");
  const { scene: treesScene } = useGLTF("/models/trees.glb");
  const { scene: cityScene } = useGLTF("/models/city.glb");

  const block = useMemo(() => blockScene.clone(), [blockScene]);
  const pipes = useMemo(() => pipesScene.clone(), [pipesScene]);
  const trees = useMemo(() => treesScene.clone(), [treesScene]);
  const city = useMemo(() => cityScene.clone(), [cityScene]);

  const groupRef = useRef<THREE.Group>(null);
  const pipesRef = useRef<THREE.Group>(null);
  const treesRef = useRef<THREE.Group>(null);
  const cityRef = useRef<THREE.Group>(null);

  useEffect(() => {
    const group = groupRef.current;
    const p = pipesRef.current;
    const t = treesRef.current;
    const c = cityRef.current;

    if (!group || !p || !t || !c) return;

    // Start everything tiny
    gsap.set([group.scale, p.scale, t.scale, c.scale], { x: 0, y: 0, z: 0 });

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#contact",
          start: "top center",
          end: "bottom bottom",
          scrub: 1, // Ties the assembly directly to how fast they scroll
        },
      });

      // Assemble Sequence
      tl.to(group.scale, { x: 1.5, y: 1.5, z: 1.5, ease: "back.out(1.2)" })
        .to(group.rotation, { y: Math.PI * 2, ease: "power1.inOut" }, "<")
        .to(p.scale, { x: 1, y: 1, z: 1, ease: "bounce.out" }, "-=0.2")
        .to(t.scale, { x: 1, y: 1, z: 1, ease: "elastic.out(1, 0.5)" }, "-=0.2")
        .to(c.scale, { x: 1, y: 1, z: 1, ease: "back.out(2)" }, "-=0.2");
    });

    return () => ctx.revert();
  }, []);

  // MAKE IT USEFUL: Parallax Mouse Tracking
  useFrame((state) => {
    if (groupRef.current) {
      // Smoothly rotate the entire block towards the user's mouse
      const targetX = (state.pointer.x * Math.PI) / 6;
      const targetY = (state.pointer.y * Math.PI) / 8;
      
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetX, 0.05);
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -targetY, 0.05);
    }
  });

  return (
    // Centered in the footer space
    <group ref={groupRef} position={[0, -1, 0]} dispose={null}>
      <primitive object={block} />
      {/* Set positions to 0 so they lock together naturally like puzzle pieces */}
      <group ref={pipesRef} position={[0, 0, 0]}><primitive object={pipes} /></group>
      <group ref={treesRef} position={[0, 0, 0]}><primitive object={trees} /></group>
      <group ref={cityRef} position={[0, 0, 0]}><primitive object={city} /></group>
    </group>
  );
}