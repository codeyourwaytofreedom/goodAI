
import { NextPage } from "next";
import { useTexture } from "@react-three/drei";
import { useRef } from "react";
import { Mesh } from "three";
import { useFrame } from "@react-three/fiber";

type scaling = {
    scaling_index: number;
  }

const Sphere:NextPage<scaling> = ({scaling_index}) => {
    const texture = useTexture("stone.jpg");
    const sphere = useRef<Mesh>(null)
    useFrame(()=> {
        if(sphere.current)
        {
            sphere.current.rotation.y += 0.01;
        }
    })
    return ( 
        <>
        <mesh position={[0,0,-scaling_index/2]} ref={sphere}>
            <sphereGeometry args={[scaling_index,90,90]}/>
            <meshBasicMaterial map={texture} color={"lightgreen"} />
        </mesh>
        </>
     );
}
export default Sphere;