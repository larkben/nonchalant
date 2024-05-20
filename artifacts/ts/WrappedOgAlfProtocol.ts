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
import { default as WrappedOgAlfProtocolContractJson } from "../walf/WrappedOgAlfProtocol.ral.json";
import { getContractByCodeHash } from "./contracts";

// Custom types for the contract
export namespace WrappedOgAlfProtocolTypes {
  export type Fields = {
    symbol: HexString;
    name: HexString;
    decimals: bigint;
    supply: bigint;
    owner: Address;
    ogalf: HexString;
    ogalfamount: bigint;
    fee: bigint;
    feescollected: bigint;
  };

  export type State = ContractState<Fields>;

  export type WrappedAlfMintedEvent = ContractEvent<{
    who: Address;
    amount: bigint;
  }>;
  export type OgAlfRedeemedEvent = ContractEvent<{
    who: Address;
    amount: bigint;
  }>;

  export interface CallMethodTable {
    getSymbol: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<HexString>;
    };
    getName: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<HexString>;
    };
    getDecimals: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<bigint>;
    };
    getTotalSupply: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<bigint>;
    };
    getOwner: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<Address>;
    };
    getOgAlf: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<HexString>;
    };
    getWrappedAlf: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<HexString>;
    };
    getFee: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<bigint>;
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

class Factory extends ContractFactory<
  WrappedOgAlfProtocolInstance,
  WrappedOgAlfProtocolTypes.Fields
