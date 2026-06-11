import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';

// Parallax koji prati mis preko cijelog prozora (ne samo preko canvasa),
// pa scena reaguje i kad je kursor iznad teksta.
export default function useMouseParallax(ref, {
  rotY = 0.3, rotX = 0.18, posX = 0, posY = 0,
} = {}) {
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener('pointermove', onMove);
    return () => window.removeEventListener('pointermove', onMove);
  }, []);

  useFrame(() => {
    const g = ref.current;
    if (!g) return;
    g.rotation.y += (mouse.current.x * rotY - g.rotation.y) * 0.06;
    g.rotation.x += (-mouse.current.y * rotX - g.rotation.x) * 0.06;
    if (posX) g.position.x += (mouse.current.x * posX - g.position.x) * 0.05;
    if (posY) g.position.y += (-mouse.current.y * posY - g.position.y) * 0.05;
  });
}
