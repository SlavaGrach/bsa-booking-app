import { React } from 'react'
import { useParams } from 'react-router-dom'
import {
  Img,
  Main,
  TripInfoContent,
  TripInfo,
  TripInfoTitle,
  TripInfoDescription,
  TripInfoDuration,
  TripInfoLevel,
  TripPrice,
  TripPriceValue,
  Wrapper,
} from './TripDetail.styled'

const TripDetail = ({ image, title, duration, level, price }) => {
  const { tripId } = useParams()
  console.log(tripId)
  return (
    <Main>
      <Wrapper>
        <Img src="https://i.gyazo.com/eef2d8dea9e6c55f1bb906ca1f5850b0.jpg" />
        {/* <Img src={image} /> */}
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
      </Wrapper>
    </Main>
  )
}

export default TripDetail
