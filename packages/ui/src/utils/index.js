import { css } from 'styled-components'

const sizes = {
  desktop: `min-width: 992px`,
  mobile: `max-width: 991px`,
  tablet: `min-width: 768px, max-width: 991px`,
  phone: `max-width: 767px`
}

export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (${sizes[label]}) {
      ${css(...args)}
    }
  `
  return acc
}, {})

export const flexbox = val => {
  if (!Array.isArray(val)) return null
  const v = val[0].split(' ')
  return css`
    display: flex;
    justify-content: ${v[0]};
    align-items ${v[1]};
  `
}

export const hoverButton = (colour, percentage) =>`
  transition: background-color 200ms ease-in-out;
  &:hover {
    background-color :tint(${colour}, ${percentage});
  }
`
