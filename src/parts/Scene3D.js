/* eslint-disable react/no-unknown-property */
import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sparkles, RoundedBox, Text } from '@react-three/drei';

const COIN_NOTCHES = Array.from({ length: 56 }, (_, i) => ({
  id: `coin-notch-${i}`,
  angle: (i / 56) * Math.PI * 2,
}));

const GOLD_FACE = {
  color: '#ffd166',
  metalness: 1,
  roughness: 0.12,
  emissive: '#e19816',
  emissiveIntensity: 0.18,
};

const GOLD_RIM = {
  color: '#fff0a6',
  metalness: 1,
  roughness: 0.06,
  emissive: '#ffd166',
  emissiveIntensity: 0.16,
};

const GOLD_SHADOW = {
  color: '#e7a72f',
  metalness: 0.95,
  roughness: 0.16,
  emissive: '#c47a0c',
  emissiveIntensity: 0.16,
};

const GOLD_ENGRAVE = {
  color: '#8a4a08',
  metalness: 0.9,
  roughness: 0.28,
  emissive: '#4a2504',
  emissiveIntensity: 0.04,
};

const GOLD_HIGHLIGHT = {
  color: '#fff8d1',
  metalness: 1,
  roughness: 0.05,
  emissive: '#ffe08a',
  emissiveIntensity: 0.18,
};

// Zlatna kovanica — slojevito tijelo sa bevelom, nazubljenim rubom i reljefom
export function Coin({ position = [0, 0, 0], rotation = [0, 0, 0], scale = 1 }) {
  return (
    <group position={position} rotation={rotation} scale={scale}>
      {/* tanko metalno tijelo */}
      <mesh castShadow>
        <cylinderGeometry args={[0.56, 0.56, 0.11, 96]} />
        <meshStandardMaterial {...GOLD_SHADOW} />
      </mesh>

      {/* sitni zupci na obodu, da rub uhvati svjetlo kao pravi novčić */}
      <group>
        {COIN_NOTCHES.map(({ id, angle }) => {
          const radius = 0.57;
          return (
            <mesh
              key={id}
              position={[Math.cos(angle) * radius, 0, Math.sin(angle) * radius]}
              rotation={[0, -angle, 0]}
            >
              <boxGeometry args={[0.018, 0.13, 0.052]} />
              <meshStandardMaterial {...GOLD_RIM} />
            </mesh>
          );
        })}
      </group>

      {/* prednji i zadnji polirani bevel */}
      {[-1, 1].map((side) => (
        <mesh key={`coin-bevel-${side}`} position={[0, side * 0.058, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.525, 0.034, 18, 96]} />
          <meshStandardMaterial {...GOLD_RIM} />
        </mesh>
      ))}

      {/* prednja ploha: podignut obod, udubljeno polje i unutrašnji reljef */}
      <mesh position={[0, 0.065, 0]}>
        <cylinderGeometry args={[0.5, 0.5, 0.018, 96]} />
        <meshStandardMaterial {...GOLD_FACE} />
      </mesh>
      <mesh position={[0, 0.077, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.465, 0.006, 8, 96]} />
        <meshStandardMaterial {...GOLD_ENGRAVE} />
      </mesh>
      <mesh position={[0, 0.078, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.39, 0.012, 12, 96]} />
        <meshStandardMaterial {...GOLD_RIM} />
      </mesh>
      <mesh position={[0, 0.081, 0]}>
        <cylinderGeometry args={[0.32, 0.32, 0.012, 96]} />
        <meshStandardMaterial
          color="#ffc34d"
          metalness={0.95}
          roughness={0.16}
          emissive="#e19816"
          emissiveIntensity={0.18}
        />
      </mesh>
      <mesh position={[0, 0.089, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.315, 0.005, 8, 96]} />
        <meshStandardMaterial {...GOLD_ENGRAVE} />
      </mesh>

      <Text
        position={[0, 0.09, 0.005]}
        rotation={[-Math.PI / 2, 0, 0]}
        fontSize={0.21}
        letterSpacing={0.02}
        anchorX="center"
        anchorY="middle"
      >
        $
        <meshStandardMaterial {...GOLD_HIGHLIGHT} />
      </Text>

      {/* par finih linija oko monograma daje osjećaj kovanja, ne keksa */}
      {[0.17, 0.24].map((radius) => (
        <mesh key={`coin-face-line-${radius}`} position={[0, 0.092, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[radius, 0.004, 8, 80]} />
          <meshStandardMaterial {...GOLD_HIGHLIGHT} />
        </mesh>
      ))}

      {/* tamnije urezane linije daju reljefu sjenu bez zatamnjivanja cijele kovanice */}
      {[0.205, 0.275].map((radius) => (
        <mesh key={`coin-shadow-line-${radius}`} position={[0, 0.087, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[radius, 0.003, 8, 80]} />
          <meshStandardMaterial {...GOLD_ENGRAVE} />
        </mesh>
      ))}
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

// Kompletna scena — elementi lebde sami od sebe (Float), bez pracenja misa
function SceneContent() {
  const group = useRef();

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
