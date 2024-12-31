// @ts-nocheck

import { StellarSignRequest, SignType, AvalancheSignRequest } from "../src";
import { CryptoKeypath, PathComponent } from "../src";
import * as uuid from "uuid";

describe("avalanche-sign-request", () => {
  it("test should generate avalanche-sign-reqeust", () => {
    const avalancheData = Buffer.from(
      "00000000000000000001ed5f38341e436e5d46e2bb00b45d62ae97d1b050c64bc634ae10626739e35c4b0000000121e67317cbc4be2aeb00677ad6462778a8f52274b9d605df2591b23027a87dff00000007000000000089544000000000000000000000000100000001512e7191685398f00663e12197a3d8f6012d9ea300000001db720ad6707915cc4751fb7e5491a3af74e127a1d81817abe9438590c0833fe10000000021e67317cbc4be2aeb00677ad6462778a8f52274b9d605df2591b23027a87dff000000050000000000989680000000010000000000000000",
      "hex"
    );

    const avalancheSignRequest = new AvalancheSignRequest({
      data: avalancheData,
    });

    const cborHex = avalancheSignRequest.toCBOR().toString("hex");
    const ur = avalancheSignRequest.toUREncoder(1000).nextPart();
    expect(ur).toBe(
      "ur:avax-sign-request/oyaohdueaeaeaeaeaeaeaeaeaeadweheeteeckfxjthlfgvorkaeqzhlidplmsttpfgdswgrsweeplbeidioesvlhhgraeaeaeadclvajkchsbssrndrwmaeiokntbfgdikspdykcpjyrhtbahurdameprdydipdkizmaeaeaeataeaeaeaeaeldghfzaeaeaeaeaeaeaeaeaeaeaeadaeaeaeadgydmjsmeisgumkwtamiavyclmsottpynaddpnnotaeaeaeaduyjpbktbjokkbzsfflgyzokbghmeotpejyvydioytpcschpywlfxlpmhrtlsfhvyaeaeaeaeclvajkchsbssrndrwmaeiokntbfgdikspdykcpjyrhtbahurdameprdydipdkizmaeaeaeahaeaeaeaeaemkmtlaaeaeaeadaeaeaeaeaeaeaeaefeatcemu"
    );
  });
});
