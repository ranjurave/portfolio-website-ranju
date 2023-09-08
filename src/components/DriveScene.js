import React from 'react';
import { useRef } from 'react';
import './DriveScene.css'
import {Canvas, useFrame} from '@react-three/fiber';
import { OrbitControls, Stars } from "@react-three/drei";
import {Physics, useBox} from "@react-three/cannon";


function Box(){
  const cuberef = useRef()
  useFrame((state, delta) => (cuberef.current.rotation.x += delta/3))
  return(
    <mesh ref = {cuberef} position={[0,1,0]}> 
        <boxGeometry />
        <meshPhongMaterial color="red" />
    </mesh>
  );
}
function Plane(){
  return(

    <mesh rotation={[-Math.PI/2,0,0]}> 
        <boxGeometry args={[10,10,0.1]} />
        <meshLambertMaterial color="blue" />
    </mesh>
  );
}

function DriveScene() {
  const ref = useRef();
  //
  return (
    <div className='scene'>
        <Canvas>
            <OrbitControls />
            <Stars></Stars>
            <ambientLight intensity={0.5}/>
            <spotLight position={[10,10,10]} angle={1}/>
            <Physics>
              <Box></Box>
              <Plane></Plane>
            </Physics>
        </Canvas>
    </div>    

  );
}

export default DriveScene