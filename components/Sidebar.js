import React, { useState } from 'react'
import styled from 'styled-components'
import MoonbeamLogo from '../assets/moonbeam-logo.png'
import Image from 'next/image'
import { navItems } from '../static/navItems'
import { SiTwitter, SiGithub, SiTelegram } from 'react-icons/si'
import { Router } from 'next/router'

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
      <Divider />
      <GitHub>
        <a
          href="https://github.com/iqurze9795/moonbeam-portfolio"
          target="_blank"
        >
          <SiGithub size={30} />
        </a>
        <a href="https://twitter.com/MoonbeamNetwork" target="_blank">
          <SiTwitter size={30} />
        </a>
        <a href="https://t.me/Moonbeam_Official" target="_blank">
          <SiTelegram size={30} />
        </a>
      </GitHub>
    </Wrapper>
  )
}

export default Sidebar

const Wrapper = styled.div`
  /* height: calc() 100vh; */
  display: flex;
  flex-direction: column;
  border-right: 1px solid #282b2f;
  min-width: 16.5rem;
  width: 16.5rem;
  border: none;
  padding: 0 1rem;
  @media screen and (max-width: 750px) {
    display: none;
  }
`
const LogoContainer = styled.div`
  margin: 1.5rem 0;
`
const GitHub = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  padding: 1.2rem;
`
const Divider = styled.div`
  width: 100%;
  border: solid #282b2f 1px;
`
const Logo = styled.div`
  width: 90%;
  object-fit: contain;
`
const NavItemsContainer = styled.div`
  margin-top: 3rem;
  flex: 1 1 0%;
  &:hover {
    cursor: pointer;
  }
`
const NavItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
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
