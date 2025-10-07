"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Mail, QrCode, Stars } from "lucide-react";
import { ModeToggle } from "./components/DarkToggle";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import ProductList from "./components/ProductList";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function LandingPage() {
  return (
    <div className="relative min-h-screen bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 overflow-x-hidden">

      <nav className="container mx-auto px-6 lg:px-20 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="text-lg font-bold">BeToo.</div>
          <Badge className="hidden sm:inline-flex">v0.0.1</Badge>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex gap-2">
            <HoverCard>
              <HoverCardTrigger asChild>
                <Button variant="link" className=" cursor-pointer">Products</Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-80 flex flex-col gap-4">
                <ProductList />
              </HoverCardContent>
            </HoverCard>

            <Button variant="link" className=""> <a href="#about">About</a></Button>
          </div>
          <ModeToggle />
        </div>
      </nav>

      <div className="container mx-auto px-6 mt-10 lg:px-20 xl:py-40">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              One Stop, Solution for Daily Use Tools.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl">
              A collection of essential web tools designed to simplify your daily tasks and enhance productivity.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild>
                <a href="#product" className="inline-flex items-center gap-3 px-6 py-3 rounded-full">
                  Our Product
                </a>
              </Button>

              <Button variant="outline" asChild>
                <a href="#about" className="inline-flex items-center gap-3 px-6 py-3 rounded-full">
                  Learn more
                </a>
              </Button>
            </div>

            <div className="mt-8 flex gap-3 flex-wrap text-sm">
              <Badge className="bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200">Accessible</Badge>
              <Badge className="bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200">Solution</Badge>
              <Badge className="bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200">Stable</Badge>
            </div>
          </div>
          <AspectRatio className="flex justify-center " ratio={16 / 9}>
            <img 
              src="/assets/logo/betoo/BeToo_256x256.png" 
              alt="Image" 
              className="rounded-md dark:invert" 
              />
          </AspectRatio>
        </div>
      </div>
      <Separator className=" mt-10 mx-auto max-w-xl" />
      <section id="about">
        <div className="container mx-auto py-10 px-6 lg:px-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center">About</h2>
          <p className="mt-4 text-center text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            Focused on a minimal grayscale design language: consistent spacing, clear hierarchy, and high contrast.
          </p>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent>
                <CardTitle>Mission</CardTitle>
                <CardDescription>
                  Empower teams to ship accessible, readable interfaces with simple, reusable components.
                </CardDescription>
                <ul className="mt-4 text-sm space-y-2 text-neutral-600 dark:text-neutral-300">
                  <li>• Accessible color contrast</li>
                  <li>• Scalable tokens</li>
                  <li>• Developer ergonomics</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <CardTitle>Team</CardTitle>
                <CardDescription className="mb-3">Small focused team: designers + frontend engineers who prioritize clarity over gimmicks.</CardDescription>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback>AK</AvatarFallback>
                  </Avatar>
                  <Avatar>
                    <AvatarFallback>LB</AvatarFallback>
                  </Avatar>
                  <Avatar>
                    <AvatarFallback>BK</AvatarFallback>
                  </Avatar>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <CardTitle>Process</CardTitle>
                <CardDescription>
                  Design → Tokens → Implement → Test. Ship incremental improvements with clear docs.
                </CardDescription>
                <div className="mt-4 text-sm text-neutral-600 dark:text-neutral-300">
                  <strong>Works with:</strong> Figma, Storybook, Next.js, Tailwind
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="product" className="py-10 bg-neutral-100 dark:bg-neutral-800/40">
        <div className="container mx-auto px-6 lg:px-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center">Our Products</h2>
          <p className="mt-4 text-center text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            These are the products that make our product suite, easy to use and reliable.
          </p>

          <div className="mt-12 grid lg:grid-cols-3 gap-8">
            {[
              { title: "Perfect Image", logo: <Stars />, desc: "Convert and Compress Image to reduce you storage.", link: "/perfimage" },
              { title: "QR Code", logo: <QrCode />, desc: "Generate QR Code and Share.", link: "/qrcode" },
            ].map((f, i) => (
              <Card key={i}>
                <CardContent className="relative pb-10">
                  <div className="flex items-center gap-3">
                    {f.logo}
                    <div className="text-xl text-neutral-700 dark:text-neutral-200">{f.title}</div>
                  </div>
                  <Separator className="my-4" />
                  <p className="mt-3 text-neutral-600 dark:text-neutral-300 text-sm">{f.desc}</p>
                  <Link href={f.link} className=" absolute bottom-0 cursor-pointer">
                    Explore
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer id="contact" className="py-12 mt-12 border-t border-neutral-200 dark:border-neutral-700">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <div className="text-xl font-bold">BeToo.co.in</div>
              <div className="mt-2 text-neutral-600 dark:text-neutral-300 text-sm">Glad this solves your daily problems.</div>
            </div>

            <div className="flex gap-6 items-center text-neutral-600 dark:text-neutral-300 text-sm">
              <div className="flex items-center gap-2"><Mail className="w-4 h-4" /> <span>bittu.kumar@betoo.co.in</span></div>
              <div>© {new Date().getFullYear()}</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
