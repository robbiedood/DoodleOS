const crypto = require("crypto");

// 生成私钥
const { privateKey, publicKey } = crypto.generateKeyPairSync("ec", {
  namedCurve: "secp256k1",
  privateKeyEncoding: {
    type: "pkcs8",
    format: "pem",
  },
  publicKeyEncoding: {
    type: "spki",
    format: "pem",
  },
});

console.log("Private Key:", privateKey);
console.log("Public Key:", publicKey);
