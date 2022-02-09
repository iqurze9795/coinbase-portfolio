import React from 'react'
import styled from 'styled-components'
import Coin from './Coin'
import CoinPriceChart from './CoinPriceChart'
import MoonbeamIcon from '../assets/coin-icon/moonbeam.png'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { FiChevronsUp } from 'react-icons/fi'
import { coins } from '../static/coins'
import Image from 'next/image'
import ChainInfo from './ChainInfo'
function Portfolio() {
  return (
    <Wrapper>
      <Content>
        <Chart>
          <div>
            <CoinPrice>
              <CoinPriceTitle>
                <Image width={50} height={50} src={MoonbeamIcon} />
                <p style={{ paddingLeft: '10px' }}>Moonbeam (GLMR)</p>
              </CoinPriceTitle>
              <CoinPriceValue>{'$'} 5.98</CoinPriceValue>
              <PercentChange>
                +0.5$ (10%) <FiChevronsUp />
              </PercentChange>
            </CoinPrice>
          </div>
          <CoinPriceChart />
        </Chart>
        <ChainInfo />
        <PortfolioTable>
          <TableItem>
            <Title>Your Assets</Title>
          </TableItem>
          <Divider />
          <Table>
            <TableItem>
              <TableRow>
                <div style={{ flex: 3 }}>Name</div>
                <div style={{ flex: 2 }}>Balance</div>
                <div style={{ flex: 1 }}>Price</div>
                <div style={{ flex: 1 }}>Allocaiton</div>
                <div style={{ flex: 0 }}>
                  <BsThreeDotsVertical />
                </div>
              </TableRow>
            </TableItem>
            <Divider />
            <div>
              {coins.map((coin, index) => {
                return (
                  <div key={coin.name}>
                    <Coin coin={coin} />
                    <Divider />
                  </div>
                )
              })}
            </div>
          </Table>
        </PortfolioTable>
      </Content>
    </Wrapper>
  )
}

export default Portfolio

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: end;
`
const Content = styled.div`
  width: 100%;
  /* max-height: 1000px; */
  padding: 2rem 1rem;
`

const Chart = styled.div`
  border: 1px solid #272b2f;
  padding: 1rem 2rem;
`

const CoinPrice = styled.div``

const CoinPriceTitle = styled.div`
  color: #8a919e;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
const CoinPriceValue = styled.div`
  color: #11ef68;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 2.5rem;
  font-weight: 700;
  /* margin: 0.5rem 0; */
`
const PercentChange = styled.div`
  /* color: #ef1111; */
  color: #11ef68;
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 600;
  justify-content: flex-end;
`

const PortfolioTable = styled.div`
  margin-top: 1rem;
  border: 1px solid #282b2f;
`
const Table = styled.table`
  width: 100%;
`
const TableRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  & > th {
    text-align: left;
  }
`
const TableItem = styled.div`
  padding: 1rem 2rem;
`
const Divider = styled.div`
  border-bottom: 1px solid #282b2f;
  &:last-child {
    display: none;
  }
`
const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
`
