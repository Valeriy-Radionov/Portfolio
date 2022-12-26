import { useCallback } from "react"
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"
import { Container, Engine } from "tsparticles-engine"

export const ParticlesMain = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine)
    await loadFull(engine)
  }, [])

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    await console.log(container)
  }, [])
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      height={"100%"}
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        particles: {
          number: {
            value: 25,
            density: {
              enable: true,
            },
          },
          color: {
            value: "#ffffff",
          },
          shape: {
            type: "char",
            character: {
              value: ["Frontend", "React", "Redux", "TS", "JS", "HTML", "CSS", "Tests", "Node js", "@", "API"],
              font: "Verdana",
              style: "",
              weight: "400",
              fill: true,
            },
          },
          stroke: {
            width: 1,
            color: "#ffffff",
          },
          opacity: {
            value: 0.5,
            random: false,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 16,
            random: false,
            anim: {
              enable: false,
              speed: 10,
              size_min: 10,
              sync: false,
            },
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "repulse",
              parallax: {
                enable: false,
                force: 60,
                smooth: 10,
              },
            },
            onclick: {
              enable: true,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 0.8,
              speed: 3,
            },
            repulse: {
              distance: 200,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
        background: {
          color: "#0000004C",
          image: "",
          position: "50% 50%",
          repeat: "no-repeat",
          size: "cover",
        },
      }}
    />
  )
}
