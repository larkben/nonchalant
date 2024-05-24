'use client'
/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/SEn9IZdCVXz
 */
import Link from "next/link"
import { JSX, SVGProps } from "react"
import { AlephiumConnectButton, AlephiumWalletProvider } from '@alephium/web3-react'
import { Terminal } from "./terminal"

export function Hero() {
  return (
    <div className="bg-gray-800">
      <main className="flex flex-col items-center justify-center h-full py-20 bg-gray-800 text-white">
        <h1 className="text-6xl font-bold text-white animate-bounce">Welcome to ALPHpaca&apos;s</h1>
        <p className="mt-4 text-lg text-gray-300">A project built and developed on and for Alephium.</p>
      </main>
      <h1 className="text-4xl font-bold text-center mb-8 text-white"> Explore Decentralized Applications / Tools </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-20 py-20">
        <div className="rounded-lg overflow-hidden shadow-lg bg-orange-500 z-50">
          <div className="p-6">
            <div className="flex justify-center">
              <CoinsIcon className="h-12 w-12 text-white" />
            </div>
            <h2 className="mt-4 text-xl font-semibold text-white"> Token Creation </h2>
            <p className="mt-2 text-white-400"> Create a token on the Alephium Blockchain. </p>
            <Link
              className="mt-4 inline-flex items-center justify-center px-4 py-2 border border-gray-200 border-transparent text-base font-medium rounded-md text-black bg-orange-300 hover:bg-orange-400 dark:border-gray-800"
              href="/tokencreate"
            >
              Create Now
            </Link>
          </div>
        </div>
        <div className="rounded-lg overflow-hidden shadow-lg bg-pink-500 z-50">
          <div className="p-6">
            <div className="flex justify-center">
              <ClockIcon className="h-12 w-12 text-white" />
            </div>
            <h2 className="mt-4 text-xl font-semibold text-white">Marketplace&apos;s</h2>
            <p className="mt-2 text-white-400"> Great Deals Awaiting a Degen like You </p>
            <Link
              className="mt-4 inline-flex items-center justify-center px-4 py-2 border border-gray-200 border-transparent text-base font-medium rounded-md text-black bg-pink-300 hover:bg-pink-400 dark:border-gray-800"
              href="/createlistings"
            >
              Create / View Listings
            </Link>
          </div>
        </div>
        <div className="rounded-lg overflow-hidden shadow-lg bg-blue-800 z-50">
          <div className="p-6">
            <div className="flex justify-center">
              <Users2Icon className="h-12 w-12 text-white" />
            </div>
            <h2 className="mt-4 text-xl font-semibold text-white">Web3</h2>
            <p className="mt-2 text-white-400"> Coming Soon! </p>
            <Link
              className="mt-4 inline-flex items-center justify-center px-4 py-2 border border-gray-200 border-transparent text-base font-medium rounded-md text-black bg-blue-300 hover:bg-blue-400 dark:border-gray-800"
              href="#"
            >
              Connect Now
            </Link>
          </div>
        </div>
      </div>
      <section className="flex flex-col items-center justify-center py-20 bg-gray-700 text-white">
      <h1 className="text-4xl font-bold text-center mb-8 text-white"> A little about ALPHpaca&apos;s ... </h1>
        <div className="w-3/4 md:w-1/2 lg:w-1/3 p-6 bg-gray-800 rounded-lg shadow-lg mb-6">
          <Terminal/>
        </div>
        <div className="w-3/4 md:w-1/2 lg:w-1/3 p-6 bg-gray-800 rounded-lg shadow-lg mb-6">
          <h2 className="text-2xl font-bold mb-2">So what is ALPHpaca&apos;s</h2>
          <p className="text-gray-300">
            ALPHpaca&apos;s is a project built to accompany the beginner or advanced user through the world of Alephium, through great tools and better dapps.
          </p>
        </div>
        <div className="w-3/4 md:w-1/2 lg:w-1/3 p-6 bg-gray-800 rounded-lg shadow-lg mb-6">
          <h2 className="text-2xl font-bold mb-2">Who am I?</h2>
          <p className="text-gray-300">
            I am a first generation blockchain smart contract developer, my background is in CS, more specifically Software Development. I have a growing passion to make crypto easier and more fun.
          </p>
        </div>
      </section>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-y-0 right-0 flex items-center" />
      </div>
    </div>
  )
}

function TwitterIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}

function CoinsIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="8" r="6" />
      <path d="M18.09 10.37A6 6 0 1 10.34 18" />
      <path d="M7 6h1v4" />
      <path d="m16.71 13.88.7.71-2.82 2.82" />
    </svg>
  )
}


function ClockIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}


function PersonStandingIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="5" r="1" />
      <path d="m9 20 3-6 3 6" />
      <path d="m6 8 6 2 6-2" />
      <path d="M12 10v4" />
    </svg>
  )
}

function Users2Icon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 19a6 6 0 0 0-12 0" />
      <circle cx="8" cy="9" r="4" />
      <path d="M22 19a6 6 0 0 0-6-6 4 4 0 1 0 0-8" />
    </svg>
  )
}

function TractorIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 4h9l1 7" />
      <path d="M4 11V4" />
      <path d="M8 10V4" />
      <path d="M18 5c-.6 0-1 .4-1 1v5.6" />
      <path d="m10 11 11 .9c.6 0 .9.5.8 1.1l-.8 5h-1" />
      <circle cx="7" cy="15" r=".5" />
      <circle cx="7" cy="15" r="5" />
      <path d="M16 18h-5" />
      <circle cx="18" cy="18" r="2" />
    </svg>
  )
}

<svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 5.6c-1.4-.7-2.8-1.1-4.2-1.3l-.5 1c-1.5-.2-3-.2-4.6 0l-.5-1c-1.4.2-2.8.6-4.1 1.3a17.4 17.4 0 0 0-3 11.6 18 18 0 0 0 5 2.5c.5-.5.8-1.1 1.1-1.7l-1.7-1c.2 0 .3-.2.4-.3a11.7 11.7 0 0 0 10.2 0l.4.3-1.7.9 1 1.7c1.9-.5 3.6-1.4 5.1-2.6.4-4-.6-8.2-3-11.5ZM8.6 14.8a2 2 0 0 1-1.8-2 2 2 0 0 1 1.8-2 2 2 0 0 1 1.8 2 2 2 0 0 1-1.8 2Zm6.6 0a2 2 0 0 1-1.8-2 2 2 0 0 1 1.8-2 2 2 0 0 1 1.8 2 2 2 0 0 1-1.8 2Z"/>
</svg>
  

