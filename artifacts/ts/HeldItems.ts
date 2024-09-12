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
import { default as HeldItemsContractJson } from "../gamefi/helditem/HeldItems.ral.json";
import { getContractByCodeHash } from "./contracts";

// Custom types for the contract
export namespace HeldItemsTypes {
  export type Fields = {
    collectionOwner: Address;
    collectionUri: HexString;
    gameContract: HexString;
    totalSupply: bigint;
    baseuri: HexString;
    playerContractId: HexString;
    code: HexString;
    encodedImmutableFields: HexString;
    encodedMutableFields: HexString;
  };

  export type State = ContractState<Fields>;

  export type MintEvent = ContractEvent<{
    minter: Address;
    fromIndex: bigint;
    contract: HexString;
  }>;

  export interface CallMethodTable {
    getCollectionUri: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<HexString>;
    };
    totalSupply: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<bigint>;
    };
    nftByIndex: {
      params: CallContractParams<{ index: bigint }>;
      result: CallContractResult<HexString>;
    };
    validateNFT: {
      params: CallContractParams<{ nftId: HexString; index: bigint }>;
      result: CallContractResult<null>;
    };
    mint: {
      params: CallContractParams<{ tokenSelected: HexString }>;
      result: CallContractResult<null>;
    };
    editCollectionUri: {
      params: CallContractParams<{ newCollectionUri: HexString }>;
      result: CallContractResult<null>;
    };
    updateHeldItems: {
      params: CallContractParams<{ newCode: HexString }>;
      result: CallContractResult<null>;
    };
    updateHeldItemsFields: {
      params: CallContractParams<{
        newCode: HexString;
        newImmFieldsEncoded: HexString;
        newMutFieldsEncoded: HexString;
      }>;
      result: CallContractResult<null>;
    };
    updateItemCode: {
      params: CallContractParams<{ nft: HexString }>;
      result: CallContractResult<null>;
    };
    updateItemFields: {
      params: CallContractParams<{ nft: HexString }>;
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
    getCollectionUri: {
      params: Omit<SignExecuteContractMethodParams<{}>, "args">;
      result: SignExecuteScriptTxResult;
    };
    totalSupply: {
      params: Omit<SignExecuteContractMethodParams<{}>, "args">;
      result: SignExecuteScriptTxResult;
    };
    nftByIndex: {
      params: SignExecuteContractMethodParams<{ index: bigint }>;
      result: SignExecuteScriptTxResult;
    };
    validateNFT: {
      params: SignExecuteContractMethodParams<{
        nftId: HexString;
        index: bigint;
      }>;
      result: SignExecuteScriptTxResult;
    };
    mint: {
      params: SignExecuteContractMethodParams<{ tokenSelected: HexString }>;
      result: SignExecuteScriptTxResult;
    };
    editCollectionUri: {
      params: SignExecuteContractMethodParams<{ newCollectionUri: HexString }>;
      result: SignExecuteScriptTxResult;
    };
    updateHeldItems: {
      params: SignExecuteContractMethodParams<{ newCode: HexString }>;
      result: SignExecuteScriptTxResult;
    };
    updateHeldItemsFields: {
      params: SignExecuteContractMethodParams<{
        newCode: HexString;
        newImmFieldsEncoded: HexString;
        newMutFieldsEncoded: HexString;
      }>;
      result: SignExecuteScriptTxResult;
    };
    updateItemCode: {
      params: SignExecuteContractMethodParams<{ nft: HexString }>;
      result: SignExecuteScriptTxResult;
    };
    updateItemFields: {
      params: SignExecuteContractMethodParams<{ nft: HexString }>;
      result: SignExecuteScriptTxResult;
    };
  }
  export type SignExecuteMethodParams<T extends keyof SignExecuteMethodTable> =
    SignExecuteMethodTable[T]["params"];
  export type SignExecuteMethodResult<T extends keyof SignExecuteMethodTable> =
    SignExecuteMethodTable[T]["result"];
}

class Factory extends ContractFactory<
  HeldItemsInstance,
  HeldItemsTypes.Fields
