module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs','src'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    "no-unused-vars": "off",
    // "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-unused-vars": "off",
    
  },
}
// const action: YourActionType = /* ... */
