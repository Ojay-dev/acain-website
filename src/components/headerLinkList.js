import React from "react"
import HeaderLink from "./headerLink"

function HeaderLinkList({ nav }) {
  return Object.values(nav).map((navItem, idx) => <HeaderLink navItem={navItem} key={idx} />)
}

export default HeaderLinkList
