import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import * as THREE from "three";

const Cyl = ({props}) => {
  let tex = useTexture("./img2.png");
  const cyl = useRef(null);
  useFrame((state, delta) => {
    cyl.current.rotation.y += delta;
  });

  return (
    <mesh
    {...props}
    position={[0, 0.7, -4]}
    ref={cyl} rotation={[0, 0, 0.2]}>
      <cylinderGeometry args={[1.6, 1.6, 1.8, 60, 60, true]} />
      <meshStandardMaterial transparent map={tex} side={THREE.DoubleSide} />
    </mesh>
  );
};

export default Cyl;
