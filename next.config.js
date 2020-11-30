const { withXDN, withServiceWorker } = require('@xdn/next/config')

module.exports = withXDN({
  env: {
    GITHUB_TOKEN: '',
  },
})
