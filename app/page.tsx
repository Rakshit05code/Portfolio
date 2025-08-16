"use client"

import { useEffect, useState } from "react"
import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import AboutSection from "@/components/AboutSection"
import ProjectSection from "@/components/ProjectSection"
import CertificateSection from "@/components/CertificateSection"
import ContactSection from "@/components/ContactSection"
import Footer from "@/components/Footer"
import CustomCursor from "@/components/CustomCursor"
import LoadingScreen from "@/components/LoadingScreen"
import SmoothScroll from "@/components/SmoothScroll"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement
      if (target.hash) {
        e.preventDefault()
        const element = document.querySelector(target.hash)
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        }
      }
    }

    const links = document.querySelectorAll('a[href^="#"]')
    links.forEach((link) => {
      link.addEventListener("click", handleSmoothScroll)
    })

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleSmoothScroll)
      })
    }
  }, [isLoading])

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />
  }

  return (
    <SmoothScroll>
      <main className="relative">
        <CustomCursor />
        <Header />
        <div className="fade-in">
          <HeroSection />
        </div>
        <div className="fade-in">
          <AboutSection />
        </div>
        <div className="fade-in">
          <ProjectSection />
        </div>
        <div className="fade-in">
          <CertificateSection />
        </div>
        <div className="fade-in">
          <ContactSection />
        </div>
        <Footer />
      </main>
    </SmoothScroll>
  )
}
