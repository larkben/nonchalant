"use client";
/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/SEn9IZdCVXz
 */
import Link from "next/link";
import { JSX, SVGProps } from "react";
import { TokenCreateAutomation } from "./token-create";
import {
  AlephiumConnectButton,
  AlephiumWalletProvider,
} from "@alephium/web3-react";
import { TokenCreate } from "../services/utils";

export function Navbar() {
  return (
    <div className="bg-gray-800">
      <header className="flex items-center justify-between bg-gray-800 px-6 py-4 text-white">
        <Link className="z-50 flex items-center space-x-2" href="#">
          <span className="text-lg font-semibold text-white">ALPHpaca</span>
        </Link>
        <nav className="z-50 hidden space-x-4 md:flex">
          <Link className="text-white hover:text-blue-500" href="/">
            Home
          </Link>
          <Link className="text-white hover:text-blue-500" href="/createlisting">
            Marketplace
          </Link>
          <Link className="text-white hover:text-blue-500" href="/tokencreate">
            Token Creation
          </Link>
          <Link className="text-white hover:text-blue-500" href="/walf">
            Wrapped Alf Protocol
          </Link>
        </nav>
        <div className="z-50 flex items-center space-x-2">
          <Link
            className="text-white hover:text-blue-500"
            href="https://twitter.com/alphpacas"
          >
            <TwitterIcon className="h-6 w-6" />
          </Link>
          <Link
            className="text-white hover:text-blue-500"
            href="https://github.com/larkben/nonchalant"
          >
            &lt;/&gt;
          </Link>
          <AlephiumConnectButton/>
        </div>
      </header>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-y-0 right-0 flex items-center" />
      </div>
    </div>
  );
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
  );
}
