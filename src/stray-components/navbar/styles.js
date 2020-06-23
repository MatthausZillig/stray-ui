import styled from 'styled-components'

const configs = {
  bg: '#242526',
  bgAccent: '#484a4d',
  textColor: '#dadce1',
  navSize: '60px'
}

export const Nav = styled.nav`
  margin-bottom: 24px;
  padding: 0 1rem;
  position: ${({ fixed }) => fixed && `fixed`};
  width: 100vw;
  top: 0;
  background-color: ${({ backgroundColor }) => backgroundColor || configs.bg};
  color: ${({ color }) => color || configs.textColor};
  height: ${({ height }) => height || configs.navSize};
`
