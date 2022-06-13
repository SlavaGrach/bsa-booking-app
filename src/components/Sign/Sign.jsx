import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  Button,
  Form,
  Input,
  InputHeading,
  Label,
  Main,
  SignLink,
  SignTitle,
  Span,
} from './Sign.styled'

const Sign = ({ isSignPage }) => {
  return (
    <Main>
      <Form>
        <SignTitle>Sign In</SignTitle>
        <Label>
          <InputHeading>Email</InputHeading>
          <Input name="email" type="email" required />
        </Label>
        <Label>
          <InputHeading>Password</InputHeading>
          <Input
            name="password"
            type="password"
            autoComplete="new-password"
            required
          />
          <Button>Sign In</Button>
        </Label>
      </Form>
      <Span>
        Already have an account?&nbsp;
        <NavLink to="/sign-up">
          <SignLink>Sign Up</SignLink>
        </NavLink>
      </Span>
    </Main>
  )
}

export default Sign
