module.exports = {
  extends: '@react-native',
  root: true,
  rules: {
    'sort-keys': [
      'warn',
      'asc',
      {caseSensitive: true, minKeys: 2, natural: false},
    ],
  },
};
