module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  parserOptions: { ecmaVersion: 8 }, // to enable features such as async/await
  ignorePatterns: ['node_modules/*', '.next/*', '.out/*', '!.prettierrc.js'], // We don't want to lint generated files nor node_modules, but we want to lint .prettierrc.js (ignored by default by eslint)
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  overrides: [
    // This configuration will apply only to TypeScript files
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      settings: { react: { version: 'detect' } },
      env: {
        browser: true,
        node: true,
        es6: true,
      },
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended', // TypeScript rules
        'plugin:import/errors', // Import validations
        'plugin:import/warnings', // Import validations
        'plugin:import/typescript', // Import validations
        'plugin:react/recommended', // React rules
        'plugin:react-hooks/recommended', // React hooks rules
        'plugin:jsx-a11y/recommended', // Accessibility rules
      ],
      rules: {
        'react/prop-types': 'off', // Use static types instead of proptype
        'react/react-in-jsx-scope': 'off', // No need to import react in Next.js
        'jsx-a11y/anchor-is-valid': 'off', // Incompatible rule with Next.js links
        '@typescript-eslint/no-unused-vars': ['error'], // No unused variables
        '@typescript-eslint/explicit-function-return-type': [
          'warn',
          {
            allowExpressions: true,
            allowConciseArrowFunctionExpressionsStartingWithVoid: true,
          },
        ], // Only require explicit function types when uninfer-able
        'prettier/prettier': ['error', {}, { usePrettierrc: true }], // Use Prettier
      },
    },
  ],
}
