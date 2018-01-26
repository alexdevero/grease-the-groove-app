module.exports = {
  plugins: {
    'postcss-cssnext': {
      browsers: [
        'Firefox >= 52',
        'Chrome >= 56',
        'ie >= 9',
        'last 4 versions',
        'Safari >= 9'
      ]
    },
    'postcss-import': {},
    'postcss-pxtorem': {
      rootValue: 16,
      unitPrecision: 5,
      propList: ['*'],
      selectorBlackList: ['html', 'body'],
      replace: true,
      mediaQuery: false,
      minPixelValue: 0
    },
    'postcss-nested': {}
  }
}
