module.exports = {
  "env": {
    "browser": true,
    "es6": true
  },
  // "extends": ["eslint:recommended", "prettier"],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 8,
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "impliedStrict": true,
      "classes": true
    }
  },
  "plugins": [
    "import"
  ],
  "rules": {
    "complexity": [
      "error",
      5
    ],
    "max-params": ["warn", 4],
    "max-statements": [
      "warn",
      7
    ],
    "max-statements-per-line": [
      "warn",
      {
        "max": 1
      }
    ],
    "max-nested-callbacks": [
      "error",
      2
    ],
    "max-depth": [
      "warn",
      {
        "max": 2
      }
    ],
    "max-lines": [
      "warn",
      80
    ],
  },

};


// module.export = {
//   env: {
//     browser: true,
//     es6: true,
//   },
//   // extends: ["eslint:recommended", "prettier"],
//   parser: 'babel-eslint',
//   parserOptions: {
//     ecmaVersion: 8,
//     ecmaFeatures: {
//       experimentalObjectRestSpread: true,
//       impliedStrict: true,
//       classes: true,
//     },
//   },
//   eslintIgnore: ['formatter/*.js'],
//   rules: {
//     'complexity': ['error', 5],
//     'max-params': ['error', 4],
//     'max-statements': ['error', 7],
//     'max-statements-per-line': [
//       'warn',
//       {
//         max: 1,
//       },
//     ],
//     'max-nested-callbacks': ['warn', 2],
//     'max-depth': [
//       'warn',
//       {
//         max: 2,
//       },
//     ],
//     'max-lines': ['warn', 80],
//   },
// };
