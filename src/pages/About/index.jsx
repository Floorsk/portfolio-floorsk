import { useState } from 'react'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import {
    Container,
    AboutSection,
    Title,
    DescriptionArea,
    Text,
    Highlight,
    HobbieArea,
    HobbieDescription,
    ImgContainer,
    ImgContent
} from './styles'

import Code from '../../assets/images/code.svg'
import Skabeboarding from '../../assets/images/skateboarding.svg'
import Music from '../../assets/images/music.svg'
import Musician from '../../assets/images/musician.svg'
import Conected from '../../assets/images/conected.svg'
import Android from '../../assets/images/android.svg'

const About = () => {

    const [description, setDescription] = useState('The course has a focus on the development of systems for the internet. The course focuses on the use of languages such as JavaScript, HTML, CSS, Java and others during its course, UX and UI design, project management and practical aspects of the area.')

    const [descriptionImg, setDescriptionImg] = useState(Code)

    const handleChange = (value) => {
        switch (value) {

            case 'code':
                setDescription('The course has a focus on the development of systems for the internet. The course focuses on the use of languages such as JavaScript, HTML, CSS, Java and others during its course, UX and UI design, project management and practical aspects of the area.')
                setDescriptionImg(Code)
                break;

            case 'skateboarding':
                setDescription('I started skateboarding in 2017 and have been fissured by the sport ever since. Skateboarding teaches a lot about persistence and about trial and error as well as programming, many give up when something doesnt go as expected and this discourages a lot of young people in the I.T. area nowadays. I am grateful to skateboarding for another one of the hobbies that taught me about perseverance.')
                setDescriptionImg(Skabeboarding)
                break;

            case 'music':
                setDescription('I have always been closed to music as far as I can remember. Music have always been a part of me and I love everything about it, but the most important part is that experience some differents musics and styles make me feel different things, different thoghts when I most need then. Try out new songs, new vibes and dance along sometimes makes my day better in ways that other things could never do.')
                setDescriptionImg(Music)
                break;

            case 'musician':
                setDescription('I got my first classical guitar in 2017, it was a gift from my father, and since then I self learned how to play trying over, over and over till i get it right. I have always been persistent in everything that Im willing to do and music its just one of examples of it.')
                setDescriptionImg(Musician)
                break;

            case 'connection':
                setDescription('I have worked in several projects till now, both web and mobile, plus the experience that the intership has provide me made feel more confortable, w therefore working on projects has become easier for me past this 10 months! Wich made me a excelent co-worker and an amazing professional.')
                setDescriptionImg(Conected)
                break;

            case 'android':
                setDescription('As a mobile developer I was responsible for understanding the concept of the proposed project in meetings and make decisions based on what was discussed to take it to the source code of the application. I am also responsible for studying libraries and proposing which ones should be used for the best development of the project. API consumption, Code Review, Refactoring, Test Model Presentations, Versioning Control among other functions are also part of my experience as an intern.')
                setDescriptionImg(Android)
                break;

            default:
                break;
        }

    }

    return (
        <>
            <Header />

            <Container>

                <AboutSection>

                    <Title>About</Title>

                    <DescriptionArea>

                        <Text>Hi, my name is Davi Galdino and I'm a 20 years old cat lover, software engenieer web and mobile here at Recife, Pernambuco. I'm up to the third period in college currently studying '<Highlight href='#hobbie' onClick={() => { handleChange('code') }}>Sistemas para Internet</Highlight>' at UNICAP (Universidade Católica de Pernambuco).</Text>

                        <Text>My ambition it's to travel the world and experience different cultures and their singularities such as cooking, art, dances and mainly music. As a <Highlight href='#hobbie' onClick={() => { handleChange('musician') }}>musician</Highlight> i love <Highlight href='#hobbie' onClick={() => { handleChange('music') }}>music</Highlight> in every single way, it is part of me as much as I am part of it.</Text>

                        <Text>I have past experience as a <Highlight href='#hobbie' onClick={() => { handleChange('android') }}>Mobile Developer</Highlight> at Embrapa Solos and Imune kids. In both interships i was able to work on big projects and develop soluitions with the develop team, use of the framework Scrum and weekly meetings to see our next step on the <Highlight href='#hobbie' onClick={() => { handleChange('connection') }}>project</Highlight>.</Text>

                        <Text>As far as I'm aware of my self I've always loved the infiniy of the space. Astronomy it's one of my many hobbies and i really like to read about it, yes i'm a reader as well, cinephile and kind of athletic too. I have too many hobbies such as <Highlight href='#hobbie' onClick={() => { handleChange('skateboarding') }}>skateboarding</Highlight>, music, rubik's cube and most import quality of time with my friends.</Text>

                        <Text>I hope you've got to know a little more of who I am in this article! If you interest to work with me, my LinkedIn is in the footer section.</Text>

                        <HobbieArea>

                            <HobbieDescription id='hobbie'>
                                <Text>{description}</Text>
                            </HobbieDescription>

                            <ImgContainer>
                                <ImgContent src={descriptionImg} />
                            </ImgContainer>

                        </HobbieArea>

                    </DescriptionArea>

                </AboutSection>

            </Container>

            <Footer />
        </>
    )
}

export default About

