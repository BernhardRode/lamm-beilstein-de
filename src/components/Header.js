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

import icon from '../images/noun_Sheep_8389.svg'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <img
        src={icon}
        className="icon"
        alt="Sheep by Unrecognized MJ from the Noun Project"
      />
    </div>
    <div className="content">
      <div className="inner">
        <h2>Gasthof</h2>
        <h1>Lamm</h1>
        <p>Beilstein</p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('ueber-uns')
            }}
          >
            Über uns
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('oeffnungszeiten')
            }}
          >
            Öffnungszeiten
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('adresse')
            }}
          >
            Kontakt
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
