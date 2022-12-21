import { useEffect, useState } from 'react'

import Skill from '../../components/Skill'

import {
    Container,
    TopArea,
    BottomArea,
    DescriptionArea,
    Title,
    Description,
    ImgArea,
    ImgContent,
    HardSkillsArea,
    SkillsSection,
    SkillDescription,
    SkillName,
    SkillInfo
} from './styles'

import {
    DiReact,
    DiHtml5,
    DiCss3,
    DiGit,
    DiJava
} from 'react-icons/di'

import {
    SiStyledcomponents,
    SiJavascript,
    SiTypescript
} from 'react-icons/si'

import Tech from '../../assets/images/technologies.svg'

const Technologies = () => {

    const [skill, setSkill] = useState('HardSkills')

    const [skillInfo, setSkillInfo] = useState('Hard skills are objective, quantifiable skills gained through training, school, or work experiences. Hard skills are often usually something that can be taught or learned. For that reason, hard skills can typically be easily proven — you either know how to write code, or you dont.')

    const handleChange = (event) => {
        switch (event.target.value) {
            case 1:
                setSkill('React & React Native')
                setSkillInfo('React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. React Native is an open-source UI software framework created by Meta Platforms, Inc. It is used to develop applications for Android, Android TV, iOS, macOS tvOS, Web, Windows and UWP by enabling developers to use the React framework along with native platform capabilities.')
                break;
            case 2:
                setSkill('Styled-Components')
                setSkillInfo('What is styled-components? Using tagged template literals and arrow functions in ES6+ and CSS, styled-components is a React-specific CSS-in-JS styling solution that creates a platform for developers to write actual CSS code to style React components, as well as in React Native.')
                break;
            case 3:
                setSkill('HTML')
                setSkillInfo('The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.')
                break;
            case 4:
                setSkill('CSS')
                setSkillInfo('Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.')
                break;
            case 5:
                setSkill('Java')
                setSkillInfo('Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is a general-purpose programming language intended to let programmers write once, run anywhere (WORA), meaning that compiled Java code can run on all platforms that support Java without the need to recompile.')
                break;
            case 6:
                setSkill('JavaScript')
                setSkillInfo('JavaScript , often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries. All major web browsers have a dedicated JavaScript engine to execute the code on users devices.')
                break;
            case 7:
                setSkill('TypeScript')
                setSkillInfo('TypeScript is a free and open source programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language. It is designed for the development of large applications and transpiles to JavaScript. As it is a superset of JavaScript, existing JavaScript programs are also valid TypeScript programs.')
                break;
            case 8:
                setSkill('Git')
                setSkillInfo('Git is a distributed version control system: tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development. Its goals include speed, data integrity, and support for distributed, non-linear workflows (thousands of parallel branches running on different systems).')
                break;
            default:
                break;
        }
    }

    return (
        <>
            <Container id='technologies'>

                <TopArea>

                    <DescriptionArea>

                        <Title>Technologies</Title>
                        <Description>As a <strong>Web</strong> and <strong>Mobile Engineer</strong> it is important to have a select of multiple skills at your favor. Here are some technologies i have been mastering along side my pratice and study.</Description>

                    </DescriptionArea>

                    <ImgArea>
                        <ImgContent src={Tech} />
                    </ImgArea>

                </TopArea>

                <BottomArea>

                    <HardSkillsArea>

                        <SkillsSection>
                            <Skill
                                icon={<DiReact size={70} />}
                                value={1}
                                mouseOver={handleChange}
                            />
                            <Skill
                                icon={<SiStyledcomponents size={70} />}
                                value={2}
                                mouseOver={handleChange}
                            />
                            <Skill 
                                icon={<DiHtml5 size={70} />}
                                value={3}
                                mouseOver={handleChange}
                            />
                            <Skill 
                                icon={<DiCss3 size={70} />}
                                value={4}
                                mouseOver={handleChange}
                            />
                        </SkillsSection>

                        <SkillsSection>
                            <Skill 
                                icon={<DiJava size={70} />}
                                value={5}
                                mouseOver={handleChange}
                            />
                            <Skill
                                icon={<SiJavascript size={50} />}
                                value={6}
                                mouseOver={handleChange}
                            />
                            <Skill
                                icon={<SiTypescript size={52} />}
                                value={7}
                                mouseOver={handleChange}
                            />
                            <Skill
                                icon={<DiGit size={70} />}
                                value={8}
                                mouseOver={handleChange}
                            />
                        </SkillsSection>

                    </HardSkillsArea>

                    <SkillDescription>

                        <SkillName>{skill}</SkillName>

                        <SkillInfo>{skillInfo}</SkillInfo>

                    </SkillDescription>

                </BottomArea>

            </Container>
        </>
    )
}

export default Technologies