> {
  encodeFields(fields: HeldItemsTypes.Fields) {
    return encodeContractFields(
      addStdIdToFields(this.contract, fields),
      this.contract.fieldsSig,
      []
    );
  }

  eventIndex = { Mint: 0 };
  consts = {
    ErrorCodes: {
      NFTNotFound: BigInt("0"),
      CollectionOwnerAllowedOnly: BigInt("1"),
      NFTNotPartOfCollection: BigInt("2"),
      NotValidNFT: BigInt("3"),
    },
  };

  at(address: string): HeldItemsInstance {
    return new HeldItemsInstance(address);
  }

  tests = {
    getCollectionUri: async (
      params: Omit<
        TestContractParamsWithoutMaps<HeldItemsTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<HexString>> => {
      return testMethod(
        this,
        "getCollectionUri",
        params,
        getContractByCodeHash
      );
    },
    totalSupply: async (
      params: Omit<
        TestContractParamsWithoutMaps<HeldItemsTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<bigint>> => {
      return testMethod(this, "totalSupply", params, getContractByCodeHash);
    },
    nftByIndex: async (
      params: TestContractParamsWithoutMaps<
        HeldItemsTypes.Fields,
        { index: bigint }
      >
    ): Promise<TestContractResultWithoutMaps<HexString>> => {
      return testMethod(this, "nftByIndex", params, getContractByCodeHash);
    },
    validateNFT: async (
      params: TestContractParamsWithoutMaps<
        HeldItemsTypes.Fields,
        { nftId: HexString; index: bigint }
      >
    ): Promise<TestContractResultWithoutMaps<null>> => {
      return testMethod(this, "validateNFT", params, getContractByCodeHash);
    },
    mint: async (
      params: TestContractParamsWithoutMaps<
        HeldItemsTypes.Fields,
        { tokenSelected: HexString }
      >
    ): Promise<TestContractResultWithoutMaps<null>> => {
      return testMethod(this, "mint", params, getContractByCodeHash);
    },
    editCollectionUri: async (
      params: TestContractParamsWithoutMaps<
        HeldItemsTypes.Fields,
        { newCollectionUri: HexString }
      >
    ): Promise<TestContractResultWithoutMaps<null>> => {
      return testMethod(
        this,
        "editCollectionUri",
        params,
        getContractByCodeHash
      );
    },
    updateHeldItems: async (
      params: TestContractParamsWithoutMaps<
        HeldItemsTypes.Fields,
        { newCode: HexString }
      >
    ): Promise<TestContractResultWithoutMaps<null>> => {
      return testMethod(this, "updateHeldItems", params, getContractByCodeHash);
    },
    updateHeldItemsFields: async (
      params: TestContractParamsWithoutMaps<
        HeldItemsTypes.Fields,
        {
          newCode: HexString;
          newImmFieldsEncoded: HexString;
          newMutFieldsEncoded: HexString;
        }
      >
    ): Promise<TestContractResultWithoutMaps<null>> => {
      return testMethod(
        this,
        "updateHeldItemsFields",
        params,
        getContractByCodeHash
      );
    },
    updateItemCode: async (
      params: TestContractParamsWithoutMaps<
        HeldItemsTypes.Fields,
        { nft: HexString }
      >
    ): Promise<TestContractResultWithoutMaps<null>> => {
      return testMethod(this, "updateItemCode", params, getContractByCodeHash);
    },
    updateItemFields: async (
      params: TestContractParamsWithoutMaps<
        HeldItemsTypes.Fields,
        { nft: HexString }
      >
    ): Promise<TestContractResultWithoutMaps<null>> => {
      return testMethod(
        this,
        "updateItemFields",
        params,
        getContractByCodeHash
      );
    },
  };

  stateForTest(
    initFields: HeldItemsTypes.Fields,
    asset?: Asset,
    address?: string
  ) {
    return this.stateForTest_(initFields, asset, address, undefined);
  }
}

// Use this object to test and deploy the contract
export const HeldItems = new Factory(
  Contract.fromJson(
    HeldItemsContractJson,
    "",
    "30a31a7652cd30e43102600ff03da201166d6548eec921129f94f0e23e59a9b6",
    []
  )
);

// Use this class to interact with the blockchain
export class HeldItemsInstance extends ContractInstance {
  constructor(address: Address) {
    super(address);
  }

  async fetchState(): Promise<HeldItemsTypes.State> {
    return fetchContractState(HeldItems, this);
  }

  async getContractEventsCurrentCount(): Promise<number> {
    return getContractEventsCurrentCount(this.address);
  }

  subscribeMintEvent(
    options: EventSubscribeOptions<HeldItemsTypes.MintEvent>,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvent(
      HeldItems.contract,
      this,
      options,
      "Mint",
      fromCount
    );
  }

  view = {
    getCollectionUri: async (
      params?: HeldItemsTypes.CallMethodParams<"getCollectionUri">
    ): Promise<HeldItemsTypes.CallMethodResult<"getCollectionUri">> => {
      return callMethod(
        HeldItems,
        this,
        "getCollectionUri",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    totalSupply: async (
      params?: HeldItemsTypes.CallMethodParams<"totalSupply">
    ): Promise<HeldItemsTypes.CallMethodResult<"totalSupply">> => {
      return callMethod(
        HeldItems,
        this,
        "totalSupply",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    nftByIndex: async (
      params: HeldItemsTypes.CallMethodParams<"nftByIndex">
    ): Promise<HeldItemsTypes.CallMethodResult<"nftByIndex">> => {
      return callMethod(
        HeldItems,
        this,
        "nftByIndex",
        params,
        getContractByCodeHash
      );
    },
    validateNFT: async (
      params: HeldItemsTypes.CallMethodParams<"validateNFT">
    ): Promise<HeldItemsTypes.CallMethodResult<"validateNFT">> => {
      return callMethod(
        HeldItems,
        this,
        "validateNFT",
        params,
        getContractByCodeHash
      );
    },
    mint: async (
      params: HeldItemsTypes.CallMethodParams<"mint">
    ): Promise<HeldItemsTypes.CallMethodResult<"mint">> => {
      return callMethod(HeldItems, this, "mint", params, getContractByCodeHash);
    },
    editCollectionUri: async (
      params: HeldItemsTypes.CallMethodParams<"editCollectionUri">
    ): Promise<HeldItemsTypes.CallMethodResult<"editCollectionUri">> => {
      return callMethod(
        HeldItems,
        this,
        "editCollectionUri",
        params,
        getContractByCodeHash
      );
    },
    updateHeldItems: async (
      params: HeldItemsTypes.CallMethodParams<"updateHeldItems">
    ): Promise<HeldItemsTypes.CallMethodResult<"updateHeldItems">> => {
      return callMethod(
        HeldItems,
        this,
        "updateHeldItems",
        params,
        getContractByCodeHash
      );
    },
    updateHeldItemsFields: async (
      params: HeldItemsTypes.CallMethodParams<"updateHeldItemsFields">
    ): Promise<HeldItemsTypes.CallMethodResult<"updateHeldItemsFields">> => {
      return callMethod(
        HeldItems,
        this,
        "updateHeldItemsFields",
        params,
        getContractByCodeHash
      );
    },
    updateItemCode: async (
      params: HeldItemsTypes.CallMethodParams<"updateItemCode">
    ): Promise<HeldItemsTypes.CallMethodResult<"updateItemCode">> => {
      return callMethod(
        HeldItems,
        this,
        "updateItemCode",
        params,
        getContractByCodeHash
      );
    },
    updateItemFields: async (
      params: HeldItemsTypes.CallMethodParams<"updateItemFields">
    ): Promise<HeldItemsTypes.CallMethodResult<"updateItemFields">> => {
      return callMethod(
        HeldItems,
        this,
        "updateItemFields",
        params,
        getContractByCodeHash
      );
    },
  };

  transact = {
    getCollectionUri: async (
      params: HeldItemsTypes.SignExecuteMethodParams<"getCollectionUri">
    ): Promise<HeldItemsTypes.SignExecuteMethodResult<"getCollectionUri">> => {
      return signExecuteMethod(HeldItems, this, "getCollectionUri", params);
    },
    totalSupply: async (
      params: HeldItemsTypes.SignExecuteMethodParams<"totalSupply">
    ): Promise<HeldItemsTypes.SignExecuteMethodResult<"totalSupply">> => {
      return signExecuteMethod(HeldItems, this, "totalSupply", params);
    },
    nftByIndex: async (
      params: HeldItemsTypes.SignExecuteMethodParams<"nftByIndex">
    ): Promise<HeldItemsTypes.SignExecuteMethodResult<"nftByIndex">> => {
      return signExecuteMethod(HeldItems, this, "nftByIndex", params);
    },
    validateNFT: async (
      params: HeldItemsTypes.SignExecuteMethodParams<"validateNFT">
    ): Promise<HeldItemsTypes.SignExecuteMethodResult<"validateNFT">> => {
      return signExecuteMethod(HeldItems, this, "validateNFT", params);
    },
    mint: async (
      params: HeldItemsTypes.SignExecuteMethodParams<"mint">
    ): Promise<HeldItemsTypes.SignExecuteMethodResult<"mint">> => {
      return signExecuteMethod(HeldItems, this, "mint", params);
    },
    editCollectionUri: async (
      params: HeldItemsTypes.SignExecuteMethodParams<"editCollectionUri">
    ): Promise<HeldItemsTypes.SignExecuteMethodResult<"editCollectionUri">> => {
      return signExecuteMethod(HeldItems, this, "editCollectionUri", params);
    },
    updateHeldItems: async (
      params: HeldItemsTypes.SignExecuteMethodParams<"updateHeldItems">
    ): Promise<HeldItemsTypes.SignExecuteMethodResult<"updateHeldItems">> => {
      return signExecuteMethod(HeldItems, this, "updateHeldItems", params);
    },
    updateHeldItemsFields: async (
      params: HeldItemsTypes.SignExecuteMethodParams<"updateHeldItemsFields">
    ): Promise<
      HeldItemsTypes.SignExecuteMethodResult<"updateHeldItemsFields">
    > => {
      return signExecuteMethod(
        HeldItems,
        this,
        "updateHeldItemsFields",
        params
      );
    },
    updateItemCode: async (
      params: HeldItemsTypes.SignExecuteMethodParams<"updateItemCode">
    ): Promise<HeldItemsTypes.SignExecuteMethodResult<"updateItemCode">> => {
      return signExecuteMethod(HeldItems, this, "updateItemCode", params);
    },
    updateItemFields: async (
      params: HeldItemsTypes.SignExecuteMethodParams<"updateItemFields">
    ): Promise<HeldItemsTypes.SignExecuteMethodResult<"updateItemFields">> => {
      return signExecuteMethod(HeldItems, this, "updateItemFields", params);
    },
  };

  async multicall<Callss extends HeldItemsTypes.MultiCallParams[]>(
    ...callss: Callss
  ): Promise<HeldItemsTypes.MulticallReturnType<Callss>> {
    return (await multicallMethods(
      HeldItems,
      this,
      callss,
      getContractByCodeHash
    )) as HeldItemsTypes.MulticallReturnType<Callss>;
  }
}
