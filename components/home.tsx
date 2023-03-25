import { Canvas } from "@react-three/fiber";
import Cube from "./Cube";
import Sphere from "./Sphere";
import Cylinder from "./Cylinder";
import { Suspense, useState } from "react";
import { Socket } from "socket.io-client";
import io from "socket.io-client";
import { useEffect } from "react";
import h from "../styles/home.module.css";

//socket connection to server port
/* const socket: Socket = io("http://localhost:80");
socket.connect(); */

const Home_page = () => {
    const [scaling_index, setIndex] = useState<number>(1)

//socket operation to retrieve random number from node server. commented out for deploying purposes.
/*     useEffect(() => {
        socket.on('connect', () => {
        });
        socket.on('scaling_index', (ind) => {
            console.log(ind)
            setIndex(ind)
        });
    
        return () => {
          socket.off('connect');
          socket.off('scaling_index');
        };
      }, []); */

    const handle_click = () => {
        //backend version with node express, using socket.io
        //socket.emit("request_scaling_index")

        //frontend version
        setIndex( Math.random() * (2.75 - 1) + 1)
      }
    return ( 
        <>
        <div className={h.home}>
            <div className={h.controls}>
            <button onClick={handle_click}>Random Scaling Index from Node Backend</button>
            <h1>{scaling_index.toString().substring(0,4)}</h1> 
            </div>

                <Canvas   camera={{ zoom: 20, position: [0, 0, 100] }}>
                    <Cube scaling_index={scaling_index??1}/>
                    <Sphere scaling_index={scaling_index??1} />
                    <Cylinder scaling_index={scaling_index??1} />
                </Canvas>
        </div> 
        </>

      );
}
 
export default Home_page;