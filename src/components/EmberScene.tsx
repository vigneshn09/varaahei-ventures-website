import { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Colour ramp drawn directly from the brand palette — saffron core,
// gold mid, emerald edge, deep indigo falling back into the void.
const PALETTE = ['#F0A63A', '#E8C15B', '#E1592C', '#0C6B4E', '#14183F'];

function EmberField({ count = 260 }: { count?: number }) {
  const meshRef = useRef<THREE.Points>(null);

  const { positions, colors, speeds, phases } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const speeds = new Float32Array(count);
    const phases = new Float32Array(count);
    const color = new THREE.Color();

    for (let i = 0; i < count; i++) {
      // A loose upward cone, narrower at the base — like a rising flame.
      const t = Math.random();
      const radius = THREE.MathUtils.lerp(0.15, 1.6, t) * (0.4 + Math.random() * 0.6);
      const angle = Math.random() * Math.PI * 2;
      const height = THREE.MathUtils.lerp(-2.2, 2.6, t) + (Math.random() - 0.5) * 0.6;

      positions[i * 3] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = height;
      positions[i * 3 + 2] = Math.sin(angle) * radius * 0.6;

      color.set(PALETTE[Math.floor(Math.random() * PALETTE.length)]);
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;

      speeds[i] = 0.15 + Math.random() * 0.35;
      phases[i] = Math.random() * Math.PI * 2;
    }

    return { positions, colors, speeds, phases };
  }, [count]);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    const posAttr = meshRef.current.geometry.attributes.position as THREE.BufferAttribute;

    for (let i = 0; i < count; i++) {
      const idx = i * 3;
      const baseY = positions[idx + 1];
      const sway = Math.sin(t * speeds[i] + phases[i]) * 0.18;
      const rise = ((t * speeds[i] * 0.4 + phases[i]) % 4.8) - 2.4;

      posAttr.setX(i, positions[idx] + sway * 0.5);
      posAttr.setY(i, baseY * 0.001 + rise);
      posAttr.setZ(i, positions[idx + 2] + Math.cos(t * speeds[i] + phases[i]) * 0.15);
    }
    posAttr.needsUpdate = true;

    meshRef.current.rotation.y = t * 0.05;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.065}
        vertexColors
        transparent
        opacity={0.85}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function EmberScene() {
  return (
    <Canvas
      camera={{ position: [0, 0.3, 5.5], fov: 42 }}
      dpr={[1, 1.6]}
      gl={{ antialias: true, alpha: true }}
      style={{ width: '100%', height: '100%' }}
    >
      <ambientLight intensity={0.6} />
      <EmberField />
    </Canvas>
  );
}
