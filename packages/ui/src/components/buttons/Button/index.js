import React from 'react'
import styled from 'styled-components'
import { Progress } from '@components'

import { flexbox } from '@utils'

// type Props = {
//   label: string,
//   loading?: boolean,
// }
function Button(props) {
  const { label, loading } = props
  if (loading) return <Progress.Loading />
  return (
    <StyledButton>
      {label}
    </StyledButton>
  )
}

const StyledButton = styled.button`
  ${flexbox`center center`}
  min-width:     100px;
  height:        40px;
  padding:       0 20px;
  border-radius: 9999px;
  color:         white;
  font-size:     0.75rem;
  font-weight:   700;
  text-align:    center;
  cursor:        pointer;
`

export default Button
