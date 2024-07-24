const js = require("@eslint/js");

module.exports = [
    js.configs.recommended,

    {
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "commonjs"
        },
        rules: {
            "comma-dangle": "error",
            "eol-last": "error",
            "func-style": "error",
            "indent": "error",
            "linebreak-style": "error",
            "no-undef": "error",
            "no-unused-vars": "error",
            "quotes": "error",
            "semi": "error"
        }
    }
];
