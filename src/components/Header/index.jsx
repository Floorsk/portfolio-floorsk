import {
    Container,
    RightArea,
    ImgContainer,
    Title,
    Nav,
    NavItens,
    NavLink
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
                        <NavLink>Home</NavLink>
                    </NavItens>

                    <NavItens>
                        <NavLink>Projects</NavLink>
                    </NavItens>

                    <NavItens>
                        <NavLink>About</NavLink>
                    </NavItens>

                    <NavItens>
                        <NavLink>Contact</NavLink>
                    </NavItens>

                </Nav>

            </Container>
        </>
    )
}

export default Header