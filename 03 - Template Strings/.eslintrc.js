module.exports = {
  "root": true,
  "extends": [
    "prettier",
    "eslint:recommended"
  ],
  "plugins": [
    "prettier"
  ],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 2016,
    "sourceType": "module"
  },
  "env": {
    "browser": true,
    "commonjs": true,
    "node": true,
    "es6": true,
    "mocha": true,
    "jest": true
  },
  "rules": {
    "no-unused-vars":"off",
    "no-debugger": "off",
    "no-console": "off",
    "prettier/prettier": [
      "error",
      {
        "semi": true,
        "bracketSpacing": false,
        "trailingComma": "es5",
      },
    ],
  }
}
