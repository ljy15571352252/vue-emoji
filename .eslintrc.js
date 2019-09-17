// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module"
  },
  env: {
    browser: true
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: "standard",
  // required to lint *.vue files
  plugins: ["html"],
  // add your custom rules here
  rules: {
    // allow paren-less arrow functions
    "arrow-parens": 0,
    // allow async-await
    "generator-star-spacing": 0,
    // allow debugger during development
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "generator-star-spacing": "off",
    "no-empty-label ": "off",
    "no-trailing-spaces": "off",
    indent: "off",
    "spaced-comment": "off",
    "no-trailing-spaces": "off",
    "no-new": "off",
    "key-spacing": "off",
    "comma-dangle": "off",
    "eol-last": "off",
    quotes: "off",
    semi: "off",
    "keyword-spacing": "off",
    "space-before-blocks": "off",
    "comma-spacing": "off",
    "space-before-function-paren": "off",
    "space-infix-ops": "off",
    "no-multiple-empty-lines": "off",
    "block-spacing": "off",
    "padded-blocks": "off",
    "arrow-spacing": "off",
    "no-sequences": "off",
    "no-unused-expressions": "off",
    "no-multi-spaces": "off",
    "no-unused-vars": "off"
  }
};
