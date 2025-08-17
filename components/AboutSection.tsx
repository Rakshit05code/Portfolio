"use client"

import { useRef, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { gsap } from "gsap"

const aboutText = `I'm a passionate full-stack developer and cybersecurity enthusiast with 3+ years of experience creating 
secure digital experiences. I specialize in React, Node.js, Python, and modern web technologies, with a keen focus on 
building secure applications and contributing to open source projects.`

// Your actual tech skills from the provided list
const skills = [
  { name: "C", icon: "/placeholder.svg?height=48&width=48&text=C", color: "#A8B9CC", level: 85 },
  { name: "C++", icon: "/placeholder.svg?height=48&width=48&text=C++", color: "#00599C", level: 88 },
  { name: "Python", icon: "/placeholder.svg?height=48&width=48&text=Python", color: "#3776AB", level: 92 },
  { name: "JavaScript", icon: "/placeholder.svg?height=48&width=48&text=JS", color: "#F7DF1E", level: 90 },
  { name: "HTML", icon: "/placeholder.svg?height=48&width=48&text=HTML", color: "#E34F26", level: 95 },
  { name: "CSS", icon: "/placeholder.svg?height=48&width=48&text=CSS", color: "#1572B6", level: 90 },
  { name: "React", icon: "/placeholder.svg?height=48&width=48&text=React", color: "#61DAFB", level: 95 },
  { name: "Next.js", icon: "/placeholder.svg?height=48&width=48&text=Next", color: "#000000", level: 92 },
  { name: "Node.js", icon: "/placeholder.svg?height=48&width=48&text=Node", color: "#339933", level: 88 },
  { name: ".NET", icon: "/placeholder.svg?height=48&width=48&text=.NET", color: "#512BD4", level: 80 },
  { name: "Tailwind", icon: "/placeholder.svg?height=48&width=48&text=TW", color: "#06B6D4", level: 93 },
  { name: "Bootstrap", icon: "/placeholder.svg?height=48&width=48&text=BS", color: "#7952B3", level: 85 },
  { name: "Figma", icon: "/placeholder.svg?height=48&width=48&text=Figma", color: "#F24E1E", level: 82 },
  { name: "GCP", icon: "/placeholder.svg?height=48&width=48&text=GCP", color: "#4285F4", level: 78 },
  { name: "Firebase", icon: "/placeholder.svg?height=48&width=48&text=FB", color: "#FFCA28", level: 85 },
  { name: "Linux", icon: "/placeholder.svg?height=48&width=48&text=Linux", color: "#FCC624", level: 88 },
  { name: "Ubuntu", icon: "/placeholder.svg?height=48&width=48&text=Ubuntu", color: "#E95420", level: 85 },
  { name: "Arduino", icon: "/placeholder.svg?height=48&width=48&text=Arduino", color: "#00979D", level: 75 },
  { name: "Git", icon: "/placeholder.svg?height=48&width=48&text=Git", color: "#F05032", level: 90 },
  { name: "GitHub", icon: "/placeholder.svg?height=48&width=48&text=GitHub", color: "#181717", level: 92 },
]

const AnimatedBackground = () => {
  const particlesRef = useRef<(HTMLDivElement | null)[]>([])
  const geometryRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    // Animate floating particles
    particlesRef.current.forEach((particle, index) => {
      if (particle) {
        gsap.set(particle, {
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          scale: Math.random() * 0.5 + 0.5,
        })

        gsap.to(particle, {
          x: `+=${Math.random() * 200 - 100}`,
          y: `+=${Math.random() * 200 - 100}`,
          duration: 10 + Math.random() * 10,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        })

        gsap.to(particle, {
          opacity: Math.random() * 0.7 + 0.3,
          duration: 3 + Math.random() * 4,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        })
      }
    })

    // Animate geometric shapes
    geometryRef.current.forEach((shape, index) => {
      if (shape) {
        gsap.set(shape, {
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          rotation: Math.random() * 360,
        })

        gsap.to(shape, {
          rotation: 360,
          duration: 20 + index * 5,
          ease: "none",
          repeat: -1,
        })

        gsap.to(shape, {
          x: `+=${Math.random() * 300 - 150}`,
          y: `+=${Math.random() * 300 - 150}`,
          duration: 15 + Math.random() * 10,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        })
      }
    })
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950/50 to-black" />

      {/* Floating particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={`particle-${i}`}
          ref={(el) => (particlesRef.current[i] = el)}
          className="absolute w-2 h-2 rounded-full"
          style={{
            background: `radial-gradient(circle, ${
              i % 3 === 0 ? "#8B5CF6" : i % 3 === 1 ? "#A855F7" : "#C084FC"
            }, transparent)`,
            boxShadow: `0 0 10px ${i % 3 === 0 ? "#8B5CF6" : i % 3 === 1 ? "#A855F7" : "#C084FC"}`,
          }}
        />
      ))}

      {/* Geometric shapes */}
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={`geometry-${i}`}
          ref={(el) => (geometryRef.current[i] = el)}
          className="absolute opacity-20"
          style={{
            width: 20 + Math.random() * 40,
            height: 20 + Math.random() * 40,
            border: `1px solid ${i % 2 === 0 ? "#8B5CF6" : "#A855F7"}`,
            borderRadius: i % 3 === 0 ? "50%" : "0%",
          }}
        />
      ))}

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(147, 51, 234, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(147, 51, 234, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />
    </div>
  )
}

