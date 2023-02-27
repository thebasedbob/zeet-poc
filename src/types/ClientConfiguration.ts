export enum ClientNetwork {
  SOL = "sol",
  ETH = "eth",
  POLY = "poly",
}

export enum NetworkCluster {
  MAINNET = "mainnet-beta",
  TESTNET = "testnet",
  DEVNET = "devnet",
}

type ClientConfiguration = {
  network: ClientNetwork
  cluster: NetworkCluster
  httpRpc: string
  walletConnectId: string
  discordAuthentication: string
  bannerTitle: string
  bannerSubtitle: string
  metaTitle: string
  metaDescription: string
}

export default ClientConfiguration