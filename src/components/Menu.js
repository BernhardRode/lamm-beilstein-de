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

function getMenueItemLabels(data) {
  const menueItems = []
  data.allMenuItemsJson.edges.forEach(item => {
    console.log(item)
    menueItems.push(<li key={item.node.titel}>{item.node.titel}</li>)
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
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <ul>{getMenueItemLabels(data)}</ul>
      </>
    )}
  />
)

export default Menu
