/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Address,
  ExecutableScript,
  ExecuteScriptParams,
  ExecuteScriptResult,
  Script,
  SignerProvider,
  HexString,
} from "@alephium/web3";
import { default as AddStakeScriptJson } from "../staking/AddStake.ral.json";
import { default as BuildtokenScriptJson } from "../createtoken/Buildtoken.ral.json";
import { default as CollectFeesScriptJson } from "../createtoken/CollectFees.ral.json";
import { default as CollectStakeFeesScriptJson } from "../staking/CollectStakeFees.ral.json";
import { default as CreateStakeProjectScriptJson } from "../staking/CreateStakeProject.ral.json";
import { default as DestroyScriptJson } from "../scripts/Destroy.ral.json";
import { default as DestroycreatorScriptJson } from "../createtoken/Destroycreator.ral.json";
import { default as DistributeScriptJson } from "../staking/Distribute.ral.json";
import { default as EditRewardsScriptJson } from "../staking/EditRewards.ral.json";
import { default as EditfeeScriptJson } from "../scripts/Editfee.ral.json";
import { default as GettokenScriptJson } from "../scripts/Gettoken.ral.json";
import { default as SendoutScriptJson } from "../scripts/Sendout.ral.json";
import { default as TopupScriptJson } from "../scripts/Topup.ral.json";
import { default as UpdateCreationFeeScriptJson } from "../createtoken/UpdateCreationFee.ral.json";
import { default as WithdrawStakeScriptJson } from "../staking/WithdrawStake.ral.json";
import { default as WithdrawlassetsScriptJson } from "../scripts/Withdrawlassets.ral.json";

export const AddStake = new ExecutableScript<{
  contract: HexString;
  amount: bigint;
}>(Script.fromJson(AddStakeScriptJson, "", []));

export const Buildtoken = new ExecutableScript<{
  contract: HexString;
  symbol: HexString;
  name: HexString;
  decimals: bigint;
  tokenTotal: bigint;
}>(Script.fromJson(BuildtokenScriptJson, "", []));

export const CollectFees = new ExecutableScript<{ contract: HexString }>(
  Script.fromJson(CollectFeesScriptJson, "", [])
);

export const CollectStakeFees = new ExecutableScript<{ contract: HexString }>(
  Script.fromJson(CollectStakeFeesScriptJson, "", [])
);

export const CreateStakeProject = new ExecutableScript<{
  contract: HexString;
  token: HexString;
}>(Script.fromJson(CreateStakeProjectScriptJson, "", []));

export const Destroy = new ExecutableScript<{ contract: HexString }>(
  Script.fromJson(DestroyScriptJson, "", [])
);

export const Destroycreator = new ExecutableScript<{ contract: HexString }>(
  Script.fromJson(DestroycreatorScriptJson, "", [])
);

export const Distribute = new ExecutableScript<{ contract: HexString }>(
  Script.fromJson(DistributeScriptJson, "", [])
);

export const EditRewards = new ExecutableScript<{
  contract: HexString;
  newreward: bigint;
}>(Script.fromJson(EditRewardsScriptJson, "", []));

export const Editfee = new ExecutableScript<{
  contract: HexString;
  edit: bigint;
}>(Script.fromJson(EditfeeScriptJson, "", []));

export const Gettoken = new ExecutableScript<{
  contract: HexString;
  amount: bigint;
}>(Script.fromJson(GettokenScriptJson, "", []));

export const Sendout = new ExecutableScript<{
  contract: HexString;
  amount: bigint;
}>(Script.fromJson(SendoutScriptJson, "", []));

export const Topup = new ExecutableScript<{
  contract: HexString;
  amount: bigint;
}>(Script.fromJson(TopupScriptJson, "", []));

export const UpdateCreationFee = new ExecutableScript<{
  contract: HexString;
  amount: bigint;
}>(Script.fromJson(UpdateCreationFeeScriptJson, "", []));

export const WithdrawStake = new ExecutableScript<{
  contract: HexString;
  amount: bigint;
}>(Script.fromJson(WithdrawStakeScriptJson, "", []));

export const Withdrawlassets = new ExecutableScript<{ contract: HexString }>(
  Script.fromJson(WithdrawlassetsScriptJson, "", [])
);
