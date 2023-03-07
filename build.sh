#! /bin/bash
HERE=`dirname "$0"`
cd "$HERE/src"

clang -O2 --target=wasm32 -mbulk-memory --no-standard-libraries -Wl,--export-all -Wl,--no-entry -o hmac_sha256.wasm hmac_sha256.c &&
/usr/bin/wasm2js --minify-imports-and-exports-and-modules -Oz --extract-function=HMAC_SHA256 --flatten --optimize-for-js --strip-debug --vacuum hmac_sha256.wasm > hmac_sha256.raw.mjs &&
echo "compile done"
mkdir -p ../public/dist/ >/dev/null || :
cp hmac_sha256.wasm ../public/dist/
zopfli ../public/dist/*.wasm