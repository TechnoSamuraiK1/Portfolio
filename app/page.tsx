import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Youtube, Send, Instagram } from "lucide-react"
import GamingHero from "@/components/gaming-hero"
import VideoShowcase from "@/components/video-showcase"
import GameGallery from "@/components/game-gallery"
import SocialLinks from "@/components/social-links"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/placeholderbg.jpg?height=32&width=32" alt="Logo" width={32} height={32} className="rounded-md" />
            <span className="text-xl font-bold">Techno Samurai</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium hover:text-primary">
              About
            </Link>
            <Link href="#videos" className="text-sm font-medium hover:text-primary">
              Videos
            </Link>
            <Link href="#gallery" className="text-sm font-medium hover:text-primary">
              Gallery
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
          </nav>
          <Button variant="default" size="sm">
            Subscribe
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <GamingHero />

        <section id="about" className="container py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">About My Channel</h2>
              <p className="text-muted-foreground mb-6">
                Welcome to my gaming universe! I create exciting gaming content, tutorials, and gameplay videos for
                enthusiasts like you. Join me on this epic gaming journey as we explore new worlds, master challenging
                levels, and share unforgettable gaming moments together.
              </p>
              <div className="flex gap-4">
                <Button variant="default">
                  <Youtube className="mr-2 h-4 w-4" href="#"/> Subscribe
                </Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=600&width=800" alt="Gaming Setup" fill className="object-cover" />
            </div>
          </div>
        </section>

        <VideoShowcase />

        <GameGallery />

        <SocialLinks />

        <section className="container py-24 md:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Join the Adventure?</h2>
            <p className="text-muted-foreground mb-8">
              Subscribe to my channel and follow me on social media to stay updated with the latest gaming content!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg">
                <Youtube className="mr-2 h-5 w-5" /> Subscribe Now
              </Button>
              <Button variant="outline" size="lg">
                Contact Me
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Image src="/placeholder.svg?height=24&width=24" alt="Logo" width={24} height={24} className="rounded-md" />
            <span className="font-semibold">GamerTag</span>
          </div>
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} GamerTag. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="https://youtube.com/@technosamuraik1?si=T_WTANZvdhI9tkXv" className="text-muted-foreground hover:text-foreground">
              <Youtube className="h-5 w-5" />
              <span className="sr-only">YouTube</span>
            </Link>
            <Link href="https://www.instagram.com/technosamuraik1?igsh=Nmg5azdreDFveXNy" className="text-muted-foreground hover:text-foreground">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="t.me/technosamuraik1" className="text-muted-foreground hover:text-foreground">
              <Send className="h-5 w-5" />
              <span className="sr-only">Telegram</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

