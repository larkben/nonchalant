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
} from "@alephium/web3";
import { default as FeeCollectionContractJson } from "../FeeCollection.ral.json";
import { getContractByCodeHash } from "./contracts";
import { DIAOracleValue, MoveReturn, PacaFlip, AllStructs } from "./types";

// Custom types for the contract
export namespace FeeCollectionTypes {
  export type Fields = {
    tokenOne: HexString;
    tokenTwo: HexString;
    balanceOne: bigint;
    balanceTwo: bigint;
    fee: bigint;
    owner: Address;
  };

  export type State = ContractState<Fields>;

  export type RecievedTokenEvent = ContractEvent<{
    from: Address;
    amount: bigint;
    id: HexString;
  }>;
  export type FeeRecievedEvent = ContractEvent<{
    from: Address;
    amount: bigint;
    id: HexString;
  }>;
  export type DestroyEvent = ContractEvent<{ destroyer: Address }>;
  export type WithdrawlAssetsEvent = ContractEvent<{ from: Address }>;
  export type SuccessEvent = ContractEvent<{ from: Address }>;

  export interface CallMethodTable {
    getTokenOne: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<HexString>;
    };
    getTokenTwo: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<HexString>;
    };
    getBalanceOne: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<bigint>;
    };
    getBalanceTwo: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<bigint>;
    };
    getFee: {
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
    gettoken: {
      params: CallContractParams<{ amount: bigint }>;
      result: CallContractResult<null>;
    };
    withdrawalassets: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<null>;
    };
    editfee: {
      params: CallContractParams<{ edit: bigint }>;
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
    getTokenOne: {
      params: Omit<SignExecuteContractMethodParams<{}>, "args">;
      result: SignExecuteScriptTxResult;
    };
    getTokenTwo: {
      params: Omit<SignExecuteContractMethodParams<{}>, "args">;
      result: SignExecuteScriptTxResult;
    };
    getBalanceOne: {
      params: Omit<SignExecuteContractMethodParams<{}>, "args">;
      result: SignExecuteScriptTxResult;
    };
    getBalanceTwo: {
      params: Omit<SignExecuteContractMethodParams<{}>, "args">;
      result: SignExecuteScriptTxResult;
    };
    getFee: {
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
    gettoken: {
      params: SignExecuteContractMethodParams<{ amount: bigint }>;
      result: SignExecuteScriptTxResult;
    };
    withdrawalassets: {
      params: Omit<SignExecuteContractMethodParams<{}>, "args">;
      result: SignExecuteScriptTxResult;
    };
    editfee: {
      params: SignExecuteContractMethodParams<{ edit: bigint }>;
      result: SignExecuteScriptTxResult;
    };
  }
  export type SignExecuteMethodParams<T extends keyof SignExecuteMethodTable> =
    SignExecuteMethodTable[T]["params"];
  export type SignExecuteMethodResult<T extends keyof SignExecuteMethodTable> =
    SignExecuteMethodTable[T]["result"];
}

class Factory extends ContractFactory<
  FeeCollectionInstance,
  FeeCollectionTypes.Fields
