import React, { useState, useRef, useEffect, Suspense } from 'react';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Canvas, useFrame, extend, useThree, Dom } from 'react-three-fiber';
import { useSpring, a } from 'react-spring/three';
import containerStyles from './ThreeCube.module.css';
import * as THREE from 'three';
import { Earth } from '../earth/EarthGlobe';

extend({ OrbitControls });

const Controls = () => {
  const orbitRef = useRef();
  const { camera, gl } = useThree();

  useFrame(() => {
    console.log(camera);
    orbitRef.current.update();
  });

  return (
    <orbitControls
      autoRotate
      autoRotateSpeed={0.4}
      minPolarAngle={Math.PI / 3}
      maxPolarAngle={Math.PI / 3}
      enableZoom={false}
      ref={orbitRef}
      args={[camera, gl.domElement]}
    />
  );
};

const Plane = () => (
  <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.5, 0]} receiveShadow>
    <planeBufferGeometry attach="geometry" args={[100, 100]} />
    <meshPhysicalMaterial attach="material" color="white" />
  </mesh>
);

function GroundPlane() {
  return (
    <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.5, 0]}>
      <planeBufferGeometry attach="geometry" args={[500, 500]} />
      <meshStandardMaterial attach="material" color="white" />
    </mesh>
  );
}
function BackDrop() {
  return (
    <mesh receiveShadow position={[0, -1, -50]}>
      <planeBufferGeometry attach="geometry" args={[500, 500]} />
      <meshStandardMaterial attach="material" color="white" />
    </mesh>
  );
}

const ThreeBox = props => {
  const { position, boxArgs = [1, 4, 2] } = props;
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);
  const springProps = useSpring({
    scale: active ? [1.5, 1.5, 1.5] : [1, 1, 1],
    color: hovered ? 'red' : '#b5b5b5',
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
      receiveShadow
      visible
      position={position}
    >
      <boxBufferGeometry attach="geometry" args={boxArgs} />
      <a.meshPhysicalMaterial attach="material" color={springProps.color} />
    </a.mesh>
  );
};

export default () => {
  return (
    <Canvas
      className={containerStyles.ThreeCube}
      camera={{ position: [-5, 16, 16] }}
      onCreated={({ gl }) => {
        gl.shadowMap.enabled = true;
        gl.shadowMap.type = THREE.PCFSoftShadowMap;
      }}
    >
      <ambientLight intensity={0.7} />
      <spotLight
        intensity={1}
        position={[20, 20, 20]}
        penumbra={1}
        castShadow
      />
      {/* <fog attach="fog" args={['black', 10, 400]} /> */}
      <group position={[0, 0, 0]}>
        <ThreeBox boxArgs={[1, 6, 2]} position={[2, 0, 2]} />
        <ThreeBox boxArgs={[1, 5, 2]} position={[0, 0, 0]} />
        <ThreeBox boxArgs={[1.5, 5, 3]} position={[5, 0, 3]} />
      </group>
      <group position={[4, 0, -4]}>
        <ThreeBox boxArgs={[1, 6, 2]} position={[2, 0, 2]} />
        <ThreeBox boxArgs={[1, 5, 2]} position={[0, 0, 0]} />
        <ThreeBox boxArgs={[1.5, 5, 3]} position={[5, 0, 3]} />
      </group>
      <Controls />
      {/* <BackDrop /> */}
      {/* <GroundPlane /> */}
      {/* <Plane /> */}

      {/* <Earth /> */}
    </Canvas>
  );
};

// import React, { useState, useRef, useEffect } from 'react';
// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import { Canvas, extend, useThree, useFrame } from 'react-three-fiber';
// import { useSpring, a } from 'react-spring/three';

// extend({ OrbitControls });

// const SpaceShip = () => {
//   const [model, setModel] = useState();

//   useEffect(() => {
//     new GLTFLoader().load('3dobjects/rocketplanet/scene.gltf', setModel);
//   });

//   return model ? <primitive object={model.scene} /> : null;
// };

// const Controls = () => {
//   const orbitRef = useRef();
//   const { camera, gl } = useThree();

//   useFrame(() => {
//     orbitRef.current.update();
//   });

//   return (
//     <orbitControls
//       autoRotate
//       maxPolarAngle={Math.PI / 3}
//       minPolarAngle={Math.PI / 3}
//       args={[camera, gl.domElement]}
//       ref={orbitRef}
//     />
//   );
// };

// const Plane = () => (
//   <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]} receiveShadow>
//     <planeBufferGeometry attach="geometry" args={[100, 100]} />
//     <meshPhysicalMaterial attach="material" color="white" />
//   </mesh>
// );

// const Box = () => {
//   const [hovered, setHovered] = useState(false);
//   const [active, setActive] = useState(false);
//   const props = useSpring({
//     scale: active ? [1.5, 1.5, 1.5] : [1, 1, 1],
//     color: hovered ? 'hotpink' : 'gray',
//   });

//   return (
//     <a.mesh
//       onPointerOver={() => setHovered(true)}
//       onPointerOut={() => setHovered(false)}
//       onClick={() => setActive(!active)}
//       scale={props.scale}
//       castShadow
//     >
//       <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
//       <a.meshPhysicalMaterial attach="material" color={props.color} />
//     </a.mesh>
//   );
// };

// export default () => {
//   const isBrowser = typeof window !== 'undefined';

//   return (
//     <>
//       {isBrowser && (
//         <Canvas
//           camera={{ position: [0, 0, 5] }}
//           onCreated={({ gl }) => {
//             gl.shadowMap.enabled = true;
//             gl.shadowMap.type = THREE.PCFSoftShadowMap;
//           }}
//         >
//           <ambientLight intensity={0.5} />
//           <spotLight position={[15, 20, 5]} penumbra={1} castShadow />
//           <fog attach="fog" args={['black', 10, 25]} />
//           <Controls />
//           {/* <Box /> */}
//           {/* <Plane /> */}
//           <SpaceShip />
//         </Canvas>
//       )}
//     </>
//   );
// };
