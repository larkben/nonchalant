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
import { default as RecoilMoveContractJson } from "../gamefi/moves/RecoilMove.ral.json";
import { getContractByCodeHash, registerContract } from "./contracts";
import { DIAOracleValue, MoveReturn, AllStructs } from "./types";

// Custom types for the contract
export namespace RecoilMoveTypes {
  export type Fields = {
    nftIndex: bigint;
    tokenUri: HexString;
    collectionId: HexString;
    power: bigint;
    recoil: bigint;
  };

  export type State = ContractState<Fields>;

  export interface CallMethodTable {
    getTokenUri: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<HexString>;
    };
    getCollectionIndex: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<[HexString, bigint]>;
    };
    getNFTIndex: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<bigint>;
    };
    editUri: {
      params: CallContractParams<{ newUri: HexString }>;
      result: CallContractResult<null>;
    };
    performMove: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<MoveReturn>;
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
    getTokenUri: {
      params: Omit<SignExecuteContractMethodParams<{}>, "args">;
      result: SignExecuteScriptTxResult;
    };
    getCollectionIndex: {
      params: Omit<SignExecuteContractMethodParams<{}>, "args">;
      result: SignExecuteScriptTxResult;
    };
    getNFTIndex: {
      params: Omit<SignExecuteContractMethodParams<{}>, "args">;
      result: SignExecuteScriptTxResult;
    };
    editUri: {
      params: SignExecuteContractMethodParams<{ newUri: HexString }>;
      result: SignExecuteScriptTxResult;
    };
    performMove: {
      params: Omit<SignExecuteContractMethodParams<{}>, "args">;
      result: SignExecuteScriptTxResult;
    };
  }
  export type SignExecuteMethodParams<T extends keyof SignExecuteMethodTable> =
    SignExecuteMethodTable[T]["params"];
  export type SignExecuteMethodResult<T extends keyof SignExecuteMethodTable> =
    SignExecuteMethodTable[T]["result"];
}

class Factory extends ContractFactory<
  RecoilMoveInstance,
  RecoilMoveTypes.Fields
