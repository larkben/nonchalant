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
} from "@alephium/web3";
import { default as MarketContractJson } from "../swaps/Market.ral.json";
import { getContractByCodeHash } from "./contracts";

// Custom types for the contract
export namespace MarketTypes {
  export type Fields = {
    tokenOne: HexString;
    tokenTwo: HexString;
    totalswaps: bigint;
    swapcontract: HexString;
    marketcreationid: HexString;
  };

  export type State = ContractState<Fields>;

  export type SellOrderEvent = ContractEvent<{ contractid: HexString }>;

  export interface CallMethodTable {
    getTokenOne: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<HexString>;
    };
    getTokenTwo: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<HexString>;
    };
    getParentContract: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<Address>;
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

class Factory extends ContractFactory<MarketInstance, MarketTypes.Fields> {
  getInitialFieldsWithDefaultValues() {
    return this.contract.getInitialFieldsWithDefaultValues() as MarketTypes.Fields;
  }

  eventIndex = { SellOrder: 0 };

  at(address: string): MarketInstance {
    return new MarketInstance(address);
  }

  tests = {
    getTokenOne: async (
      params: Omit<TestContractParams<MarketTypes.Fields, never>, "testArgs">
    ): Promise<TestContractResult<HexString>> => {
      return testMethod(this, "getTokenOne", params);
    },
    getTokenTwo: async (
      params: Omit<TestContractParams<MarketTypes.Fields, never>, "testArgs">
    ): Promise<TestContractResult<HexString>> => {
      return testMethod(this, "getTokenTwo", params);
    },
    getParentContract: async (
      params: Omit<TestContractParams<MarketTypes.Fields, never>, "testArgs">
    ): Promise<TestContractResult<Address>> => {
      return testMethod(this, "getParentContract", params);
    },
    sellorder: async (
      params: TestContractParams<
        MarketTypes.Fields,
        {
          type: bigint;
          sell: bigint;
          buy: bigint;
          selltoken: HexString;
          buytoken: HexString;
        }
      >
    ): Promise<TestContractResult<null>> => {
      return testMethod(this, "sellorder", params);
    },
  };
}

// Use this object to test and deploy the contract
export const Market = new Factory(
  Contract.fromJson(
    MarketContractJson,
    "",
    "069f382551a2986f8257d139ba296ac7736cc9060da90273a335e833726dfafc"
  )
);

// Use this class to interact with the blockchain
export class MarketInstance extends ContractInstance {
  constructor(address: Address) {
    super(address);
  }

  async fetchState(): Promise<MarketTypes.State> {
    return fetchContractState(Market, this);
  }

  async getContractEventsCurrentCount(): Promise<number> {
    return getContractEventsCurrentCount(this.address);
  }

  subscribeSellOrderEvent(
    options: EventSubscribeOptions<MarketTypes.SellOrderEvent>,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvent(
      Market.contract,
      this,
      options,
      "SellOrder",
      fromCount
    );
  }

  methods = {
    getTokenOne: async (
      params?: MarketTypes.CallMethodParams<"getTokenOne">
    ): Promise<MarketTypes.CallMethodResult<"getTokenOne">> => {
      return callMethod(
        Market,
        this,
        "getTokenOne",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    getTokenTwo: async (
      params?: MarketTypes.CallMethodParams<"getTokenTwo">
    ): Promise<MarketTypes.CallMethodResult<"getTokenTwo">> => {
      return callMethod(
        Market,
        this,
        "getTokenTwo",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    getParentContract: async (
      params?: MarketTypes.CallMethodParams<"getParentContract">
    ): Promise<MarketTypes.CallMethodResult<"getParentContract">> => {
      return callMethod(
        Market,
        this,
        "getParentContract",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
  };

  async multicall<Calls extends MarketTypes.MultiCallParams>(
    calls: Calls
  ): Promise<MarketTypes.MultiCallResults<Calls>> {
    return (await multicallMethods(
      Market,
      this,
      calls,
      getContractByCodeHash
    )) as MarketTypes.MultiCallResults<Calls>;
  }
}