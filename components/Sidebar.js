import React, { useState } from 'react'
import styled from 'styled-components'
import MoonbeamLogo from '../assets/moonbeam-logo.png'
import Image from 'next/image'
import { navItems } from '../static/navItems'

const Sidebar = () => {
  const [activeIcon, setActiveIcon] = useState(navItems[0].title)
  return (
    <Wrapper>
      <LogoContainer>
        <Logo>
          <Image src={MoonbeamLogo}></Image>
        </Logo>
      </LogoContainer>
      <NavItemsContainer>
        {navItems.map((navItem, index) => {
          return (
            <NavItem key={index} onClick={() => setActiveIcon(navItem.title)}>
              <NavIcon
                style={{ color: navItem.title === activeIcon && '#3773f5' }}
              >
                {navItem.icon}
              </NavIcon>
              <NavTitle>{navItem.title}</NavTitle>
            </NavItem>
          )
        })}
      </NavItemsContainer>
    </Wrapper>
  )
}

export default Sidebar

const Wrapper = styled.div`
  height: calc() 100vh;
  border-right: 1px solid #282b2f;
  width: calc(22rem - 16px - 16px);
  padding: 0 1rem;
  /* ff 3.6+ */
  background: -moz-linear-gradient(
    330deg,
    rgba(10, 10, 10, 1) 0%,
    rgba(19, 25, 55, 1) 59%
  );

  /* safari 5.1+,chrome 10+ */
  background: -webkit-linear-gradient(
    330deg,
    rgba(10, 10, 10, 1) 0%,
    rgba(19, 25, 55, 1) 59%
  );

  /* opera 11.10+ */
  background: -o-linear-gradient(
    330deg,
    rgba(10, 10, 10, 1) 0%,
    rgba(19, 25, 55, 1) 59%
  );

  /* ie 6-9 */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#0A0A0A', endColorstr='#131937', GradientType=1 );

  /* ie 10+ */
  background: -ms-linear-gradient(
    330deg,
    rgba(10, 10, 10, 1) 0%,
    rgba(19, 25, 55, 1) 59%
  );

  /* global 94%+ browsers support */
  background: linear-gradient(
    330deg,
    rgba(10, 10, 10, 1) 0%,
    rgba(19, 25, 55, 1) 59%
  );
`
const LogoContainer = styled.div`
  margin: 1.5rem 0;
`
const Logo = styled.div`
  width: 90%;
  object-fit: contain;
  /* margin-left: 1.5rem; */
`
const NavItemsContainer = styled.div`
  margin-top: 3rem;
  &:hover {
    cursor: pointer;
  }
`
const NavItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  font-weight: 500;
  border-radius: 0.5rem;
  margin-bottom: 1.5rem;
  height: 4rem;
  &:hover {
    background-color: #141519;
  }
`
const NavIcon = styled.div`
  background-color: #141519;
  padding: 0.7rem;
  border-radius: 50%;
  margin: 0 1rem;
  display: grid;
  place-items: center;
`

const NavTitle = styled.div``
