import React from 'react'
import styled, { keyframes } from 'styled-components'

import { flexbox } from '@utils'

export default function Loading (props) {
  return (
    <Container {...props}>
      <Loader {...props} />
    </Container>
  )
}

const Container = styled.div`
  flex    : 1;
  width   : 100%;
  ${flexbox`center center`}
`

const loader = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const Loader = styled.div`
  border              : 2px solid rgba(0,0,0,0.2);
  border-bottom-color : rgba(255,255,255,0.8);
  transform           : translateZ(0);
  animation           : ${loader} 500ms infinite linear;
  width               : 25px;
  height              : 25px;
  border-radius       : 50%;
`
