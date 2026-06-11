/* eslint-disable react/no-unknown-property */
import React, { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sparkles } from '@react-three/drei';
import { Coin } from './Scene3D';

const METAL = { color: '#16244c', metalness: 0.7, roughness: 0.3 };
const GOLD = { color: '#fbbf24', metalness: 0.8, roughness: 0.25, emissive: '#b45309', emissiveIntensity: 0.3 };

// Tas vage koji visi o kraku — drzi se uspravno dok se krak njise
function Pan({ x, innerRef, children }) {
  return (
    <group ref={innerRef} position={[x, 0, 0]}>
      {/* lanci */}
      {[-0.32, 0.32].map((o) => (
        <mesh key={o} position={[o * 0.55, -0.45, 0]} rotation={[0, 0, o]}>
          <cylinderGeometry args={[0.015, 0.015, 0.95, 8]} />
          <meshStandardMaterial {...GOLD} />
        </mesh>
      ))}
      {/* tas */}
      <mesh position={[0, -0.93, 0]}>
        <cylinderGeometry args={[0.55, 0.45, 0.07, 32]} />
        <meshStandardMaterial {...GOLD} />
      </mesh>
      {children}
    </group>
  );
}

// Vaga — simbol bilansa; njise se, a na hover dodje u ravnotezu
function BalanceScale() {
  const beam = useRef();
  const leftPan = useRef();
  const rightPan = useRef();
  const [hovered, setHovered] = useState(false);
  const amp = useRef(0.13);

  useFrame((state) => {
    const target = hovered ? 0.015 : 0.13;
    amp.current += (target - amp.current) * 0.04;
    const angle = Math.sin(state.clock.elapsedTime * 0.9) * amp.current;
    if (beam.current) {
      beam.current.rotation.z = angle;
    }
    // tasovi se drze uspravno dok se krak njise
    [leftPan, rightPan].forEach((p) => {
      if (p.current) p.current.rotation.z = -angle;
    });
  });

  return (
    <group
      position={[0, 0.1, 0]}
      onPointerOver={() => { setHovered(true); document.body.style.cursor = 'pointer'; }}
      onPointerOut={() => { setHovered(false); document.body.style.cursor = 'auto'; }}
    >
      {/* postolje */}
      <mesh position={[0, -1.75, 0]}>
        <cylinderGeometry args={[0.75, 0.9, 0.16, 48]} />
        <meshStandardMaterial {...METAL} emissive="#3b82f6" emissiveIntensity={0.15} />
      </mesh>
      {/* stub */}
      <mesh position={[0, -0.45, 0]}>
        <cylinderGeometry args={[0.07, 0.1, 2.5, 24]} />
        <meshStandardMaterial {...METAL} emissive="#3b82f6" emissiveIntensity={0.15} />
      </mesh>
      {/* vrh */}
      <mesh position={[0, 0.85, 0]}>
        <sphereGeometry args={[0.16, 24, 24]} />
        <meshStandardMaterial {...GOLD} />
      </mesh>

      {/* krak sa tasovima */}
      <group ref={beam} position={[0, 0.85, 0]}>
        <mesh>
          <boxGeometry args={[3.1, 0.09, 0.09]} />
          <meshStandardMaterial {...GOLD} />
        </mesh>

        {/* lijevi tas: kovanice */}
        <Pan x={-1.45} innerRef={leftPan}>
          <Coin position={[-0.08, -0.83, 0]} scale={0.42} />
          <Coin position={[0.1, -0.72, 0.06]} rotation={[0, 0.6, 0]} scale={0.42} />
        </Pan>

        {/* desni tas: dokumenti */}
        <Pan x={1.45} innerRef={rightPan}>
          <group position={[0, -0.85, 0]} rotation={[0, -0.25, 0]}>
            <mesh>
              <boxGeometry args={[0.62, 0.05, 0.8]} />
              <meshStandardMaterial color="#e2e8f0" roughness={0.5} />
            </mesh>
            <mesh position={[0.04, 0.05, -0.03]} rotation={[0, 0.2, 0]}>
              <boxGeometry args={[0.58, 0.04, 0.76]} />
              <meshStandardMaterial color="#cbd5e1" roughness={0.5} />
            </mesh>
            {/* cyan linija teksta na vrhu */}
            <mesh position={[0.04, 0.08, -0.03]} rotation={[0, 0.2, 0]}>
              <boxGeometry args={[0.4, 0.012, 0.08]} />
              <meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={0.6} />
            </mesh>
          </group>
        </Pan>
      </group>
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
        <Float speed={1.4} rotationIntensity={0.1} floatIntensity={0.5}>
          <BalanceScale />
        </Float>

        <Float speed={2} rotationIntensity={0.3} floatIntensity={1}>
          <Coin position={[-2.5, 1.5, -0.8]} rotation={[Math.PI / 2 - 0.2, 0.3, 0]} scale={0.55} />
        </Float>
        <Float speed={1.7} rotationIntensity={0.3} floatIntensity={0.9}>
          <Coin position={[2.5, 1.8, -1]} rotation={[Math.PI / 2 - 0.35, -0.3, 0.1]} scale={0.45} />
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
