import React from 'react';
import { useRef } from 'react';
import './DriveScene.css';
import {Canvas, useFrame} from '@react-three/fiber';
import { OrbitControls, Stars } from "@react-three/drei";
import {Physics, useBox} from "@react-three/cannon";
import Menu from '../components/Menu'; 
import { Link } from 'react-router-dom';


function Box(){
  const cuberef = useRef()
  useFrame((state, delta) =>  {
    (cuberef.current.rotation.x += delta/10);   
    console.log(state)
  });
  useFrame((state, delta) =>  {
    (cuberef.current.rotation.y += delta/10);   
    console.log(state)
  });
  useFrame((state, delta) => {
    (cuberef.current.rotation.z += delta/10);   
    console.log(state)
  });

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

function DriveMe() {
  const ref = useRef();
  return (
    <div>

      <Menu/>
    <div className='scene'>
        <Canvas>
            <OrbitControls />
            <Stars></Stars>
            <ambientLight intensity={0.9}/>
            <spotLight position={[10,10,10]} angle={1}/>
            <Physics>
              <Box></Box>
              <Plane></Plane>
            </Physics>
        </Canvas>
    </div>
    </div>    
  );
}

export default DriveMe