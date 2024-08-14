import { DUST_AMOUNT, ExecutableScript, ExecuteScriptResult, SignerProvider, addressFromContractId, contractIdFromAddress, hexToString, stringToHex } from '@alephium/web3'
import { Topup, Sendout, Destroy, Buildtoken, Gettoken, Editfee, Destroycreator, CollectFees, UpdateCreationFee, MintAlf, MintOgAlf, CollectOgAlfFees, EditOgAlfFees, DestroyOgAlfProtocol, ActivateWalfProtocol} from '../../artifacts/ts/scripts'
import { TokenCreate, TokenFaucetConfig, TokenTemplate } from './utils'
import { Faucet, Token } from '../../artifacts/ts'
import * as web3 from '@alephium/web3'
import { error } from 'console'

// Token Creation Tool
export const BuildToken = async (
  signerProvider: SignerProvider,
  symbol: string,
  name: string,
  decimals: string,
  supply: string
): Promise<ExecuteScriptResult> => {
  return await Buildtoken.execute(signerProvider, {
    initialFields: {
      contract: "9600a4512bbe8747bfa6fcb6a85d4f7fc97f1c59281e5a87ff168d2305096900",
      symbol: web3.stringToHex(symbol),
      name: web3.stringToHex(name),
      decimals: BigInt(decimals),
      tokenTotal: BigInt(supply)
    },
    attoAlphAmount: DUST_AMOUNT + web3.ONE_ALPH,
    tokens: [{id: web3.ALPH_TOKEN_ID, amount: 10000000000000000000n}]
    
  })
}

// Destory Token Creation Tool
export const DestroyTokenCreator = async (
  signerProvider: SignerProvider
): Promise<ExecuteScriptResult> => {
  return await Destroycreator.execute(signerProvider, {
    initialFields: {
      contract: "9600a4512bbe8747bfa6fcb6a85d4f7fc97f1c59281e5a87ff168d2305096900"
    },
    attoAlphAmount: DUST_AMOUNT
  })
}

// Collect Token Creator Fees
export const CollectCreatorFees = async (
  signerProvider: SignerProvider
): Promise<ExecuteScriptResult> => {
  return await CollectFees.execute(signerProvider, {
    initialFields: {
      contract: "9600a4512bbe8747bfa6fcb6a85d4f7fc97f1c59281e5a87ff168d2305096900"
    },
    attoAlphAmount: DUST_AMOUNT
  })
}

// Token Creator Fee Edit
export const EditCreatorFees = async (
  signerProvider: SignerProvider,
  amount: string
): Promise<ExecuteScriptResult> => {
  return await UpdateCreationFee.execute(signerProvider, {
    initialFields: {
      contract: "9600a4512bbe8747bfa6fcb6a85d4f7fc97f1c59281e5a87ff168d2305096900",
      amount: BigInt(amount),
    },
    attoAlphAmount: DUST_AMOUNT
  })
}

// Rhone Gasless Transactions Tests
// ALPHFaucet
/*
export const FaucetDeposit = async (
  signerProvider: SignerProvider,
  amount: string
): Promise<ExecuteScriptResult> => {
  return await WithdrawAlph.execute(signerProvider, {
    initialFields: {
      contract: "9600a4512bbe8747bfa6fcb6a85d4f7fc97f1c59281e5a87ff168d2305096900",
      amount: BigInt(amount)
    },
    attoAlphAmount: DUST_AMOUNT,
    tokens: [{id: web3.ALPH_TOKEN_ID, amount: BigInt(amount)}]
  })
}

// ALPHFaucet
export const FaucetWithdraw = async (
  signerProvider: SignerProvider,
  amount: string
): Promise<ExecuteScriptResult> => {
  return await DepositAlph.execute(signerProvider, {
    initialFields: {
      contract: "9600a4512bbe8747bfa6fcb6a85d4f7fc97f1c59281e5a87ff168d2305096900",
      amount: BigInt(amount)
    }
  })
}
*/

