import {terser} from "rollup-plugin-terser";

// import commonjs from "@rollup/plugin-commonjs";
import multi from '@rollup/plugin-multi-entry';

// const production = !process.env.ROLLUP_WATCH;

export default [{
    input: ["./src/hmac_sha256.raw.mjs", "./src/hmac_sha256_helper.mjs"],
    output: {
        compact: false,
        sourcemap: false,
        format: "iife",
        name: "crypto_hmac_sha256",
        file: "public/dist/hmac_sha256.js",
        esModule: false,
    },
    plugins: [multi()],
}, {
    input: ["./src/hmac_sha256.raw.mjs", "./src/hmac_sha256_helper.mjs"],
    output: {
        compact: true,
        sourcemap: true,
        format: "iife",
        name: "crypto_hmac_sha256",
        file: "public/dist/hmac_sha256.min.js",
        esModule: false,
    },
    plugins: [
        multi(),
        // commonjs(),
        terser(),
    ],
}];
