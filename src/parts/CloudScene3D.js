/* eslint-disable react/no-unknown-property */
import React, { Suspense, useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sparkles } from '@react-three/drei';
import useMouseParallax from './useMouseParallax';

// 3D oblak od sfera — pulsira na hover
function Cloud({ position = [0, 0, 0] }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef();

  useFrame((state) => {
    if (ref.current) {
      const target = hovered ? 1.08 : 1;
      const s = ref.current.scale.x + (target - ref.current.scale.x) * 0.08;
      ref.current.scale.setScalar(s);
      ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.8) * 0.12;
    }
  });

  const blobs = [
    { pos: [0, 0, 0], r: 0.85 },
    { pos: [-0.85, -0.15, 0.1], r: 0.6 },
    { pos: [0.85, -0.15, 0.1], r: 0.6 },
    { pos: [-0.4, 0.35, -0.1], r: 0.55 },
    { pos: [0.45, 0.3, -0.05], r: 0.5 },
  ];

  return (
    <group
      ref={ref}
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {blobs.map((b, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <mesh key={i} position={b.pos}>
          <sphereGeometry args={[b.r, 32, 32]} />
          <meshStandardMaterial
            color="#3b82f6"
            metalness={0.3}
            roughness={0.25}
            emissive={hovered ? '#22d3ee' : '#1d4ed8'}
            emissiveIntensity={hovered ? 0.7 : 0.4}
            transparent
            opacity={0.92}
          />
        </mesh>
      ))}
    </group>
  );
}

// Dokument koji leti prema oblaku i nestaje (upload petlja)
function Document({ offset = 0, x = 0 }) {
  const ref = useRef();

  useFrame((state) => {
    if (ref.current) {
      const t = ((state.clock.elapsedTime * 0.35 + offset) % 1);
      ref.current.position.y = -2.4 + t * 3.1;
      ref.current.position.x = x + Math.sin(t * Math.PI * 2) * 0.15;
      ref.current.rotation.z = Math.sin(t * Math.PI * 4) * 0.08;
      const fade = t > 0.75 ? 1 - (t - 0.75) / 0.25 : 1;
      ref.current.children.forEach((c) => {
        if (c.material) c.material.opacity = fade * (c.userData.line ? 0.9 : 1);
      });
    }
  });

  const lines = useMemo(() => [0.28, 0.1, -0.08, -0.26], []);

  return (
    <group ref={ref} scale={0.75}>
      {/* papir */}
      <mesh>
        <boxGeometry args={[0.72, 0.95, 0.03]} />
        <meshStandardMaterial color="#e2e8f0" metalness={0.1} roughness={0.5} transparent />
      </mesh>
      {/* linije teksta */}
      {lines.map((y, i) => (
        <mesh
          // eslint-disable-next-line react/no-array-index-key
          key={i}
          position={[i === 0 ? -0.1 : 0, y, 0.022]}
          userData={{ line: true }}
        >
          <boxGeometry args={[i === 0 ? 0.4 : 0.52, 0.05, 0.01]} />
          <meshStandardMaterial
            color={i === 0 ? '#22d3ee' : '#64748b'}
            emissive={i === 0 ? '#22d3ee' : '#000000'}
            emissiveIntensity={i === 0 ? 0.5 : 0}
            transparent
          />
        </mesh>
      ))}
    </group>
  );
}

// Strelica upload
function UploadArrow() {
  const ref = useRef();
  useFrame((state) => {
    if (ref.current) {
      ref.current.position.y = 0.1 + ((state.clock.elapsedTime * 0.6) % 1) * 0.45;
      const t = (state.clock.elapsedTime * 0.6) % 1;
      ref.current.children.forEach((c) => { c.material.opacity = 1 - t; });
    }
  });
  return (
    <group ref={ref} position={[0, 0, 0.6]}>
      <mesh>
        <coneGeometry args={[0.18, 0.34, 4]} />
        <meshStandardMaterial color="#67e8f9" emissive="#22d3ee" emissiveIntensity={0.9} transparent />
      </mesh>
      <mesh position={[0, -0.3, 0]}>
        <boxGeometry args={[0.12, 0.26, 0.12]} />
        <meshStandardMaterial color="#67e8f9" emissive="#22d3ee" emissiveIntensity={0.9} transparent />
      </mesh>
    </group>
  );
}

function SceneContent() {
  const group = useRef();
  useMouseParallax(group, {
    rotY: 0.4, rotX: 0.22, posX: 0.3, posY: 0.2,
  });

  return (
    <>
      <ambientLight intensity={0.7} />
      <directionalLight position={[4, 6, 5]} intensity={1.6} />
      <pointLight position={[-4, 2, 4]} intensity={16} color="#22d3ee" />
      <pointLight position={[3, -3, 3]} intensity={10} color="#a78bfa" />

      <group ref={group}>
        <Cloud position={[0, 0.9, 0]} />
        <UploadArrow />

        <Document offset={0} x={-0.9} />
        <Document offset={0.38} x={0.2} />
        <Document offset={0.72} x={1.0} />

        <Sparkles count={60} scale={[7, 6, 4]} size={2} speed={0.3} color="#67e8f9" opacity={0.5} />
      </group>
    </>
  );
}

export default function CloudScene3D({ className = '' }) {
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