// ------------------------------------------------- //
//                                                   //
//                 Staking V1 - 5/14/24              //
//                                                   //
// ------------------------------------------------- //

// End of Factory

// ------------------------------------------------- //
//                                                   //
//           Wrapped Alf Protcol - 5/20/24           //
//                                                   //
// ------------------------------------------------- //

// mint wrapped alf
export const ServiceMintWrappedAlf = async (
  signerProvider: SignerProvider,
  amount: string
): Promise<ExecuteScriptResult> => {
  return await MintAlf.execute(signerProvider, {
    initialFields: {
      contract: "8a8fe3c9b1e5e8ac47363a79c0afe21b3152f6bad0e8b23de73ad0e4f434c600",
      amount: BigInt(amount)
    },
    attoAlphAmount: DUST_AMOUNT,
    tokens: [{id: "c0c0af7a481e3e50c50e418bf8ff6923dc4d878ac3744474e8c708a8adccfb00", amount: BigInt(amount)}, {id: web3.ALPH_TOKEN_ID, amount: 1000000000000000000n}]
  })
}

// mint wrapped alf -- contract needs to be deployed then it can be edited
export const ServiceMintOgAlf = async (
  signerProvider: SignerProvider,
  amount: string
): Promise<ExecuteScriptResult> => {
  return await MintOgAlf.execute(signerProvider, {
    initialFields: {
      contract: "8a8fe3c9b1e5e8ac47363a79c0afe21b3152f6bad0e8b23de73ad0e4f434c600",
      amount: BigInt(amount)
    },
    attoAlphAmount: DUST_AMOUNT,
    tokens: [{id: "e8b7cc961cb7689649234d9e7890e134c5a6619759ea0212d6457b06cbed9c00", amount: BigInt(amount)}, {id: web3.ALPH_TOKEN_ID, amount: 1000000000000000000n}]
  })
}

export const ServiceCollectOgAlfFees = async (
  signerProvider: SignerProvider
): Promise<ExecuteScriptResult> => {
  return await CollectOgAlfFees.execute(signerProvider, {
    initialFields: {
      contract: "8a8fe3c9b1e5e8ac47363a79c0afe21b3152f6bad0e8b23de73ad0e4f434c600"
    },
    attoAlphAmount: DUST_AMOUNT
  })
}

export const ServiceEditFees = async (
  signerProvider: SignerProvider,
  amount: string
): Promise<ExecuteScriptResult> => {
  return await EditOgAlfFees.execute(signerProvider, {
    initialFields: {
      contract: "8a8fe3c9b1e5e8ac47363a79c0afe21b3152f6bad0e8b23de73ad0e4f434c600",
      newfee: BigInt(amount)
    },
    attoAlphAmount: DUST_AMOUNT
  })
}

export const ServiceTopupWalf = async (
  signerProvider: SignerProvider
): Promise<ExecuteScriptResult> => {
  return await ActivateWalfProtocol.execute(signerProvider, {
    initialFields: {
      contract: "8a8fe3c9b1e5e8ac47363a79c0afe21b3152f6bad0e8b23de73ad0e4f434c600"
    },
    attoAlphAmount: DUST_AMOUNT,
    tokens: [{id: "e8b7cc961cb7689649234d9e7890e134c5a6619759ea0212d6457b06cbed9c00", amount: BigInt(99000000000000000000) }]
  })
}

export const ServiceDestroyWrappedAlfProtocol = async (
  signerProvider: SignerProvider
): Promise<ExecuteScriptResult> => {
  return await DestroyOgAlfProtocol.execute(signerProvider, {
    initialFields: {
      contract: "8a8fe3c9b1e5e8ac47363a79c0afe21b3152f6bad0e8b23de73ad0e4f434c600"
    },
    attoAlphAmount: DUST_AMOUNT
  })
}

