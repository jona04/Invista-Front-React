module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'prettier',
        'prettier/react',
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parser: 'babel-eslint',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 11,
        sourceType: 'module',
    },
    plugins: ['react', 'prettier'],
    rules: {
        'prettier/prettier': 'error',
        'react/jsx-filename-extension': [
            'error',
            { extensions: ['.js', '.jsx'] },
        ],
        'import/prefer-default-export': 'off',
        'react/jsx-props-no-spreading': 'off',
        'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
        'global-require': 'off',
        'react-native/no-raw-text': 'off',
        'no-param-reassign': 'off',
        'no-underscore-dangle': 'off',
        'no-console': ['error', { allow: ['warn', 'error', 'tron', 'log'] }],
        'react/prop-types': [2, { ignore: ['children'] }],
    },
    settings: {
        'import/resolver': {
            'babel-plugin-root-import': {
                rootPathSuffix: 'src',
            },
        },
    },
};
