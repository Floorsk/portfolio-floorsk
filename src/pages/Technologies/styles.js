import styled from "styled-components";

export const Container = styled.section`
    width: 80%;

    @media (max-width: 850px) {
        width: 90%;
    }
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

    @media (max-width: 480px) {
        display: inline;
    }
`;

export const DescriptionArea = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    padding: 1rem 0;

    @media (max-width: 480px) {
        width: 100%;
    }
`;

export const Title = styled.h2`
    font-size: 56px;
    color: #F9A826;
    margin-bottom: 1rem;

    @media (max-width: 1200px) {
        font-size: 36px;
    }

    @media (max-width: 800px) {
        font-size: 26px;
    }
`;

export const Description = styled.p`
    font-size: 1.5rem;
    line-height: 1.5;
    text-align: justify;

    @media (max-width: 1200px) {
        font-size: 1.3rem;
    }

    @media (max-width: 800px) {
        font-size: 1.1rem;
    }

`;

export const ImgArea = styled.div`
    width: 30%;

    @media (max-width: 480px) {
        display: none;
    }
`;

export const ImgContent = styled.img`
    width: 100%;
`;

export const HardSkillsArea = styled.div`
    width: 40%;
    margin: 2rem 0;
    display: flex;
    flex-direction: column; 
    
    @media (max-width: 480px) {
        width: 100%;
    }
`;

export const SkillsSection = styled.ul`
    margin: 1rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center;
        justify-items: center;
    list-style: none;

    @media (max-width: 1410px) {
        grid-template-columns: 1fr 1fr 1fr ;
    }

    @media (max-width: 1200px) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }

    @media (max-width: 1200px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 480px) {
        width: 100%;
        margin: 0 0;
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }

`;

export const SkillDescription = styled.div`
    width: 40%;

    @media (max-width: 1200px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-bottom: 5%;
    }

    @media (max-width: 480px) {
        width: 100%;
    }
`;

export const SkillName = styled.h2`
    text-align: center;
    margin: 1.5rem 0;
    font-size: 36px;
    color: #F9A826;

    @media (max-width: 1200px) {
        font-size: 26px;
    }
`;

export const SkillInfo = styled.p`
    font-size: 1.2rem;
    line-height: 1.5;
    text-align: justify;

    @media (max-width: 1200px) {
        font-size: 1rem;
    }
`;