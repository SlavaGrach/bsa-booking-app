import styled from '@emotion/styled'
import calendar from '../../../assets/img/calendar.svg'

export const Trip = styled.li`
  display: flex;
  flex-direction: column;
  max-width: 320px;
  background-color: var(--color-white);
  border-radius: 1px;
  box-shadow: var(--shadow);
`

export const TripCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px 30px;
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

export const TripInfoContent = styled.div`
  display: flex;
  font-weight: 300;
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
export const Button = styled.div`
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
  &:hover {
    background-color: var(--color-blue-300);
  }
`
