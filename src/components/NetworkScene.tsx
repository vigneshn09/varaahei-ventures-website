import { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const PALETTE = ['#F0A63A', '#0C6B4E', '#E8C15B', '#14183F'];

interface NodeData {
  position: THREE.Vector3;
  speed: number;
  phase: number;
}

function NetworkMesh({ count = 34 }: { count?: number }) {
  const groupRef = useRef<THREE.Group>(null);
  const linesRef = useRef<THREE.LineSegments>(null);

  const nodes: NodeData[] = useMemo(() => {
    const arr: NodeData[] = [];
    for (let i = 0; i < count; i++) {
      arr.push({
        position: new THREE.Vector3(
          (Math.random() - 0.5) * 4.2,
          (Math.random() - 0.5) * 3.4,
          (Math.random() - 0.5) * 2.2
        ),
        speed: 0.08 + Math.random() * 0.18,
        phase: Math.random() * Math.PI * 2,
      });
    }
    return arr;
  }, [count]);

  const nodeColors = useMemo(
    () => nodes.map(() => new THREE.Color(PALETTE[Math.floor(Math.random() * PALETTE.length)])),
    [nodes]
  );

  const linkDistance = 1.55;

  const lineGeometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    // Max possible segments — actual count updates each frame.
    const positions = new Float32Array(count * count * 3 * 2);
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geo;
  }, [count]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) groupRef.current.rotation.y = t * 0.06;

    const posAttr = lineGeometry.attributes.position as THREE.BufferAttribute;
    let segIdx = 0;

    const current = nodes.map((n) => {
      const drift = new THREE.Vector3(
        Math.sin(t * n.speed + n.phase) * 0.35,
        Math.cos(t * n.speed * 0.8 + n.phase) * 0.3,
        Math.sin(t * n.speed * 0.6 + n.phase) * 0.25
      );
      return n.position.clone().add(drift);
    });

    for (let i = 0; i < current.length; i++) {
      for (let j = i + 1; j < current.length; j++) {
        const d = current[i].distanceTo(current[j]);
        if (d < linkDistance && segIdx < count * count) {
          posAttr.setXYZ(segIdx * 2, current[i].x, current[i].y, current[i].z);
          posAttr.setXYZ(segIdx * 2 + 1, current[j].x, current[j].y, current[j].z);
          segIdx++;
        }
      }
    }
    lineGeometry.setDrawRange(0, segIdx * 2);
    posAttr.needsUpdate = true;

    if (groupRef.current) {
      current.forEach((pos, i) => {
        const mesh = groupRef.current!.children[i] as THREE.Mesh;
        if (mesh) mesh.position.copy(pos);
      });
    }
  });

  return (
    <>
      <group ref={groupRef}>
        {nodes.map((n, i) => (
          <mesh key={i} position={n.position}>
            <sphereGeometry args={[0.045, 12, 12]} />
            <meshBasicMaterial color={nodeColors[i]} transparent opacity={0.9} />
          </mesh>
        ))}
      </group>
      <lineSegments ref={linesRef} geometry={lineGeometry}>
        <lineBasicMaterial color="#F0A63A" transparent opacity={0.22} />
      </lineSegments>
    </>
  );
}

export default function NetworkScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5.2], fov: 46 }}
      dpr={[1, 1.6]}
      gl={{ antialias: true, alpha: true }}
      style={{ width: '100%', height: '100%' }}
    >
      <ambientLight intensity={0.7} />
      <NetworkMesh />
    </Canvas>
  );
}
