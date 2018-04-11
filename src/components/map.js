import React from 'react'

import config from './config'

import './map.css'

const Map = ({ children, data }) => {
  const src = config.mapUrl
  return (
    <section className="map">
      <iframe src={src} frameBorder="0" allowFullScreen />
    </section>
  )
}

export default Map
