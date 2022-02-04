import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import Main from '../components/Main'
import Sidebar from '../components/Sidebar'
const Dashboard = ({ address }) => {
  return (
    <Wrapper>
      <Sidebar />
      <MainContainer>
        <Header walletAddress={address} />
        <Main />
      </MainContainer>
    </Wrapper>
  )
}

export default Dashboard
const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  /* ff 3.6+ */
  background: -moz-linear-gradient(
    180deg,
    rgba(10, 10, 10, 1) 0%,
    rgba(19, 25, 55, 1) 59%
  );

  /* safari 5.1+,chrome 10+ */
  background: -webkit-linear-gradient(
    180deg,
    rgba(10, 10, 10, 1) 0%,
    rgba(19, 25, 55, 1) 59%
  );

  /* opera 11.10+ */
  background: -o-linear-gradient(
    180deg,
    rgba(10, 10, 10, 1) 0%,
    rgba(19, 25, 55, 1) 59%
  );

  /* ie 6-9 */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#131937', endColorstr='#0A0A0A', GradientType=1 );

  /* ie 10+ */
  background: -ms-linear-gradient(
    180deg,
    rgba(10, 10, 10, 1) 0%,
    rgba(19, 25, 55, 1) 59%
  );

  /* global 94%+ browsers support */
  background: linear-gradient(
    180deg,
    rgba(10, 10, 10, 1) 0%,
    rgba(19, 25, 55, 1) 59%
  );

  color: white;
  overflow: hidden;
`
const MainContainer = styled.div`
  flex: 1;
`
