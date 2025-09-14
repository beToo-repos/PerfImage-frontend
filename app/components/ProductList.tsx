import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Link from 'next/link'
import React from 'react'

const ProductList = () => {

  const products = [
    {
      name: "PerfImage",
      fallback: "PI",
      description: "Tool to compress images to lower size, without losing quality.",
      url: "/perfimage",
      image: "/assets/logo/perfimage/PerfImage_64x64.png"
    },
    {
      name: "QRCode Generator",
      fallback: "QR",
      description: "Tool to generate QR codes for URLs, text, and more.",
      url: "/qrcode",
      image: "https://qr-code-adv.vercel.app/favicon-32x32.png"
    }
  ]

  return (
    <>
      {products.map((product) => (
        <div key={product.fallback} className="flex justify-between gap-4 ">
          <Avatar className=' dark:bg-white/50'>
            <AvatarImage src={product.image} />
            <AvatarFallback>{product.fallback}</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold"> {product.name} </h4>
            <p className="text-sm"> {product.description} </p>
            <div className="text-muted-foreground text-sm mt-2">
              <Link href={product.url} className="dark:text-blue-200 text-blue-800 hover:underline">Explore</Link>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default ProductList