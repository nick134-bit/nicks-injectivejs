import * as _49 from "./applications/transfer/v1/transfer";
import * as _50 from "./applications/transfer/v1/tx";
import * as _51 from "./core/channel/v1/channel";
import * as _52 from "./core/channel/v1/tx";
import * as _53 from "./core/channel/v1/upgrade";
import * as _54 from "./core/client/v1/client";
import * as _55 from "./core/client/v1/tx";
import * as _56 from "./core/commitment/v1/commitment";
import * as _57 from "./core/connection/v1/connection";
import * as _58 from "./core/connection/v1/tx";
import * as _148 from "./applications/transfer/v1/tx.amino";
import * as _149 from "./core/channel/v1/tx.amino";
import * as _150 from "./core/client/v1/tx.amino";
import * as _151 from "./core/connection/v1/tx.amino";
import * as _152 from "./applications/transfer/v1/tx.registry";
import * as _153 from "./core/channel/v1/tx.registry";
import * as _154 from "./core/client/v1/tx.registry";
import * as _155 from "./core/connection/v1/tx.registry";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = {
        ..._49,
        ..._50,
        ..._148,
        ..._152
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._51,
        ..._52,
        ..._53,
        ..._149,
        ..._153
      };
    }
    export namespace client {
      export const v1 = {
        ..._54,
        ..._55,
        ..._150,
        ..._154
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._56
      };
    }
    export namespace connection {
      export const v1 = {
        ..._57,
        ..._58,
        ..._151,
        ..._155
      };
    }
  }
}