import Project from '../../components/Project'

import {
    Container,
    TopArea,
    ImgArea,
    ImgContent,
    ProjectSection,
    Title,
    SubTitle,
    ProjectsArea
} from './styles'

import HomeOffice from '../../assets/images/home-office.svg'
import RiseUp from '../../assets/images/projectImages/RiseUp.png'
import PokemonList from '../../assets/images/projectImages/PokemonList.png'
import Balaio from '../../assets/images/projectImages/Balaio.png'
import INEUC from '../../assets/images/projectImages/INEUC.png'

const Projects = () => {
    return (
        <>
            <Container id='projects'>

                <TopArea>

                    <ImgArea>
                        <ImgContent src={HomeOffice} />
                    </ImgArea>
                    <ProjectSection>
                        <Title>Projects</Title>
                        <SubTitle>You can see some personal projects I've been working on to challenge myself and improve as a developer. I have worked as a Mobile Developer at <strong>Embrapa Solos</strong> and as a Web Developer for the <strong>Porto Digital</strong> at the <strong>'Residência OnBoard'</strong>.</SubTitle>
                    </ProjectSection>
                    
                </TopArea>

                <ProjectsArea>

                    <Project
                        title={'Onboard System'}
                        deploy={'https://rise-up-nu.vercel.app'}
                        github={'https://github.com/Floorsk/RiseUp'}
                        image={RiseUp}
                        description='A platform that manages the formation of squads and the selection of challenges for the Residency, as well as articulating schedules for company meetings with the groups, in order to make the coordinators work easier and the process more uncomplicated.'
                        tech={'React, Mui, HTML & CSS'}
                    />

                    <Project
                        title={'Pokedex'}
                        deploy={'https://pokemon-list-vert.vercel.app'}
                        github={'https://github.com/Floorsk/pokemonList'}
                        image={PokemonList}
                        description='Project developed in the Orange Tech+ bootcamp promoted by Inter Bank. In this project I used an api, the PokeApi, and with it I made a pokemon generator that follows the original order of the first generation. Therefore you can se the first 151 Pokemons by clicking in the loadmore button.'
                        tech={'HTML & CSS, JavaScript'}
                    />

                    <Project
                        title={'Balaio'}
                        deploy={'https://balaio.vercel.app'}
                        github={'https://github.com/Floorsk/Balaio'}
                        image={Balaio}
                        description='Login screen made as a final project of the Introduction to Web Programming subject of the first period of the graduation based on the web version of the Balaio application. ( Ideation Project of the KickOff onboard residence that got 2nd place in the PortoDigital demoday.'
                        tech={'HTML & CSS, JavaScript'}
                    />

                    <Project
                        title={'INEUC'}
                        deploy={'https://ineuc-tan.vercel.app'}
                        github={'https://github.com/Floorsk/portfolio-floorsk'}
                        image={INEUC}
                        description='Tracking habbit developed as a final project for my advanced web class in college.'
                        tech={'React, Styled-Components, Firebase'}
                    />

                </ProjectsArea>



            </Container>




        </>
    )
}

export default Projects