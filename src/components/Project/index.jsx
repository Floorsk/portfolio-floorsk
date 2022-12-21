import Paragraph from '../Paragraph'

import {
    ProjectArea,
    Title,
    Icons,
    IconLink,
    ImgLink,
    Expose,
    ProjectImg,
    ProjectInfoArea,
    TechInfo,
} from './styles'

import { GrDeploy, GrGithub } from 'react-icons/gr'

const Project = ({ title , deploy, image, description, tech, github }) => {
    return (
        <>
            <ProjectArea>

                <ImgLink href={deploy} target={'_blank'}>
                    <ProjectImg src={image} />
                </ImgLink>

                <Expose>
                    <Title>{title}</Title>

                    <Icons>

                        <IconLink href={deploy} target={'_blank'}>
                            <GrDeploy size={30}/>
                        </IconLink>

                        <IconLink href={github} target={'_blank'}>
                            <GrGithub size={35} color={'#000'}/>
                        </IconLink>

                    </Icons>
                </Expose>

                <ProjectInfoArea>

                    <Paragraph content={description} />
                    
                    <TechInfo>Technologies used in this project: {tech}</TechInfo>

                </ProjectInfoArea>

            </ProjectArea>
        </>
    )
}

export default Project
