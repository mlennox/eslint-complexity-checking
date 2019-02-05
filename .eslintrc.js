module.exports = {
    "root": true,
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": ["eslint:recommended", "prettier"],
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
        "prettier",
        "import"
    ],
    "rules": {
        "prettier/prettier": [
            "error",
            {
                "trailingComma": "es5",
                "singleQuote": true,
                "printWidth": 120
            }
        ],
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
        "eqeqeq": [
            "error",
            "smart"
        ],
        "prefer-const": "warn",
        "no-var": "error"
    },

};