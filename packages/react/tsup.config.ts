import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["index.tsx"],
  dts: true,
  format: ["iife", "cjs", "esm"],
});
