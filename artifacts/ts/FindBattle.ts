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
import { default as FindBattleContractJson } from "../gamefi/battle/FindBattle.ral.json";
import { getContractByCodeHash } from "./contracts";
import { MoveReturn, AllStructs } from "./types";

// Custom types for the contract
export namespace FindBattleTypes {
  export type Fields = {
    admin: Address;
    pvp: HexString;
  };

  export type State = ContractState<Fields>;

  export type BattleEvent = ContractEvent<{ who: Address; id: HexString }>;
  export type BattleStartEvent = ContractEvent<{ id: HexString }>;

  export interface CallMethodTable {
    createBattle: {
      params: CallContractParams<{ paca: HexString }>;
      result: CallContractResult<null>;
    };
    start: {
      params: CallContractParams<{ contractId: HexString; paca: HexString }>;
      result: CallContractResult<null>;
    };
    attack: {
      params: CallContractParams<{ contractId: HexString }>;
      result: CallContractResult<null>;
    };
    end: {
      params: CallContractParams<{ contractId: HexString }>;
      result: CallContractResult<null>;
    };
    leavebattle: {
      params: CallContractParams<{ contractId: HexString }>;
      result: CallContractResult<null>;
    };
    cancel: {
      params: CallContractParams<{ contractId: HexString }>;
      result: CallContractResult<null>;
    };
    upgrade: {
      params: CallContractParams<{ newCode: HexString }>;
      result: CallContractResult<null>;
    };
    upgradeFields: {
      params: CallContractParams<{
        newCode: HexString;
        immutable: HexString;
        mutable: HexString;
      }>;
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
    createBattle: {
      params: SignExecuteContractMethodParams<{ paca: HexString }>;
      result: SignExecuteScriptTxResult;
    };
    start: {
      params: SignExecuteContractMethodParams<{
        contractId: HexString;
        paca: HexString;
      }>;
      result: SignExecuteScriptTxResult;
    };
    attack: {
      params: SignExecuteContractMethodParams<{ contractId: HexString }>;
      result: SignExecuteScriptTxResult;
    };
    end: {
      params: SignExecuteContractMethodParams<{ contractId: HexString }>;
      result: SignExecuteScriptTxResult;
    };
    leavebattle: {
      params: SignExecuteContractMethodParams<{ contractId: HexString }>;
      result: SignExecuteScriptTxResult;
    };
    cancel: {
      params: SignExecuteContractMethodParams<{ contractId: HexString }>;
      result: SignExecuteScriptTxResult;
    };
    upgrade: {
      params: SignExecuteContractMethodParams<{ newCode: HexString }>;
      result: SignExecuteScriptTxResult;
    };
    upgradeFields: {
      params: SignExecuteContractMethodParams<{
        newCode: HexString;
        immutable: HexString;
        mutable: HexString;
      }>;
      result: SignExecuteScriptTxResult;
    };
  }
  export type SignExecuteMethodParams<T extends keyof SignExecuteMethodTable> =
    SignExecuteMethodTable[T]["params"];
  export type SignExecuteMethodResult<T extends keyof SignExecuteMethodTable> =
    SignExecuteMethodTable[T]["result"];
}

class Factory extends ContractFactory<
  FindBattleInstance,
  FindBattleTypes.Fields
> {
  encodeFields(fields: FindBattleTypes.Fields) {
    return encodeContractFields(
      addStdIdToFields(this.contract, fields),
      this.contract.fieldsSig,
      AllStructs
    );
  }

  eventIndex = { Battle: 0, BattleStart: 1 };
  consts = { Error: { NotAdmin: BigInt("0") } };

  at(address: string): FindBattleInstance {
    return new FindBattleInstance(address);
  }

  tests = {
    createBattle: async (
      params: TestContractParamsWithoutMaps<
        FindBattleTypes.Fields,
        { paca: HexString }
      >
    ): Promise<TestContractResultWithoutMaps<null>> => {
      return testMethod(this, "createBattle", params, getContractByCodeHash);
    },
    start: async (
      params: TestContractParamsWithoutMaps<
        FindBattleTypes.Fields,
        { contractId: HexString; paca: HexString }
      >
    ): Promise<TestContractResultWithoutMaps<null>> => {
      return testMethod(this, "start", params, getContractByCodeHash);
    },
    attack: async (
      params: TestContractParamsWithoutMaps<
        FindBattleTypes.Fields,
        { contractId: HexString }
      >
    ): Promise<TestContractResultWithoutMaps<null>> => {
      return testMethod(this, "attack", params, getContractByCodeHash);
    },
    end: async (
      params: TestContractParamsWithoutMaps<
        FindBattleTypes.Fields,
        { contractId: HexString }
      >
    ): Promise<TestContractResultWithoutMaps<null>> => {
      return testMethod(this, "end", params, getContractByCodeHash);
    },
    leavebattle: async (
      params: TestContractParamsWithoutMaps<
        FindBattleTypes.Fields,
        { contractId: HexString }
      >
    ): Promise<TestContractResultWithoutMaps<null>> => {
      return testMethod(this, "leavebattle", params, getContractByCodeHash);
    },
    cancel: async (
      params: TestContractParamsWithoutMaps<
        FindBattleTypes.Fields,
        { contractId: HexString }
      >
    ): Promise<TestContractResultWithoutMaps<null>> => {
      return testMethod(this, "cancel", params, getContractByCodeHash);
    },
    upgrade: async (
      params: TestContractParamsWithoutMaps<
        FindBattleTypes.Fields,
        { newCode: HexString }
      >
    ): Promise<TestContractResultWithoutMaps<null>> => {
      return testMethod(this, "upgrade", params, getContractByCodeHash);
    },
    upgradeFields: async (
      params: TestContractParamsWithoutMaps<
        FindBattleTypes.Fields,
        { newCode: HexString; immutable: HexString; mutable: HexString }
      >
    ): Promise<TestContractResultWithoutMaps<null>> => {
      return testMethod(this, "upgradeFields", params, getContractByCodeHash);
    },
  };

  stateForTest(
    initFields: FindBattleTypes.Fields,
    asset?: Asset,
    address?: string
  ) {
    return this.stateForTest_(initFields, asset, address, undefined);
  }
}

// Use this object to test and deploy the contract
export const FindBattle = new Factory(
  Contract.fromJson(
    FindBattleContractJson,
    "",
    "42ad007606a100169a3471de6201a75a2e168d43cb545afb7683b48e1de1e674",
    AllStructs
  )
);

// Use this class to interact with the blockchain
export class FindBattleInstance extends ContractInstance {
  constructor(address: Address) {
    super(address);
  }

