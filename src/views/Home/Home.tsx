import React from 'react'
import styled from 'styled-components'
import Cookies from 'universal-cookie';
import { Heading, Text, BaseLayout } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
import FarmStakingCard from './components/FarmStakingCard'
import rot13 from '../../utils/encode'
// import LotteryCard from './components/LotteryCard'
import { isAddress } from '../../utils/web3'
import CakeStats from './components/CakeStats'
import TotalValueLockedCard from './components/TotalValueLockedCard'
import TwitterCard from './components/TwitterCard'
import EarnAPRCard from './components/EarnAPRCard'
import EarnAssetCard from './components/EarnAssetCard'
import WinCard from './components/WinCard'
import Timer from './components/Timer'
import MetaMask from './components/Metamask'

const Hero = styled.div`
  align-items: center;
  background-image: url('');
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin: auto;
  margin-bottom: 32px;
  padding-top: 10px;
  text-align: center;
`

const HeroText = styled.div`
  align-items: center;
  background-image: url('');
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  text-align: center;
`
const LeftHero = styled.img`
  background-position: left center;
  height: 160px;
  padding-top: 0;
`

const RightHero = styled.img`
  background-position: right center;
  height: 160px;
  padding-top: 0;
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 32px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`

const CTACards = styled(BaseLayout)`
  align-items: start;
  margin-bottom: 32px;

  & > div {
    grid-column: span 6;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 4;
    }
  }
`

const Home: React.FC = () => {
    const TranslateString = useI18n()
    const cookies = new Cookies();

    return (
        <Page>
            <Hero>
              <LeftHero src="/images/egg/mainpic-left_.png"/>
              <HeroText>
                <Heading as="h1" size="xxl" mb="24px" color="secondary">
                    Mac&Cheese Finance
                </Heading>
                <Text>Meme Platform & Yield Farm built on Polygon(Matic) Network</Text>
              </HeroText>
              <RightHero  src="/images/egg/mainpic-right_.png"/>
            </Hero>
            {/* <Heading as="h1" size="lg" mb="24px" color="secondary">
              <Hero>
                Dankest 3rd Generation Yield Farm built on Matic(Polygon) Network
              </Hero>
            </Heading> */}
            {/* <Timer /> */}
            <div>
                <Cards>
                    <FarmStakingCard />
                    <TwitterCard />
                </Cards>
                <CTACards>
                    <EarnAPRCard />
                    <EarnAssetCard />
                    <WinCard />
                </CTACards>
                <Cards>
                    <CakeStats />
                    {/* <TotalValueLockedCard /> */}
                    <MetaMask/>
                </Cards>
            </div>
        </Page>
    )
}

export default Home
