"use client"

import { useRef, useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Youtube, Send, Instagram } from "lucide-react"

export default function SocialLinks() {
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

  const socialPlatforms = [
    {
      name: "YouTube",
      icon: <Youtube className="h-12 w-12 text-red-600" />,
      description: "Subscribe to my channel for the latest gaming videos, tutorials, and live streams.",
      action: "Subscribe",
      color: "bg-red-600 hover:bg-red-700",
      delay: 0,
    },
    {
      name: "Telegram",
      icon: <Send className="h-12 w-12 text-blue-500" />,
      description: "Join my Telegram channel for exclusive content, community discussions, and gaming news.",
      action: "Join Channel",
      color: "bg-blue-500 hover:bg-blue-600",
      delay: 200,
    },
    {
      name: "Instagram",
      icon: <Instagram className="h-12 w-12 text-pink-600" />,
      description: "Follow me on Instagram for behind-the-scenes content, gaming setups, and daily updates.",
      action: "Follow",
      color: "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600",
      delay: 400,
    },
  ]

  return (
    <section id="contact" className="py-24 md:py-32 bg-muted/50">
      <div
        ref={containerRef}
        className={`container transition-all duration-1000 transform ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
        }`}
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Connect With Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Follow me on social media to stay updated with the latest content and join our gaming community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {socialPlatforms.map((platform, index) => (
            <Card
              key={platform.name}
              className="overflow-hidden border-2 hover:border-primary transition-all duration-300"
              style={{
                transitionDelay: `${platform.delay}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
              }}
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                {platform.icon}
                <CardTitle>{platform.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">{platform.description}</p>
                <Button className={platform.color + " w-full text-white"}>{platform.action}</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

