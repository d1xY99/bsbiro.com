/* eslint-disable react/no-unknown-property */
import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sparkles, RoundedBox } from '@react-three/drei';

// Zlatna kovanica — tijelo, svjetlije reljefno lice s obje strane i obruč po rubu
export function Coin({ position = [0, 0, 0], rotation = [0, 0, 0], scale = 1 }) {
  return (
    <group position={position} rotation={rotation} scale={scale}>
      <mesh castShadow>
        <cylinderGeometry args={[0.55, 0.55, 0.12, 48]} />
        <meshStandardMaterial
          color="#f59e0b"
          metalness={0.75}
          roughness={0.3}
          emissive="#b45309"
          emissiveIntensity={0.3}
        />
      </mesh>
      {/* reljefno lice gore i dole */}
      {[0.066, -0.066].map((y) => (
        <mesh key={y} position={[0, y, 0]}>
          <cylinderGeometry args={[0.4, 0.4, 0.02, 48]} />
          <meshStandardMaterial
            color="#fcd34d"
            metalness={0.65}
            roughness={0.25}
            emissive="#d97706"
            emissiveIntensity={0.45}
          />
        </mesh>
      ))}
      {/* obruč po rubu */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.55, 0.045, 16, 48]} />
        <meshStandardMaterial
          color="#fbbf24"
          metalness={0.9}
          roughness={0.2}
          emissive="#92400e"
          emissiveIntensity={0.3}
        />
      </mesh>
    </group>
  );
}

// Grupa kovanica okrenutih licem prema gledaocu, na razlicitim dubinama
function CoinGroup({ position = [0, 0, 0] }) {
  return (
    <group position={position}>
      <Coin position={[0, 0.7, 0.2]} rotation={[Math.PI / 2 - 0.18, 0.25, 0]} scale={0.85} />
      <Coin position={[0.75, -0.05, -0.4]} rotation={[Math.PI / 2 - 0.3, -0.35, 0.15]} scale={0.62} />
      <Coin position={[-0.65, -0.25, -0.7]} rotation={[Math.PI / 2 - 0.1, 0.45, -0.1]} scale={0.48} />
    </group>
  );
}

// 3D graf rasta — stupci
function BarChart({ position = [0, 0, 0] }) {
  const heights = [0.5, 0.85, 1.25, 1.7, 2.2];
  const colors = ['#0e7490', '#0891b2', '#06b6d4', '#22d3ee', '#67e8f9'];
  return (
    <group position={position}>
      {heights.map((h, i) => (
        <RoundedBox
          // eslint-disable-next-line react/no-array-index-key
          key={i}
          args={[0.42, h, 0.42]}
          radius={0.06}
          position={[i * 0.62, h / 2, 0]}
        >
          <meshStandardMaterial
            color={colors[i]}
            metalness={0.4}
            roughness={0.3}
            emissive={colors[i]}
            emissiveIntensity={0.35}
            transparent
            opacity={0.92}
          />
        </RoundedBox>
      ))}
      {/* strelica rasta */}
      <mesh position={[2.85, 2.75, 0]} rotation={[0, 0, -Math.PI / 5]}>
        <coneGeometry args={[0.22, 0.55, 4]} />
        <meshStandardMaterial
          color="#22d3ee"
          emissive="#22d3ee"
          emissiveIntensity={0.6}
          metalness={0.5}
          roughness={0.2}
        />
      </mesh>
    </group>
  );
}

// Lebdeci prsten — fiksno nagnut duboko iza scene, okrece se samo u svojoj ravni
function Ring({ position = [0, 0, 0] }) {
  const ref = useRef();
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.z = state.clock.elapsedTime * 0.12;
    }
  });
  return (
    <group position={position} rotation={[0.35, -0.25, 0]}>
      <mesh ref={ref}>
        <torusGeometry args={[3.1, 0.025, 16, 120]} />
        <meshStandardMaterial
          color="#3b82f6"
          emissive="#3b82f6"
          emissiveIntensity={0.8}
          metalness={0.6}
          roughness={0.2}
          transparent
          opacity={0.6}
        />
      </mesh>
    </group>
  );
}

// Kompletna scena s parallax pracenjem misa
function SceneContent() {
  const group = useRef();

  useFrame((state) => {
    if (group.current) {
      const targetY = state.pointer.x * 0.25;
      const targetX = -state.pointer.y * 0.15;
      group.current.rotation.y += (targetY - group.current.rotation.y) * 0.05;
      group.current.rotation.x += (targetX - group.current.rotation.x) * 0.05;
    }
  });

  return (
    <>
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 8, 5]} intensity={1.8} />
      <pointLight position={[-4, 2, 4]} intensity={16} color="#22d3ee" />
      <pointLight position={[4, -2, 3]} intensity={14} color="#fbbf24" />
      <pointLight position={[0, 4, -4]} intensity={10} color="#a78bfa" />

      <group ref={group}>
        <Float speed={1.6} rotationIntensity={0.15} floatIntensity={0.7}>
          <group scale={0.85}>
            <BarChart position={[1.3, -1.7, 0]} />
          </group>
        </Float>

        <Float speed={2} rotationIntensity={0.2} floatIntensity={0.7}>
          <CoinGroup position={[2.7, 1.0, -0.6]} />
        </Float>

        <Float speed={1.8} rotationIntensity={0.3} floatIntensity={0.8}>
          <mesh position={[3.7, -1.6, 0.2]}>
            <icosahedronGeometry args={[0.5, 0]} />
            <meshStandardMaterial
              color="#3b82f6"
              metalness={0.7}
              roughness={0.15}
              emissive="#1d4ed8"
              emissiveIntensity={0.5}
              flatShading
            />
          </mesh>
        </Float>

        <Ring position={[2.0, 0.3, -2.8]} />
        <Sparkles count={90} scale={[10, 7, 6]} size={2.2} speed={0.35} color="#67e8f9" opacity={0.55} />
      </group>
    </>
  );
}

export default function Scene3D({ className = '' }) {
  return (
    <div className={className} aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0.4, 7.5], fov: 42 }}
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
