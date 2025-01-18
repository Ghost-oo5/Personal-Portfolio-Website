"use client"

import { useEffect, useState } from "react"
import { ChevronUp } from "lucide-react"

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 200) // Show when scrolled down 200px
    }

    // Listen for scroll events
    window.addEventListener("scroll", toggleVisibility)

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("scroll", toggleVisibility)
    }
  }, [])

  // Scroll animation when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll animation
    })
  }

  return (
    <button
      className={`fixed bottom-4 right-4 z-50 rounded-full bg-pink-500 text-white p-3 shadow-xl  duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <ChevronUp className="w-6 h-6" />
    </button>
  )
}

export default ScrollToTopButton
