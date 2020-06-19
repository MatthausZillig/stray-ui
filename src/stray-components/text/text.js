import styled from 'styled-components'
import { device } from '../grid/breakpoints'

export const Paragraph = styled.p`
  font-size: ${({ size }) => size || '16px'};
  font-weight: ${({ weight }) => weight || 'normal'};
  color: ${({ color }) => color || '#000'};
  text-align: ${({ align }) => align || 'center'};
  margin: ${({ margin }) => margin || '0'};
  @media ${device.tablet} {
    ${({ smSize }) => smSize && `font-size: ${smSize}`}
  }
`
