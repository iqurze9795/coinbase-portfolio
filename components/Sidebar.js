import React, { useState } from 'react'
import styled from 'styled-components'
import MoonbeamLogo from '../assets/moonbeam-logo.png'
import Image from 'next/image'
import { navItems } from '../static/navItems'

const Sidebar = () => {
  const [activeIcon, setActiveIcon] = useState(navItems[0].title)
  return (
    <Wrapper className="bg-second-gradient">
      <LogoContainer>
        <Logo>
          <Image src={MoonbeamLogo}></Image>
        </Logo>
      </LogoContainer>
      <NavItemsContainer>
        {navItems.map((navItem, index) => {
          return (
            <NavItem
              style={{
                borderRight:
                  navItem.title === activeIcon && '6px solid #78C8C6',
                color: navItem.title === activeIcon && '#78C8C6',
              }}
              key={index}
              onClick={() => setActiveIcon(navItem.title)}
            >
              <NavIcon
                style={{ color: navItem.title === activeIcon && '#78C8C6' }}
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
  width: calc(20rem - 16px - 16px);
  border: none;
  padding: 0 1rem;
`
const LogoContainer = styled.div`
  margin: 1.5rem 0;
`
const Logo = styled.div`
  width: 90%;
  object-fit: contain;
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
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
  height: 3.5rem;
  &:hover {
    border-radius: 5px 0px 0px 5px;
    background-color: rgba(120, 200, 198, 0.2);
  }
`
const NavIcon = styled.div`
  padding: 0.2rem;
  border-radius: 50%;
  margin: 0 1rem 0 0.5rem;
  display: grid;
  place-items: center;
`

const NavTitle = styled.div``
