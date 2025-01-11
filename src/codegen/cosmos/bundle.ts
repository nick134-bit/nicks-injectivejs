import * as _2 from "./auth/v1beta1/auth";
import * as _3 from "./auth/v1beta1/query";
import * as _4 from "./authz/v1beta1/authz";
import * as _5 from "./authz/v1beta1/tx";
import * as _6 from "./bank/v1beta1/bank";
import * as _7 from "./bank/v1beta1/query";
import * as _8 from "./bank/v1beta1/tx";
import * as _9 from "./base/abci/v1beta1/abci";
import * as _10 from "./base/query/v1beta1/pagination";
import * as _11 from "./base/v1beta1/coin";
import * as _12 from "./crypto/ed25519/keys";
import * as _13 from "./crypto/multisig/v1beta1/multisig";
import * as _14 from "./crypto/secp256k1/keys";
import * as _15 from "./crypto/secp256r1/keys";
import * as _16 from "./distribution/v1beta1/distribution";
import * as _17 from "./distribution/v1beta1/tx";
import * as _18 from "./feegrant/v1beta1/tx";
import * as _19 from "./gov/v1/gov";
import * as _20 from "./gov/v1/tx";
import * as _21 from "./gov/v1beta1/gov";
import * as _22 from "./gov/v1beta1/query";
import * as _23 from "./gov/v1beta1/tx";
import * as _24 from "./group/v1/tx";
import * as _25 from "./group/v1/types";
import * as _26 from "./ics23/v1/proofs";
import * as _27 from "./msg/v1/msg";
import * as _28 from "./query/v1/query";
import * as _29 from "./staking/v1beta1/query";
import * as _30 from "./staking/v1beta1/staking";
import * as _31 from "./staking/v1beta1/tx";
import * as _32 from "./tx/signing/v1beta1/signing";
import * as _33 from "./tx/v1beta1/service";
import * as _34 from "./tx/v1beta1/tx";
import * as _35 from "./upgrade/v1beta1/upgrade";
import * as _36 from "./vesting/v1beta1/tx";
import * as _37 from "./vesting/v1beta1/vesting";
import * as _128 from "./authz/v1beta1/tx.amino";
import * as _129 from "./bank/v1beta1/tx.amino";
import * as _130 from "./distribution/v1beta1/tx.amino";
import * as _131 from "./feegrant/v1beta1/tx.amino";
import * as _132 from "./gov/v1/tx.amino";
import * as _133 from "./gov/v1beta1/tx.amino";
import * as _134 from "./group/v1/tx.amino";
import * as _135 from "./staking/v1beta1/tx.amino";
import * as _136 from "./vesting/v1beta1/tx.amino";
import * as _137 from "./authz/v1beta1/tx.registry";
import * as _138 from "./bank/v1beta1/tx.registry";
import * as _139 from "./distribution/v1beta1/tx.registry";
import * as _140 from "./feegrant/v1beta1/tx.registry";
import * as _141 from "./gov/v1/tx.registry";
import * as _142 from "./gov/v1beta1/tx.registry";
import * as _143 from "./group/v1/tx.registry";
import * as _144 from "./staking/v1beta1/tx.registry";
import * as _145 from "./vesting/v1beta1/tx.registry";
export namespace cosmos {
  export namespace auth {
    export const v1beta1 = {
      ..._2,
      ..._3
    };
  }
  export namespace authz {
    export const v1beta1 = {
      ..._4,
      ..._5,
      ..._128,
      ..._137
    };
  }
  export namespace bank {
    export const v1beta1 = {
      ..._6,
      ..._7,
      ..._8,
      ..._129,
      ..._138
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._9
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._10
      };
    }
    export const v1beta1 = {
      ..._11
    };
  }
  export namespace crypto {
    export const ed25519 = {
      ..._12
    };
    export namespace multisig {
      export const v1beta1 = {
        ..._13
      };
    }
    export const secp256k1 = {
      ..._14
    };
    export const secp256r1 = {
      ..._15
    };
  }
  export namespace distribution {
    export const v1beta1 = {
      ..._16,
      ..._17,
      ..._130,
      ..._139
    };
  }
  export namespace feegrant {
    export const v1beta1 = {
      ..._18,
      ..._131,
      ..._140
    };
  }
  export namespace gov {
    export const v1 = {
      ..._19,
      ..._20,
      ..._132,
      ..._141
    };
    export const v1beta1 = {
      ..._21,
      ..._22,
      ..._23,
      ..._133,
      ..._142
    };
  }
  export namespace group {
    export const v1 = {
      ..._24,
      ..._25,
      ..._134,
      ..._143
    };
  }
  export namespace ics23 {
    export const v1 = {
      ..._26
    };
  }
  export namespace msg {
    export const v1 = {
      ..._27
    };
  }
  export namespace query {
    export const v1 = {
      ..._28
    };
  }
  export namespace staking {
    export const v1beta1 = {
      ..._29,
      ..._30,
      ..._31,
      ..._135,
      ..._144
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = {
        ..._32
      };
    }
    export const v1beta1 = {
      ..._33,
      ..._34
    };
  }
  export namespace upgrade {
    export const v1beta1 = {
      ..._35
    };
  }
  export namespace vesting {
    export const v1beta1 = {
      ..._36,
      ..._37,
      ..._136,
      ..._145
    };
  }
}