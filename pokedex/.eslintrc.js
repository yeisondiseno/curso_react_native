module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: [
        'standard',
        'plugin:react/recommended',
        'plugin: react/jsx-runtime',
        'eslint-config-prettier',
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: ['react'],
    rules: {
        'no-unused-vars': 'warning',
    },
}
