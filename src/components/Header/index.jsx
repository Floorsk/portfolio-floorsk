import {
    Container,
    RightArea,
    ImgContainer,
    Title,
    Nav,
    NavItens,
    NavLink,
    ALink
} from './styles'

import MobileImg from '../../assets/images/mobile-developer.svg'

const Header = () => {
    return (
        <>
            <Container>

                <RightArea>

                    <ImgContainer src={MobileImg}/>
                    <Title>Florsk</Title>

                </RightArea>

                <Nav >

                    <NavItens>
                        <NavLink to={'/'}>Home</NavLink>
                    </NavItens>

                    <NavItens>
                        <ALink 
                            offset='25' 
                            href='#projects'
                        >
                            Projects
                        </ALink>
                    </NavItens>

                    <NavItens>
                        <ALink 
                            offset='25'
                            href='#technologies'
                        >
                            Technologies
                        </ALink>
                    </NavItens>

                    <NavItens>
                        <NavLink to={'/about'}>About</NavLink>
                    </NavItens>

                </Nav>

            </Container>
        </>
    )
}

export default Header