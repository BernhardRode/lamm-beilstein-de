const packageJson = require('./package.json')

const activeEnv = process.env.NODE_ENV || 'development'

require('dotenv').config({
  path: `.env.${activeEnv}`,
})

const commit = process.env.TRAVIS_BUILD_NUMBER || 'unknown'

module.exports = {
  siteMetadata: {
    title: 'Lamm Beilstein',
    author: 'Bernhard Rode',
    description: 'Webseite des Gasthof Lamm in Beilstein.',
    version: `${packageJson.version}.${commit}`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'lamm-beilstein-de',
        short_name: 'lamm-beilstein',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/lamm-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-transformer-json',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'data',
        path: `${__dirname}/src/data`,
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
}
