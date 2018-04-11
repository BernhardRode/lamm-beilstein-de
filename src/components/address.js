import React from 'react'
import config from './config'

import './address.css'

const parsePhone = phone => {
  return phone
    .replace('(0', '')
    .replace('(', '')
    .replace(')', '')
    .replace(/ /g, '')
}

const Address = ({ children, data }) => {
  const {
    company,
    email,
    fax,
    phone,
    addressLine1,
    addressLine2,
    addressLine3,
  } = config

  return (
    <section className="address">
      <address>
        <strong>{company}</strong>
        <br />
        {addressLine1}
        <br />
        {addressLine2}
        <br />
        {addressLine3}
        <br />
        <abbr title="E-Mail">E-Mail:</abbr>{' '}
        <a href={`mailto:${email}`}>{email}</a>
        <br />
        <abbr title="Phone">Telefon:</abbr>{' '}
        <a href={`tel:${parsePhone(phone)}`}>{phone}</a>
        <br />
        <abbr title="Fax">Fax:</abbr> {fax}
      </address>
    </section>
  )
}
export default Address
