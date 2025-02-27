import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as injectiveAuctionV1beta1TxRegistry from "./auction/v1beta1/tx.registry";
import * as injectiveExchangeV1beta1TxRegistry from "./exchange/v1beta1/tx.registry";
import * as injectiveInsuranceV1beta1TxRegistry from "./insurance/v1beta1/tx.registry";
import * as injectiveOcrV1beta1TxRegistry from "./ocr/v1beta1/tx.registry";
import * as injectiveOracleV1beta1TxRegistry from "./oracle/v1beta1/tx.registry";
import * as injectivePeggyV1MsgsRegistry from "./peggy/v1/msgs.registry";
import * as injectivePermissionsV1beta1TxRegistry from "./permissions/v1beta1/tx.registry";
import * as injectiveTokenfactoryV1beta1TxRegistry from "./tokenfactory/v1beta1/tx.registry";
import * as injectiveWasmxV1TxRegistry from "./wasmx/v1/tx.registry";
import * as injectiveAuctionV1beta1TxAmino from "./auction/v1beta1/tx.amino";
import * as injectiveExchangeV1beta1TxAmino from "./exchange/v1beta1/tx.amino";
import * as injectiveInsuranceV1beta1TxAmino from "./insurance/v1beta1/tx.amino";
import * as injectiveOcrV1beta1TxAmino from "./ocr/v1beta1/tx.amino";
import * as injectiveOracleV1beta1TxAmino from "./oracle/v1beta1/tx.amino";
import * as injectivePeggyV1MsgsAmino from "./peggy/v1/msgs.amino";
import * as injectivePermissionsV1beta1TxAmino from "./permissions/v1beta1/tx.amino";
import * as injectiveTokenfactoryV1beta1TxAmino from "./tokenfactory/v1beta1/tx.amino";
import * as injectiveWasmxV1TxAmino from "./wasmx/v1/tx.amino";
export const injectiveAminoConverters = {
  ...injectiveAuctionV1beta1TxAmino.AminoConverter,
  ...injectiveExchangeV1beta1TxAmino.AminoConverter,
  ...injectiveInsuranceV1beta1TxAmino.AminoConverter,
  ...injectiveOcrV1beta1TxAmino.AminoConverter,
  ...injectiveOracleV1beta1TxAmino.AminoConverter,
  ...injectivePeggyV1MsgsAmino.AminoConverter,
  ...injectivePermissionsV1beta1TxAmino.AminoConverter,
  ...injectiveTokenfactoryV1beta1TxAmino.AminoConverter,
  ...injectiveWasmxV1TxAmino.AminoConverter
};
export const injectiveProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...injectiveAuctionV1beta1TxRegistry.registry, ...injectiveExchangeV1beta1TxRegistry.registry, ...injectiveInsuranceV1beta1TxRegistry.registry, ...injectiveOcrV1beta1TxRegistry.registry, ...injectiveOracleV1beta1TxRegistry.registry, ...injectivePeggyV1MsgsRegistry.registry, ...injectivePermissionsV1beta1TxRegistry.registry, ...injectiveTokenfactoryV1beta1TxRegistry.registry, ...injectiveWasmxV1TxRegistry.registry];
export const getSigningInjectiveClientOptions = ({
  defaultTypes = defaultRegistryTypes
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...injectiveProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...injectiveAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningInjectiveClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes
}: {
  rpcEndpoint: string | HttpEndpoint;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const {
    registry,
    aminoTypes
  } = getSigningInjectiveClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry: registry as any,
    aminoTypes
  });
  return client;
};