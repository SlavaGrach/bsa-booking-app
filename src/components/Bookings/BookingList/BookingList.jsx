import React from 'react'
import { bookings } from '../../../data/bookings'
import BookingCard from '../BookingCard/BookingCard'
import { List, Wrapper } from './BookingList.styled'

const BookingList = () => {
  return (
    <Wrapper>
      <List>
        {bookings &&
          bookings.map(({ id, trip, guests, date, totalPrice }) => (
            <BookingCard
              key={id}
              guests={guests}
              date={date}
              title={trip.title}
              totalPrice={totalPrice}
            />
          ))}
      </List>
    </Wrapper>
  )
}

export default BookingList
