module.exports = {
  extends: ['@react-native'],
  root: true,
  plugins: ['perfectionist'],
  rules: {
    'perfectionist/sort-imports': [
      'error',
      {
        type: 'natural',
        order: 'asc',
        groups: [
          'type',
          'react',
          'react-libs',
          'api',
          'models',
          'shared',
          'components',
          'screens',
          'internal',
        ],
        'custom-groups': {
          value: {
            react: ['react', 'react-native'],
            api: ['@api/**'],
            models: ['@models/**'],
            shared: ['@shared/**'],
            components: ['@components/**'],
            screens: ['@screens/**'],
          },
        },
        'newlines-between': 'always',
      },
    ],
  },
};
