module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'prettier',
    'plugin:import/typescript',
    'plugin:import/recommended',
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  settings: {
    'import/resolver': {
      node: {},
      typescript: {
        directory: './src',
      },
    },
    'import/parsers': { '@typescript-eslint/parser': ['.ts', '.tsx'] },
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'react'],
  rules: {
    '@typescript-eslint/no-use-before-define': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'consistent-return': 'off',
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'off',
    'import/export': 'off',
    'import/extensions': 'off',
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
      },
    ],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
  ignorePatterns: ['webpack.*', '.eslintrc.js'],
};
// {
//   "env": {
//     "browser": true,
//     "es6": true,
//     "node": true
//   },
//   "extends": [
//     "prettier",
//     "plugin:import/typescript",
//     "plugin:import/recommended",
//     "airbnb",
//     "airbnb/hooks",
//     "airbnb-typescript",
//     "plugin:@typescript-eslint/recommended",
//     "plugin:prettier/recommended"
//   ],
//   "settings": {
//     "import/resolver": {
//       "node": {},
//       "typescript": {
//         "directory": "./src"
//       }
//     },
//     "import/parsers": { "@typescript-eslint/parser": [".ts", ".tsx"] }
//   },
//   "parser": "@typescript-eslint/parser",
//   "parserOptions": {
//     "ecmaVersion": "latest",
//     "project": "frontend/tsconfig.json",
//     "sourceType": "module"
//   },
//   "plugins": ["@typescript-eslint", "react"],
//   "rules": {
//     "import/no-unresolved": "off",
//     "import/export": "off",
//     "import/order": [
//       "error",
//       {
//         "alphabetize": {
//           "order": "asc",
//           "caseInsensitive": true
//         },
//         "groups": ["builtin", "external", "parent", "sibling", "index"]
//       }
//     ],
//     "prettier/prettier": [
//       "error",
//       {
//         "endOfLine": "auto"
//       }
//     ]
//   },
//   "ignorePatterns": ["webpack.*", ".eslintrc.js"]
// }
