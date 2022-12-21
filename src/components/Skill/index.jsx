import {
    Container,
} from './styles'

const Skill = ({ icon, mouseOver, value }) => {
    return (
        <>
            <Container onMouseOver={mouseOver} value={value}>
                {icon}
            </Container>
        </>
    )
}

export default Skill
