module.exports = {
  extends: ['@react-native'],
  root: true,
  plugins: ['perfectionist'],
  rules: {
    'perfectionist/sort-interfaces': 'error',
    'perfectionist/sort-imports': [
      'error',
      {
        type: 'natural',
        order: 'asc',
        groups: [
          'type',
          'react',
          'react-libs',
          ['builtin', 'external'],
          'api',
          'models',
          'shared',
          'components',
          'screens',
          'internal-type',
          'internal',
          ['parent-type', 'sibling-type', 'index-type'],
          ['parent', 'sibling', 'index'],
          'side-effect',
          'style',
          'object',
          'unknown',
        ],
        'custom-groups': {
          value: {
            react: ['react', 'react-native'],
            'react-libs': ['react-*'],
            api: ['@api/**'],
            models: ['@models/**'],
            shared: ['@shared/**'],
            components: ['@components/**'],
            screens: ['@screens/**'],
          },
          type: {
            react: 'react',
          },
        },
        'newlines-between': 'always',
      },
    ],
  },
};
