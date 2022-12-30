import React, { useEffect } from 'react';
import draw from '../../../modules/page/home/canvas';

const Home = () => {
    useEffect(() => {
        draw();
    }, []); 

    return (
        <div id="home-page">
            <canvas id="canvas" style={{height: "400px", width: "400px"}}></canvas>
        </div>
    );
};

export default Home;