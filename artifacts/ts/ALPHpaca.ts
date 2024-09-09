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
  SignExecuteContractMethodParams,
  SignExecuteScriptTxResult,
  signExecuteMethod,
  addStdIdToFields,
  encodeContractFields,
} from "@alephium/web3";
import { default as ALPHpacaContractJson } from "../gamefi/ALPHpaca.ral.json";
import { getContractByCodeHash } from "./contracts";

// Custom types for the contract
export namespace ALPHpacaTypes {
  export type Fields = {
    owner: Address;
  };

  export type State = ContractState<Fields>;

  export interface CallMethodTable {
    editAdmin: {
      params: CallContractParams<{ newAdmin: Address }>;
      result: CallContractResult<null>;
    };
    updateNickname: {
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
    editAdmin: {
      params: SignExecuteContractMethodParams<{ newAdmin: Address }>;
      result: SignExecuteScriptTxResult;
    };
    updateNickname: {
      params: Omit<SignExecuteContractMethodParams<{}>, "args">;
      result: SignExecuteScriptTxResult;
    };
  }
  export type SignExecuteMethodParams<T extends keyof SignExecuteMethodTable> =
    SignExecuteMethodTable[T]["params"];
  export type SignExecuteMethodResult<T extends keyof SignExecuteMethodTable> =
    SignExecuteMethodTable[T]["result"];
}

class Factory extends ContractFactory<ALPHpacaInstance, ALPHpacaTypes.Fields> {
  encodeFields(fields: ALPHpacaTypes.Fields) {
    return encodeContractFields(
      addStdIdToFields(this.contract, fields),
      this.contract.fieldsSig,
      []
    );
  }

  consts = { ToolErrors: { InvalidCaller: BigInt("0") } };

  at(address: string): ALPHpacaInstance {
    return new ALPHpacaInstance(address);
  }

  tests = {
    editAdmin: async (
      params: TestContractParamsWithoutMaps<
        ALPHpacaTypes.Fields,
        { newAdmin: Address }
      >
    ): Promise<TestContractResultWithoutMaps<null>> => {
      return testMethod(this, "editAdmin", params, getContractByCodeHash);
    },
    updateNickname: async (
      params: Omit<
        TestContractParamsWithoutMaps<ALPHpacaTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<null>> => {
      return testMethod(this, "updateNickname", params, getContractByCodeHash);
    },
  };
}

// Use this object to test and deploy the contract
export const ALPHpaca = new Factory(
  Contract.fromJson(
    ALPHpacaContractJson,
    "",
    "dc339412589d12e819a73d37f5191232927c304a4c392bda3b79c055d371d638",
    []
  )
);

// Use this class to interact with the blockchain
export class ALPHpacaInstance extends ContractInstance {
  constructor(address: Address) {
    super(address);
  }

  async fetchState(): Promise<ALPHpacaTypes.State> {
    return fetchContractState(ALPHpaca, this);
  }

  view = {
    editAdmin: async (
      params: ALPHpacaTypes.CallMethodParams<"editAdmin">
    ): Promise<ALPHpacaTypes.CallMethodResult<"editAdmin">> => {
      return callMethod(
        ALPHpaca,
        this,
        "editAdmin",
        params,
        getContractByCodeHash
      );
    },
    updateNickname: async (
      params?: ALPHpacaTypes.CallMethodParams<"updateNickname">
    ): Promise<ALPHpacaTypes.CallMethodResult<"updateNickname">> => {
      return callMethod(
        ALPHpaca,
        this,
        "updateNickname",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
  };

  transact = {
    editAdmin: async (
      params: ALPHpacaTypes.SignExecuteMethodParams<"editAdmin">
    ): Promise<ALPHpacaTypes.SignExecuteMethodResult<"editAdmin">> => {
      return signExecuteMethod(ALPHpaca, this, "editAdmin", params);
    },
    updateNickname: async (
      params: ALPHpacaTypes.SignExecuteMethodParams<"updateNickname">
    ): Promise<ALPHpacaTypes.SignExecuteMethodResult<"updateNickname">> => {
      return signExecuteMethod(ALPHpaca, this, "updateNickname", params);
    },
  };
}