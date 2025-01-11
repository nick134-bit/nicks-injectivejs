import * as _59 from "./auction/v1beta1/auction";
import * as _60 from "./auction/v1beta1/genesis";
import * as _61 from "./auction/v1beta1/query";
import * as _62 from "./auction/v1beta1/tx";
import * as _63 from "./crypto/v1beta1/ethsecp256k1/keys";
import * as _64 from "./exchange/v1beta1/authz";
import * as _65 from "./exchange/v1beta1/events";
import * as _66 from "./exchange/v1beta1/exchange";
import * as _67 from "./exchange/v1beta1/genesis";
import * as _68 from "./exchange/v1beta1/proposal";
import * as _69 from "./exchange/v1beta1/query";
import * as _70 from "./exchange/v1beta1/tx";
import * as _71 from "./insurance/v1beta1/events";
import * as _72 from "./insurance/v1beta1/genesis";
import * as _73 from "./insurance/v1beta1/insurance";
import * as _74 from "./insurance/v1beta1/query";
import * as _75 from "./insurance/v1beta1/tx";
import * as _76 from "./ocr/v1beta1/genesis";
import * as _77 from "./ocr/v1beta1/ocr";
import * as _78 from "./ocr/v1beta1/query";
import * as _79 from "./ocr/v1beta1/tx";
import * as _80 from "./oracle/v1beta1/events";
import * as _81 from "./oracle/v1beta1/genesis";
import * as _82 from "./oracle/v1beta1/oracle";
import * as _83 from "./oracle/v1beta1/proposal";
import * as _84 from "./oracle/v1beta1/query";
import * as _85 from "./oracle/v1beta1/tx";
import * as _86 from "./peggy/v1/attestation";
import * as _87 from "./peggy/v1/batch";
import * as _88 from "./peggy/v1/ethereum_signer";
import * as _89 from "./peggy/v1/events";
import * as _90 from "./peggy/v1/genesis";
import * as _91 from "./peggy/v1/msgs";
import * as _92 from "./peggy/v1/params";
import * as _93 from "./peggy/v1/pool";
import * as _94 from "./peggy/v1/proposal";
import * as _95 from "./peggy/v1/query";
import * as _96 from "./peggy/v1/types";
import * as _97 from "./permissions/v1beta1/events";
import * as _98 from "./permissions/v1beta1/genesis";
import * as _99 from "./permissions/v1beta1/params";
import * as _100 from "./permissions/v1beta1/permissions";
import * as _101 from "./permissions/v1beta1/query";
import * as _102 from "./permissions/v1beta1/tx";
import * as _103 from "./stream/v1beta1/query";
import * as _104 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _105 from "./tokenfactory/v1beta1/events";
import * as _106 from "./tokenfactory/v1beta1/genesis";
import * as _107 from "./tokenfactory/v1beta1/params";
import * as _108 from "./tokenfactory/v1beta1/query";
import * as _109 from "./tokenfactory/v1beta1/tx";
import * as _110 from "./types/v1beta1/account";
import * as _111 from "./types/v1beta1/tx_ext";
import * as _112 from "./types/v1beta1/tx_response";
import * as _113 from "./wasmx/v1/events";
import * as _114 from "./wasmx/v1/genesis";
import * as _115 from "./wasmx/v1/proposal";
import * as _116 from "./wasmx/v1/query";
import * as _117 from "./wasmx/v1/tx";
import * as _118 from "./wasmx/v1/wasmx";
import * as _156 from "./auction/v1beta1/tx.amino";
import * as _157 from "./exchange/v1beta1/tx.amino";
import * as _158 from "./insurance/v1beta1/tx.amino";
import * as _159 from "./ocr/v1beta1/tx.amino";
import * as _160 from "./oracle/v1beta1/tx.amino";
import * as _161 from "./peggy/v1/msgs.amino";
import * as _162 from "./permissions/v1beta1/tx.amino";
import * as _163 from "./tokenfactory/v1beta1/tx.amino";
import * as _164 from "./wasmx/v1/tx.amino";
import * as _165 from "./auction/v1beta1/tx.registry";
import * as _166 from "./exchange/v1beta1/tx.registry";
import * as _167 from "./insurance/v1beta1/tx.registry";
import * as _168 from "./ocr/v1beta1/tx.registry";
import * as _169 from "./oracle/v1beta1/tx.registry";
import * as _170 from "./peggy/v1/msgs.registry";
import * as _171 from "./permissions/v1beta1/tx.registry";
import * as _172 from "./tokenfactory/v1beta1/tx.registry";
import * as _173 from "./wasmx/v1/tx.registry";
export namespace injective {
  export namespace auction {
    export const v1beta1 = {
      ..._59,
      ..._60,
      ..._61,
      ..._62,
      ..._156,
      ..._165
    };
  }
  export namespace crypto {
    export namespace v1beta1 {
      export const ethsecp256k1 = {
        ..._63
      };
    }
  }
  export namespace exchange {
    export const v1beta1 = {
      ..._64,
      ..._65,
      ..._66,
      ..._67,
      ..._68,
      ..._69,
      ..._70,
      ..._157,
      ..._166
    };
  }
  export namespace insurance {
    export const v1beta1 = {
      ..._71,
      ..._72,
      ..._73,
      ..._74,
      ..._75,
      ..._158,
      ..._167
    };
  }
  export namespace ocr {
    export const v1beta1 = {
      ..._76,
      ..._77,
      ..._78,
      ..._79,
      ..._159,
      ..._168
    };
  }
  export namespace oracle {
    export const v1beta1 = {
      ..._80,
      ..._81,
      ..._82,
      ..._83,
      ..._84,
      ..._85,
      ..._160,
      ..._169
    };
  }
  export namespace peggy {
    export const v1 = {
      ..._86,
      ..._87,
      ..._88,
      ..._89,
      ..._90,
      ..._91,
      ..._92,
      ..._93,
      ..._94,
      ..._95,
      ..._96,
      ..._161,
      ..._170
    };
  }
  export namespace permissions {
    export const v1beta1 = {
      ..._97,
      ..._98,
      ..._99,
      ..._100,
      ..._101,
      ..._102,
      ..._162,
      ..._171
    };
  }
  export namespace stream {
    export const v1beta1 = {
      ..._103
    };
  }
  export namespace tokenfactory {
    export const v1beta1 = {
      ..._104,
      ..._105,
      ..._106,
      ..._107,
      ..._108,
      ..._109,
      ..._163,
      ..._172
    };
  }
  export namespace types {
    export const v1beta1 = {
      ..._110,
      ..._111,
      ..._112
    };
  }
  export namespace wasmx {
    export const v1 = {
      ..._113,
      ..._114,
      ..._115,
      ..._116,
      ..._117,
      ..._118,
      ..._164,
      ..._173
    };
  }
}