> {
  encodeFields(fields: WrappedOgAlfProtocolTypes.Fields) {
    return encodeContractFields(
      addStdIdToFields(this.contract, fields),
      this.contract.fieldsSig,
      []
    );
  }

  getInitialFieldsWithDefaultValues() {
    return this.contract.getInitialFieldsWithDefaultValues() as WrappedOgAlfProtocolTypes.Fields;
  }

  eventIndex = { WrappedAlfMinted: 0, OgAlfRedeemed: 1 };
  consts = {
    ErrorCodes: {
      InvalidOgAlf: BigInt(0),
      InvalidWrappedAlf: BigInt(1),
      OgAlfInContract: BigInt(2),
      InvalidCaller: BigInt(3),
    },
  };

  at(address: string): WrappedOgAlfProtocolInstance {
    return new WrappedOgAlfProtocolInstance(address);
  }

  tests = {
    getSymbol: async (
      params: Omit<
        TestContractParamsWithoutMaps<WrappedOgAlfProtocolTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<HexString>> => {
      return testMethod(this, "getSymbol", params);
    },
    getName: async (
      params: Omit<
        TestContractParamsWithoutMaps<WrappedOgAlfProtocolTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<HexString>> => {
      return testMethod(this, "getName", params);
    },
    getDecimals: async (
      params: Omit<
        TestContractParamsWithoutMaps<WrappedOgAlfProtocolTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<bigint>> => {
      return testMethod(this, "getDecimals", params);
    },
    getTotalSupply: async (
      params: Omit<
        TestContractParamsWithoutMaps<WrappedOgAlfProtocolTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<bigint>> => {
      return testMethod(this, "getTotalSupply", params);
    },
    getOwner: async (
      params: Omit<
        TestContractParamsWithoutMaps<WrappedOgAlfProtocolTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<Address>> => {
      return testMethod(this, "getOwner", params);
    },
    getOgAlf: async (
      params: Omit<
        TestContractParamsWithoutMaps<WrappedOgAlfProtocolTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<HexString>> => {
      return testMethod(this, "getOgAlf", params);
    },
    getWrappedAlf: async (
      params: Omit<
        TestContractParamsWithoutMaps<WrappedOgAlfProtocolTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<HexString>> => {
      return testMethod(this, "getWrappedAlf", params);
    },
    getFee: async (
      params: Omit<
        TestContractParamsWithoutMaps<WrappedOgAlfProtocolTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<bigint>> => {
      return testMethod(this, "getFee", params);
    },
    mintalf: async (
      params: TestContractParamsWithoutMaps<
        WrappedOgAlfProtocolTypes.Fields,
        { amount: bigint }
      >
    ): Promise<TestContractResultWithoutMaps<null>> => {
      return testMethod(this, "mintalf", params);
    },
    mintogalf: async (
      params: TestContractParamsWithoutMaps<
        WrappedOgAlfProtocolTypes.Fields,
        { amount: bigint }
      >
    ): Promise<TestContractResultWithoutMaps<null>> => {
      return testMethod(this, "mintogalf", params);
    },
    destroyprotocol: async (
      params: Omit<
        TestContractParamsWithoutMaps<WrappedOgAlfProtocolTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<null>> => {
      return testMethod(this, "destroyprotocol", params);
    },
    collectfees: async (
      params: Omit<
        TestContractParamsWithoutMaps<WrappedOgAlfProtocolTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<null>> => {
      return testMethod(this, "collectfees", params);
    },
    editfee: async (
      params: TestContractParamsWithoutMaps<
        WrappedOgAlfProtocolTypes.Fields,
        { newfee: bigint }
      >
    ): Promise<TestContractResultWithoutMaps<null>> => {
      return testMethod(this, "editfee", params);
    },
  };
}

// Use this object to test and deploy the contract
export const WrappedOgAlfProtocol = new Factory(
  Contract.fromJson(
    WrappedOgAlfProtocolContractJson,
    "",
    "e7e519a65691e2c610b0b2106d7629ed372a22ae6fb0d40067766b7f31711e00",
    []
  )
);

// Use this class to interact with the blockchain
export class WrappedOgAlfProtocolInstance extends ContractInstance {
  constructor(address: Address) {
    super(address);
  }

  async fetchState(): Promise<WrappedOgAlfProtocolTypes.State> {
    return fetchContractState(WrappedOgAlfProtocol, this);
  }

  async getContractEventsCurrentCount(): Promise<number> {
    return getContractEventsCurrentCount(this.address);
  }

  subscribeWrappedAlfMintedEvent(
    options: EventSubscribeOptions<WrappedOgAlfProtocolTypes.WrappedAlfMintedEvent>,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvent(
      WrappedOgAlfProtocol.contract,
      this,
      options,
      "WrappedAlfMinted",
      fromCount
    );
  }

  subscribeOgAlfRedeemedEvent(
    options: EventSubscribeOptions<WrappedOgAlfProtocolTypes.OgAlfRedeemedEvent>,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvent(
      WrappedOgAlfProtocol.contract,
      this,
      options,
      "OgAlfRedeemed",
      fromCount
    );
  }

  subscribeAllEvents(
    options: EventSubscribeOptions<
      | WrappedOgAlfProtocolTypes.WrappedAlfMintedEvent
      | WrappedOgAlfProtocolTypes.OgAlfRedeemedEvent
    >,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvents(
      WrappedOgAlfProtocol.contract,
      this,
      options,
      fromCount
    );
  }

  methods = {
    getSymbol: async (
      params?: WrappedOgAlfProtocolTypes.CallMethodParams<"getSymbol">
    ): Promise<WrappedOgAlfProtocolTypes.CallMethodResult<"getSymbol">> => {
      return callMethod(
        WrappedOgAlfProtocol,
        this,
        "getSymbol",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    getName: async (
      params?: WrappedOgAlfProtocolTypes.CallMethodParams<"getName">
    ): Promise<WrappedOgAlfProtocolTypes.CallMethodResult<"getName">> => {
      return callMethod(
        WrappedOgAlfProtocol,
        this,
        "getName",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    getDecimals: async (
      params?: WrappedOgAlfProtocolTypes.CallMethodParams<"getDecimals">
    ): Promise<WrappedOgAlfProtocolTypes.CallMethodResult<"getDecimals">> => {
      return callMethod(
        WrappedOgAlfProtocol,
        this,
        "getDecimals",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    getTotalSupply: async (
      params?: WrappedOgAlfProtocolTypes.CallMethodParams<"getTotalSupply">
    ): Promise<
      WrappedOgAlfProtocolTypes.CallMethodResult<"getTotalSupply">
    > => {
      return callMethod(
        WrappedOgAlfProtocol,
        this,
        "getTotalSupply",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    getOwner: async (
      params?: WrappedOgAlfProtocolTypes.CallMethodParams<"getOwner">
    ): Promise<WrappedOgAlfProtocolTypes.CallMethodResult<"getOwner">> => {
      return callMethod(
        WrappedOgAlfProtocol,
        this,
        "getOwner",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    getOgAlf: async (
      params?: WrappedOgAlfProtocolTypes.CallMethodParams<"getOgAlf">
    ): Promise<WrappedOgAlfProtocolTypes.CallMethodResult<"getOgAlf">> => {
      return callMethod(
        WrappedOgAlfProtocol,
        this,
        "getOgAlf",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    getWrappedAlf: async (
      params?: WrappedOgAlfProtocolTypes.CallMethodParams<"getWrappedAlf">
    ): Promise<WrappedOgAlfProtocolTypes.CallMethodResult<"getWrappedAlf">> => {
      return callMethod(
        WrappedOgAlfProtocol,
        this,
        "getWrappedAlf",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    getFee: async (
      params?: WrappedOgAlfProtocolTypes.CallMethodParams<"getFee">
    ): Promise<WrappedOgAlfProtocolTypes.CallMethodResult<"getFee">> => {
      return callMethod(
        WrappedOgAlfProtocol,
        this,
        "getFee",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
  };

  async multicall<Calls extends WrappedOgAlfProtocolTypes.MultiCallParams>(
    calls: Calls
  ): Promise<WrappedOgAlfProtocolTypes.MultiCallResults<Calls>> {
    return (await multicallMethods(
      WrappedOgAlfProtocol,
      this,
      calls,
      getContractByCodeHash
    )) as WrappedOgAlfProtocolTypes.MultiCallResults<Calls>;
  }
}
