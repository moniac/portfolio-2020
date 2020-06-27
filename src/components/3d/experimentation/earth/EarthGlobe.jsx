import React, { useEffect, useState, useRef } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Canvas, useFrame } from 'react-three-fiber';

export const Earth = () => {
  const [model, setModel] = useState();

  useEffect(() => {
    new GLTFLoader().load('3dobjects/rocketplanet/scene.gltf', setModel);
  });

  return model && model.scene ? (
    <group position={[0, -4, 0]} rotation={[0.1, 0, 0]}>
      <mesh>
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
