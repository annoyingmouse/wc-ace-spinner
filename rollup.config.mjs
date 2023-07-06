import terser from '@rollup/plugin-terser';

export default {
  input: './wc-ace-spinner.js',
  output: {
    file: 'dist/wc-ace-spinner.min.js',
    format: 'iife',
    sourcemap: 'inline',
  },
  plugins: [
    terser()
  ]
};