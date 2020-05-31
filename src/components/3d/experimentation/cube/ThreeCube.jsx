import React, { useState, useRef } from 'react';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Canvas, useFrame, extend, useThree } from 'react-three-fiber';
import { useSpring, a } from 'react-spring/three';
import containerStyles from './ThreeCube.module.css';
import * as THREE from 'THREE';

extend({ OrbitControls });

const Controls = () => {
  const orbitRef = useRef();
  const { camera, gl } = useThree();

  useFrame(() => {
    orbitRef.current.update();
  });

  return (
    <orbitControls
      autoRotate
      minPolarAngle={Math.PI / 3}
      maxPolarAngle={Math.PI / 3}
      ref={orbitRef}
      args={[camera, gl.domElement]}
    />
  );
};

const Plane = () => (
  <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]} receiveShadow>
    <planeBufferGeometry attach="geometry" args={[100, 100]} />
    <meshPhysicalMaterial attach="material" color="white" />
  </mesh>
);

const ThreeBox = props => {
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);
  const springProps = useSpring({
    scale: active ? [1.5, 1.5, 1.5] : [1, 1, 1],
    color: hovered ? '#d63447' : '#f6eedf',
  });

  const boxRef = useRef();

  //   useFrame(() => {
  //     boxRef.current.rotation.y += 0.01;
  //   });

  return (
    <a.mesh
      ref={boxRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={() => setActive(!active)}
      scale={springProps.scale}
      castShadow
      {...props}
    >
      <ambientLight intensity={0.5} />
      <spotLight
        intensity={0.6}
        position={[0, 10, 15]}
        penumbra={1}
        castShadow
      />
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <a.meshPhysicalMaterial attach="material" color={springProps.color} />
    </a.mesh>
  );
};

export default () => {
  return (
    <Canvas
      className={containerStyles.ThreeCube}
      camera={{ position: [0, 0, 2] }}
      onCreated={({ gl }) => {
        gl.shadowMap.enabled = true;
        gl.shadowMap.type = THREE.PCFSoftShadowMap;
      }}
    >
      <fog attach="fog" args={['white', 5, 15]} />
      <Controls />
      <Plane />
      <ThreeBox position={[0, 0, 0]} />
    </Canvas>
  );
};
