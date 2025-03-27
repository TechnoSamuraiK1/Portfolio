"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const games = [
  {
    id: 1,
    title: "Cyberpunk Adventure",
    image: "/placeholder.svg?height=600&width=800",
    category: "RPG",
  },
  {
    id: 2,
    title: "Space Explorers",
    image: "/placeholder.svg?height=600&width=800",
    category: "Strategy",
  },
  {
    id: 3,
    title: "Medieval Legends",
    image: "/placeholder.svg?height=600&width=800",
    category: "Adventure",
  },
  {
    id: 4,
    title: "Racing Champions",
    image: "/placeholder.svg?height=600&width=800",
    category: "Racing",
  },
  {
    id: 5,
    title: "Zombie Apocalypse",
    image: "/placeholder.svg?height=600&width=800",
    category: "Survival",
  },
  {
    id: 6,
    title: "Tactical Warfare",
    image: "/placeholder.svg?height=600&width=800",
    category: "FPS",
  },
]

export default function GameGallery() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [activeCategory, setActiveCategory] = useState("All")

  const categories = ["All", ...Array.from(new Set(games.map((game) => game.category)))]

  const filteredGames = activeCategory === "All" ? games : games.filter((game) => game.category === activeCategory)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="gallery" className="py-24 md:py-32">
      <div
        ref={containerRef}
        className={`container transition-all duration-1000 transform ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
        }`}
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Game Gallery</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore screenshots from my favorite games and epic gaming moments
          </p>
        </div>

        <div className="flex justify-center flex-wrap gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className="mb-2"
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGames.map((game, index) => (
            <Card
              key={game.id}
              className="overflow-hidden group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              style={{
                transitionDelay: `${index * 100}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
              }}
            >
              <CardContent className="p-0">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={game.image || "/placeholder.svg"}
                    alt={game.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                    <div className="p-4 w-full">
                      <span className="inline-block px-2 py-1 bg-primary text-primary-foreground text-xs rounded mb-2">
                        {game.category}
                      </span>
                      <h3 className="font-bold text-white text-lg">{game.title}</h3>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

