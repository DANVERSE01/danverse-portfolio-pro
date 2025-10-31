'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, PerspectiveCamera } from '@react-three/drei';
import { Suspense } from 'react';

interface Scene3DProps {
  children: React.ReactNode;
  enableControls?: boolean;
  cameraPosition?: [number, number, number];
}

export default function Scene3D({
  children,
  enableControls = true,
  cameraPosition = [0, 0, 5],
}: Scene3DProps) {
  return (
    <div className="w-full h-full">
      <Canvas
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
        dpr={[1, 2]}
      >
        <PerspectiveCamera makeDefault position={cameraPosition} fov={45} />
        
        <Suspense fallback={null}>
          {/* Lighting Setup */}
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
          <pointLight position={[-10, -10, -5]} intensity={0.5} />
          <spotLight position={[0, 10, 0]} angle={0.3} penumbra={1} intensity={0.8} castShadow />
          
          {/* HDRI Environment for realistic reflections */}
          <Environment preset="city" />
          
          {/* 3D Content */}
          {children}
          
          {/* Controls */}
          {enableControls && (
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 3}
              autoRotate
              autoRotateSpeed={0.5}
            />
          )}
        </Suspense>
      </Canvas>
    </div>
  );
}
