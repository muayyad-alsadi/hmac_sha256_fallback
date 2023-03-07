# HMAC SHA256 Fallback for legacy browsers

We compiled from C to WASM then from WASM to JS Using Binaryen

This package has no dependency as all you need is shipped


## Installation

```
npm install --save-dev '@alsadi/hmac_sha256_fallback'
```

then you can use files in your `node_modules/`

```
node_modules/@alsadi/hmac_sha256_fallback/public/dist/hmac_sha256.min.js
```

We got you covered, it's compressed and minified

You can use it in your HTML from `unpkg` like this

```html
<script src="https://www.unpkg.com/browse/@alsadi/hmac_sha256_fallback@0.0.8/public/dist/hmac_sha256.js.gz"></script>
```

## Demo

enter public directory and run a static server to test


```
cd node_modules/@alsadi/hmac_sha256_fallback/public/
python3 -m http.server 3000
```
