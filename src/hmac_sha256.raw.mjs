
  var bufferView;
  var base64ReverseLookup = new Uint8Array(123/*'z'+1*/);
  for (var i = 25; i >= 0; --i) {
    base64ReverseLookup[48+i] = 52+i; // '0-9'
    base64ReverseLookup[65+i] = i; // 'A-Z'
    base64ReverseLookup[97+i] = 26+i; // 'a-z'
  }
  base64ReverseLookup[43] = 62; // '+'
  base64ReverseLookup[47] = 63; // '/'
  /** @noinline Inlining this function would mean expanding the base64 string 4x times in the source code, which Closure seems to be happy to do. */
  function base64DecodeToExistingUint8Array(uint8Array, offset, b64) {
    var b1, b2, i = 0, j = offset, bLength = b64.length, end = offset + (bLength*3>>2) - (b64[bLength-2] == '=') - (b64[bLength-1] == '=');
    for (; i < bLength; i += 4) {
      b1 = base64ReverseLookup[b64.charCodeAt(i+1)];
      b2 = base64ReverseLookup[b64.charCodeAt(i+2)];
      uint8Array[j++] = base64ReverseLookup[b64.charCodeAt(i)] << 2 | b1 >> 4;
      if (j < end) uint8Array[j++] = b1 << 4 | b2 >> 2;
      if (j < end) uint8Array[j++] = b2 << 6 | base64ReverseLookup[b64.charCodeAt(i+3)];
    }
    return uint8Array;
  }
function initActiveSegments(imports) {
  base64DecodeToExistingUint8Array(bufferView, 1024, "Z+YJaoWuZ7ty8248OvVPpX9SDlGMaAWbq9mDHxnN4FuYL4pCkUQ3cc/7wLWl27XpW8JWOfER8Vmkgj+S1V4cq5iqB9gBW4MSvoUxJMN9DFV0Xb5y/rHegKcG3Jt08ZvBwWmb5IZHvu/GncEPzKEMJG8s6S2qhHRK3KmwXNqI+XZSUT6YbcYxqMgnA7DHf1m/8wvgxkeRp9VRY8oGZykpFIUKtyc4IRsu/G0sTRMNOFNUcwpluwpqdi7JwoGFLHKSoei/oktmGqhwi0vCo1FsxxnoktEkBpnWhTUO9HCgahAWwaQZCGw3Hkx3SCe1vLA0swwcOUqq2E5Pypxb828uaO6Cj3RvY6V4FHjIhAgCx4z6/76Q62xQpPej+b7yeHHG");
}

  var scratchBuffer = new ArrayBuffer(16);
  var i32ScratchView = new Int32Array(scratchBuffer);
  var f32ScratchView = new Float32Array(scratchBuffer);
  var f64ScratchView = new Float64Array(scratchBuffer);
  
  function wasm2js_memory_copy(dest, source, size) {
    // TODO: traps on invalid things
    bufferView.copyWithin(dest, source, source + size);
  }
      
  function wasm2js_memory_fill(dest, value, size) {
    dest = dest >>> 0;
    size = size >>> 0;
    if (dest + size > bufferView.length) throw "trap: invalid memory.fill";
    bufferView.fill(value, dest, dest + size);
  }
      
