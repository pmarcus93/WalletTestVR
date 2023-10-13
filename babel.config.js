module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        alias: {
          '@api': './src/api/',
          '@components': './src/components/',
          '@models': './src/models/',
          '@screens': './src/screens/',
          '@shared': './src/shared/',
          '@transformations': './src/transformations/',
        },
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        root: ['.'],
      },
    ],
  ],
};
