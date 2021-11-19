import { ChainId, MULTICALL_ADDRESSES } from '@usedapp/core'

type AddressMap = { [chainId: number]: string }

export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'

export const DEPLOYER_ADDRESS: AddressMap = {
  [ChainId.Mainnet]: ZERO_ADDRESS,
  [ChainId.Hardhat]: '0xa82fF9aFd8f496c3d6ac40E2a0F282E47488CFc9',
}

// Default RToken
export const RTOKEN_ADDRESS: AddressMap = {
  [ChainId.Mainnet]: ZERO_ADDRESS,
  [ChainId.Hardhat]: '0xE1F431731306950Ebe34C256DD381913cc71b8d5',
}

// Default RSR Token
export const RSR_ADDRESS: AddressMap = {
  [ChainId.Mainnet]: ZERO_ADDRESS,
  [ChainId.Hardhat]: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
}

export const ENS_ADDRESS: AddressMap = {
  [ChainId.Mainnet]: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
  [ChainId.Hardhat]: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
}

export const MULTICALL_ADDRESS: AddressMap = {
  ...MULTICALL_ADDRESSES,
  [ChainId.Hardhat]: '0x99bba657f2bbc93c02d617f8ba121cb8fc104acf',
}
