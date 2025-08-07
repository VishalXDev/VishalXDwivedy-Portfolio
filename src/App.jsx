import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Particles from 'react-tsparticles'
import { loadStarsPreset } from 'tsparticles-preset-stars'
import { motion } from 'framer-motion'
import Hero3D from './components/Hero3D'
import Navbar from './components/Navbar'
import About from './components/About'
import Education from './components/Education'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { Suspense } from 'react'

// Particle loader
const particlesInit = (engine) => loadStarsPreset(engine)

export default function App() {
  return (
    <>
      {/* Background Particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          preset: 'stars',
          background: {
            color: 'transparent'
          },
          particles: {
            number: {
              value: 100,
              density: {
                enable: true,
                value_area: 800
              }
            },
            color: { value: '#ffffff' },
            shape: { type: 'circle' },
            opacity: {
              value: 0.5,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false
              }
            },
            size: {
              value: 2,
              random: true,
              anim: {
                enable: true,
                speed: 2,
                size_min: 0.1,
                sync: false
              }
            },
            move: {
              enable: true,
              speed: 1,
              random: true,
              direction: 'none',
              out_mode: 'out',
              bounce: false
            }
          },
          interactivity: {
            detect_on: 'canvas',
            events: {
              onhover: { enable: true, mode: 'repulse' },
              onclick: { enable: true, mode: 'push' },
              resize: true
            },
            modes: {
              repulse: { distance: 100, duration: 0.4 },
              push: { particles_nb: 4 }
            }
          },
          retina_detect: true
        }}
        className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
      />

      {/* Navbar */}
      <Navbar />

      {/* Hero Section with 3D Canvas */}
      <div id="home" className="w-full h-screen relative">
        <Suspense fallback={null}>
          <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[2, 2, 2]} />
            <Hero3D />
            <OrbitControls enableZoom={false} />
          </Canvas>
        </Suspense>
      </div>

      {/* Animated Content Sections */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-0"
      >
        <section id="about">
          <About />
        </section>

        <section id="education">
          <Education />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="portfolio">
          <Projects />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </motion.div>
    </>
  )
}
