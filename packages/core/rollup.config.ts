import resolve from "@rollup/plugin-node-resolve"
import typescript from "@rollup/plugin-typescript"
import multi from "@rollup/plugin-multi-entry"

export default {
    input: "src/core.ts",
    output: {
        file: "dist/bundle.js",
        format: "cjs",
        sourcemap: "inline"
    },
    watch: {
        include: "src/core.ts"
    },
    plugins: [
        multi(),
        resolve(),
        typescript({
            outputToFilesystem: true,
            tsconfig: "tsconfig.bundle.json"
        })
    ],
    external: ["lodash"]
}
