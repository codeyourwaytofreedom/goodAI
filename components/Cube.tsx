import { NextPage } from "next";
import { useTexture } from "@react-three/drei";
import { Mesh } from "three";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

type scaling = {
    scaling_index: number;
  }

const Cube:NextPage<scaling> = ({scaling_index}) => {
    const texture = useTexture("stone.jpg");
    const cube = useRef<Mesh>(null)
    useFrame(()=> {
        if(cube.current)
        {
            cube.current.rotation.y += 0.01;
        }
    })
    return ( 
        <>
        <mesh position={[-scaling_index*2,0,0]} rotation={[0,0,0]} ref={cube}>
            <boxGeometry args={[scaling_index,scaling_index,scaling_index]}/>
            <meshBasicMaterial map={texture} color={"crimson"}/>
        </mesh>
        </>
     );
}
export default Cube;