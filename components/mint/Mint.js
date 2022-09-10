import * as React from 'react'
import { usePrepareContractWrite } from 'wagmi'
import taurosABI from "../ABIs/taurosABI"
import { useContractWrite } from 'wagmi'

export function MintNFT() {
    const { config } = usePrepareContractWrite({
        addressOrName: '0xd5A9c93CcA520612ec72433352Acd0a81E37f6Cc',
        contractInterface: taurosABI,
        functionName: 'claimTauros',
        args: [address, { value:ethers.utils.parseEther('0.05')}],
      })
      const { write } = useContractWrite(config)
    
  return (
    <div>
            <button disabled={!write} onClick={() => write?.()}>
        Mint
      </button>
    </div>
  )
}