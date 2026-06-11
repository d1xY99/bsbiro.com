/* eslint-disable react/no-unknown-property */
import React, { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sparkles, RoundedBox } from '@react-three/drei';
import { Coin } from './Scene3D';

// Interaktivna tipka kalkulatora — svijetli na hover
function Key({ position, accent = false, wide = false }) {
  const [hovered, setHovered] = useState(false);
  const base = accent ? '#22d3ee' : '#16244c';
  const emissive = accent ? '#22d3ee' : '#3b82f6';
  return (
    <RoundedBox
      args={[wide ? 0.86 : 0.38, 0.3, 0.16]}
      radius={0.05}
      position={position}
      onPointerOver={(e) => { e.stopPropagation(); setHovered(true); document.body.style.cursor = 'pointer'; }}
      onPointerOut={() => { setHovered(false); document.body.style.cursor = 'auto'; }}
      scale={hovered ? 1.12 : 1}
    >
      <meshStandardMaterial
        color={hovered ? '#22d3ee' : base}
        metalness={0.4}
        roughness={0.3}
        emissive={emissive}
        emissiveIntensity={hovered ? 0.9 : accent ? 0.55 : 0.12}
      />
    </RoundedBox>
  );
}

// 3D kalkulator
function Calculator() {
  const keys = [];
  for (let row = 0; row < 4; row += 1) {
    for (let col = 0; col < 4; col += 1) {
      const isAccent = col === 3;
      keys.push(
        <Key
          key={`${row}-${col}`}
          position={[-0.72 + col * 0.48, 0.1 - row * 0.42, 0.17]}
          accent={isAccent}
        />,
      );
    }
  }
  return (
    <group rotation={[0.15, -0.35, 0.05]}>
      {/* tijelo */}
      <RoundedBox args={[2.3, 3.1, 0.28]} radius={0.12} position={[0, -0.45, 0]}>
        <meshStandardMaterial color="#0a1228" metalness={0.5} roughness={0.35} />
      </RoundedBox>
      {/* ekran */}
      <RoundedBox args={[1.9, 0.62, 0.1]} radius={0.05} position={[0, 0.65, 0.14]}>
        <meshStandardMaterial
          color="#06b6d4"
          emissive="#22d3ee"
          emissiveIntensity={0.7}
          metalness={0.2}
          roughness={0.2}
        />
      </RoundedBox>
      {keys}
      {/* donja wide tipka */}
      <Key position={[-0.48, -1.58, 0.17]} wide />
      <Key position={[0.48, -1.58, 0.17]} accent />
    </group>
  );
}

function SceneContent() {
  const group = useRef();

  useFrame((state) => {
    if (group.current) {
      const targetY = state.pointer.x * 0.45;
      const targetX = -state.pointer.y * 0.25;
      group.current.rotation.y += (targetY - group.current.rotation.y) * 0.06;
      group.current.rotation.x += (targetX - group.current.rotation.x) * 0.06;
    }
  });

  return (
    <>
      <ambientLight intensity={0.7} />
      <directionalLight position={[4, 6, 5]} intensity={1.8} />
      <pointLight position={[-4, 2, 4]} intensity={16} color="#22d3ee" />
      <pointLight position={[4, -2, 3]} intensity={12} color="#fbbf24" />

      <group ref={group}>
        <Float speed={1.6} rotationIntensity={0.25} floatIntensity={0.7}>
          <Calculator />
        </Float>

        <Float speed={2} rotationIntensity={0.6} floatIntensity={1.2}>
          <Coin position={[-2.1, 1.3, -0.5]} rotation={[Math.PI / 2.6, 0.4, 0.3]} scale={0.8} />
        </Float>
        <Float speed={1.7} rotationIntensity={0.6} floatIntensity={1}>
          <Coin position={[2.2, -1.1, -0.3]} rotation={[Math.PI / 3, 0, 0.6]} scale={0.65} />
        </Float>
        <Float speed={1.4} rotationIntensity={0.5} floatIntensity={0.9}>
          <Coin position={[1.9, 1.7, -0.8]} rotation={[Math.PI / 2.2, 0.2, 0]} scale={0.5} />
        </Float>

        <Sparkles count={50} scale={[7, 6, 4]} size={2} speed={0.3} color="#67e8f9" opacity={0.5} />
      </group>
    </>
  );
}

export default function AboutScene3D({ className = '' }) {
  return (
    <div className={className}>
      <Canvas
        camera={{ position: [0, 0, 6.2], fov: 42 }}
        dpr={[1, 1.8]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <SceneContent />
        </Suspense>
      </Canvas>
    </div>
  );
}
