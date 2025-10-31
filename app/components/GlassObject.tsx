'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshTransmissionMaterial } from '@react-three/drei';
import * as THREE from 'three';

export default function GlassObject() {
  const groupRef = useRef<THREE.Group>(null);
  const meshRefs = useRef<THREE.Mesh[]>([]);

  useFrame((state) => {
    if (groupRef.current) {
      // Subtle rotation animation
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.2;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }

    // Individual capsule animations
    meshRefs.current.forEach((mesh, i) => {
      if (mesh) {
        mesh.position.z = Math.sin(state.clock.elapsedTime + i) * 0.1;
      }
    });
  });

  // Create 6 glass capsules in star formation
  const capsules = Array.from({ length: 6 }, (_, i) => {
    const angle = (i / 6) * Math.PI * 2;
    const radius = 1.2;
    
    return (
      <mesh
        key={i}
        ref={(el) => {
          if (el) meshRefs.current[i] = el;
        }}
        position={[
          Math.cos(angle) * radius,
          Math.sin(angle) * radius,
          0,
        ]}
        rotation={[0, 0, angle]}
      >
        <capsuleGeometry args={[0.2, 1.5, 32, 64]} />
        <MeshTransmissionMaterial
          backside
          samples={16}
          resolution={1024}
          transmission={1}
          roughness={0.05}
          thickness={0.5}
          ior={1.5}
          chromaticAberration={0.06}
          anisotropy={1}
          distortion={0.2}
          distortionScale={0.5}
          temporalDistortion={0.1}
          clearcoat={1}
          attenuationDistance={0.5}
          attenuationColor="#ffffff"
          color="#ffffff"
        />
      </mesh>
    );
  });

  return (
    <group ref={groupRef} scale={0.8}>
      {capsules}
      
      {/* Center sphere for added complexity */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.3, 64, 64]} />
        <MeshTransmissionMaterial
          backside
          samples={16}
          resolution={1024}
          transmission={1}
          roughness={0.0}
          thickness={0.8}
          ior={1.5}
          chromaticAberration={0.1}
          anisotropy={1}
          distortion={0.3}
          distortionScale={0.3}
          temporalDistortion={0.2}
          clearcoat={1}
          attenuationDistance={0.3}
          attenuationColor="#00d9ff"
          color="#ffffff"
        />
      </mesh>
    </group>
  );
}
