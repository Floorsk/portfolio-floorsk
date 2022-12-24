import styled from "styled-components";

export const Container = styled.section`
    width: 80%;
    /* margin: 60px 0; */
    display: flex;
    flex-direction: column;

    @media (max-width: 850px) {
        width: 90%;
    }
`;

export const TopArea = styled.div`
    display: flex;
    justify-content: space-around;
`;

export const ImgArea = styled.div`
    width: 30%;

    @media (max-width: 850px) {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    @media (max-width: 480px) {
        display: none;
    }
`;

export const ImgContent = styled.img`
    width: 350px;

    @media (max-width: 1200px) {
        width: 250px;
    }

    @media (max-width: 650px) {
        width: 100%;
    }
`;

export const ProjectSection = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 480px) {
        width: 100%;
    }
`;

export const Title = styled.h2`
    color: #F9A826;
    font-size: 56px;
    margin-bottom: 1rem;

    @media (max-width: 1200px) {
        font-size: 36px;
    }

    @media (max-width: 800px) {
        font-size: 26px;
    }

    
`;

export const SubTitle = styled.p`
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

export const ProjectsArea = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    flex-wrap: wrap;
    margin: 60px 0;

    @media (max-width: 1200px) {
        grid-template-columns: 1fr;
        align-items: center;
        justify-items: center;
    }

    @media (max-width: 480px) {
        margin: 30px 0 20px;
    }
`;