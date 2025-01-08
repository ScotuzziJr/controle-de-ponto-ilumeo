import parser from '@typescript-eslint/parser';
import prettier from 'eslint-plugin-prettier';

export default [
    {
        files: ['**/*.ts'],
        ignores: ['node_modules', 'dist'],
        languageOptions: {
            parser,
        },
        plugins: {
            prettier: prettier,
        },
        rules: {
            'prettier/prettier': 'error',
        },
    },
];
