import { gql } from "graphql-request"
import zeetClient from "../utils/zeetClient"

export enum DeployTarget {
  KUBERNETES = "KUBERNETES",
}

export enum BuildType {
  NODE = "NODE",
}

export enum Protocol {
  TCP = "tcp",
}

export type CreateProjectGitInput = {
  userID: string;
  name: string;
  projectName: string;
  environmentName: string;
  productionBranch: string;
  deployBranch: boolean;
  url: string;
  enabled: boolean;
  deployTarget: {
    deployTarget: DeployTarget;
    clusterID: string;
  };
  build: {
    buildType: BuildType;
    nodejsVersion: string;
    workingDirectory: string;
    buildCommand: string;
    runCommand: string;
  };
  envs: {
    name: string;
    value: string;
  }[];
  ports: {
    port: string;
    protocol: Protocol;
    public: boolean;
    https: boolean;
  }[];
};


const createProjectGitMutation = gql`
    mutation createProjectGit($input: CreateProjectGitInput!) {
      createProjectGit(input: $input) {
        id
        name
      }
    }
  `

const createProjectGit = async (input: CreateProjectGitInput) => {
  const { createProjectGit } = await zeetClient.request(createProjectGitMutation, { input })
  return createProjectGit
}

export default createProjectGit