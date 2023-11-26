module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/strict-type-checked',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:@react-three/recommended',
    'prettier'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'playwright.config.ts'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'prettier'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true }
    ],
    'react/no-unknown-property': [
      1,
      {
        ignore: [
          'position',
          'args',
          'intensity',
          'geometry',
          'material',
          'instanceMatrix',
          'dispose',
          'castShadow',
          'receiveShadow',
          'rotation',
          'map',
          'transparent',
          'blending',
          'depthTest',
          'depthWrite',
          'side',
          'wireframe'
        ]
      }
    ],
    // This rule is unnecessary with typescript, and it doesn't handle types
    'react/prop-types': 0
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname
  }
};
