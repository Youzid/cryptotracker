import React from 'react'
import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Particless = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
}, []);

const particlesLoaded = useCallback(async (container: Container | undefined) => {
    await console.log(container);
}, []);
return (
    <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        style={{opacity:0.9 , position:"absolute" , top:0 , left:0 , height:"100%" ,width:"100%" , zIndex:10}}
        options={{
          fullScreen : false,
            background: {
                color: {
                    value: "#000000000",
                },
            },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: {
                        enable: false,
                        mode: "attract",
                    },
                    onHover: {
                        enable: true,
                        mode: ["connect", "repulse" ,"grab"]	
                    },
                    resize: true,
                },
                modes: {
                    push: {
                        quantity: 4,
                    },
                    repulse: {
                        distance: 100,
                        duration: 4,
                    },
                },
            },
            particles: {
                color: {
                    value: "#FFB606",
                },
                links: {
                    color: "#ffffff",
                    distance: 200,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                },
                collisions: {
                    enable: true,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },
                    random: true,
                    speed: 2,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                        area: 400,
                    },
                    value:10,
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: ["circle","image"],
                    "image": [
                     
                     
                      {
                          "src": "./coins/USDC.png",
                          "height": 40,
                          "width": 40
                      }
                  ]





                },




                size: {
                    value: { min: 1, max: 5 },
                },
            },
           
        }}
    />
);
};


export default Particless