import Header from '../../components/Header'
import Footer from '../../components/Footer'

import {
  Container,
  Apresentation,
  HeadLineArea,
  HeadTitle,
  HeadLine,
  ImgArea,
  ImgContent,

} from './styles'

import Proactive from '../../assets/images/proactive.svg'

const Home = () => {
  return (
    <>
      <Header />

      <Container>

        <Apresentation>

          <HeadLineArea>

            <HeadTitle>Hi, I'm Davi!</HeadTitle>
            <HeadLine>I'm a <strong>React</strong> and <strong>React Native</strong> developer in Recife. I like experience new thoughts and bring solutions to my daily needs. Music it's my paxion and you can learn more about me in the <strong>about</strong> section upwards.</HeadLine>

          </HeadLineArea>

          <ImgArea>
            <ImgContent src={Proactive}/>
          </ImgArea>

        </Apresentation>



      </Container>

      <Footer />
    </>
  )
}

export default Home