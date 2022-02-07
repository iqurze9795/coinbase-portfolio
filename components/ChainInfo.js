import React from 'react'
import styled from 'styled-components'
import { Doughnut } from 'react-chartjs-2'
import Image from 'next/image'
import MoonbeamIcon from '../assets/coin-icon/moonbeam.png'
import { FiChevronsUp } from 'react-icons/fi'
import 'chart.js/auto'
import CustomChart from './CustomChart'
const CoinPrice = () => {
  return (
    <Wrapper>
      <Card>
        <PriceContainer>
          <div>
            <Image width={50} height={50} src={MoonbeamIcon} />
          </div>

          <div>
            <Price style={{ color: '#6CE25D' }}>
              $50.82 <FiChevronsUp />
            </Price>
            <PriceChange style={{ color: '#ED0528' }}>
              +11.7$ (13.52%)
            </PriceChange>
          </div>
        </PriceContainer>
        <CoinTitle>Moonbeam</CoinTitle>
        <CoinSubTitle>GLMR</CoinSubTitle>
        <CustomChart />
      </Card>
    </Wrapper>
  )
}

export default CoinPrice

const Wrapper = styled.div`
  /* padding-right: 1rem; */
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`

const Card = styled.div`
  width: 100%;
  height: 19rem;
  /* border: 1px solid #282b2f; */
  margin-bottom: 1rem;
  /* padding: 1.5rem; */
  display: flex;
  flex-direction: column;
`
const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Price = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const PriceChange = styled.div`
  font-size: 0.8rem;
  font-weight: bold;
  display: flex;
  justify-content: flex-end;
`
const CoinTitle = styled.div`
  font-size: 1rem;
  margin-top: 2rem;
  font-weight: 700;
`
const CoinSubTitle = styled.div`
  font-size: 0.5rem;
  color: darkgray;
`
