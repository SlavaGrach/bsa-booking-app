import React from 'react'
import {
  FooterIcon,
  FooterLink,
  FooterText,
  FooterWrapper,
} from './Footer.styled'

import heart from '../../assets/img/heart.svg'

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterText>
        from
        <FooterLink href="https://binary-studio.com/">binary studio</FooterLink>
        with
        <FooterIcon src={heart} alt="heart icon"></FooterIcon>
      </FooterText>
    </FooterWrapper>
  )
}

export default Footer
