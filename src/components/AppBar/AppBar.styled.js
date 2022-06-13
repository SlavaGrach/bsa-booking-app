import styled from '@emotion/styled'

export const Header = styled.header`
  position: relative;
  padding: 10px 20px;
  border-bottom: 1px solid var(--color-gray);
`

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: var(--container-width);
  margin: 0 auto;
`
export const HeaderLogo = styled.span`
  margin: 0;
  color: var(--color-blue-400);
  font-weight: 600;
  font-size: var(--font-size-500);
  font-family: 'Playfair Display', serif;
  text-decoration: none;
`
