import React from "react";
import { useTexture } from "@react-three/drei";

const Room = () => {
  // Load textures for walls, floor, and ceiling
  const wallTexture = useTexture("/textures/wall.jpg");
  const floorTexture = useTexture("/textures/floor2.jpg");
  const ceilingTexture = useTexture("/textures/ceiling.jpg");

  return (
    <group>
      {/* Floor */}
      <mesh position={[0, -1, ]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[30, 40]} />
        <meshStandardMaterial map={floorTexture} />
      </mesh>

      {/* Ceiling */}
      {/* <mesh position={[0, 2, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <planeGeometry args={[5, 5]} />
        <meshStandardMaterial map={ceilingTexture} />
      </mesh> */}

      {/* Left Wall */}
      <mesh position={[-2.5, 0.5, 0]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[4, 3]} />
        <meshStandardMaterial map={wallTexture} />
      </mesh>

      {/* Right Wall */}
      <mesh position={[2.5, 0.5, 0]} rotation={[0, -Math.PI / 2, 0]}>
        <planeGeometry args={[4, 3]} />
        <meshStandardMaterial map={wallTexture} />
      </mesh>

      {/* Back Wall */}
      {/* <mesh position={[0, 0.5, -2.5]}>
        <planeGeometry args={[5, 3]} />
        <meshStandardMaterial map={wallTexture} />
      </mesh> */}
    </group>
  );
};

export default Room;
