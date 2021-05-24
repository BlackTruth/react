module.exports = {
    extends: [
        'airbnb-typescript',
        'airbnb/hooks',
        'plugin:@typescript-eslint/recommended',
        'plugin:jest/recommended',
        'prettier',
        'plugin:prettier/recommended'
      ],
      plugins: ['react', '@typescript-eslint', 'jest'],
      env: {
        browser: true,
        es6: true,
        jest: true,
      },
    settings: {
        jest: {
            version: 26
        }
    },
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
      },
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
        project: './tsconfig.json',
      },
      rules: {
          'linebreak-style': 'off',
          "@typescript-eslint/no-namespace": "off",
          "@typescript-eslint/ban-ts-comment": "off",

          'prettier/prettier': [
              'error',
              {
                  endOfLine: 'auto',
              },
          ],
          "jsx-a11y/label-has-associated-control": ["error", {
              "required": {
                  "some": ["nesting", "id"]
              }
          }],
          "jsx-a11y/label-has-for": ["error", {
              "required": {
                  "some": ["nesting", "id"]
              }
          }]
      },
};
