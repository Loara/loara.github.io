#!/bin/sh
set -euo pipefail
wasm-pack build --target web --no-pack --dev --no-typescript --weak-refs --reference-types
