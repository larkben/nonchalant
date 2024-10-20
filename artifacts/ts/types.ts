/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Address, HexString, Val, Struct } from "@alephium/web3";
import { default as allStructsJson } from "../structs.ral.json";
export const AllStructs = allStructsJson.map((json) => Struct.fromJson(json));
export interface DIAOracleValue extends Record<string, Val> {
  value: bigint;
  timestamp: bigint;
}
export interface MoveReturn extends Record<string, Val> {
  p: bigint;
  a: bigint;
  r: bigint;
}
export interface P extends Record<string, Val> {
  x: bigint;
  y: bigint;
}
