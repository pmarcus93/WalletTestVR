module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        alias: {
          '@assets': './src/assets/',
          '@api': './src/api/',
          '@components': './src/components/',
          '@models': './src/models/',
          '@navigation': './src/navigation/',
          '@screens': './src/screens/',
          '@shared': './src/shared/',
        },
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        root: ['.'],
      },
    ],
  ],
};
