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

import Menu from '../components/Menu'

import pic01 from '../images/familie.jpg'
import Imprint from './Imprint'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      />
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="ueber-uns"
          className={`${this.props.article === 'ueber-uns' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Über uns</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
            <strong>Gasthof Lamm | Beilstein</strong>
            <br />
            Familie Kurz - Rode
          </p>
          {close}
        </article>

        <article
          id="oeffnungszeiten"
          className={`${
            this.props.article === 'oeffnungszeiten' ? 'active' : ''
          } ${this.props.articleTimeout ? 'timeout' : ''}`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Öffnungszeiten</h2>
          <p>
            <strong>Montag, Dienstag und Freitag</strong>
            <br />
            von 10.30 - 14.00 Uhr
            <br />
            und ab 17.30 Uhr
            <br />
            <strong>Samstag</strong>
            <br />
            von 10.30 - 14.00 Uhr
            <br />
            <strong>Sonn- &amp; Feiertags</strong>
            <br />
            Geschlossen
            <br />
          </p>
          <p>
            Familienfeiern und größere Gruppen sind nach Vereinbarung auch
            außerhalb der Öffnungszeiten möglich.
          </p>
          {close}
        </article>

        <article
          id="adresse"
          className={`${this.props.article === 'adresse' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Wo sie uns finden?</h2>
          <address>
            <strong>Gasthof Lamm</strong>
            <br />
            Familie Kurz - Rode
            <br />
            Hauptstraße 40
            <br />
            71717 Beilstein
            <br />
            <abbr title="E-Mail">E-Mail:</abbr>{' '}
            <a href="mailto:info@lamm-beilstein.de">info@lamm-beilstein.de</a>
            <br />
            <abbr title="Phone">Telefon:</abbr>{' '}
            <a href="tel:+4970623716">+49 (07062) 3716</a>
            <br />
            <abbr title="Fax">Fax:</abbr> +49 (07062) 916192
            <br />
            <br />
          </address>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4" />
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          {close}
        </article>

        <article
          id="menu"
          className={`${this.props.article === 'menu' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Speisekarte</h2>
          <Menu />
          {close}
        </article>

        <article
          id="imprint"
          className={`${this.props.article === 'imprint' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Impressum und Datenschutz</h2>
          <Imprint />
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
