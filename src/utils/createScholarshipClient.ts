import createProjectGit, { BuildType, CreateProjectGitInput, DeployTarget, Protocol } from "../mutations/CreateProjectGit"
import ClientConfiguration from "../types/ClientConfiguration"
import * as dotenv from 'dotenv'
dotenv.config()

const createScholarshipClient = async (name: string, subdomain: string, configuration: ClientConfiguration) => {
  const projectName = `sch-${name.toLowerCase().replace(/ /g, "-")}`
  
  const input: CreateProjectGitInput = {
    userID: process.env.ZEET_USER_ID ?? '',
    name: "client-test",
    projectName: projectName,
    environmentName: "production",
    productionBranch: "main",
    deployBranch: true,
    url: "https://github.com/dustlabs/kickstart",
    enabled: true,
    deployTarget: {
      deployTarget: DeployTarget.KUBERNETES,
      clusterID: "98454441-0511-4371-b1ad-3effe1cf9171"
    },
    build: {
      buildType: BuildType.NODE,
      nodejsVersion: "16",
      workingDirectory: "./frontend/client",
      buildCommand: "yarn install && yarn build",
      runCommand: "yarn start"
    },
    envs: [
      {
        name: "NEXT_PUBLIC_URL",
        value: `https://${subdomain}.dustlabs.com`
      },
      {
        name: "NEXT_PUBLIC_API_URL",
        value: `https://api.${subdomain}.dustlabs.com`
      },
      {
        name: "NEXT_PUBLIC_PROJECT_NETWORK",
        value: configuration.network
      },
      {
        name: "NEXT_PUBLIC_NETWORK_CLUSTER",
        value: configuration.cluster
      },
      {
        name: "NEXT_PUBLIC_HTTP_RPC",
        value: configuration.httpRpc
      },
      {
        name: "NEXT_PUBLIC_WALLETCONNECT_ID",
        value: configuration.walletConnectId
      },
      {
        name: "NEXT_PUBLIC_DISCORD_ENABLED",
        value: configuration.discordAuthentication
      },
      {
        name: "NEXT_PUBLIC_PROJECT_NAME",
        value: name
      },
      {
        name: "NEXT_PUBLIC_BANNER_TITLE",
        value: configuration.bannerTitle
      },
      {
        name: "NEXT_PUBLIC_BANNER_SUBTITLE",
        value: configuration.bannerSubtitle
      },
      {
        name: "NEXT_PUBLIC_META_TITLE",
        value: configuration.metaTitle
      },
      {
        name: "NEXT_PUBLIC_META_DESCRIPTION",
        value: configuration.metaDescription
      },
      {
        name: "NEXT_PUBLIC_META_IMAGE",
        value: `https://assets.customers.dustlabs.com/${projectName}/meta.png`
      },
      {
        name: "NEXT_PUBLIC_IMAGE_ICO",
        value: `https://assets.customers.dustlabs.com/${projectName}/icon.png`
      },
      {
        name: "NEXT_PUBLIC_NAVBAR_IMAGE",
        value: `https://assets.customers.dustlabs.com/${projectName}/navbar.png`
      },
      {
        name: "NEXT_PUBLIC_STATUS_IMAGE",
        value: `https://assets.customers.dustlabs.com/${projectName}/status.png`
      },
      {
        name: "NEXT_PUBLIC_HOME_IMAGE_BANNER",
        value: `https://assets.customers.dustlabs.com/${projectName}/home-banner.png`
      },
      {
        name: "NEXT_PUBLIC_CONFETTI_CUSTOM_IMAGE",
        value: `https://assets.customers.dustlabs.com/${projectName}/confetti-custom.png`
      },
    ],
    ports: [
      {
        port: '3000',
        protocol: Protocol.TCP,
        public: true,
        https: true
      }
    ],
  }

  const results = await createProjectGit(input)
  console.log(results)
}

export default createScholarshipClient