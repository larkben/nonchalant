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
  Asset,
  ContractInstance,
  getContractEventsCurrentCount,
  TestContractParamsWithoutMaps,
  TestContractResultWithoutMaps,
  SignExecuteContractMethodParams,
  SignExecuteScriptTxResult,
  signExecuteMethod,
  addStdIdToFields,
  encodeContractFields,
  Narrow,
} from "@alephium/web3";
import { default as FaucetContractJson } from "../Faucet.ral.json";
import { getContractByCodeHash, registerContract } from "./contracts";
import { DIAOracleValue, MoveReturn, AllStructs } from "./types";

// Custom types for the contract
export namespace FaucetTypes {
  export type Fields = {
    tokenId: HexString;
    balance: bigint;
    owner: Address;
  };

  export type State = ContractState<Fields>;

  export type TopupEvent = ContractEvent<{ from: Address; amount: bigint }>;
  export type SendoutEvent = ContractEvent<{ to: Address; amount: bigint }>;
  export type DestroyEvent = ContractEvent<{ to: Address }>;

  export interface CallMethodTable {
    getTokenId: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<HexString>;
    };
    getBalance: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<bigint>;
    };
    getSymbol: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<HexString>;
    };
    getName: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<HexString>;
    };
    topup: {
      params: CallContractParams<{ amount: bigint }>;
      result: CallContractResult<null>;
    };
    sendout: {
      params: CallContractParams<{ amount: bigint }>;
      result: CallContractResult<null>;
    };
    destroy: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<null>;
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
  export type MulticallReturnType<Callss extends MultiCallParams[]> = {
    [index in keyof Callss]: MultiCallResults<Callss[index]>;
  };

  export interface SignExecuteMethodTable {
    getTokenId: {
      params: Omit<SignExecuteContractMethodParams<{}>, "args">;
      result: SignExecuteScriptTxResult;
    };
    getBalance: {
      params: Omit<SignExecuteContractMethodParams<{}>, "args">;
      result: SignExecuteScriptTxResult;
    };
    getSymbol: {
      params: Omit<SignExecuteContractMethodParams<{}>, "args">;
      result: SignExecuteScriptTxResult;
    };
    getName: {
      params: Omit<SignExecuteContractMethodParams<{}>, "args">;
      result: SignExecuteScriptTxResult;
    };
    topup: {
      params: SignExecuteContractMethodParams<{ amount: bigint }>;
      result: SignExecuteScriptTxResult;
    };
    sendout: {
      params: SignExecuteContractMethodParams<{ amount: bigint }>;
      result: SignExecuteScriptTxResult;
    };
    destroy: {
      params: Omit<SignExecuteContractMethodParams<{}>, "args">;
      result: SignExecuteScriptTxResult;
    };
  }
  export type SignExecuteMethodParams<T extends keyof SignExecuteMethodTable> =
    SignExecuteMethodTable[T]["params"];
  export type SignExecuteMethodResult<T extends keyof SignExecuteMethodTable> =
    SignExecuteMethodTable[T]["result"];
}

class Factory extends ContractFactory<FaucetInstance, FaucetTypes.Fields> {
  encodeFields(fields: FaucetTypes.Fields) {
    return encodeContractFields(
      addStdIdToFields(this.contract, fields),
      this.contract.fieldsSig,
      AllStructs
    );
  }

  eventIndex = { Topup: 0, Sendout: 1, Destroy: 2 };
  consts = {
    ErrorCodes: {
      InvalidWithdraw: BigInt("1"),
      InvalidTopup: BigInt("2"),
      InvalidCaller: BigInt("3"),
    },
  };

  at(address: string): FaucetInstance {
    return new FaucetInstance(address);
  }

