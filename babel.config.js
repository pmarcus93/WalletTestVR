module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        alias: {
          '@api': './api/',
          '@components': './components/',
          '@models': './models/',
          '@screens': './screens/',
          '@shared': './shared/',
        },
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        root: ['.'],
      },
    ],
  ],
};
