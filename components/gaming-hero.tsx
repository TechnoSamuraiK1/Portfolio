"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export default function GamingHero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/GamingBackground.png?height=1080&width=1920"
          alt="Gaming Background"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>
      <div
        className={`container relative z-10 transition-all duration-1000 transform ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
        }`}
      >
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-white">
            Welcome to My <span className="text-primary">Gaming</span> Universe
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/80">
            Join me on epic adventures through the most exciting games and experiences
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="animate-pulse">
              Watch Latest Videos
            </Button>
            <Button variant="outline" size="lg" className="bg-background/20 backdrop-blur-sm">
              Explore Gallery
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full text-white"
          onClick={() => {
            document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
          }}
        >
          <ChevronDown className="h-6 w-6" />
        </Button>
      </div>
    </section>
  )
}

