"use client"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"
import Image from "next/image"

const videos = [
  {
    id: 1,
    title: "Epic Boss Battle Walkthrough",
    thumbnail: "/placeholder.svg?height=720&width=1280",
    views: "125K",
    date: "2 weeks ago",
  },
  {
    id: 2,
    title: "Top 10 Gaming Moments of 2023",
    thumbnail: "/placeholder.svg?height=720&width=1280",
    views: "89K",
    date: "1 month ago",
  },
  {
    id: 3,
    title: "Secret Easter Eggs You Missed",
    thumbnail: "/placeholder.svg?height=720&width=1280",
    views: "210K",
    date: "3 weeks ago",
  },
  {
    id: 4,
    title: "Pro Gaming Tips & Tricks",
    thumbnail: "/placeholder.svg?height=720&width=1280",
    views: "156K",
    date: "5 days ago",
  },
]

export default function VideoShowcase() {
  const [activeIndex, setActiveIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

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

  const nextVideo = () => {
    setActiveIndex((prev) => (prev + 1) % videos.length)
  }

  const prevVideo = () => {
    setActiveIndex((prev) => (prev - 1 + videos.length) % videos.length)
  }

  return (
    <section id="videos" className="py-24 md:py-32 bg-muted/50">
      <div
        ref={containerRef}
        className={`container transition-all duration-1000 transform ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
        }`}
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Featured Videos</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Check out some of my most popular gaming content and tutorials
          </p>
        </div>

        <div className="relative">
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 rounded-full bg-background/80 backdrop-blur-sm"
            onClick={prevVideo}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <div className="overflow-hidden px-10">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {videos.map((video) => (
                <div key={video.id} className="w-full flex-shrink-0 px-4">
                  <Card className="overflow-hidden">
                    <CardContent className="p-0">
                      <div className="relative aspect-video group cursor-pointer">
                        <Image
                          src={video.thumbnail || "/placeholder.svg"}
                          alt={video.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <Button
                            variant="outline"
                            size="icon"
                            className="rounded-full h-16 w-16 bg-background/20 backdrop-blur-sm"
                          >
                            <Play className="h-8 w-8 fill-current" />
                          </Button>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-lg mb-1">{video.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {video.views} views • {video.date}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 rounded-full bg-background/80 backdrop-blur-sm"
            onClick={nextVideo}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        <div className="flex justify-center mt-8">
          {videos.map((_, index) => (
            <Button
              key={index}
              variant="ghost"
              size="icon"
              className={`w-3 h-3 rounded-full p-0 mx-1 ${
                index === activeIndex ? "bg-primary" : "bg-muted-foreground/30"
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <span className="sr-only">Go to slide {index + 1}</span>
            </Button>
          ))}
        </div>
      </div>
    </section>
  )
}