  async fetchState(): Promise<FindBattleTypes.State> {
    return fetchContractState(FindBattle, this);
  }

  async getContractEventsCurrentCount(): Promise<number> {
    return getContractEventsCurrentCount(this.address);
  }

  subscribeBattleEvent(
    options: EventSubscribeOptions<FindBattleTypes.BattleEvent>,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvent(
      FindBattle.contract,
      this,
      options,
      "Battle",
      fromCount
    );
  }

  subscribeBattleStartEvent(
    options: EventSubscribeOptions<FindBattleTypes.BattleStartEvent>,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvent(
      FindBattle.contract,
      this,
      options,
      "BattleStart",
      fromCount
    );
  }

  subscribeAllEvents(
    options: EventSubscribeOptions<
      FindBattleTypes.BattleEvent | FindBattleTypes.BattleStartEvent
    >,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvents(
      FindBattle.contract,
      this,
      options,
      fromCount
    );
  }

  view = {
    createBattle: async (
      params: FindBattleTypes.CallMethodParams<"createBattle">
    ): Promise<FindBattleTypes.CallMethodResult<"createBattle">> => {
      return callMethod(
        FindBattle,
        this,
        "createBattle",
        params,
        getContractByCodeHash
      );
    },
    start: async (
      params: FindBattleTypes.CallMethodParams<"start">
    ): Promise<FindBattleTypes.CallMethodResult<"start">> => {
      return callMethod(
        FindBattle,
        this,
        "start",
        params,
        getContractByCodeHash
      );
    },
    attack: async (
      params: FindBattleTypes.CallMethodParams<"attack">
    ): Promise<FindBattleTypes.CallMethodResult<"attack">> => {
      return callMethod(
        FindBattle,
        this,
        "attack",
        params,
        getContractByCodeHash
      );
    },
    end: async (
      params: FindBattleTypes.CallMethodParams<"end">
    ): Promise<FindBattleTypes.CallMethodResult<"end">> => {
      return callMethod(FindBattle, this, "end", params, getContractByCodeHash);
    },
    leavebattle: async (
      params: FindBattleTypes.CallMethodParams<"leavebattle">
    ): Promise<FindBattleTypes.CallMethodResult<"leavebattle">> => {
      return callMethod(
        FindBattle,
        this,
        "leavebattle",
        params,
        getContractByCodeHash
      );
    },
    cancel: async (
      params: FindBattleTypes.CallMethodParams<"cancel">
    ): Promise<FindBattleTypes.CallMethodResult<"cancel">> => {
      return callMethod(
        FindBattle,
        this,
        "cancel",
        params,
        getContractByCodeHash
      );
    },
    upgrade: async (
      params: FindBattleTypes.CallMethodParams<"upgrade">
    ): Promise<FindBattleTypes.CallMethodResult<"upgrade">> => {
      return callMethod(
        FindBattle,
        this,
        "upgrade",
        params,
        getContractByCodeHash
      );
    },
    upgradeFields: async (
      params: FindBattleTypes.CallMethodParams<"upgradeFields">
    ): Promise<FindBattleTypes.CallMethodResult<"upgradeFields">> => {
      return callMethod(
        FindBattle,
        this,
        "upgradeFields",
        params,
        getContractByCodeHash
      );
    },
  };