const SkillsNetwork = () => {
  const networkRef = useRef<HTMLDivElement>(null)
  const skillRefs = useRef<(HTMLDivElement | null)[]>([])
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    const network = networkRef.current
    const svg = svgRef.current
    if (!network || !svg) return

    const centerX = 300
    const centerY = 300
    const radius = 140

    // Position skills in multiple circles
    skillRefs.current.forEach((skill, index) => {
      if (skill) {
        const layer = Math.floor(index / 10) // 10 skills per layer
        const indexInLayer = index % 10
        const layerRadius = radius + layer * 60
        const angle = (indexInLayer / 10) * Math.PI * 2

        const x = centerX + Math.cos(angle) * layerRadius
        const y = centerY + Math.sin(angle) * layerRadius

        gsap.set(skill, { x, y })

        // Create orbital motion
        gsap.to(skill, {
          rotation: 360,
          duration: 25 + index * 2,
          ease: "none",
          repeat: -1,
        })

        // Orbital movement around center
        gsap.to(skill, {
          motionPath: {
            path: `M${x},${y} A${layerRadius},${layerRadius} 0 1,1 ${centerX + Math.cos(angle + Math.PI) * layerRadius},${centerY + Math.sin(angle + Math.PI) * layerRadius} A${layerRadius},${layerRadius} 0 1,1 ${x},${y}`,
            autoRotate: false,
          },
          duration: 20 + layer * 5,
          ease: "none",
          repeat: -1,
        })

        // Floating animation
        gsap.to(skill, {
          y: `+=${8 + index * 1}`,
          duration: 2.5 + index * 0.2,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        })
      }
    })

    // Function to update connections
    const updateConnections = () => {
      if (!svg) return

      // Clear existing lines
      svg.innerHTML = `
        <defs>
          <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.4)" />
            <stop offset="50%" stopColor="rgba(168,85,247,0.3)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.4)" />
          </linearGradient>
        </defs>
      `

      // Create connections between related skills
      const connections = [
        [0, 1], // C to C++
        [2, 3], // Python to JavaScript
        [4, 5], // HTML to CSS
        [6, 7], // React to Next.js
        [7, 8], // Next.js to Node.js
        [10, 11], // Tailwind to Bootstrap
        [13, 14], // GCP to Firebase
        [15, 16], // Linux to Ubuntu
        [18, 19], // Git to GitHub
      ]

      connections.forEach(([i, j]) => {
        const skill1 = skillRefs.current[i]
        const skill2 = skillRefs.current[j]

        if (skill1 && skill2) {
          const rect1 = skill1.getBoundingClientRect()
          const rect2 = skill2.getBoundingClientRect()
          const svgRect = svg.getBoundingClientRect()

          const x1 = rect1.left + rect1.width / 2 - svgRect.left
          const y1 = rect1.top + rect1.height / 2 - svgRect.top
          const x2 = rect2.left + rect2.width / 2 - svgRect.left
          const y2 = rect2.top + rect2.height / 2 - svgRect.top

          const line = document.createElementNS("http://www.w3.org/2000/svg", "line")
          line.setAttribute("x1", x1.toString())
          line.setAttribute("y1", y1.toString())
          line.setAttribute("x2", x2.toString())
          line.setAttribute("y2", y2.toString())
          line.setAttribute("stroke", "url(#connectionGradient)")
          line.setAttribute("stroke-width", "1.5")
          line.setAttribute("stroke-dasharray", "6,4")
          line.classList.add("connection-line")

          svg.appendChild(line)

          // Animate the line
          gsap.fromTo(
            line,
            { strokeDashoffset: 100 },
            {
              strokeDashoffset: 0,
              duration: 4,
              ease: "none",
              repeat: -1,
            },
          )
        }
      })
    }

    // Update connections periodically
    const updateInterval = setInterval(updateConnections, 100)
    setTimeout(updateConnections, 500)

    return () => {
      clearInterval(updateInterval)
    }
  }, [])

  return (
    <div className="relative w-[600px] h-[600px] flex items-center justify-center mx-auto">
      <svg
        ref={svgRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        style={{ overflow: "visible" }}
      />

      <div ref={networkRef} className="relative w-full h-full">
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            ref={(el) => (skillRefs.current[index] = el)}
            className="absolute flex flex-col items-center justify-center group cursor-pointer z-10 -translate-x-10 -translate-y-10"
            style={{ willChange: "transform" }}
          >
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center backdrop-blur-sm border border-purple-300/30 transition-all duration-300 group-hover:scale-110 group-hover:border-purple-300/60 relative"
              style={{
                backgroundColor: `${skill.color}20`,
                boxShadow: `0 0 20px ${skill.color}40, 0 0 40px rgba(147, 51, 234, 0.2)`,
              }}
            >
              <img
                src={skill.icon || "/placeholder.svg"}
                alt={skill.name}
                className="w-10 h-10 object-contain relative z-10"
                style={{
                  filter: skill.name === "Next.js" || skill.name === "GitHub" ? "invert(1) brightness(2)" : undefined,
                }}
              />

              <div
                className="absolute inset-0 rounded-full border-2 opacity-50 animate-ping"
                style={{ borderColor: skill.color }}
              />
            </div>

            <span className="text-xs text-purple-200 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/70 px-2 py-1 rounded backdrop-blur-sm whitespace-nowrap border border-purple-500/30">
              {skill.name} - {skill.level}%
            </span>

            <div
              className="absolute inset-0 rounded-full blur-xl opacity-30 -z-10"
              style={{ backgroundColor: skill.color }}
            />
          </div>
        ))}

        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full opacity-80 animate-pulse shadow-lg"
          style={{
            background: "linear-gradient(to right, #a855f7, #8b5cf6, #7c3aed)",
            boxShadow: "0 0 20px rgba(147, 51, 234, 0.5)",
          }}
        />
      </div>
    </div>
  )
}

const AboutSection = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [inView, controls])

  return (
    <section
      id="about"
      className="relative w-full min-h-screen bg-black flex flex-col justify-center items-center px-4 py-20 overflow-hidden"
    >
      <AnimatedBackground />

      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 1 }}
        className="max-w-4xl text-center z-10 mb-12"
      >
        <h2
          className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent"
          style={{
            background: "linear-gradient(to right, #d8b4fe, #c084fc, #a855f7)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          About Me
        </h2>
        <p className="text-lg md:text-xl text-purple-100 mb-8 px-4 leading-relaxed max-w-3xl mx-auto">{aboutText}</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1.2, delay: 0.5 }}
        className="relative z-10 flex items-center justify-center mb-12"
      >
        <SkillsNetwork />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 1 }}
        className="text-center z-10"
      >
        <div className="text-purple-200 text-xl font-medium opacity-90 mb-2">My Complete Tech Arsenal</div>
        <div className="text-purple-300 text-sm">Hover over skills to see proficiency levels</div>
      </motion.div>
    </section>
  )
}

export default AboutSection
