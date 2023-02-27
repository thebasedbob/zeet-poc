import ClientConfiguration, { ClientNetwork, NetworkCluster } from "../types/ClientConfiguration";

export const clientConfiguration: ClientConfiguration = {
  network: ClientNetwork.SOL,
  cluster: NetworkCluster.MAINNET,
  httpRpc: "https://api.mainnet-beta.solana.com",
  walletConnectId: "e6b3b5c0-4c4d-4b4e-9c9d-4d4e4f5f6f7f",
  discordAuthentication: "false",
  bannerTitle: "Dust Labs",
  bannerSubtitle: "Pushing forward the boundaries of web3 technology",
  metaTitle: "Dust Labs",
  metaDescription: "Pushing forward the boundaries of web3 technology",
}