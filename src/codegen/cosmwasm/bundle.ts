import * as _96 from "./wasm/v1/authz";
import * as _97 from "./wasm/v1/genesis";
import * as _98 from "./wasm/v1/ibc";
import * as _99 from "./wasm/v1/proposal_legacy";
import * as _100 from "./wasm/v1/query";
import * as _101 from "./wasm/v1/tx";
import * as _102 from "./wasm/v1/types";
import * as _217 from "./wasm/v1/tx.amino";
import * as _218 from "./wasm/v1/tx.registry";
import * as _219 from "./wasm/v1/query.rpc.Query";
import * as _220 from "./wasm/v1/tx.rpc.msg";
import * as _244 from "./rpc.query";
import * as _245 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = {
      ..._96,
      ..._97,
      ..._98,
      ..._99,
      ..._100,
      ..._101,
      ..._102,
      ..._217,
      ..._218,
      ..._219,
      ..._220
    };
  }
  export const ClientFactory = {
    ..._244,
    ..._245
  };
}