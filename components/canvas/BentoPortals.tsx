"use client";

import { useRef } from "react";
import * as THREE from "three";

export default function BentoPortals() {
  const portalRef = useRef<THREE.Group>(null);

  return (
    <group ref={portalRef}>
      {/* We will add the hover logic and cloned models here in the next step */}
    </group>
  );
}