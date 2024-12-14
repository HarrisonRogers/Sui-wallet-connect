'use client'

import { ConnectButton, useWallet } from '@suiet/wallet-kit'
export default function Home() {
  const wallet = useWallet()

  console.log(wallet)

  return (
    <div className="flex flex-col items-center gap-4 p-8 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4 ">Connect Sui Wallet</h1>
      <ConnectButton />

      <div className="mt-4">
        {wallet.connected && (
          <div className="space-y-2">
            <p className="text-green-500 font-semibold">Connected</p>
            <p>
              Address: <span className="font-mono">{wallet.address}</span>
            </p>
            <p>Chains: {wallet.account?.chains}</p>
          </div>
        )}
      </div>
    </div>
  )
}
