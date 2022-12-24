import {
    Container,
    Nav,
    NavItens,
    NavLink,
    ALink
} from './styles'

const MenuMobile = ({ show, press }) => {
    return (
        <Container show={show} onClick={press}>
            <Nav >

                <NavItens >
                    <NavLink to={'/'} onClick={press}>Home</NavLink>
                </NavItens>

                <NavItens>
                    <ALink
                        href='#projects'
                        onClick={press}
                    >
                        Projects
                    </ALink>
                </NavItens>

                <NavItens>
                    <ALink
                        href='#technologies'
                        onClick={press}
                    >
                        Technologies
                    </ALink>
                </NavItens>

                <NavItens>
                    <NavLink to={'/about'} onClick={press}>About</NavLink>
                </NavItens>

            </Nav>
        </Container>
    )
}

export default MenuMobile