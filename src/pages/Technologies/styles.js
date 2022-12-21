import styled from "styled-components";

export const Container = styled.section`
    width: 80%;
`;

export const TopArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

export const BottomArea = styled.div`
    width: 100%;
    margin: 2rem 0;
    display: flex;
    justify-content: space-around;
`;

export const DescriptionArea = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    padding: 1rem 0;
`;

export const Title = styled.h2`
    font-size: 56px;
    color: #F9A826;
    margin-bottom: 1rem;
`;

export const Description = styled.p`
    font-size: 1.5rem;
    line-height: 1.5;
    text-align: justify;
`;

export const ImgArea = styled.div`
    width: 30%;
`;

export const ImgContent = styled.img`
    width: 100%;
`;

export const HardSkillsArea = styled.div`
    width: 40%;
    margin: 2rem 0;
    display: flex;
    flex-direction: column;  
`;

export const SkillsSection = styled.ul`
    margin: 1rem 0;
    display: flex;
    justify-content: space-between;
    list-style: none;
`;

export const SkillDescription = styled.div`
    width: 40%;
`;

export const SkillName = styled.h2`
    text-align: center;
    margin: 1.5rem 0;
    font-size: 36px;
    color: #F9A826;
`;

export const SkillInfo = styled.p`
    font-size: 1.2rem;
    line-height: 1.5;
    text-align: justify;
`;