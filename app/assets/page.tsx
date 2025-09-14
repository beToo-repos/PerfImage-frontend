"use client";

import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { toast } from "sonner";

export default function AssetsPage() {

  const lightLogos = [
    { src: "/assets/logo/betoo/BeToo_256x256.png", size: 256 },
    { src: "/assets/logo/betoo/BeToo_128x128.png", size: 128 },
    { src: "/assets/logo/betoo/BeToo_64x64.png", size: 64 },
  ];

  const darkLogos = [
    { src: "/assets/logo/betoo/BeToo_dark_256x256.png", size: 256 },
    { src: "/assets/logo/betoo/BeToo_dark_128x128.png", size: 128 },
    { src: "/assets/logo/betoo/BeToo_dark_64x64.png", size: 64 },
  ];

  const handleCopy = (src: string) => {
    const url = `${window.location.origin}${src}`;
    navigator.clipboard.writeText(url).then(() => {
      toast.success("Image URL copied to clipboard!");
    });
  };

  const LogoGrid = ({ logos, dark, title }: { logos: { src: string; size: number }[]; dark: boolean; title: string }) => (
    <Card className={`p-6  ${dark ? " bg-gray-950 text-white" : ""}`}>
      <CardHeader>
        <h2 className="text-2xl font-semibold">
          {title}
        </h2>
        <Separator className="mt-2" />
      </CardHeader>
      <CardContent>
        <div className=" flex flex-row gap-8 items-center flex-wrap">
          {logos.map((logo, idx) => (
            <div
              key={idx}
              className="flex flex-col gap-2 items-center cursor-pointer"
              title="Click to copy URL"
            >
              <img
                src={logo.src}
                alt={`${title} ${logo.size}px`}
                width={logo.size}
                height={logo.size}
                onClick={() => handleCopy(logo.src)}
                className={`rounded-md p-1 transition-transform active:border-red-300 hover:scale-105 border ${dark ? "border-neutral-700" : "border-gray-100"}`}
              />
              <span className="text-sm text-muted-foreground">{logo.size}px</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <main className="container mx-auto px-6 py-12 space-y-5">
      <Link href="/" className="text-sm text-blue-600 hover:underline">
        &larr; Back to Home
      </Link>
      <header className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
          BeToo Assets
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">Logos and Images</p>
      </header>
      <Separator className="my-10 mx-auto w-24" />
      <div className=" flex justify-center flex-row gap-12 flex-wrap">
        <LogoGrid logos={lightLogos} dark={false} title="Light Logos" />
        <LogoGrid logos={darkLogos} dark={true} title="Dark Logos" />
      </div>
    </main>
  );
}
