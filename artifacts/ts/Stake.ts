/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Address,
  Contract,
  ContractState,
  TestContractResult,
  HexString,
  ContractFactory,
  EventSubscribeOptions,
  EventSubscription,
  CallContractParams,
  CallContractResult,
  TestContractParams,
  ContractEvent,
  subscribeContractEvent,
  subscribeContractEvents,
  testMethod,
  callMethod,
  multicallMethods,
  fetchContractState,
  ContractInstance,
  getContractEventsCurrentCount,
  TestContractParamsWithoutMaps,
  TestContractResultWithoutMaps,
  addStdIdToFields,
  encodeContractFields,
} from "@alephium/web3";
import { default as StakeContractJson } from "../staking/Stake.ral.json";
import { getContractByCodeHash } from "./contracts";

// Custom types for the contract
export namespace StakeTypes {
  export type Fields = {
    owner: Address;
    amount: bigint;
    pcontract: Address;
  };

  export type State = ContractState<Fields>;

  export interface CallMethodTable {
    getOwner: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<Address>;
    };
    getAmount: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<bigint>;
    };
    getPContract: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<Address>;
    };
    getContractAddress: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<Address>;
    };
    remove: {
      params: CallContractParams<{ sub: bigint }>;
      result: CallContractResult<boolean>;
    };
  }
  export type CallMethodParams<T extends keyof CallMethodTable> =
    CallMethodTable[T]["params"];
  export type CallMethodResult<T extends keyof CallMethodTable> =
    CallMethodTable[T]["result"];
  export type MultiCallParams = Partial<{
    [Name in keyof CallMethodTable]: CallMethodTable[Name]["params"];
  }>;
  export type MultiCallResults<T extends MultiCallParams> = {
    [MaybeName in keyof T]: MaybeName extends keyof CallMethodTable
      ? CallMethodTable[MaybeName]["result"]
      : undefined;
  };
}

class Factory extends ContractFactory<StakeInstance, StakeTypes.Fields> {
  encodeFields(fields: StakeTypes.Fields) {
    return encodeContractFields(
      addStdIdToFields(this.contract, fields),
      this.contract.fieldsSig,
      []
    );
  }

  getInitialFieldsWithDefaultValues() {
    return this.contract.getInitialFieldsWithDefaultValues() as StakeTypes.Fields;
  }

  consts = { ErrorCodes: { InvalidCaller: BigInt(0) } };

  at(address: string): StakeInstance {
    return new StakeInstance(address);
  }

  tests = {
    getOwner: async (
      params: Omit<
        TestContractParamsWithoutMaps<StakeTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<Address>> => {
      return testMethod(this, "getOwner", params);
    },
    getAmount: async (
      params: Omit<
        TestContractParamsWithoutMaps<StakeTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<bigint>> => {
      return testMethod(this, "getAmount", params);
    },
    getPContract: async (
      params: Omit<
        TestContractParamsWithoutMaps<StakeTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<Address>> => {
      return testMethod(this, "getPContract", params);
    },
    getContractAddress: async (
      params: Omit<
        TestContractParamsWithoutMaps<StakeTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<Address>> => {
      return testMethod(this, "getContractAddress", params);
    },
    add: async (
      params: TestContractParamsWithoutMaps<StakeTypes.Fields, { add: bigint }>
    ): Promise<TestContractResultWithoutMaps<null>> => {
      return testMethod(this, "add", params);
    },
    remove: async (
      params: TestContractParamsWithoutMaps<StakeTypes.Fields, { sub: bigint }>
    ): Promise<TestContractResultWithoutMaps<boolean>> => {
      return testMethod(this, "remove", params);
    },
    destroystakeprotocol: async (
      params: Omit<
        TestContractParamsWithoutMaps<StakeTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<null>> => {
      return testMethod(this, "destroystakeprotocol", params);
    },
  };
}

// Use this object to test and deploy the contract
export const Stake = new Factory(
  Contract.fromJson(
    StakeContractJson,
    "",
    "8e9db1975a5fab53eb509f7a243bfbb98cc2443349a04095ba1ca6cffbb8f9bc",
    []
  )
);

// Use this class to interact with the blockchain
export class StakeInstance extends ContractInstance {
  constructor(address: Address) {
    super(address);
  }

  async fetchState(): Promise<StakeTypes.State> {
    return fetchContractState(Stake, this);
  }

  methods = {
    getOwner: async (
      params?: StakeTypes.CallMethodParams<"getOwner">
    ): Promise<StakeTypes.CallMethodResult<"getOwner">> => {
      return callMethod(
        Stake,
        this,
        "getOwner",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    getAmount: async (
      params?: StakeTypes.CallMethodParams<"getAmount">
    ): Promise<StakeTypes.CallMethodResult<"getAmount">> => {
      return callMethod(
        Stake,
        this,
        "getAmount",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    getPContract: async (
      params?: StakeTypes.CallMethodParams<"getPContract">
    ): Promise<StakeTypes.CallMethodResult<"getPContract">> => {
      return callMethod(
        Stake,
        this,
        "getPContract",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    getContractAddress: async (
      params?: StakeTypes.CallMethodParams<"getContractAddress">
    ): Promise<StakeTypes.CallMethodResult<"getContractAddress">> => {
      return callMethod(
        Stake,
        this,
        "getContractAddress",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    remove: async (
      params: StakeTypes.CallMethodParams<"remove">
    ): Promise<StakeTypes.CallMethodResult<"remove">> => {
      return callMethod(Stake, this, "remove", params, getContractByCodeHash);
    },
  };

  async multicall<Calls extends StakeTypes.MultiCallParams>(
    calls: Calls
  ): Promise<StakeTypes.MultiCallResults<Calls>> {
    return (await multicallMethods(
      Stake,
      this,
      calls,
      getContractByCodeHash
    )) as StakeTypes.MultiCallResults<Calls>;
  }
}
