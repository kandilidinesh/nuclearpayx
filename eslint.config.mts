import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-plugin-prettier';

export default [
    js.configs.recommended,
    ...tseslint.configs.recommended,
    {
        files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
        languageOptions: {
            globals: globals.node,
            ecmaVersion: 'latest',
            sourceType: 'module',
        },
        plugins: {
            prettier,
        },
        rules: {
            'prettier/prettier': ['error', { singleQuote: true, semi: true }],
            'no-console': 'off',
        },
    },
    {
        ignores: ['dist/**', 'eslint.config.mts'],
    },
    {
        rules: {
            '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
        },
    },
];
