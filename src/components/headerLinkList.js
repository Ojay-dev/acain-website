import React from "react"
import HeaderLink from "./headerLink"

function HeaderLinkList({ nav }) {
  return Object.values(nav).map(navItem => <HeaderLink navItem={navItem} />)
}

export default HeaderLinkList
