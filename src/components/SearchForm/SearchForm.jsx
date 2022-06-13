import React from 'react'
import {
  FilterWrapper,
  Form,
  Input,
  Select,
  TripsFilter,
} from './SearchForm.styled'

const SearchForm = () => {
  return (
    <>
      <FilterWrapper>
        <Form autoComplete="off">
          <TripsFilter>
            <Input name="search" type="search" placeholder="search by title" />
          </TripsFilter>
          <Select name="duration">
            <option value="">duration</option>
            <option value="0_x_5">&lt; 5 days</option>
            <option value="5_x_10">&lt; 10 days</option>
            <option value="10_x">≥ 10 days</option>
          </Select>
          <Select name="level">
            <option value="">level</option>
            <option value="easy">easy</option>
            <option value="moderate">moderate</option>
            <option value="difficult">difficult</option>
          </Select>
        </Form>
      </FilterWrapper>
    </>
  )
}

export default SearchForm
