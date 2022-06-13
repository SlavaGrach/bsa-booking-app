import React from 'react'
import { NavLink } from 'react-router-dom'
import Navigation from '../Navigation/Navigation'
import { Header, HeaderWrapper, HeaderLogo } from './AppBar.styled'

const AppBar = () => {
  return (
    <Header>
      <HeaderWrapper>
        <NavLink exact to="/" className="navlink">
          <HeaderLogo>Travel App</HeaderLogo>
        </NavLink>
        <Navigation />
      </HeaderWrapper>
    </Header>
  )
}

export default AppBar
