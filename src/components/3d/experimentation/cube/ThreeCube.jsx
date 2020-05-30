import React, { useState, useRef } from 'react';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Canvas, useFrame, extend, useThree } from 'react-three-fiber';
import { useSpring, a } from 'react-spring/three';
import containerStyles from './ThreeCube.module.css';

extend({ OrbitControls });

const Controls = () => {
  const orbitRef = useRef();
  const { camera, gl } = useThree();

  useFrame(() => {
    orbitRef.current.update();
  });

  return <orbitControls ref={orbitRef} args={[camera, gl.domElement]} />;
};

const ThreeBox = props => {
  const [active, setActive] = useState(false);
  const [hovered, setHovered] = useState(false);

  const springProps = useSpring({
    scale: active ? [2.5, 2.5, 2.5] : [2, 2, 2],
    color: hovered ? 'hotpink' : 'gray',
  });

  const boxRef = useRef();

  console.log(springProps.color);

  useFrame(() => {
    boxRef.current.rotation.y += 0.01;
  });

  return (
    <a.mesh
      ref={boxRef}
      scale={springProps.scale}
      onClick={() => setActive(prevValue => !prevValue)}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      {...props}
    >
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <a.meshBasicMaterial attach="material" color={springProps.color} />
    </a.mesh>
  );
};

export default () => {
  return (
    <Canvas className={containerStyles.ThreeCube}>
      <ThreeBox position={[0, 0, 0]} />
    </Canvas>
  );
};
