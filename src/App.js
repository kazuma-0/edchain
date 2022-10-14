import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback, useEffect, useState } from "react";
function App() {
  const [loaded, setLoaded] = useState(false);
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);
  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
    setLoaded(true);
  }, []);
  return (
    <div className="h-[calc(100vh_-_100px)] flex-col flex items-center justify-center">
      <div className="relative">
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: "transparent",
              },
            },
            style: {
              // height: props.height,
              position: "relative",
              top: "unset",
              pointerEvents: "unset",
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 1,
                },
                repulse: {
                  distance: 50,
                  duration: 0.02,
                },
              },
            },
            particles: {
              color: {
                value: "#1e293b ",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                directions: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 2,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 2 },
              },
            },
            detectRetina: true,
          }}
        />
        <div className="absolute top-0 left-0 h-full w-full lg:px-10 px-2 flex flex-col justify-center text-center">  
        <h1 className="text-7xl tracking-wide">EDchain</h1>
        <h6>Decentralised learning</h6>
        </div>
      </div>
    </div>
  );
}

export default App;
