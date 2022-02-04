import React, { useState } from 'react'
import styled from 'styled-components'
import MoonbeamLogo from '../assets/moonbeam-logo.png'
import Image from 'next/image'
import { navItems } from '../static/navItems'

const Sidebar = () => {
  const [activeIcon, setActiveIcon] = useState(navItems[0].title)
  return (
    <Wrapper className='bg-second-gradient'>
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
  border: none;
  padding: 0 1rem;
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
