import styled from '@emotion/styled'

export const ProfileList = styled.ul`
  position: absolute;
  top: 90%;
  right: 15px;
  z-index: 5;
  //   display: none;
  min-width: 150px;
  padding: 0;
  list-style: none;
  background-color: var(--color-white);
  border-radius: 1px;
  box-shadow: var(--shadow);
`

export const ProfileItem = styled.li`
  padding: 0 10px 10px;
  text-align: center;
  &:first-child {
    padding-top: 10px;
  }
`
export const Button = styled.button`
  display: block;
  width: 100%;
  min-height: 45px;
  padding: 10px 15px;
  color: var(--color-white);
  font-size: var(--font-size-200);
  text-align: center;
  text-decoration: none;
  background-color: var(--color-blue-200);
  border: none;
  border-radius: 1px;
  cursor: pointer;
  transition: background-color 0.2s ease;
`

// .profile-nav__item:first-child {
//   padding-top: 10px;
// }

// .profile-nav__sign-out {
//   min-height: auto;
// }
