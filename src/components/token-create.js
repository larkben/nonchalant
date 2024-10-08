"use client";
import { Input } from "./ui/input"
import { Button } from "./ui/button";
import React, { useState, useEffect } from 'react'
import { useWallet } from "@alephium/web3-react"
import { BuildToken } from "../services/token.services"
import { AlephiumConnectButton } from '@alephium/web3-react'
import { contractIdFromAddress } from "@alephium/web3";
import TokenList from "./createdtokens"

export const TokenCreateAutomation = ({ config }) => {
  const { signer, account } = useWallet()
  const addressGroup = config.groupIndex
  const [ongoingTxId, setOngoingTxId] = useState()

  const [symbol, setSymbol] = useState("")
  const [name, setName] = useState("")
  const [decimals, setDecimals] = useState('')
  const [supply, setSupply] = useState('')

  const [contract, setContract] = useState("")

  const [id, setId] = useState("")

  const supplyWithDecimals = Number(`${supply}e-${decimals}`);

  // Handle of Token Create
  const handleTokenCreate = async (e) => {
    e.preventDefault()
    if (signer) {
      const result = await BuildToken(signer, symbol, name, decimals, supply)
    }
  }

  const getTokenId = async (e) => {
    e.preventDefault();
    const result = await contractIdFromAddress(id.toString());
    setId(result.toString()); // Update state with the retrieved token ID
  };  

  // Token Id
  const tokenId = getTokenId

  useEffect(() => {
    // Your client-side code here

    // Cleanup function if needed
    return () => {
      // Cleanup logic
    };
  }, []);

  // Form submit to insert values and receive input
  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-20 bg-gray-900 sm:px-6 lg:px-8">
      <div className="min-w-30 space-y-8 bg-gray-800 p-6 rounded-lg shadow-md z-50">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-blue-500">Create Your Token</h2>
          <p className="mt-2 text-center text-sm text-gray-400">Please fill in the details of your token. All tokens are final and immutable. 10 ALPH will be taken as deposit. <br/> 9 ALPH for service and 1 ALPH for blockchain storage requirements. </p>
          <h3 className="text-1xl text-white text-center py-5"> Token Preview: </h3> 
          <p className="text-1xl text-white text-center"> Token: {name} : ({symbol}) </p>
          <p className="text-1xl text-white text-center"> Total Supply with Decimals: {supplyWithDecimals} </p>
          <p className="text-1xl text-white text-center"> Total Supply without Decimals: {supply} </p>
        </div>
        <form onSubmit={handleTokenCreate} className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label className="text-white" htmlFor="symbol">Symbol</label>
              <Input
                className="appearance-none rounded relative block w-full px-3 py-2 border  border-gray-700 placeholder-gray-500 text-blue-500 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm dark:border-gray-800"
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
                className="appearance-none rounded relative block w-full px-3 py-2 border  border-gray-700 placeholder-gray-500 text-blue-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm dark:border-gray-800"
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
                className="text-blue-500 appearance-none rounded relative block w-full px-3 py-2 border  border-gray-700 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm dark:border-gray-800"
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
                className="appearance-none rounded relative block w-full px-3 py-2 border  border-gray-700 placeholder-gray-500 text-blue-500 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm dark:border-gray-800"
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
              className="group relative w-full flex justify-center py-2 px-4 border border-gray-200 border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:border-gray-800"
              type="submit"
            >
              Create Token
            </Button>
          </div>
        </form>
        <br/>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-blue-500">Created Tokens:</h2>
        <TokenList/>
        </div>
    </main>
  )
}