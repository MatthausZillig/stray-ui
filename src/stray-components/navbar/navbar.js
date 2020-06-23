import React from 'react'
import { Nav } from './styles'

export const Navbar = ({ fixed, backgroundColor, color, height, children }) => {
  return (
    <Nav
      fixed={fixed}
      backgroundColor={backgroundColor}
      color={color}
      height={height}
    >
      {children}
    </Nav>
  )
}
