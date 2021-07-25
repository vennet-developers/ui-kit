import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import copy from "rollup-plugin-copy";
import { terser } from "rollup-plugin-terser";

const packageJson = require("./package.json");

export default {
  input: ["src/Button/Button.tsx"],
  output: [
    {
      dir: "build",
      format: "cjs",
      sourcemap: true
    },
    {
      dir: "build/module",
      format: "esm",
      sourcemap: true
    }
  ],
  preserveModules: true,
  plugins: [
    terser(),
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    postcss(),
    copy({
      targets: [
        {
          src: "src/variables.scss",
          dest: "build",
          rename: "variables.scss"
        },
        {
          src: "src/typography.scss",
          dest: "build",
          rename: "typography.scss"
        }
      ]
    })
  ]
};
