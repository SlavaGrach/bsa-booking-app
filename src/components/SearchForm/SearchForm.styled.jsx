import styled from '@emotion/styled'
import search from '../../assets/img/search.svg'
import arrowdown from '../../assets/img/arrowdown.svg'

export const FilterWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 180px;
  padding: 20px;
  background-color: var(--color-blue-400);
`

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 20px 25px;
  width: 100%;
  max-width: var(--container-width);
`
export const TripsFilter = styled.label`
  width: 100%;
  max-width: 350px;
  padding-left: 50px;
  background-color: var(--color-white);
  background-image: url(${search});
  background-repeat: no-repeat;
  background-position: 15px 50%;
  background-size: 22px;
`
export const Input = styled.input`
  padding-left: 50px;
  background-color: var(--color-white);
  background-repeat: no-repeat;
  background-position: 15px 50%;
  background-size: 22px;
  min-width: 160px;
  min-height: 45px;
  padding: 10px 15px;
  font-size: var(--font-size-300);
  border: none;
  border-radius: 1px;
  cursor: pointer;
  appearance: none;
`
export const LabelSelect = styled.label``

export const Select = styled.select`
  min-width: 160px;
  min-height: 45px;
  padding: 10px 40px 10px 15px;
  font-size: var(--font-size-300);
  background-color: var(--color-white);
  background-color: var(--color-white);
  background-image: url(${arrowdown});
  background-repeat: no-repeat;
  background-position: right 15px top 50%;
  background-size: 15px;
  border: none;
  border-radius: 1px;
  cursor: pointer;
  appearance: none;
`
