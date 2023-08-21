// import React from 'react';
import { PerspectiveCamera } from '@react-three/drei';
import { RenderTexture } from '@react-three/drei';
//import {PerspectiveCamera} from '@react-three/drei'
import {Canvas, useFrame} from '@react-three/fiber';
import { OrbitControls } from "@react-three/drei";
import { useRef } from 'react';
import {Mesh} from 'three';

function DriveScene() {
  return (
    <Canvas shadows camera={{ position: [3, 3, 3], fov: 30 }}>
        <color attach="background" args={["#ececec"]} />
        <OrbitControls />
        <mesh> 
            <boxGeometry args={[5,5,5]} />
            <meshNormalMaterial />
        </mesh>
    </Canvas>
  );
}

export default DriveScene