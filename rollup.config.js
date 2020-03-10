import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

const production = !process.env.ROLLUP_WATCH;

const name = pkg.name
  .replace(/^(@\S+\/)?(svelte-)?(\S+)/, '$3')
  .replace(/-\w/g, m => m[1].toUpperCase());

export default [
  {
    input: './src/main/index.js',
    output: {
      file: 'index.mjs',
      format: 'es'
    },
    plugins: [
      resolve(),
      commonjs()
    ]
  },
  {
    input: './src/main/index.js',
    output: {
      file: 'index.js',
      format: 'umd',
      name
    },
    plugins: [
      resolve(),
      commonjs()
    ]
  },
  {
    input: './src/demo/main.js',
    output: {
      sourcemap: true,
      file: './public/build/bundle.js',
      format: 'iife',
      name
    },
    plugins: [
      svelte({
        dev: !production,
        css: css => {
          css.write('public/build/bundle.css');
        }
      }),

      resolve({
        browser: true,
        dedupe: importee => importee === 'svelte' || importee.startsWith('svelte/')
      }),
      commonjs(),

      !production && serve(),
      !production && livereload('public'),
      production && terser()
    ],
    watch: {
      clearScreen: false
    }
  }
];

function serve() {
  let started = false;

  return {
    writeBundle() {
      if (!started) {
        started = true;

        require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
          stdio: ['ignore', 'inherit', 'inherit'],
          shell: true
        });
      }
    }
  };
}