  tests = {
    getTokenId: async (
      params: Omit<
        TestContractParamsWithoutMaps<FaucetTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<HexString>> => {
      return testMethod(this, "getTokenId", params, getContractByCodeHash);
    },
    getBalance: async (
      params: Omit<
        TestContractParamsWithoutMaps<FaucetTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<bigint>> => {
      return testMethod(this, "getBalance", params, getContractByCodeHash);
    },
    getSymbol: async (
      params: Omit<
        TestContractParamsWithoutMaps<FaucetTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<HexString>> => {
      return testMethod(this, "getSymbol", params, getContractByCodeHash);
    },
    getName: async (
      params: Omit<
        TestContractParamsWithoutMaps<FaucetTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<HexString>> => {
      return testMethod(this, "getName", params, getContractByCodeHash);
    },
    topup: async (
      params: TestContractParamsWithoutMaps<
        FaucetTypes.Fields,
        { amount: bigint }
      >
    ): Promise<TestContractResultWithoutMaps<null>> => {
      return testMethod(this, "topup", params, getContractByCodeHash);
    },
    sendout: async (
      params: TestContractParamsWithoutMaps<
        FaucetTypes.Fields,
        { amount: bigint }
      >
    ): Promise<TestContractResultWithoutMaps<null>> => {
      return testMethod(this, "sendout", params, getContractByCodeHash);
    },
    destroy: async (
      params: Omit<
        TestContractParamsWithoutMaps<FaucetTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<null>> => {
      return testMethod(this, "destroy", params, getContractByCodeHash);
    },
  };

  stateForTest(
    initFields: FaucetTypes.Fields,
    asset?: Asset,
    address?: string
  ) {
    return this.stateForTest_(initFields, asset, address, undefined);
  }
}

// Use this object to test and deploy the contract
export const Faucet = new Factory(
  Contract.fromJson(
    FaucetContractJson,
    "",
    "236dc0af410205d895500f454e6acbce51ba2c88b644b47aa75d40bcf21f2ad0",
    AllStructs
  )
);
registerContract(Faucet);

// Use this class to interact with the blockchain
export class FaucetInstance extends ContractInstance {
  constructor(address: Address) {
    super(address);
  }

  async fetchState(): Promise<FaucetTypes.State> {
    return fetchContractState(Faucet, this);
  }

  async getContractEventsCurrentCount(): Promise<number> {
    return getContractEventsCurrentCount(this.address);
  }

  subscribeTopupEvent(
    options: EventSubscribeOptions<FaucetTypes.TopupEvent>,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvent(
      Faucet.contract,
      this,
      options,
      "Topup",
      fromCount
    );
  }

  subscribeSendoutEvent(
    options: EventSubscribeOptions<FaucetTypes.SendoutEvent>,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvent(
      Faucet.contract,
      this,
      options,
      "Sendout",
      fromCount
    );
  }

  subscribeDestroyEvent(
    options: EventSubscribeOptions<FaucetTypes.DestroyEvent>,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvent(
      Faucet.contract,
      this,
      options,
      "Destroy",
      fromCount
    );
  }

  subscribeAllEvents(
    options: EventSubscribeOptions<
      | FaucetTypes.TopupEvent
      | FaucetTypes.SendoutEvent
      | FaucetTypes.DestroyEvent
    >,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvents(Faucet.contract, this, options, fromCount);
  }

  view = {
    getTokenId: async (
      params?: FaucetTypes.CallMethodParams<"getTokenId">
    ): Promise<FaucetTypes.CallMethodResult<"getTokenId">> => {
      return callMethod(
        Faucet,
        this,
        "getTokenId",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    getBalance: async (
      params?: FaucetTypes.CallMethodParams<"getBalance">
    ): Promise<FaucetTypes.CallMethodResult<"getBalance">> => {
      return callMethod(
        Faucet,
        this,
        "getBalance",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    getSymbol: async (
      params?: FaucetTypes.CallMethodParams<"getSymbol">
    ): Promise<FaucetTypes.CallMethodResult<"getSymbol">> => {
      return callMethod(
        Faucet,
        this,
        "getSymbol",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    getName: async (
      params?: FaucetTypes.CallMethodParams<"getName">
    ): Promise<FaucetTypes.CallMethodResult<"getName">> => {
      return callMethod(
        Faucet,
        this,
        "getName",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    topup: async (
      params: FaucetTypes.CallMethodParams<"topup">
    ): Promise<FaucetTypes.CallMethodResult<"topup">> => {
      return callMethod(Faucet, this, "topup", params, getContractByCodeHash);
    },
    sendout: async (
      params: FaucetTypes.CallMethodParams<"sendout">
    ): Promise<FaucetTypes.CallMethodResult<"sendout">> => {
      return callMethod(Faucet, this, "sendout", params, getContractByCodeHash);
    },
    destroy: async (
      params?: FaucetTypes.CallMethodParams<"destroy">
    ): Promise<FaucetTypes.CallMethodResult<"destroy">> => {
      return callMethod(
        Faucet,
        this,
        "destroy",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
  };

  transact = {
    getTokenId: async (
      params: FaucetTypes.SignExecuteMethodParams<"getTokenId">
    ): Promise<FaucetTypes.SignExecuteMethodResult<"getTokenId">> => {
      return signExecuteMethod(Faucet, this, "getTokenId", params);
    },
    getBalance: async (
      params: FaucetTypes.SignExecuteMethodParams<"getBalance">
    ): Promise<FaucetTypes.SignExecuteMethodResult<"getBalance">> => {
      return signExecuteMethod(Faucet, this, "getBalance", params);
    },
    getSymbol: async (
      params: FaucetTypes.SignExecuteMethodParams<"getSymbol">
    ): Promise<FaucetTypes.SignExecuteMethodResult<"getSymbol">> => {
      return signExecuteMethod(Faucet, this, "getSymbol", params);
    },
    getName: async (
      params: FaucetTypes.SignExecuteMethodParams<"getName">
    ): Promise<FaucetTypes.SignExecuteMethodResult<"getName">> => {
      return signExecuteMethod(Faucet, this, "getName", params);
    },
    topup: async (
      params: FaucetTypes.SignExecuteMethodParams<"topup">
    ): Promise<FaucetTypes.SignExecuteMethodResult<"topup">> => {
      return signExecuteMethod(Faucet, this, "topup", params);
    },
    sendout: async (
      params: FaucetTypes.SignExecuteMethodParams<"sendout">
    ): Promise<FaucetTypes.SignExecuteMethodResult<"sendout">> => {
      return signExecuteMethod(Faucet, this, "sendout", params);
    },
    destroy: async (
      params: FaucetTypes.SignExecuteMethodParams<"destroy">
    ): Promise<FaucetTypes.SignExecuteMethodResult<"destroy">> => {
      return signExecuteMethod(Faucet, this, "destroy", params);
    },
  };

  async multicall<Calls extends FaucetTypes.MultiCallParams>(
    calls: Calls
  ): Promise<FaucetTypes.MultiCallResults<Calls>>;
  async multicall<Callss extends FaucetTypes.MultiCallParams[]>(
    callss: Narrow<Callss>
  ): Promise<FaucetTypes.MulticallReturnType<Callss>>;
  async multicall<
    Callss extends FaucetTypes.MultiCallParams | FaucetTypes.MultiCallParams[]
  >(callss: Callss): Promise<unknown> {
    return await multicallMethods(Faucet, this, callss, getContractByCodeHash);
  }
}
