/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { RunScriptResult, DeployContractExecutionResult } from "@alephium/cli";
import { NetworkId } from "@alephium/web3";
import { Token, TokenInstance, CreateToken, CreateTokenInstance } from ".";
import { default as mainnetDeployments } from "../.deployments.mainnet.json";
import { default as testnetDeployments } from "../.deployments.testnet.json";

export type Deployments = {
  deployerAddress: string;
  contracts: {
    Token: DeployContractExecutionResult<TokenInstance>;
    CreateToken: DeployContractExecutionResult<CreateTokenInstance>;
  };
};

function toDeployments(json: any): Deployments {
  const contracts = {
    Token: {
      ...json.contracts["Token"],
      contractInstance: Token.at(
        json.contracts["Token"].contractInstance.address
      ),
    },
    CreateToken: {
      ...json.contracts["CreateToken"],
      contractInstance: CreateToken.at(
        json.contracts["CreateToken"].contractInstance.address
      ),
    },
  };
  return {
    ...json,
    contracts: contracts as Deployments["contracts"],
  };
}

export function loadDeployments(
  networkId: NetworkId,
  deployerAddress?: string
): Deployments {
  const deployments =
    networkId === "mainnet"
      ? mainnetDeployments
      : networkId === "testnet"
      ? testnetDeployments
      : undefined;
  if (deployments === undefined) {
    throw Error("The contract has not been deployed to the " + networkId);
  }
  const allDeployments = Array.isArray(deployments)
    ? deployments
    : [deployments];
  if (deployerAddress === undefined) {
    if (allDeployments.length > 1) {
      throw Error(
        "The contract has been deployed multiple times on " +
          networkId +
          ", please specify the deployer address"
      );
    } else {
      return toDeployments(allDeployments[0]);
    }
  }
  const result = allDeployments.find(
    (d) => d.deployerAddress === deployerAddress
  );
  if (result === undefined) {
    throw Error("The contract deployment result does not exist");
  }
  return toDeployments(result);
}
