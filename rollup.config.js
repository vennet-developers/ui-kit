import peerDepsExternal from "rollup-plugin-peer-deps-external";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import copy from "rollup-plugin-copy";
import { terser } from "rollup-plugin-terser";
import tsTreeshaking from 'rollup-plugin-ts-treeshaking';

const packageJson = require("./package.json");

export default {
  input: ["src/index.ts", "src/Button/index.ts"],
  output: [
    {
      dir: "build",
      format: "cjs",
      sourcemap: true
    }
  ],
  preserveModules: true,
  plugins: [
    terser(),
    peerDepsExternal(),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    tsTreeshaking(),
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
