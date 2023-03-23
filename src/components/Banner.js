import React from 'react'
// import styles from './Banner.module.css'
import { OrbitControls, PerspectiveCamera, Environment } from "@react-three/drei";
import { Suspense } from "react";
import { FloatingIsland } from "./FloatingIsland";

function Banner () {
  return (
    <Suspense fallback={null}>
      <Environment background={"only"} files ={process.env.PUBLIC_URL + "textures/bg.hdr"} />
      <Environment background={false} files={process.env.PUBLIC_URL + "textures/envmap.hdr"}/>
      
      <PerspectiveCamera makeDefault fov={50} position={[-1.75, 10.85, 20.35]} />
      <OrbitControls target={[1, 5, 0]} maxPolarAngle={Math.PI * 0.5}/>
      <FloatingIsland/>
    </Suspense>
  );
}
export default Banner;
