import styled from '@emotion/styled'

export const FooterWrapper = styled.footer`
  padding: 30px 20px;
  color: var(--color-white);
  text-align: center;
  background-color: var(--color-blue-400);
`

export const FooterText = styled.span`
  display: flex;
  justify-content: center;
  gap: 7px;
`

export const FooterLink = styled.a`
  color: var(--color-blue-200);
  text-decoration: none;
  transition: 0.1s color ease;
  &:hover {
    color: var(--color-blue-300);
  }
`
export const FooterIcon = styled.img`
  width: 16px;
`
