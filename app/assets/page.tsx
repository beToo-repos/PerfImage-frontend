"use client";

import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { toast } from "sonner";

export default function AssetsPage() {

  const brandLightLogos = [
    { src: "/assets/logo/betoo/BeToo_256x256.png", size: 256 },
    { src: "/assets/logo/betoo/BeToo_128x128.png", size: 128 },
    { src: "/assets/logo/betoo/BeToo_64x64.png", size: 64 },
  ];

  const brandDarkLogos = [
    { src: "/assets/logo/betoo/BeToo_dark_256x256.png", size: 256 },
    { src: "/assets/logo/betoo/BeToo_dark_128x128.png", size: 128 },
    { src: "/assets/logo/betoo/BeToo_dark_64x64.png", size: 64 },
  ];
  const perfLightLogos = [
    { src: "/assets/logo/perfimage/PerfImage_256x256.png", size: 256 },
    { src: "/assets/logo/perfimage/PerfImage_128x128.png", size: 128 },
    { src: "/assets/logo/perfimage/PerfImage_64x64.png", size: 64 },
  ];
  const perfDarkLogos = [
    { src: "/assets/logo/perfimage/PerfImage_dark_256x256.png", size: 256 },
    { src: "/assets/logo/perfimage/PerfImage_dark_128x128.png", size: 128 },
    { src: "/assets/logo/perfimage/PerfImage_dark_64x64.png", size: 64 },
  ];

  const handleCopy = (src: string) => {
    const url = `${window.location.origin}${src}`;
    navigator.clipboard.writeText(url).then(() => {
      toast.success("Image URL copied to clipboard!");
    });
  };

  const LogoGrid = ({ logos, dark, title }: { logos: { src: string; size: number }[]; dark: boolean; title: string }) => (
    <Card className={`p-6  ${dark ? " bg-gray-950 text-white" : ""}`}>
      <img src="/assets/bg.jpg" alt="Background" className="fixed blur-xs inset-0 w-full h-full object-cover -z-1 opacity-40" />
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
      <header className="text-center backdrop-blur-sm shadow-sm p-3">
        <h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
          BeToo Assets
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">Logos and Images</p>
      </header>
      <Separator className="my-10 mx-auto w-24" />
      <Card className=" bg-white/50 dark:bg-gray-950/50 p-6">
        <CardHeader>
          <h2 className="text-2xl font-semibold text-center">
            Brand Assets
          </h2>
        <Separator className="mt-2" />
        </CardHeader>
        <div className=" flex justify-center flex-row gap-12 flex-wrap">
          <LogoGrid logos={brandLightLogos} dark={false} title="Light Logos" />
          <LogoGrid logos={brandDarkLogos} dark={true} title="Dark Logos" />
        </div>
      </Card>
      <Separator className="my-10 mx-auto w-24" />
      <Card className=" bg-white/50 dark:bg-gray-950/50 p-6">
        <CardHeader>
          <h2 className="text-2xl font-semibold text-center">
            PerfImage Assets
          </h2>
        <Separator className="mt-2" />
        </CardHeader>
        <div className=" flex justify-center flex-row gap-12 flex-wrap">
          <LogoGrid logos={perfLightLogos} dark={false} title="Light Logos" />
          <LogoGrid logos={perfDarkLogos} dark={true} title="Dark Logos" />
        </div>
      </Card>
    </main>
  );
}