function asmFunc(env) {
 var buffer = new ArrayBuffer(131072);
 var HEAP8 = new Int8Array(buffer);
 var HEAP16 = new Int16Array(buffer);
 var HEAP32 = new Int32Array(buffer);
 var HEAPU8 = new Uint8Array(buffer);
 var HEAPU16 = new Uint16Array(buffer);
 var HEAPU32 = new Uint32Array(buffer);
 var HEAPF32 = new Float32Array(buffer);
 var HEAPF64 = new Float64Array(buffer);
 var Math_imul = Math.imul;
 var Math_fround = Math.fround;
 var Math_abs = Math.abs;
 var Math_clz32 = Math.clz32;
 var Math_min = Math.min;
 var Math_max = Math.max;
 var Math_floor = Math.floor;
 var Math_ceil = Math.ceil;
 var Math_trunc = Math.trunc;
 var Math_sqrt = Math.sqrt;
 var abort = env.abort;
 var nan = NaN;
 var infinity = Infinity;
 var global$0 = 66848;
 var global$1 = 1056;
 var global$2 = 1024;
 var global$3 = 1024;
 var global$4 = 1312;
 var global$5 = 1024;
 var global$6 = 66848;
 var global$7 = 0;
 var global$8 = 1;
 function $0() {
  
 }
 
 function $1($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $3_1 = 0, $4_1 = 0, $5_1 = 0, $6_1 = 0, $7 = 0, $8 = 0, $9 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, wasm2js_i32$0 = 0, wasm2js_i32$1 = 0;
  $7 = global$0 - 256 | 0;
  global$0 = $7;
  if (($2_1 | 0) > 0) {
   $25 = $7 | 4;
   while (1) {
    $4_1 = 0;
    while (1) {
     $3_1 = $1_1 + $4_1 | 0;
     $3_1 = HEAPU8[$3_1 | 0] | HEAPU8[$3_1 + 1 | 0] << 8 | (HEAPU8[$3_1 + 2 | 0] << 16 | HEAPU8[$3_1 + 3 | 0] << 24);
     HEAP32[$4_1 + $7 >> 2] = $3_1 << 24 | $3_1 << 8 & 16711680 | ($3_1 >>> 8 & 65280 | $3_1 >>> 24);
     $4_1 = $4_1 + 4 | 0;
     if (($4_1 | 0) != 64) {
      continue
     }
     break;
    };
    $6_1 = 0;
    $11 = HEAP32[$7 >> 2];
    $5_1 = $11;
    while (1) {
     $4_1 = $5_1;
     $5_1 = $6_1 + $7 | 0;
     $3_1 = HEAP32[$5_1 + 56 >> 2];
     $3_1 = $4_1 + (HEAP32[$5_1 + 36 >> 2] + (__wasm_rotl_i32($3_1, 15) ^ __wasm_rotl_i32($3_1, 13) ^ $3_1 >>> 10) | 0) | 0;
     $4_1 = $5_1 - -64 | 0;
     $5_1 = HEAP32[$5_1 + 4 >> 2];
     (wasm2js_i32$0 = $4_1, wasm2js_i32$1 = (__wasm_rotl_i32($5_1, 25) ^ __wasm_rotl_i32($5_1, 14) ^ $5_1 >>> 3) + $3_1 | 0), HEAP32[wasm2js_i32$0 >> 2] = wasm2js_i32$1;
     $6_1 = $6_1 + 4 | 0;
     if (($6_1 | 0) != 192) {
      continue
     }
     break;
    };
    $8 = 0;
    $15 = HEAP32[$0_1 + 164 >> 2];
    $9 = $15;
    $16 = HEAP32[$0_1 + 152 >> 2];
    $12 = $16;
    $17 = HEAP32[$0_1 + 156 >> 2];
    $4_1 = $17;
    $18 = HEAP32[$0_1 + 160 >> 2];
    $3_1 = $18;
    $19 = HEAP32[$0_1 + 136 >> 2];
    $13 = $19;
    $20 = HEAP32[$0_1 + 140 >> 2];
    $6_1 = $20;
    $21 = HEAP32[$0_1 + 144 >> 2];
    $5_1 = $21;
    $22 = HEAP32[$0_1 + 148 >> 2];
    $23 = $22;
    while (1) {
     $10 = $5_1;
     $5_1 = $6_1;
     $26 = HEAP32[$8 + 1056 >> 2];
     $14 = $4_1;
     $4_1 = $12;
     $6_1 = __wasm_rotl_i32($4_1, 26) ^ __wasm_rotl_i32($4_1, 21);
     $9 = ((((($4_1 & $14) + $9 | 0) + (__wasm_rotl_i32($4_1, 7) ^ $6_1) | 0) + (($4_1 ^ -1) & $3_1) | 0) + $26 | 0) + $11 | 0;
     $6_1 = $13;
     $13 = ($9 + (__wasm_rotl_i32($6_1, 30) ^ __wasm_rotl_i32($6_1, 19) ^ __wasm_rotl_i32($6_1, 10)) | 0) + (($5_1 ^ $10) & $6_1 ^ $5_1 & $10) | 0;
     $12 = $9 + $23 | 0;
     if (($8 | 0) != 252) {
      $11 = HEAP32[$8 + $25 >> 2];
      $8 = $8 + 4 | 0;
      $9 = $3_1;
      $3_1 = $14;
      $23 = $10;
      continue;
     }
     break;
    };
    HEAP32[$0_1 + 164 >> 2] = $3_1 + $15;
    HEAP32[$0_1 + 160 >> 2] = $14 + $18;
    HEAP32[$0_1 + 156 >> 2] = $4_1 + $17;
    HEAP32[$0_1 + 152 >> 2] = $12 + $16;
    HEAP32[$0_1 + 148 >> 2] = $10 + $22;
    HEAP32[$0_1 + 144 >> 2] = $5_1 + $21;
    HEAP32[$0_1 + 140 >> 2] = $6_1 + $20;
    HEAP32[$0_1 + 136 >> 2] = $13 + $19;
    $1_1 = $1_1 - -64 | 0;
    $24 = $24 + 1 | 0;
    if (($24 | 0) != ($2_1 | 0)) {
     continue
    }
    break;
   };
  }
  global$0 = $7 + 256 | 0;
 }
 
 function $2($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $3_1 = 0, $4_1 = 0, $5_1 = 0, $6_1 = 0;
  $3_1 = global$0 - 176 | 0;
  global$0 = $3_1;
  $4_1 = HEAP32[259];
  $5_1 = $3_1 + 152 | 0;
  HEAP32[$5_1 >> 2] = HEAP32[258];
  HEAP32[$5_1 + 4 >> 2] = $4_1;
  $4_1 = HEAP32[261];
  $5_1 = $3_1 + 160 | 0;
  HEAP32[$5_1 >> 2] = HEAP32[260];
  HEAP32[$5_1 + 4 >> 2] = $4_1;
  $4_1 = HEAP32[263];
  $5_1 = $3_1 + 168 | 0;
  HEAP32[$5_1 >> 2] = HEAP32[262];
  HEAP32[$5_1 + 4 >> 2] = $4_1;
  HEAP32[$3_1 + 8 >> 2] = 0;
  HEAP32[$3_1 + 12 >> 2] = 0;
  $4_1 = HEAP32[257];
  HEAP32[$3_1 + 144 >> 2] = HEAP32[256];
  HEAP32[$3_1 + 148 >> 2] = $4_1;
  $5_1 = $3_1 + 16 | 0;
  $4_1 = $1_1 >>> 0 < 64 ? $1_1 : 64;
  wasm2js_memory_copy($5_1, $0_1, $4_1);
  label$1 : {
   if ($1_1 >>> 0 <= 63) {
    HEAP32[$3_1 + 12 >> 2] = $1_1;
    break label$1;
   }
   $6_1 = $3_1 + 8 | 0;
   $1($6_1, $5_1, 1);
   $0_1 = $0_1 + $4_1 | 0;
   $1_1 = $1_1 - $4_1 | 0;
   $1($6_1, $0_1, $1_1 >>> 6 | 0);
   $4_1 = $0_1 + ($1_1 & -64) | 0;
   $0_1 = $1_1 & 63;
   wasm2js_memory_copy($5_1, $4_1, $0_1);
   HEAP32[$3_1 + 12 >> 2] = $0_1;
   HEAP32[$3_1 + 8 >> 2] = HEAP32[$3_1 + 8 >> 2] + ($1_1 - -64 & -64);
  }
  $3($3_1 + 8 | 0, $2_1);
  global$0 = $3_1 + 176 | 0;
 }
 
 function $3($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0, $3_1 = 0, $4_1 = 0, $5_1 = 0, $6_1 = 0;
  $6_1 = HEAP32[$0_1 >> 2];
  $2_1 = HEAP32[$0_1 + 4 >> 2];
  $5_1 = ($2_1 & 56) == 56 ? 2 : 1;
  $3_1 = $5_1 << 6;
  $4_1 = $0_1 + 8 | 0;
  wasm2js_memory_fill($2_1 + $4_1 | 0, 0, $3_1 - $2_1 | 0);
  HEAP8[$4_1 + HEAP32[$0_1 + 4 >> 2] | 0] = 128;
  $3_1 = $3_1 + $4_1 | 0;
  $2_1 = $2_1 + $6_1 | 0;
  HEAP8[$3_1 - 2 | 0] = $2_1 >>> 5;
  HEAP8[$3_1 - 1 | 0] = $2_1 << 3;
  HEAP8[$3_1 - 3 | 0] = $2_1 >>> 13;
  HEAP8[$3_1 - 4 | 0] = $2_1 >>> 21;
  $1($0_1, $4_1, $5_1);
  HEAP8[$1_1 + 3 | 0] = HEAP32[$0_1 + 136 >> 2];
  HEAP8[$1_1 + 2 | 0] = HEAP32[$0_1 + 136 >> 2] >>> 8;
  HEAP8[$1_1 + 1 | 0] = HEAPU16[$0_1 + 138 >> 1];
  HEAP8[$1_1 | 0] = HEAPU8[$0_1 + 139 | 0];
  $2_1 = $0_1 + 140 | 0;
  HEAP8[$1_1 + 7 | 0] = HEAP32[$2_1 >> 2];
  HEAP8[$1_1 + 6 | 0] = HEAP32[$2_1 >> 2] >>> 8;
  HEAP8[$1_1 + 5 | 0] = HEAPU16[$0_1 + 142 >> 1];
  HEAP8[$1_1 + 4 | 0] = HEAPU8[$0_1 + 143 | 0];
  $2_1 = $0_1 + 144 | 0;
  HEAP8[$1_1 + 11 | 0] = HEAP32[$2_1 >> 2];
  HEAP8[$1_1 + 10 | 0] = HEAP32[$2_1 >> 2] >>> 8;
  HEAP8[$1_1 + 9 | 0] = HEAPU16[$0_1 + 146 >> 1];
  HEAP8[$1_1 + 8 | 0] = HEAPU8[$0_1 + 147 | 0];
  $2_1 = $0_1 + 148 | 0;
  HEAP8[$1_1 + 15 | 0] = HEAP32[$2_1 >> 2];
  HEAP8[$1_1 + 14 | 0] = HEAP32[$2_1 >> 2] >>> 8;
  HEAP8[$1_1 + 13 | 0] = HEAPU16[$0_1 + 150 >> 1];
  HEAP8[$1_1 + 12 | 0] = HEAPU8[$0_1 + 151 | 0];
  $2_1 = $0_1 + 152 | 0;
  HEAP8[$1_1 + 19 | 0] = HEAP32[$2_1 >> 2];
  HEAP8[$1_1 + 18 | 0] = HEAP32[$2_1 >> 2] >>> 8;
  HEAP8[$1_1 + 17 | 0] = HEAPU16[$0_1 + 154 >> 1];
  HEAP8[$1_1 + 16 | 0] = HEAPU8[$0_1 + 155 | 0];
  $2_1 = $0_1 + 156 | 0;
  HEAP8[$1_1 + 23 | 0] = HEAP32[$2_1 >> 2];
  HEAP8[$1_1 + 22 | 0] = HEAP32[$2_1 >> 2] >>> 8;
  HEAP8[$1_1 + 21 | 0] = HEAPU16[$0_1 + 158 >> 1];
  HEAP8[$1_1 + 20 | 0] = HEAPU8[$0_1 + 159 | 0];
  $2_1 = $0_1 + 160 | 0;
  HEAP8[$1_1 + 27 | 0] = HEAP32[$2_1 >> 2];
  HEAP8[$1_1 + 26 | 0] = HEAP32[$2_1 >> 2] >>> 8;
  HEAP8[$1_1 + 25 | 0] = HEAPU16[$0_1 + 162 >> 1];
  HEAP8[$1_1 + 24 | 0] = HEAPU8[$0_1 + 163 | 0];
  $2_1 = $0_1 + 164 | 0;
  HEAP8[$1_1 + 31 | 0] = HEAP32[$2_1 >> 2];
  HEAP8[$1_1 + 30 | 0] = HEAP32[$2_1 >> 2] >>> 8;
  HEAP8[$1_1 + 29 | 0] = HEAPU16[$0_1 + 166 >> 1];
  HEAP8[$1_1 + 28 | 0] = HEAPU8[$0_1 + 167 | 0];
 }
 
 function $4($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0, $2_1 = 0, $3_1 = 0, $4_1 = 0, $5_1 = 0, $6_1 = 0, $7 = 0, $8 = 0;
  $3_1 = HEAP32[262];
  $4_1 = HEAP32[263];
  $5_1 = HEAP32[260];
  $6_1 = HEAP32[261];
  $1_1 = HEAP32[258];
  $7 = HEAP32[259];
  $2_1 = HEAP32[256];
  $8 = HEAP32[257];
  HEAP32[$0_1 >> 2] = 0;
  HEAP32[$0_1 + 4 >> 2] = 0;
  HEAP32[$0_1 + 136 >> 2] = $2_1;
  HEAP32[$0_1 + 140 >> 2] = $8;
  $2_1 = $0_1 + 144 | 0;
  HEAP32[$2_1 >> 2] = $1_1;
  HEAP32[$2_1 + 4 >> 2] = $7;
  $1_1 = $0_1 + 152 | 0;
  HEAP32[$1_1 >> 2] = $5_1;
  HEAP32[$1_1 + 4 >> 2] = $6_1;
  $0_1 = $0_1 + 160 | 0;
  HEAP32[$0_1 >> 2] = $3_1;
  HEAP32[$0_1 + 4 >> 2] = $4_1;
 }
 
 function $5($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $3_1 = 0, $4_1 = 0, $5_1 = 0;
  $3_1 = HEAP32[$0_1 + 4 >> 2];
  $4_1 = 64 - $3_1 | 0;
  $4_1 = $2_1 >>> 0 < $4_1 >>> 0 ? $2_1 : $4_1;
  wasm2js_memory_copy(($0_1 + $3_1 | 0) + 8 | 0, $1_1, $4_1);
  $3_1 = HEAP32[$0_1 + 4 >> 2] + $2_1 | 0;
  if ($3_1 >>> 0 <= 63) {
   HEAP32[$0_1 + 4 >> 2] = $3_1;
   return;
  }
  $3_1 = $0_1 + 8 | 0;
  $1($0_1, $3_1, 1);
  $5_1 = $1_1 + $4_1 | 0;
  $1_1 = $2_1 - $4_1 | 0;
  $1($0_1, $5_1, $1_1 >>> 6 | 0);
  $2_1 = $1_1 & 63;
  wasm2js_memory_copy($3_1, $5_1 + ($1_1 & -64) | 0, $2_1);
  HEAP32[$0_1 + 4 >> 2] = $2_1;
  HEAP32[$0_1 >> 2] = HEAP32[$0_1 >> 2] + ($1_1 - -64 & -64);
 }
 
 function $6($0_1, $1_1, $2_1, $3_1, $4_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = $3_1 | 0;
  $4_1 = $4_1 | 0;
  var $5_1 = 0, $6_1 = 0, $7 = 0, $8 = 0, $9 = 0;
  $5_1 = global$0 - 432 | 0;
  global$0 = $5_1;
  $7 = $5_1 - ($0_1 + 79 & -16) | 0;
  global$0 = $7;
  label$1 : {
   if ($2_1 >>> 0 <= 63) {
    while (1) {
     $8 = ($5_1 + 192 | 0) + $6_1 | 0;
     HEAP8[$8 | 0] = ($2_1 | 0) > ($6_1 | 0) ? HEAPU8[$3_1 + $6_1 | 0] : 0;
     $9 = $8 + 1 | 0;
     $8 = $6_1 + 1 | 0;
     HEAP8[$9 | 0] = ($8 | 0) < ($2_1 | 0) ? HEAPU8[($3_1 + $6_1 | 0) + 1 | 0] : 0;
     $6_1 = $8 + 1 | 0;
     if (($6_1 | 0) != 64) {
      continue
     }
     break;
    };
    break label$1;
   }
   if (($2_1 | 0) == 64) {
    break label$1
   }
   $2($3_1, $2_1, $5_1 + 192 | 0);
   if ($2_1 & 192) {
    break label$1
   }
   wasm2js_memory_fill(($5_1 + 192 | 0) + ($2_1 & 255) | 0, 0, (63 - $2_1 & 255) + 1 | 0);
  }
  $8 = $0_1 - -64 | 0;
  $6_1 = 0;
  while (1) {
   $2_1 = ($5_1 + 128 | 0) + $6_1 | 0;
   $3_1 = ($5_1 + 192 | 0) + $6_1 | 0;
   HEAP8[$2_1 | 0] = HEAPU8[$3_1 | 0] ^ 54;
   HEAP8[$2_1 + 1 | 0] = HEAPU8[$3_1 + 1 | 0] ^ 54;
   HEAP8[$2_1 + 2 | 0] = HEAPU8[$3_1 + 2 | 0] ^ 54;
   HEAP8[$2_1 + 3 | 0] = HEAPU8[$3_1 + 3 | 0] ^ 54;
   $6_1 = $6_1 + 4 | 0;
   if (($6_1 | 0) != 64) {
    continue
   }
   break;
  };
  $2_1 = HEAP32[$5_1 + 132 >> 2];
  HEAP32[$7 >> 2] = HEAP32[$5_1 + 128 >> 2];
  HEAP32[$7 + 4 >> 2] = $2_1;
  $3_1 = HEAP32[$5_1 + 140 >> 2];
  $2_1 = $7 + 8 | 0;
  HEAP32[$2_1 >> 2] = HEAP32[$5_1 + 136 >> 2];
  HEAP32[$2_1 + 4 >> 2] = $3_1;
  $3_1 = $5_1 + 184 | 0;
  $6_1 = HEAP32[$3_1 + 4 >> 2];
  $2_1 = $7 + 56 | 0;
  HEAP32[$2_1 >> 2] = HEAP32[$3_1 >> 2];
  HEAP32[$2_1 + 4 >> 2] = $6_1;
  $3_1 = $5_1 + 176 | 0;
  $6_1 = HEAP32[$3_1 + 4 >> 2];
  $2_1 = $7 + 48 | 0;
  HEAP32[$2_1 >> 2] = HEAP32[$3_1 >> 2];
  HEAP32[$2_1 + 4 >> 2] = $6_1;
  $3_1 = $5_1 + 168 | 0;
  $6_1 = HEAP32[$3_1 + 4 >> 2];
  $2_1 = $7 + 40 | 0;
  HEAP32[$2_1 >> 2] = HEAP32[$3_1 >> 2];
  HEAP32[$2_1 + 4 >> 2] = $6_1;
  $3_1 = $5_1 + 160 | 0;
  $6_1 = HEAP32[$3_1 + 4 >> 2];
  $2_1 = $7 + 32 | 0;
  HEAP32[$2_1 >> 2] = HEAP32[$3_1 >> 2];
  HEAP32[$2_1 + 4 >> 2] = $6_1;
  $3_1 = $5_1 + 152 | 0;
  $6_1 = HEAP32[$3_1 + 4 >> 2];
  $2_1 = $7 + 24 | 0;
  HEAP32[$2_1 >> 2] = HEAP32[$3_1 >> 2];
  HEAP32[$2_1 + 4 >> 2] = $6_1;
  $3_1 = $5_1 + 144 | 0;
  $6_1 = HEAP32[$3_1 + 4 >> 2];
  $2_1 = $7 + 16 | 0;
  HEAP32[$2_1 >> 2] = HEAP32[$3_1 >> 2];
  HEAP32[$2_1 + 4 >> 2] = $6_1;
  if ($8 >>> 0 >= 65) {
   wasm2js_memory_copy($7 - -64 | 0, $1_1, $0_1)
  }
  $2($7, $8, $5_1 - -64 | 0);
  $6_1 = 0;
  while (1) {
   $0_1 = $5_1 + $6_1 | 0;
   $1_1 = ($5_1 + 192 | 0) + $6_1 | 0;
   HEAP8[$0_1 | 0] = HEAPU8[$1_1 | 0] ^ 92;
   HEAP8[$0_1 + 1 | 0] = HEAPU8[$1_1 + 1 | 0] ^ 92;
   HEAP8[$0_1 + 2 | 0] = HEAPU8[$1_1 + 2 | 0] ^ 92;
   HEAP8[$0_1 + 3 | 0] = HEAPU8[$1_1 + 3 | 0] ^ 92;
   $6_1 = $6_1 + 4 | 0;
   if (($6_1 | 0) != 64) {
    continue
   }
   break;
  };
  $1_1 = HEAP32[259];
  $0_1 = $5_1 + 408 | 0;
  HEAP32[$0_1 >> 2] = HEAP32[258];
  HEAP32[$0_1 + 4 >> 2] = $1_1;
  $1_1 = HEAP32[261];
  $0_1 = $5_1 + 416 | 0;
  HEAP32[$0_1 >> 2] = HEAP32[260];
  HEAP32[$0_1 + 4 >> 2] = $1_1;
  $1_1 = HEAP32[263];
  $0_1 = $5_1 + 424 | 0;
  HEAP32[$0_1 >> 2] = HEAP32[262];
  HEAP32[$0_1 + 4 >> 2] = $1_1;
  $1_1 = HEAP32[$5_1 + 12 >> 2];
  $0_1 = $5_1 + 280 | 0;
  HEAP32[$0_1 >> 2] = HEAP32[$5_1 + 8 >> 2];
  HEAP32[$0_1 + 4 >> 2] = $1_1;
  $2_1 = $5_1 + 16 | 0;
  $3_1 = HEAP32[$2_1 + 4 >> 2];
  $1_1 = $5_1 + 288 | 0;
  HEAP32[$1_1 >> 2] = HEAP32[$2_1 >> 2];
  HEAP32[$1_1 + 4 >> 2] = $3_1;
  $3_1 = $5_1 + 24 | 0;
  $6_1 = HEAP32[$3_1 + 4 >> 2];
  $2_1 = $5_1 + 296 | 0;
  HEAP32[$2_1 >> 2] = HEAP32[$3_1 >> 2];
  HEAP32[$2_1 + 4 >> 2] = $6_1;
  $6_1 = $5_1 + 32 | 0;
  $7 = HEAP32[$6_1 + 4 >> 2];
  $3_1 = $5_1 + 304 | 0;
  HEAP32[$3_1 >> 2] = HEAP32[$6_1 >> 2];
  HEAP32[$3_1 + 4 >> 2] = $7;
  $6_1 = $5_1 + 40 | 0;
  $7 = HEAP32[$6_1 + 4 >> 2];
  $3_1 = $5_1 + 312 | 0;
  HEAP32[$3_1 >> 2] = HEAP32[$6_1 >> 2];
  HEAP32[$3_1 + 4 >> 2] = $7;
  $6_1 = $5_1 + 48 | 0;
  $7 = HEAP32[$6_1 + 4 >> 2];
  $3_1 = $5_1 + 320 | 0;
  HEAP32[$3_1 >> 2] = HEAP32[$6_1 >> 2];
  HEAP32[$3_1 + 4 >> 2] = $7;
  $6_1 = $5_1 + 56 | 0;
  $7 = HEAP32[$6_1 + 4 >> 2];
  $3_1 = $5_1 + 328 | 0;
  HEAP32[$3_1 >> 2] = HEAP32[$6_1 >> 2];
  HEAP32[$3_1 + 4 >> 2] = $7;
  HEAP32[$5_1 + 264 >> 2] = 0;
  HEAP32[$5_1 + 268 >> 2] = 0;
  $3_1 = HEAP32[$5_1 + 4 >> 2];
  HEAP32[$5_1 + 272 >> 2] = HEAP32[$5_1 >> 2];
  HEAP32[$5_1 + 276 >> 2] = $3_1;
  $3_1 = HEAP32[257];
  HEAP32[$5_1 + 400 >> 2] = HEAP32[256];
  HEAP32[$5_1 + 404 >> 2] = $3_1;
  $7 = $5_1 + 264 | 0;
  $1($7, $5_1 + 272 | 0, 1);
  $3_1 = $5_1 + 88 | 0;
  $6_1 = HEAP32[$3_1 + 4 >> 2];
  HEAP32[$2_1 >> 2] = HEAP32[$3_1 >> 2];
  HEAP32[$2_1 + 4 >> 2] = $6_1;
  $2_1 = $5_1 + 80 | 0;
  $3_1 = HEAP32[$2_1 + 4 >> 2];
  HEAP32[$1_1 >> 2] = HEAP32[$2_1 >> 2];
  HEAP32[$1_1 + 4 >> 2] = $3_1;
  $1_1 = HEAP32[$5_1 + 76 >> 2];
  HEAP32[$0_1 >> 2] = HEAP32[$5_1 + 72 >> 2];
  HEAP32[$0_1 + 4 >> 2] = $1_1;
  HEAP32[$5_1 + 268 >> 2] = 32;
  $0_1 = HEAP32[$5_1 + 68 >> 2];
  HEAP32[$5_1 + 272 >> 2] = HEAP32[$5_1 + 64 >> 2];
  HEAP32[$5_1 + 276 >> 2] = $0_1;
  HEAP32[$5_1 + 264 >> 2] = HEAP32[$5_1 + 264 >> 2] - -64;
  $3($7, $4_1);
  global$0 = $5_1 + 432 | 0;
 }
 
 function __wasm_rotl_i32($0_1, $1_1) {
  var $2_1 = 0, $3_1 = 0;
  $2_1 = $1_1 & 31;
  $3_1 = (-1 >>> $2_1 & $0_1) << $2_1;
  $2_1 = $0_1;
  $0_1 = 0 - $1_1 & 31;
  return $3_1 | ($2_1 & -1 << $0_1) >>> $0_1;
 }
 
 bufferView = HEAPU8;
 initActiveSegments(env);
 function __wasm_memory_size() {
  return buffer.byteLength / 65536 | 0;
 }
 
 function __wasm_memory_grow(pagesToAdd) {
  pagesToAdd = pagesToAdd | 0;
  var oldPages = __wasm_memory_size() | 0;
  var newPages = oldPages + pagesToAdd | 0;
  if ((oldPages < newPages) && (newPages < 65536)) {
   var newBuffer = new ArrayBuffer(Math_imul(newPages, 65536));
   var newHEAP8 = new Int8Array(newBuffer);
   newHEAP8.set(HEAP8);
   HEAP8 = new Int8Array(newBuffer);
   HEAP16 = new Int16Array(newBuffer);
   HEAP32 = new Int32Array(newBuffer);
   HEAPU8 = new Uint8Array(newBuffer);
   HEAPU16 = new Uint16Array(newBuffer);
   HEAPU32 = new Uint32Array(newBuffer);
   HEAPF32 = new Float32Array(newBuffer);
   HEAPF64 = new Float64Array(newBuffer);
   buffer = newBuffer;
   bufferView = HEAPU8;
  }
  return oldPages;
 }
 
 return {
  "memory": Object.create(Object.prototype, {
   "grow": {
    "value": __wasm_memory_grow
   }, 
   "buffer": {
    "get": function () {
     return buffer;
    }
    
   }
  }), 
  "__wasm_call_ctors": $0, 
  "sha256_transf": $1, 
  "sha256_k": global$1, 
  "sha256": $2, 
  "sha256_h0": global$2, 
  "sha256_final": $3, 
  "sha256_init": $4, 
  "sha256_update": $5, 
  "HMAC_SHA256": $6, 
  "__dso_handle": global$3, 
  "__data_end": global$4, 
  "__global_base": global$5, 
  "__heap_base": global$6, 
  "__memory_base": global$7, 
  "__table_base": global$8
 };
}

var retasmFunc = asmFunc(  { abort: function() { throw new Error('abort'); }
  });
export var memory = retasmFunc.memory;
export var __wasm_call_ctors = retasmFunc.__wasm_call_ctors;
export var sha256_transf = retasmFunc.sha256_transf;
export var sha256 = retasmFunc.sha256;
export var sha256_final = retasmFunc.sha256_final;
export var sha256_init = retasmFunc.sha256_init;
export var sha256_update = retasmFunc.sha256_update;
export var HMAC_SHA256 = retasmFunc.HMAC_SHA256;
