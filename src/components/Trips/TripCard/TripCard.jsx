import { React } from 'react'
import { NavLink } from 'react-router-dom'
import {
  Trip,
  TripCardWrapper,
  TripInfo,
  TripInfoContent,
  TripInfoDuration,
  TripInfoTitle,
  TripInfoLevel,
  TripPrice,
  TripPriceValue,
  Button,
} from './TripCard.styled'

const TripCard = ({ id, image, title, duration, level, price, children }) => {
  return (
    <Trip>
      <img src={image} alt="trip" />
      <TripCardWrapper>
        <TripInfo>
          <TripInfoTitle>{title}</TripInfoTitle>

          <TripInfoContent>
            <TripInfoDuration>
              <strong>{duration} days</strong>
            </TripInfoDuration>

            <TripInfoLevel>{level}</TripInfoLevel>
          </TripInfoContent>
        </TripInfo>

        <TripPrice>
          Price
          <TripPriceValue>{price} $</TripPriceValue>
        </TripPrice>

        <NavLink to={`/trip/${id}`}>
          <Button>Discover a trip</Button>
        </NavLink>
      </TripCardWrapper>
    </Trip>
  )
}

export default TripCard
