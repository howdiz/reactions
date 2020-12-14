require('dotenv').config()
const { withXDN, withServiceWorker } = require('@xdn/next/config')


module.exports = withXDN(withServiceWorker(
  {
  env: {
    GITHUB_TOKEN: process.env.GH_TOKEN
    },
}))
