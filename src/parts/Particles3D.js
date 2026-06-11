/* eslint-disable react/no-unknown-property */
import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sparkles } from '@react-three/drei';

// Interaktivne tackice u pozadini — prate mis kao na pocetnoj
function ParticlesContent() {
  const group = useRef();

  useFrame((state) => {
    if (group.current) {
      const targetY = state.pointer.x * 0.3;
      const targetX = -state.pointer.y * 0.2;
      group.current.rotation.y += (targetY - group.current.rotation.y) * 0.05;
      group.current.rotation.x += (targetX - group.current.rotation.x) * 0.05;
    }
  });

  return (
    <group ref={group}>
      <Sparkles count={110} scale={[14, 9, 6]} size={2.2} speed={0.35} color="#67e8f9" opacity={0.55} />
      <Sparkles count={40} scale={[14, 9, 6]} size={3.5} speed={0.2} color="#fbbf24" opacity={0.3} />
    </group>
  );
}

export default function Particles3D({ className = '' }) {
  return (
    <div className={className} aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <ParticlesContent />
        </Suspense>
      </Canvas>
    </div>
  );
}
