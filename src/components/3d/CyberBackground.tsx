import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const CyberGrid = () => {
  const ref = useRef<THREE.Points>(null);
  
  // Generate random points in 3D space
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(5000 * 3);
    const colors = new Float32Array(5000 * 3);
    
    for (let i = 0; i < 5000; i++) {
      // Position
      positions[i * 3] = (Math.random() - 0.5) * 40;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 40;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 40;
      
      // Colors - cyber blue and green
      const isCyberBlue = Math.random() > 0.5;
      if (isCyberBlue) {
        colors[i * 3] = 0; // R
        colors[i * 3 + 1] = 0.8; // G
        colors[i * 3 + 2] = 1; // B
      } else {
        colors[i * 3] = 0; // R
        colors[i * 3 + 1] = 1; // G
        colors[i * 3 + 2] = 0.3; // B
      }
    }
    
    return [positions, colors];
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.1;
      ref.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
  });

  return (
    <Points ref={ref} positions={positions} colors={colors}>
      <PointMaterial
        transparent
        vertexColors
        size={0.8}
        sizeAttenuation={true}
        alphaTest={0.1}
        opacity={0.6}
      />
    </Points>
  );
};

const CyberWaves = () => {
  const ref = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.z = state.clock.elapsedTime * 0.2;
      const material = ref.current.material as THREE.MeshBasicMaterial;
      if (material) {
        material.opacity = 0.1 + Math.sin(state.clock.elapsedTime) * 0.05;
      }
    }
  });

  return (
    <mesh ref={ref} position={[0, 0, -5]}>
      <torusGeometry args={[10, 0.5, 16, 100]} />
      <meshBasicMaterial 
        color="#00ccff" 
        transparent 
        opacity={0.1}
        wireframe
      />
    </mesh>
  );
};

const FloatingOrbs = () => {
  const orbsRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (orbsRef.current) {
      orbsRef.current.children.forEach((orb, index) => {
        orb.position.y = Math.sin(state.clock.elapsedTime + index) * 2;
        orb.rotation.x = state.clock.elapsedTime * 0.3;
        orb.rotation.y = state.clock.elapsedTime * 0.5;
      });
    }
  });

  const orbs = useMemo(() => {
    return Array.from({ length: 8 }, (_, i) => {
      const angle = (i / 8) * Math.PI * 2;
      const radius = 15;
      return {
        position: [
          Math.cos(angle) * radius,
          Math.sin(angle) * radius,
          Math.random() * 10 - 5,
        ] as [number, number, number],
        scale: Math.random() * 0.5 + 0.5,
        color: i % 2 === 0 ? '#00ccff' : '#00ff88',
      };
    });
  }, []);

  return (
    <group ref={orbsRef}>
      {orbs.map((orb, index) => (
        <mesh key={index} position={orb.position} scale={orb.scale}>
          <sphereGeometry args={[0.5, 16, 16]} />
          <meshBasicMaterial 
            color={orb.color} 
            transparent 
            opacity={0.3}
          />
        </mesh>
      ))}
    </group>
  );
};

interface CyberBackgroundProps {
  className?: string;
}

const CyberBackground = ({ className }: CyberBackgroundProps) => {
  return (
    <div className={`absolute inset-0 ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 20], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.1} />
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#00ccff" />
        <pointLight position={[-10, -10, -10]} intensity={0.3} color="#00ff88" />
        
        <CyberGrid />
        <CyberWaves />
        <FloatingOrbs />
      </Canvas>
    </div>
  );
};

export default CyberBackground;