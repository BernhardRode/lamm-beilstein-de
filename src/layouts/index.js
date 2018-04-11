import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './index.css'

const Layout = ({ children, data }) => {
  const { company, slackline, keywords } = data.site.siteMetadata

  const descriptionContent = [company, slackline].join(' - ')
  const keywordsContent = [keywords].join(', ')

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{descriptionContent}</title>
        <meta name="description" content={descriptionContent} />
        <meta name="keywords" content={keywordsContent} />
        <link
          href="//fonts.googleapis.com/css?family=Great+Vibes"
          rel="stylesheet"
          type="text/css"
        />
      </Helmet>
      <Header siteTitle={descriptionContent} />
      <div>{children()}</div>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        company
        slackline
        keywords
      }
    }
  }
`
