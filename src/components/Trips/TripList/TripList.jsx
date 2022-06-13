import React from 'react'
import TripCard from '../TripCard/TripCard'
import { List, Main, TripListWrapper } from './TripList.styled'
import { trips } from '../../../data/trips'
// import TripInfo from '../TripInfo/TripInfo'

const TripList = () => {
  return (
    <Main>
      <TripListWrapper>
        <List>
          {trips &&
            trips.map(({ id, image, title, duration, level, price }) => (
              <TripCard
                key={id}
                id={id}
                title={title}
                duration={duration}
                image={image}
                level={level}
                price={price}
              >
                {/* <TripInfo /> */}
                {/* <TripInfo title={title} duration={duration} level={level} /> */}
              </TripCard>
            ))}
        </List>
      </TripListWrapper>
    </Main>
  )
}

export default TripList
