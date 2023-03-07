const size64kb = 64*1024;
const utf8enc = new TextEncoder('utf-8');

function stringAsBuf(s) {
  return utf8enc.encode(s)
}

function sendStringToBuffer(s, buf, offset=0) {
  b=stringAsBuf(s)
  buf.set(b, offset)
  return b.length
}

export function hmac_sha256(key, msg) {
  const memory = crypto_hmac_sha256.memory;
  const msg_buf = stringAsBuf(msg);
  const key_buf = stringAsBuf(key);
  const msglen = msg_buf.length;
  const keylen = key_buf.length;
  const hb = 0;
  const newSize = hb+msglen+keylen+32;
  if (memory.buffer.byteLength<newSize) {
    memory.grow(Math.ceil(newSize/size64kb)+1);
    // console.log("new size: ", memory.buffer.byteLength);
  }
  // console.log(hb, newSize, hb+32, hb+msglen, hb+msglen+keylen);
  const buf = new Uint8Array(memory.buffer, hb, msglen+keylen+32);
  buf.set(msg_buf, 32);
  buf.set(key_buf, 32+msglen);
  // console.log("buf before", memory.buffer.slice(32,32+msglen));
  crypto_hmac_sha256.HMAC_SHA256(msglen, hb+32, keylen, hb+32+msglen, hb)
  return buf.slice(0, 32);
}

