import styled from '@emotion/styled/'

export const Main = styled.main``

export const TripListWrapper = styled.section`
  padding: 60px 20px;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, auto));
  justify-content: center;
  gap: 30px;
  max-width: var(--container-width);
  margin: 0 auto;
  padding: 0;
  list-style: none;
`
