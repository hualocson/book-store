const plugins = [
  ['@babel/plugin-transform-runtime'],
  [
    'module-resolver',
    {
      root: ['./src/'],
      alias: {
        '~api': './src/api',
        '~configs': './src/configs',
        '~libs': './src/libs',
        '~loaders': './src/loaders',
        '~middlewares': './src/middlewares',
        '~utils': './src/utils'
      }
    }
  ]
]

const presets = ['@babel/preset-env']

module.exports = { plugins, presets }
