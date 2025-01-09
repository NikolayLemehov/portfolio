import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import prettier from 'eslint-plugin-prettier';
import importPlugin from 'eslint-plugin-import';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      import: importPlugin,
      'prettier': prettier,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      "import/order": [
        "error",
        {
          "groups": ["builtin", "external", "internal", "parent", "sibling", "index", "type"],
          "pathGroups": [
            {
              "pattern": "@/**",
              "group": "internal",
              "position": "after"
            },
            {
              "pattern": "@common/**",
              "group": "internal",
              "position": "after"
            },
            {
              "pattern": "@assets/**",
              "group": "internal",
              "position": "after"
            },
            {
              "pattern": "@components/**",
              "group": "internal",
              "position": "after"
            },
            {
              "pattern": "@pages/**",
              "group": "internal",
              "position": "after"
            },
            {
              "pattern": "/**",
              "group": "internal",
              "position": "after"
            },
          ],
          "pathGroupsExcludedImportTypes": [],
          "newlines-between": "always",
          "alphabetize": {
            "order": "asc",
            "caseInsensitive": false
          }
        }
      ],

      "padding-line-between-statements": [
        "error",
        {
          "blankLine": "always",
          "prev": "*",
          "next": "return"
        }
      ],

      'prettier/prettier': 'error',
    },
  },
)
