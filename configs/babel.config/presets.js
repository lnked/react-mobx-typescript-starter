module.exports = function ({ development, production, test, loose, useBuiltIns, modules, targets }) {
  const configs = []

  production && configs.push(
    ['@babel/preset-env', {
      loose,
      modules,
      targets,
      useBuiltIns,
    }]
  )

  test && configs.push('@babel/preset-env')

  return [
    ...configs,
    ['@babel/preset-react', { development }],
    '@babel/preset-typescript',
  ]
}