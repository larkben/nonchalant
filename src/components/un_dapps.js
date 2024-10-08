"use client";
import Link from "next/link"
import React from "react"

export function Dapps() {
  return (
    <div className="container mx-auto px-4 py-6 bg-gray-900">
      <h1 className="text-4xl font-bold text-center mb-8 text-white">Explore Decentralized Applications</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="rounded-lg overflow-hidden shadow-lg bg-gray-800">
          <div className="p-6">
            <div className="flex justify-center">
              <CoinsIcon className="h-12 w-12 text-white" />
            </div>
            <h2 className="mt-4 text-xl font-semibold text-white">DApp Title 1</h2>
            <p className="mt-2 text-gray-400">This is a short description of the DApp.</p>
            <Link
              className="mt-4 inline-flex items-center justify-center px-4 py-2 border border-gray-200 border-transparent text-base font-medium rounded-md text-black bg-yellow-500 hover:bg-yellow-600 dark:border-gray-800"
              href="#"
            >
              Learn More
            </Link>
          </div>
        </div>
        <div className="rounded-lg overflow-hidden shadow-lg bg-gray-800">
          <div className="p-6">
            <div className="flex justify-center">
              <BanknoteIcon className="h-12 w-12 text-white" />
            </div>
            <h2 className="mt-4 text-xl font-semibold text-white">DApp Title 2</h2>
            <p className="mt-2 text-gray-400">This is a short description of the DApp.</p>
            <Link
              className="mt-4 inline-flex items-center justify-center px-4 py-2 border border-gray-200 border-transparent text-base font-medium rounded-md text-black bg-yellow-500 hover:bg-yellow-600 dark:border-gray-800"
              href="#"
            >
              Learn More
            </Link>
          </div>
        </div>
        <div className="rounded-lg overflow-hidden shadow-lg bg-gray-800">
          <div className="p-6">
            <div className="flex justify-center">
              <PersonStandingIcon className="h-12 w-12 text-white" />
            </div>
            <h2 className="mt-4 text-xl font-semibold text-white">DApp Title 3</h2>
            <p className="mt-2 text-gray-400">This is a short description of the DApp.</p>
            <Link
              className="mt-4 inline-flex items-center justify-center px-4 py-2 border border-gray-200 border-transparent text-base font-medium rounded-md text-black bg-yellow-500 hover:bg-yellow-600 dark:border-gray-800"
              href="#"
            >
              Learn More
            </Link>
          </div>
        </div>
        <div className="rounded-lg overflow-hidden shadow-lg bg-gray-800">
          <div className="p-6">
            <div className="flex justify-center">
              <PersonStandingIcon className="h-12 w-12 text-white" />
            </div>
            <h2 className="mt-4 text-xl font-semibold text-white">DApp Title 4</h2>
            <p className="mt-2 text-gray-400">This is a short description of the DApp.</p>
            <Link
              className="mt-4 inline-flex items-center justify-center px-4 py-2 border border-gray-200 border-transparent text-base font-medium rounded-md text-black bg-yellow-500 hover:bg-yellow-600 dark:border-gray-800"
              href="#"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

function CoinsIcon(props) {
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

function BanknoteIcon(props) {
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
      <rect width="20" height="12" x="2" y="6" rx="2" />
      <circle cx="12" cy="12" r="2" />
      <path d="M6 12h.01M18 12h.01" />
    </svg>
  )
}

function PersonStandingIcon(props) {
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