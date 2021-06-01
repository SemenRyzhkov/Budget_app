module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/airbnb"],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    semi: "off",
    "no-plusplus": "off",
    "eol-last": "off",
    "max-len": ["error", 150],
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-tabs": "off",
    "no-alert": "off",
    "comma-dangle": "off",
    quotes: "off",
    "object-curly-newline": "off",
    "arrow-parens": "off",
    "import/no-extraneous-dependencies": "off",
    "import/extensions": "off",
    "no-multiple-empty-lines": "off",

    // "jsx-quotes": [1, "prefer-double"],
  }
};
