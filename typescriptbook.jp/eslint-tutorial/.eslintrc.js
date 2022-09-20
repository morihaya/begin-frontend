module.exports = {
    root: true,
    env: {
        browser: true,
        es2022: true,
    },
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    extends: ["airbnb-base"],
    rules: {
        "import/prefer-default-export": "off",
        quotes: ["error","double"],
    },
};
