module.exports = {
  siteMetadata: {
    title: 'Lamm Beilstein',
    author: 'Bernhard Rode',
    description: 'Webseite des Gasthof Lamm in Beilstein.',
  },
  pathPrefix: '/lamm-beilstein-de',
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
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
}