> {
  encodeFields(fields: RecoilMoveTypes.Fields) {
    return encodeContractFields(
      addStdIdToFields(this.contract, fields),
      this.contract.fieldsSig,
      AllStructs
    );
  }

  consts = { ErrorCodes: { NotCalledFromCollection: BigInt("0") } };

  at(address: string): RecoilMoveInstance {
    return new RecoilMoveInstance(address);
  }

  tests = {
    getTokenUri: async (
      params: Omit<
        TestContractParamsWithoutMaps<RecoilMoveTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<HexString>> => {
      return testMethod(this, "getTokenUri", params, getContractByCodeHash);
    },
    getCollectionIndex: async (
      params: Omit<
        TestContractParamsWithoutMaps<RecoilMoveTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<[HexString, bigint]>> => {
      return testMethod(
        this,
        "getCollectionIndex",
        params,
        getContractByCodeHash
      );
    },
    getNFTIndex: async (
      params: Omit<
        TestContractParamsWithoutMaps<RecoilMoveTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<bigint>> => {
      return testMethod(this, "getNFTIndex", params, getContractByCodeHash);
    },
    editUri: async (
      params: TestContractParamsWithoutMaps<
        RecoilMoveTypes.Fields,
        { newUri: HexString }
      >
    ): Promise<TestContractResultWithoutMaps<null>> => {
      return testMethod(this, "editUri", params, getContractByCodeHash);
    },
    performMove: async (
      params: Omit<
        TestContractParamsWithoutMaps<RecoilMoveTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<MoveReturn>> => {
      return testMethod(this, "performMove", params, getContractByCodeHash);
    },
  };

  stateForTest(
    initFields: RecoilMoveTypes.Fields,
    asset?: Asset,
    address?: string
  ) {
    return this.stateForTest_(initFields, asset, address, undefined);
  }
}

// Use this object to test and deploy the contract
export const RecoilMove = new Factory(
  Contract.fromJson(
    RecoilMoveContractJson,
    "",
    "242d9272a7499afd4ec3718aa114c33aa18fb47aa64ccd94655f860935c650c3",
    AllStructs
  )
);
registerContract(RecoilMove);

// Use this class to interact with the blockchain
export class RecoilMoveInstance extends ContractInstance {
  constructor(address: Address) {
    super(address);
  }

  async fetchState(): Promise<RecoilMoveTypes.State> {
    return fetchContractState(RecoilMove, this);
  }

  view = {
    getTokenUri: async (
      params?: RecoilMoveTypes.CallMethodParams<"getTokenUri">
    ): Promise<RecoilMoveTypes.CallMethodResult<"getTokenUri">> => {
      return callMethod(
        RecoilMove,
        this,
        "getTokenUri",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    getCollectionIndex: async (
      params?: RecoilMoveTypes.CallMethodParams<"getCollectionIndex">
    ): Promise<RecoilMoveTypes.CallMethodResult<"getCollectionIndex">> => {
      return callMethod(
        RecoilMove,
        this,
        "getCollectionIndex",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    getNFTIndex: async (
      params?: RecoilMoveTypes.CallMethodParams<"getNFTIndex">
    ): Promise<RecoilMoveTypes.CallMethodResult<"getNFTIndex">> => {
      return callMethod(
        RecoilMove,
        this,
        "getNFTIndex",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    editUri: async (
      params: RecoilMoveTypes.CallMethodParams<"editUri">
    ): Promise<RecoilMoveTypes.CallMethodResult<"editUri">> => {
      return callMethod(
        RecoilMove,
        this,
        "editUri",
        params,
        getContractByCodeHash
      );
    },
    performMove: async (
      params?: RecoilMoveTypes.CallMethodParams<"performMove">
    ): Promise<RecoilMoveTypes.CallMethodResult<"performMove">> => {
      return callMethod(
        RecoilMove,
        this,
        "performMove",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
  };

  transact = {
    getTokenUri: async (
      params: RecoilMoveTypes.SignExecuteMethodParams<"getTokenUri">
    ): Promise<RecoilMoveTypes.SignExecuteMethodResult<"getTokenUri">> => {
      return signExecuteMethod(RecoilMove, this, "getTokenUri", params);
    },
    getCollectionIndex: async (
      params: RecoilMoveTypes.SignExecuteMethodParams<"getCollectionIndex">
    ): Promise<
      RecoilMoveTypes.SignExecuteMethodResult<"getCollectionIndex">
    > => {
      return signExecuteMethod(RecoilMove, this, "getCollectionIndex", params);
    },
    getNFTIndex: async (
      params: RecoilMoveTypes.SignExecuteMethodParams<"getNFTIndex">
    ): Promise<RecoilMoveTypes.SignExecuteMethodResult<"getNFTIndex">> => {
      return signExecuteMethod(RecoilMove, this, "getNFTIndex", params);
    },
    editUri: async (
      params: RecoilMoveTypes.SignExecuteMethodParams<"editUri">
    ): Promise<RecoilMoveTypes.SignExecuteMethodResult<"editUri">> => {
      return signExecuteMethod(RecoilMove, this, "editUri", params);
    },
    performMove: async (
      params: RecoilMoveTypes.SignExecuteMethodParams<"performMove">
    ): Promise<RecoilMoveTypes.SignExecuteMethodResult<"performMove">> => {
      return signExecuteMethod(RecoilMove, this, "performMove", params);
    },
  };

  async multicall<Calls extends RecoilMoveTypes.MultiCallParams>(
    calls: Calls
  ): Promise<RecoilMoveTypes.MultiCallResults<Calls>>;
  async multicall<Callss extends RecoilMoveTypes.MultiCallParams[]>(
    callss: Narrow<Callss>
  ): Promise<RecoilMoveTypes.MulticallReturnType<Callss>>;
  async multicall<
    Callss extends
      | RecoilMoveTypes.MultiCallParams
      | RecoilMoveTypes.MultiCallParams[]
  >(callss: Callss): Promise<unknown> {
    return await multicallMethods(
      RecoilMove,
      this,
      callss,
      getContractByCodeHash
    );
  }
}
