const { defineConfig } = require('rollup');

const commonjs = require('@rollup/plugin-commonjs');
const nodeResolve = require('@rollup/plugin-node-resolve');
const terser = require('@rollup/plugin-terser');
const typescript = require('@rollup/plugin-typescript');
const peerDepsExternal = require('rollup-plugin-peer-deps-external');
const postcss = require('rollup-plugin-postcss');
const { default: dts } = require('rollup-plugin-dts');

const packageJson = require('./package.json');

module.exports = defineConfig(
  [
    {
      input: 'index.tsx',
      output: [
        {
          file: packageJson.main,
          format: 'cjs',
          sourcemap: true,
          name: '@media-previewer/react'
        },
        {
          file: packageJson.module,
          format: 'es',
          sourcemap: true
        }
      ],
      plugins: [peerDepsExternal(), nodeResolve(), commonjs(), typescript(), postcss(), terser()]
    }
  ],
  {
    input: 'index.tsx',
    output: [{ file: 'dist/index.d.ts', format: 'es' }],
    plugins: [dts()]
  }
);
