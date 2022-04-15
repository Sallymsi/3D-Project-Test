import React from 'react';
import { GLTFModel, AmbientLight, DirectionLight } from "react-3d-viewer";
import '../styles/sass/main.scss';


const House = () => {

    let img = require('../assets/home.glb')

    return (
            <GLTFModel  src={img}
                        enabled={true}
                        enableZoom={true}
                        position={{ x: 0, y: 0, z: 20}}
                        width="800"
                        height="800">

                <AmbientLight color={0xffffff} />
                <DirectionLight
                color={0xffffff}
                position={{ x: 100, y: 300, z: 100 }}
                />
                <DirectionLight
                color={0xff00ff}
                position={{ x: -100, y: 200, z: -100 }}
                />
            </GLTFModel>
    )
}
export default House;