  transact = {
    createBattle: async (
      params: FindBattleTypes.SignExecuteMethodParams<"createBattle">
    ): Promise<FindBattleTypes.SignExecuteMethodResult<"createBattle">> => {
      return signExecuteMethod(FindBattle, this, "createBattle", params);
    },
    start: async (
      params: FindBattleTypes.SignExecuteMethodParams<"start">
    ): Promise<FindBattleTypes.SignExecuteMethodResult<"start">> => {
      return signExecuteMethod(FindBattle, this, "start", params);
    },
    attack: async (
      params: FindBattleTypes.SignExecuteMethodParams<"attack">
    ): Promise<FindBattleTypes.SignExecuteMethodResult<"attack">> => {
      return signExecuteMethod(FindBattle, this, "attack", params);
    },
    end: async (
      params: FindBattleTypes.SignExecuteMethodParams<"end">
    ): Promise<FindBattleTypes.SignExecuteMethodResult<"end">> => {
      return signExecuteMethod(FindBattle, this, "end", params);
    },
    leavebattle: async (
      params: FindBattleTypes.SignExecuteMethodParams<"leavebattle">
    ): Promise<FindBattleTypes.SignExecuteMethodResult<"leavebattle">> => {
      return signExecuteMethod(FindBattle, this, "leavebattle", params);
    },
    cancel: async (
      params: FindBattleTypes.SignExecuteMethodParams<"cancel">
    ): Promise<FindBattleTypes.SignExecuteMethodResult<"cancel">> => {
      return signExecuteMethod(FindBattle, this, "cancel", params);
    },
    upgrade: async (
      params: FindBattleTypes.SignExecuteMethodParams<"upgrade">
    ): Promise<FindBattleTypes.SignExecuteMethodResult<"upgrade">> => {
      return signExecuteMethod(FindBattle, this, "upgrade", params);
    },
    upgradeFields: async (
      params: FindBattleTypes.SignExecuteMethodParams<"upgradeFields">
    ): Promise<FindBattleTypes.SignExecuteMethodResult<"upgradeFields">> => {
      return signExecuteMethod(FindBattle, this, "upgradeFields", params);
    },
  };
}
