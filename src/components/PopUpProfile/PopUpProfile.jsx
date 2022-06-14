import React from 'react'
import { Button, ProfileItem, ProfileList } from './PopUpProfile.styled'

const PopUpProfile = ({ isActive }) => {
  return isActive ? (
    <ProfileList>
      <ProfileItem>Jhon Dee</ProfileItem>
      <ProfileItem>
        <Button>Sign Out</Button>
      </ProfileItem>
    </ProfileList>
  ) : (
    ''
  )
}

export default PopUpProfile
