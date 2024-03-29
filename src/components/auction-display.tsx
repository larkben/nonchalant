/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/SDOMH52gIwM
 */
import Link from "next/link"
import Image from "next/image"

export function AuctionDisplay() {
  return (
    <section className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 items-center gap-6 max-w-7xl px-4 mx-auto">
      <div className="grid gap-2">
        <div className="relative group">
          <Link className="block aspect-square overflow-hidden rounded-lg" href="#">
            <Image
              alt="Lightweight Jacket"
              className="object-cover"
              height={400}
              src="/placeholder.svg"
              style={{
                aspectRatio: "400/400",
                objectFit: "cover",
              }}
              width={400}
            />
          </Link>
          <h3 className="text-2xl font-bold tracking-tight">Lightweight Jacket</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">Perfect for all seasons</p>
          <h4 className="text-xl font-semibold">$49.99</h4>
        </div>
      </div>
    </section>
  )
}
