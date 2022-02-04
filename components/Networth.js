import React from 'react'
import styled from 'styled-components'

const Networth = () => {
  return (
    <Wrapper>
      <Card>
        <Title>NET WORTH</Title>
        <h1 className="gradient__text">470,000$</h1>
        <Description>Holding 4 Assets</Description>
        <PlaceHolder />
      </Card>
    </Wrapper>
  )
}

export default Networth

const Wrapper = styled.div`
  margin-top: 2rem;
  padding-right: 1rem;
`

const Card = styled.div`
  width: 21rem;
  height: 11rem;
  border: 1px solid #282b2f;
  margin-bottom: 1rem;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  flex-direction: column;
`
const Title = styled.div`
  font-weight: 500;
  font-size: 1rem;
`
const Description = styled.div`
  font-size: 1.1rem;
`
const PlaceHolder = styled.div`
  flex: 1;
`
const Additional = styled.div`
  font-size: 1.1rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > span {
    color: #8a919e !important;
    font-size: 1rem;
  }
`
