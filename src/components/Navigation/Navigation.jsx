import React from 'react'
import { NavLink } from 'react-router-dom'
import { NavItem, NavList, NavHeader, Wrapper } from './Navigation.styled'
import briefcase from '../../assets/img/briefcase.svg'
import user from '../../assets/img/user.svg'

const Navigation = () => {
  return (
    <NavHeader>
      <NavList>
        <NavItem>
          <NavLink to="/bookings">
            <Wrapper>
              <img src={briefcase} alt="Bookings" />
            </Wrapper>
          </NavLink>
        </NavItem>

        <NavItem>
          <Wrapper>
            <img src={user} alt="Profile" />
          </Wrapper>
        </NavItem>
      </NavList>
    </NavHeader>
  )
}

export default Navigation
