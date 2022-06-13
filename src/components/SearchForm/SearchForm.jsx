import React from 'react'
import { FilterWrapper, Form, Input, TripsFilter } from './SearchForm.styled'

const SearchForm = () => {
  return (
    <>
      <FilterWrapper>
        <Form autoComplete="off">
          <TripsFilter>
            <Input name="search" type="search" placeholder="search by title" />
          </TripsFilter>
        </Form>
      </FilterWrapper>
    </>
  )
}

export default SearchForm
