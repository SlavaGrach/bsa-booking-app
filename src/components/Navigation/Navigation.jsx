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
          <Wrapper>
            <NavLink to="/bookings">
              <span className="visually-hidden">Bookings</span>
              <img src={briefcase} alt="Bookings" />
            </NavLink>
          </Wrapper>
        </NavItem>

        <NavItem>
          <Wrapper>
            <span className="visually-hidden">Profile</span>
            <img src={user} alt="Profile" />
          </Wrapper>
        </NavItem>
      </NavList>
    </NavHeader>
  )
}

export default Navigation