> {
  encodeFields(fields: FeeCollectionTypes.Fields) {
    return encodeContractFields(
      addStdIdToFields(this.contract, fields),
      this.contract.fieldsSig,
      AllStructs
    );
  }

  eventIndex = {
    RecievedToken: 0,
    FeeRecieved: 1,
    Destroy: 2,
    WithdrawlAssets: 3,
    Success: 4,
  };
  consts = {
    ErrorCodes: { InvalidRecieve: BigInt("1"), InvalidCaller: BigInt("3") },
  };

  at(address: string): FeeCollectionInstance {
    return new FeeCollectionInstance(address);
  }

  tests = {
    getTokenOne: async (
      params: Omit<
        TestContractParamsWithoutMaps<FeeCollectionTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<HexString>> => {
      return testMethod(this, "getTokenOne", params, getContractByCodeHash);
    },
    getTokenTwo: async (
      params: Omit<
        TestContractParamsWithoutMaps<FeeCollectionTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<HexString>> => {
      return testMethod(this, "getTokenTwo", params, getContractByCodeHash);
    },
    getBalanceOne: async (
      params: Omit<
        TestContractParamsWithoutMaps<FeeCollectionTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<bigint>> => {
      return testMethod(this, "getBalanceOne", params, getContractByCodeHash);
    },
    getBalanceTwo: async (
      params: Omit<
        TestContractParamsWithoutMaps<FeeCollectionTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<bigint>> => {
      return testMethod(this, "getBalanceTwo", params, getContractByCodeHash);
    },
    getFee: async (
      params: Omit<
        TestContractParamsWithoutMaps<FeeCollectionTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<bigint>> => {
      return testMethod(this, "getFee", params, getContractByCodeHash);
    },
    getSymbol: async (
      params: Omit<
        TestContractParamsWithoutMaps<FeeCollectionTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<HexString>> => {
      return testMethod(this, "getSymbol", params, getContractByCodeHash);
    },
    getName: async (
      params: Omit<
        TestContractParamsWithoutMaps<FeeCollectionTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<HexString>> => {
      return testMethod(this, "getName", params, getContractByCodeHash);
    },
    gettoken: async (
      params: TestContractParamsWithoutMaps<
        FeeCollectionTypes.Fields,
        { amount: bigint }
      >
    ): Promise<TestContractResultWithoutMaps<null>> => {
      return testMethod(this, "gettoken", params, getContractByCodeHash);
    },
    withdrawalassets: async (
      params: Omit<
        TestContractParamsWithoutMaps<FeeCollectionTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<null>> => {
      return testMethod(
        this,
        "withdrawalassets",
        params,
        getContractByCodeHash
      );
    },
    editfee: async (
      params: TestContractParamsWithoutMaps<
        FeeCollectionTypes.Fields,
        { edit: bigint }
      >
    ): Promise<TestContractResultWithoutMaps<null>> => {
      return testMethod(this, "editfee", params, getContractByCodeHash);
    },
  };

  stateForTest(
    initFields: FeeCollectionTypes.Fields,
    asset?: Asset,
    address?: string
  ) {
    return this.stateForTest_(initFields, asset, address, undefined);
  }
}

// Use this object to test and deploy the contract
export const FeeCollection = new Factory(
  Contract.fromJson(
    FeeCollectionContractJson,
    "",
    "8671dc4d763fef38a37762180a03a69d0a42c85466d4fee89b25e8598c5645fb",
    AllStructs
  )
);

// Use this class to interact with the blockchain
export class FeeCollectionInstance extends ContractInstance {
  constructor(address: Address) {
    super(address);
  }

  async fetchState(): Promise<FeeCollectionTypes.State> {
    return fetchContractState(FeeCollection, this);
  }

  async getContractEventsCurrentCount(): Promise<number> {
    return getContractEventsCurrentCount(this.address);
  }

  subscribeRecievedTokenEvent(
    options: EventSubscribeOptions<FeeCollectionTypes.RecievedTokenEvent>,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvent(
      FeeCollection.contract,
      this,
      options,
      "RecievedToken",
      fromCount
    );
  }

  subscribeFeeRecievedEvent(
    options: EventSubscribeOptions<FeeCollectionTypes.FeeRecievedEvent>,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvent(
      FeeCollection.contract,
      this,
      options,
      "FeeRecieved",
      fromCount
    );
  }

  subscribeDestroyEvent(
    options: EventSubscribeOptions<FeeCollectionTypes.DestroyEvent>,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvent(
      FeeCollection.contract,
      this,
      options,
      "Destroy",
      fromCount
    );
  }

  subscribeWithdrawlAssetsEvent(
    options: EventSubscribeOptions<FeeCollectionTypes.WithdrawlAssetsEvent>,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvent(
      FeeCollection.contract,
      this,
      options,
      "WithdrawlAssets",
      fromCount
    );
  }

  subscribeSuccessEvent(
    options: EventSubscribeOptions<FeeCollectionTypes.SuccessEvent>,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvent(
      FeeCollection.contract,
      this,
      options,
      "Success",
      fromCount
    );
  }

  subscribeAllEvents(
    options: EventSubscribeOptions<
      | FeeCollectionTypes.RecievedTokenEvent
      | FeeCollectionTypes.FeeRecievedEvent
      | FeeCollectionTypes.DestroyEvent
      | FeeCollectionTypes.WithdrawlAssetsEvent
      | FeeCollectionTypes.SuccessEvent
    >,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvents(
      FeeCollection.contract,
      this,
      options,
      fromCount
    );
  }

  view = {
    getTokenOne: async (
      params?: FeeCollectionTypes.CallMethodParams<"getTokenOne">
    ): Promise<FeeCollectionTypes.CallMethodResult<"getTokenOne">> => {
      return callMethod(
        FeeCollection,
        this,
        "getTokenOne",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    getTokenTwo: async (
      params?: FeeCollectionTypes.CallMethodParams<"getTokenTwo">
    ): Promise<FeeCollectionTypes.CallMethodResult<"getTokenTwo">> => {
      return callMethod(
        FeeCollection,
        this,
        "getTokenTwo",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    getBalanceOne: async (
      params?: FeeCollectionTypes.CallMethodParams<"getBalanceOne">
    ): Promise<FeeCollectionTypes.CallMethodResult<"getBalanceOne">> => {
      return callMethod(
        FeeCollection,
        this,
        "getBalanceOne",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    getBalanceTwo: async (
      params?: FeeCollectionTypes.CallMethodParams<"getBalanceTwo">
    ): Promise<FeeCollectionTypes.CallMethodResult<"getBalanceTwo">> => {
      return callMethod(
        FeeCollection,
        this,
        "getBalanceTwo",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    getFee: async (
      params?: FeeCollectionTypes.CallMethodParams<"getFee">
    ): Promise<FeeCollectionTypes.CallMethodResult<"getFee">> => {
      return callMethod(
        FeeCollection,
        this,
        "getFee",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    getSymbol: async (
      params?: FeeCollectionTypes.CallMethodParams<"getSymbol">
    ): Promise<FeeCollectionTypes.CallMethodResult<"getSymbol">> => {
      return callMethod(
        FeeCollection,
        this,
        "getSymbol",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    getName: async (
      params?: FeeCollectionTypes.CallMethodParams<"getName">
    ): Promise<FeeCollectionTypes.CallMethodResult<"getName">> => {
      return callMethod(
        FeeCollection,
        this,
        "getName",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    gettoken: async (
      params: FeeCollectionTypes.CallMethodParams<"gettoken">
    ): Promise<FeeCollectionTypes.CallMethodResult<"gettoken">> => {
      return callMethod(
        FeeCollection,
        this,
        "gettoken",
        params,
        getContractByCodeHash
      );
    },
    withdrawalassets: async (
      params?: FeeCollectionTypes.CallMethodParams<"withdrawalassets">
    ): Promise<FeeCollectionTypes.CallMethodResult<"withdrawalassets">> => {
      return callMethod(
        FeeCollection,
        this,
        "withdrawalassets",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    editfee: async (
      params: FeeCollectionTypes.CallMethodParams<"editfee">
    ): Promise<FeeCollectionTypes.CallMethodResult<"editfee">> => {
      return callMethod(
        FeeCollection,
        this,
        "editfee",
        params,
        getContractByCodeHash
      );
    },
  };

  transact = {
    getTokenOne: async (
      params: FeeCollectionTypes.SignExecuteMethodParams<"getTokenOne">
    ): Promise<FeeCollectionTypes.SignExecuteMethodResult<"getTokenOne">> => {
      return signExecuteMethod(FeeCollection, this, "getTokenOne", params);
    },
    getTokenTwo: async (
      params: FeeCollectionTypes.SignExecuteMethodParams<"getTokenTwo">
    ): Promise<FeeCollectionTypes.SignExecuteMethodResult<"getTokenTwo">> => {
      return signExecuteMethod(FeeCollection, this, "getTokenTwo", params);
    },
    getBalanceOne: async (
      params: FeeCollectionTypes.SignExecuteMethodParams<"getBalanceOne">
    ): Promise<FeeCollectionTypes.SignExecuteMethodResult<"getBalanceOne">> => {
      return signExecuteMethod(FeeCollection, this, "getBalanceOne", params);
    },
    getBalanceTwo: async (
      params: FeeCollectionTypes.SignExecuteMethodParams<"getBalanceTwo">
    ): Promise<FeeCollectionTypes.SignExecuteMethodResult<"getBalanceTwo">> => {
      return signExecuteMethod(FeeCollection, this, "getBalanceTwo", params);
    },
    getFee: async (
      params: FeeCollectionTypes.SignExecuteMethodParams<"getFee">
    ): Promise<FeeCollectionTypes.SignExecuteMethodResult<"getFee">> => {
      return signExecuteMethod(FeeCollection, this, "getFee", params);
    },
    getSymbol: async (
      params: FeeCollectionTypes.SignExecuteMethodParams<"getSymbol">
    ): Promise<FeeCollectionTypes.SignExecuteMethodResult<"getSymbol">> => {
      return signExecuteMethod(FeeCollection, this, "getSymbol", params);
    },
    getName: async (
      params: FeeCollectionTypes.SignExecuteMethodParams<"getName">
    ): Promise<FeeCollectionTypes.SignExecuteMethodResult<"getName">> => {
      return signExecuteMethod(FeeCollection, this, "getName", params);
    },
    gettoken: async (
      params: FeeCollectionTypes.SignExecuteMethodParams<"gettoken">
    ): Promise<FeeCollectionTypes.SignExecuteMethodResult<"gettoken">> => {
      return signExecuteMethod(FeeCollection, this, "gettoken", params);
    },
    withdrawalassets: async (
      params: FeeCollectionTypes.SignExecuteMethodParams<"withdrawalassets">
    ): Promise<
      FeeCollectionTypes.SignExecuteMethodResult<"withdrawalassets">
    > => {
      return signExecuteMethod(FeeCollection, this, "withdrawalassets", params);
    },
    editfee: async (
      params: FeeCollectionTypes.SignExecuteMethodParams<"editfee">
    ): Promise<FeeCollectionTypes.SignExecuteMethodResult<"editfee">> => {
      return signExecuteMethod(FeeCollection, this, "editfee", params);
    },
  };

  async multicall<Callss extends FeeCollectionTypes.MultiCallParams[]>(
    ...callss: Callss
  ): Promise<FeeCollectionTypes.MulticallReturnType<Callss>> {
    return (await multicallMethods(
      FeeCollection,
      this,
      callss,
      getContractByCodeHash
    )) as FeeCollectionTypes.MulticallReturnType<Callss>;
  }
}
