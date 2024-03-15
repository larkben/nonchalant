'use client'
/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/3mHmgVSpq06
 */
// React Modules
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import React from 'react'
import { FC, useState, useEffect } from 'react'


// Import Alephium Services
import { TokenCreate } from "../services/utils"
import { useWallet } from "@alephium/web3-react"
import { BuildToken } from "../services/token.services"

export const TokenCreateAutomation: FC<{
  config: TokenCreate
}> = ({ config }) => {
  const { signer, account } = useWallet()
  const addressGroup = config.groupIndex
  const [ongoingTxId, setOngoingTxId] = useState<string>()

  const [symbol, setSymbol] = useState<string>("")
  const [name, setName] = useState<string>("")
  const [decimals, setDecimals] = useState('')
  const [supply, setSupply] = useState('')

  const [contract, setContract] = useState<string>("")

  const supplyWithDecimals = Number(`${supply}e-${decimals}`);

  // Handle of Subscription
  const handleTokenCreate = async (e: React.FormEvent) => {
    e.preventDefault()
    if (signer) {
      const result = await BuildToken(signer, symbol, name, decimals, supply)
    }
  }

  useEffect(() => {
    // Your client-side code here

    // Cleanup function if needed
    return () => {
      // Cleanup logic
    };
  }, []);

  // Form submit to insert values and receive input
  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-12 bg-gray-900 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-gray-800 p-6 rounded-lg shadow-md z-50">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-100">Create Your Token</h2>
          <p className="mt-2 text-center text-sm text-gray-400">Please double check your token with the preview below before you create.</p>
          <h3 className="text-1xl text-white text-center py-5"> Token Preview: </h3> 
          <p className="text-1xl text-white text-center"> Token: {name} : ({symbol}) </p>
          <p className="text-1xl text-white text-center"> Total Supply: {supplyWithDecimals} </p>
        </div>
        <form  onSubmit={handleTokenCreate} className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label className="text-white" htmlFor="symbol">Symbol</label>
              <Input
                className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-200 border-gray-700 placeholder-gray-500 text-blue rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm dark:border-gray-800"
                id="symbol"
                name="symbol"
                value={symbol}
                onChange={(e) => setSymbol(e.target.value)}
                required
                type="text"
              />
            </div>
            <div>
              <label className="text-white" htmlFor="name">Name</label>
              <Input
                className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-200 border-gray-700 placeholder-gray-500 text-blue focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm dark:border-gray-800"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                type="text"
              />
            </div>
            <div>
              <label className="text-white" htmlFor="decimals">Decimals</label>
              <Input
                className="text-blue appearance-none rounded relative block w-full px-3 py-2 border border-gray-200 border-gray-700 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm dark:border-gray-800"
                id="decimals"
                max="18"
                min="0"
                name="decimals"
                value={decimals}
                onChange={(e) => setDecimals(e.target.value)}
                required
                type="number"
              />
            </div>
            <div>
              <label className="text-white" htmlFor="supply">Supply</label>
              <Input
                className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-200 border-gray-700 placeholder-gray-500 text-blue rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm dark:border-gray-800"
                id="supply"
                min="0"
                name="supply"
                value={supply}
                onChange={(e) => setSupply(e.target.value)}
                required
                type="number"
              />
            </div>
          </div>
          <div>
            <Button
              className="group relative w-full flex justify-center py-2 px-4 border border-gray-200 border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:border-gray-800"
              type="submit"
            >
              Create Token
            </Button>
          </div>
        </form>
      </div>
    </main>
  )
}
