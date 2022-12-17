import {
    Container,
    Copyright,
    Icons,
    IconItem,
    IconLink
} from './styles'

import { TfiLinkedin } from 'react-icons/tfi'
import { FiGithub } from 'react-icons/fi'
import { SiGmail } from 'react-icons/si'
import { BsInstagram } from 'react-icons/bs'

const Footer = () => {
  return (
    <>
        <Container>

            <Copyright>&copy;Davi Galdino 2022</Copyright>

            <Icons>
                <IconItem>
                    <IconLink href='https://www.linkedin.com/in/davigaldino/' target='_blank'>
                        <TfiLinkedin/>
                    </IconLink>
                </IconItem>

                <IconItem>
                    <IconLink href='https://github.com/Floorsk' target='_blank'>
                        <FiGithub/>
                    </IconLink> 
                </IconItem>

                <IconItem>
                    <IconLink href='mailto:davi.galdino08@gmail.com' target='_blank'>
                        <SiGmail/>
                    </IconLink> 
                </IconItem>

                <IconItem>
                    <IconLink href='https://www.instagram.com/floorskn/' target='_blank'>
                        <BsInstagram/>
                    </IconLink> 
                </IconItem>

            </Icons>

        </Container>
    </>
  )
}

export default Footer