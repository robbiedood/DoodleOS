const base64ToHex = (str) => {
  const raw = atob(str);
  let result = "";
  for (let i = 0; i < raw.length; i++) {
    const hex = raw.charCodeAt(i).toString(16);
    result += hex.length === 2 ? hex : "0" + hex;
  }
  return result.toUpperCase();
};

// 您的公钥
const publicKeyBase64 =
  "MFYwEAYHKoZIzj0CAQYFK4EEAAoDQgAETRWLBIGX3DBeQI15jL5vqi9LVDipjWW1X6M";

// 转换为十六进制
const publicKeyHex = base64ToHex(publicKeyBase64);

// 生成 Nostr 地址
const nostrAddress = publicKeyHex;

console.log("Nostr Address:", nostrAddress);
// 3056301006072A8648CE3D020106052B8104000A034200044D158B048197DC305E408D798CBE6FAA2F4B5438A98D65B55FA3
