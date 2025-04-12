import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Cyl from "./Cyl";
import {
  Bloom,
  EffectComposer,
  ToneMapping,
} from "@react-three/postprocessing";

const Circular = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Canvas flat camera={{ fov: 30 }}>
        {/* <OrbitControls /> */}
        <ambientLight />
        <EffectComposer>
          <Bloom
            mipmapBlur
            intensity={0}
            luminanceThreshold={0}
            luminanceSmoothing={0}
          />
          {/* <ToneMapping adaptive/> */}
        </EffectComposer>
        <Cyl />
      </Canvas>
    </div>
  );
};

export default Circular;
