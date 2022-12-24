import { useState } from 'react'
import { css } from 'styled-components'

import Header from '../../components/Header'
import MenuMobile from '../../components/MenuMobile'
import Footer from '../../components/Footer'
import Projects from '../Projects'
import Technologies from '../Technologies'

import {
  Container,
  Apresentation,
  HeadLineArea,
  HeadTitle,
  HeadLine,
  ImgArea,
  ImgContent,
  Menu
} from './styles'

import Proactive from '../../assets/images/proactive.svg'


const Home = () => {

  const [ show, setShow] = useState('')

  const [none, setNone] = useState('')

  const ShowMenu = () => {
    setShow('flex') 
    setNone('none')
  }

  const CloseMenu = () => {
    setShow('') 
    setNone('')
  }

  return (
    <>
      <Header show={ShowMenu} />

      <MenuMobile
        show={show}
        press={CloseMenu}
      />

      <Container>

        <Apresentation>

          <HeadLineArea>

            <HeadTitle none={none}>Hi, I'm Davi!</HeadTitle>
            <HeadLine>I'm a <strong>React</strong> and <strong>React Native</strong> developer in Recife. I like experience new thoughts and bring solutions to my daily needs. Music it's my passion and you can learn more about me in the <strong>about</strong> section upwards.</HeadLine>

          </HeadLineArea>

          <ImgArea>
            <ImgContent src={Proactive} />
          </ImgArea>

        </Apresentation>

        <Projects />

        <Technologies />

      </Container>

      <Footer />
    </>
  )
}

export default Home