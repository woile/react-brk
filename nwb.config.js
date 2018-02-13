module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: false
  },
  karma: {
    config(config) {
      config.frameworks.push('viewport')
      config.plugins.push(require('karma-viewport'))
      return config
    }
  }
}
