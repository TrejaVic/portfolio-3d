"use client";
import { Sparkles, Text3D, Float, Center } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { useState } from "react";
import Roboto from "../public/fonts/Roboto.json";
import * as THREE from "three";
import Overlay from "./Overlay";
import { text } from "stream/consumers";

export const ThreeDText = () => {
  const textRef = React.useRef<THREE.Mesh>(null!);
  const meshRef = React.useRef<THREE.MeshStandardMaterial>(null!);
  const [targetPosition, setTargetPosition] = React.useState(0);
  const [targetRotation, setTargetRotation] = React.useState(0);
  const [isClicked, setIsClicked] = useState(false);
  useFrame(() => {
    if (textRef.current) {
      textRef.current.position.x +=
        (targetPosition - textRef.current.position.x) * 0.1;
      textRef.current.rotation.y +=
        (targetRotation * THREE.MathUtils.DEG2RAD -
          textRef.current.rotation.y) *
        0.1;
    }

    if (isClicked) {
      meshRef.current.color = new THREE.Color(Math.random() * 0xffffff);
      setIsClicked(false);
    }
  });

  // Set the target position after 2 seconds
  React.useEffect(() => {
    setTimeout(() => {
      setTargetPosition(1.4);
      setTargetRotation(-20);
    }, 1500);
  }, []);

  return (
    <Center>
      <Float>
        <Text3D
          position={[0, 0, 0]}
          /* @ts-ignore */
          font={Roboto}
          ref={textRef}
          onPointerDown={() => setIsClicked(true)}
          onPointerUp={() => setIsClicked(false)}
        >
          {"[Treja];"}
          <meshStandardMaterial color="white" wireframe ref={meshRef} />
        </Text3D>
      </Float>
    </Center>
  );
};

const R3F = () => {
  return (
    <Canvas>
      <ambientLight intensity={1} />
      <spotLight position={[10, 10, 10]} angle={0.15} />
      <Sparkles scale={15} count={2000} size={1.5} />
      <ThreeDText />

      <Overlay />
    </Canvas>
  );
};
export default R3F;
