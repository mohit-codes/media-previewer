import type { Options } from 'tsup'

const config: Options = {
    entry: ['index.tsx'],
    dts: true,
    format: ['iife', 'cjs', 'esm']
}

export default config