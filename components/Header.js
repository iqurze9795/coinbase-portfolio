import React from 'react'
import styled from 'styled-components'
import { CgSearch } from 'react-icons/cg'
import Image from 'next/image'
import MoonbeamIcon from '../assets/coin-icon/moonbeam.png'
const Header = ({ walletAddress }) => {
  return (
    <Wrapper>
      <Title>Dashboard</Title>
      <ButtonsContainer>
        <InputWrapper>
          <CgSearch size={26} color="#282b2f" />
          <SearchBox placeholder="Paste your address..."></SearchBox>
        </InputWrapper>

        {/* <WalletWrapper>
          <Image width={48} height={30} src={MoonbeamIcon} />
          <WalletLink>
            <WalletLinkTitle>Wallet Connected</WalletLinkTitle>
            <WalletAddress>
              {walletAddress.slice(0, 7)} ... {walletAddress.slice(35)}
            </WalletAddress>
          </WalletLink>
        </WalletWrapper> */}

        {/* <Button style={{ backgroundColor: '#3773f5', color: '#000' }}>
          Buy / Sell
        </Button>
        <Button style={{ backgroundColor: '#3773f5', color: '#000' }}>
          Send / Receive
        </Button> */}
      </ButtonsContainer>
    </Wrapper>
  )
}

export default Header

const Wrapper = styled.div`
  width: calc(100%);
  padding: 1rem 1rem;
  /* margin-top: 1.5rem; */
  border-bottom: 1px solid #282b2f;
  display: flex;
  align-items: center;
`
const Title = styled.div`
  font-size: 2rem;
  font-weight: 600;
  flex: 1;
`
const ButtonsContainer = styled.div`
  display: flex;
`

const InputWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  & > svg {
    margin-left: 15px;
    position: absolute;
  }
`
const SearchBox = styled.input`
  display: flex;
  height: 3rem;
  width: 30rem;
  background: transparent;
  border: solid 1px #282b2f;
  color: white;
  font-size: 1rem;
  padding-left: 4rem;
  border-radius: 20px;
`
const Button = styled.div`
  border: 1px solid #282b2f;
  padding: 0.8rem;
  font-size: 1.3rem;
  font-weight: 500;
  border-radius: 0.4rem;
  margin-right: 1rem;
  &:hover {
    cursor: pointer;
  }
`
const WalletWrapper = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid #282b2f;
  height: 3.4rem;
  border-radius: 50rem;
  font-size: 1.2rem;
  /* margin-right: 1rem; */
  padding: 0 2rem;
`
const WalletLink = styled.div`
  font-size: 0.8rem;
  padding-left: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`
const WalletLinkTitle = styled.div`
  font-size: 1.1rem;
  margin-bottom: 0.3rem;
  color: #27ad75;
  font-weight: 600;
`
const WalletAddress = styled.div`
  font-size: 0.8rem;
`
