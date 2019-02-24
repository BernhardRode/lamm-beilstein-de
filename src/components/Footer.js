/*
              _                       _             _       
             | |                     | |           (_)      
__      _____| |____      _____  _ __| | _____ _ __ _  ___  
\ \ /\ / / _ \ '_ \ \ /\ / / _ \| '__| |/ / _ \ '__| |/ _ \ 
 \ V  V /  __/ |_) \ V  V / (_) | |  |   <  __/ |_ | | (_) |
  \_/\_/ \___|_.__/ \_/\_/ \___/|_|  |_|\_\___|_(_)|_|\___/ 
*/
import React from 'react'
import PropTypes from 'prop-types'

const Footer = props => (
  <footer id="footer" style={props.timeout ? { display: 'none' } : {}}>
    <p className="copyright">
      &copy; Gasthof Lamm Beilstein {new Date().getFullYear()}
      &nbsp;❤&nbsp;
      <a
        href="https://unsplash.com/@timmarshall?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge"
        target="_blank"
        rel="noopener noreferrer"
        title="Download free do whatever you want high-resolution photos from Dan Burton"
      >
        picture by <span>Tim Marshall</span>
      </a>
      &nbsp;|&nbsp;
      <span
        style={{ cursor: 'pointer' }}
        onClick={() => {
          props.onOpenArticle('imprint')
        }}
      >
        Impressum &amp; Datenschutz
      </span>
    </p>
  </footer>
)

Footer.propTypes = {
  timeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
}

export default Footer
