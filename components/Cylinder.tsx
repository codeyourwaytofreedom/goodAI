import { NextPage } from "next";
import { useTexture } from "@react-three/drei";
import { useRef } from "react";
import { Mesh } from "three";
import { useFrame } from "@react-three/fiber";

type scaling = {
    scaling_index: number;
  }

const Cylinder:NextPage<scaling> = ({scaling_index}) => {
    const texture = useTexture("stone.jpg");
    const cylinder = useRef<Mesh>(null)
    useFrame(()=> {
        if(cylinder.current)
        {
            cylinder.current.rotation.y += 0.01;
        }
    })
    return ( 
        <>
        <mesh position={[scaling_index*2,0,0]} rotation={[-0.1,0,0]} ref={cylinder}>
            <cylinderGeometry args={[scaling_index/2,scaling_index/2,scaling_index,90]}/>
            <meshBasicMaterial map={texture} color={"darkorange"}/>
        </mesh>
        </>
     );
}
export default Cylinder;