module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "plugins": [
        "react"
    ],
    "rules": {
      semi: ['error', 'never'],
      'comma-dangle': [2, 'never'],
      'react/jsx-filename-extension': [1, {extentions: ['.js', '.jsx']}],
      'no-use-before-define': [
        'error',
        {functions: true, classes: true, variables: false}
      ]
    }
}
