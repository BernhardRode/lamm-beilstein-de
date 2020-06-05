/*
              _                       _             _       
             | |                     | |           (_)      
__      _____| |____      _____  _ __| | _____ _ __ _  ___  
\ \ /\ / / _ \ '_ \ \ /\ / / _ \| '__| |/ / _ \ '__| |/ _ \ 
 \ V  V /  __/ |_) \ V  V / (_) | |  |   <  __/ |_ | | (_) |
  \_/\_/ \___|_.__/ \_/\_/ \___/|_|  |_|\_\___|_(_)|_|\___/ 
*/
import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

function getKey(element) {
  const { titel, beschreibung, groesse, preis } = element
  const key = titel + beschreibung + groesse + preis
  return key
}

function renderPrice(preis) {
  return <span>{preis.toFixed(2)} &euro;</span>
}

function getSubMenueItemLabels(elemente) {
  const menueItems = []
  elemente.forEach(element => {
    menueItems.push(
      <li key={getKey(element)}>
        <div>
          <h3>{element.titel}</h3>
          <p>{element.beschreibung}</p>
        </div>
        <div>
          <p>{element.groesse}</p>
        </div>
      </li>
    )
  })
  return menueItems
}

function getMenueItemLabels(data) {
  const menueItems = []
  data.allMenuItemsJson.edges.forEach(item => {
    menueItems.push(
      <li key={item.node.titel}>
        <h3>{item.node.titel}</h3>
        <p>{item.node.beschreibung}</p>
        <ul className="row">{getSubMenueItemLabels(item.node.elemente)}</ul>
        <p>{item.node.fussnote}</p>
      </li>
    )
  })
  return menueItems
}

const Menu = props => (
  <StaticQuery
    query={graphql`
      query MenuItemsQuery {
        allMenuItemsJson {
          edges {
            node {
              titel
              beschreibung
              elemente {
                titel
                groesse
                beschreibung
                preis
              }
              fussnote
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <ul className="no-style">{getMenueItemLabels(data)}</ul>
      </>
    )}
  />
)

export default Menu
