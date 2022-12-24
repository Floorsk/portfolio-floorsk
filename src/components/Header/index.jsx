import { useState } from 'react'

import {
    Container,
    RightArea,
    ImgContainer,
    Title,
    Nav,
    NavItens,
    NavLink,
    ALink,
    MenuButton,

} from './styles'

import { AiOutlineMenu } from 'react-icons/ai'

import MobileImg from '../../assets/images/mobile-developer.svg'

const Header = ({ show }) => {

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

                <MenuButton onClick={show}>
                    <AiOutlineMenu size={30} />
                </MenuButton>

            </Container>
        </>
    )
}

export default Header