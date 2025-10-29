// @ts-nocheck
import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import { defineConfig } from 'eslint/config';
import prettier from 'eslint-plugin-prettier';

export default defineConfig([
    //JS Config
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
            ...js.configs.recommended.rules,
            'prettier/prettier': ['error', { singleQuote: true, semi: true }],
        },
    },
    //TS Config
    {
        files: ['src/**/*.ts'],
        ...tseslint.configs.recommended,
    },
]);
