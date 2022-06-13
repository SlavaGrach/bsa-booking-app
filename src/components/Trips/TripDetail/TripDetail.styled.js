import styled from '@emotion/styled'
import calendar from '../../../assets/img/calendar.svg'

export const Main = styled.main`
  padding: 60px 20px;
`

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px 50px;
  width: 100%;
  max-width: var(--container-width);
  margin: 0 auto;
`

export const Img = styled.img`
  width: 400px;
  height: 400px;
  object-fit: cover;
`

export const TripInfoContent = styled.div`
  display: flex;
  font-weight: 300;
`

export const TripInfo = styled.div`
  width: 100%;
  max-width: 300px;
  padding-bottom: 10px;
  border-bottom: 1px solid var(--color-gray);
`
export const TripInfoTitle = styled.h3`
  margin: 0 0 5px;
  font-weight: 600;
  font-size: var(--font-size-400);
  font-family: 'Playfair Display', serif;
`

export const TripInfoDuration = styled.span`
  min-width: 120px;
  padding-left: 25px;
  background-image: url(${calendar});
  background-repeat: no-repeat;
  background-position: 0 50%;
  background-size: 15px;
`
export const TripInfoLevel = styled.span`
  &::before {
    content: '•';
    margin-right: 10px;
    color: var(--color-blue-200);
  }
`
export const TripPrice = styled.div``

export const TripPriceValue = styled.strong`
  display: block;
  color: var(--color-blue-200);
  font-size: var(--font-size-600);
  line-height: 1;
`
export const TripInfoDescription = styled.div`
  opacity: 0.7;
`

export const TripButton = styled.button``
