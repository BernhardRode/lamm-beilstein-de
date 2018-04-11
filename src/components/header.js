import React from 'react'

import './header.css'

import config from './config'

const Header = ({ siteTitle }) => (
  <section className="header">
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
      }}
    >
      <ul>
        <li>
          <span className="icon">💌</span>
          <a href="mailto:info@lamm-beilstein.de">info@lamm-beilstein.de</a>
        </li>
        <li>
          <span className="icon">📞</span>
          <a href="tel:+4970623716">+49 (07062) 3716</a>
        </li>
      </ul>
    </div>
  </section>
)

export default Header
