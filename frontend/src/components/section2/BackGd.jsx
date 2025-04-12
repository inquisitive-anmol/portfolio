import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import * as THREE from "three";

const BackGd = ({ props }) => {
  //   let bg = useTexture("./img/bg.jpg");
  //   const cyl = useRef(null);
  //   useFrame((state, delta) => {
  //     cyl.current.rotation.y += delta;
  //   });

  let bg = useTexture("./img/bg.jpg"); // Background texture
  let floorTexture = useTexture("./img/bg.jpg"); // Floor texture
  return (
    // <mesh {...props} >
    //   {/* <cylinderGeometry args={[1.6, 1.6, 1.8, 60, 60, true]} />
    //   <meshStandardMaterial transparent map={tex} side={THREE.DoubleSide} /> */}
    //   <planeGeometry />
    //   <meshStandardMaterial transparent map={bg}/>
    // </mesh>

    <>
      {/* Background Plane */}
      <mesh {...props} position={[0, 0, -4]}>
        <planeGeometry args={[5, 5]} /> {/* Adjust size as needed */}
        <meshStandardMaterial map={bg} />
      </mesh>

      {/* Floor Plane */}
      <mesh position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[20, 20]} /> {/* Larger size for floor */}
        <meshStandardMaterial map={floorTexture} side={THREE.DoubleSide} />
      </mesh>
    </>
  );
};

// position={[0, 0.7, -4]} ref={cyl} rotation={[0, 0, 0.2]}
export default BackGd;
