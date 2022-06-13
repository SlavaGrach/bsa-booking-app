import React from 'react'
import { formateDate } from '../../../utils/convertDate'
import {
  BookingCancel,
  BookingDate,
  BookingGuest,
  BookingTitle,
  BookingTotalPrice,
  Card,
} from './BookingCard.styled'

function BookingCard({ title, guests, date, totalPrice }) {
  return (
    <Card>
      <BookingTitle>{title}</BookingTitle>
      <BookingGuest>{guests} guests</BookingGuest>
      <BookingDate> {formateDate(date)}</BookingDate>
      <BookingTotalPrice>{totalPrice} $</BookingTotalPrice>
      <BookingCancel>×</BookingCancel>
    </Card>
  )
}

export default BookingCard
