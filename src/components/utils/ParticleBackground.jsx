"use client"
import React from 'react';
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";
import { useCallback } from "react";

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    // loadFull ensures all necessary tsparticles plugins are loaded
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-dark">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "#0e1b20", // Background color for contrast
            },
          },
          fpsLimit: 60,
          particles: {
            color: {
              value: "#fe4031", // Use Tailwind's primary color (adjust to match your Tailwind config)
            },
            links: {
              color: "#fe4031",
              distance: 150,
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
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
      <div className="relative z-10 text-center text-white">
        <h1 className="text-4xl font-bold">Stunning Particles Background</h1>
        <p className="mt-4">Using react-tsparticles and Tailwind CSS</p>
      </div>
    </div>
  );
};

export default ParticleBackground;
