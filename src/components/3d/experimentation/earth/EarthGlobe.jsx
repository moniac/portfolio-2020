import React, { useEffect, useState, useRef } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Canvas, useFrame } from 'react-three-fiber';

export const Earth = () => {
  const [model, setModel] = useState();
  const testr = useRef();
  useEffect(() => {
    new GLTFLoader().load('3dobjects/floatingisland/scene.gltf', setModel);
  });

  useFrame(() => {
    if (model) {
      testr.current.rotation.y -= 0.001;
    }
  });

  return model && model.scene ? (
    <group position={[30, 5, 0]} rotation={[0, 0, 0]}>
      <mesh ref={testr}>
        <primitive object={model.scene} />
      </mesh>
    </group>
  ) : null;
};

export default () => {
  return (
    <Canvas style={{ zIndex: 5 }} camera={{ position: [1000, 100, 5] }}>
      <Earth />
    </Canvas>
  );
};
