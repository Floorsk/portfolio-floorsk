import styled from "styled-components";

export const Container = styled.main`
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const Apresentation = styled.section`
    width: 80%;
    display: flex;
    margin: 60px 0;
    justify-content: space-between;
    
    @media (max-width: 1200px) {
        display: inline;
        align-items: center;
        justify-content: center;
    }

    @media (max-width: 850px) {
        width: 90%;
    }
`;

export const HeadLineArea = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 7rem;
    padding: 1rem 0;

    @media (max-width: 1200px) {
        width: 100%;
        align-items: center;
        margin: 0 0;
    }
`;

export const HeadTitle = styled.h1`
    display: ${(props) => props.none || 'inline'};
    color: #F9A826;
    margin-bottom: 15px;
    font-size: 86px;
    opacity: 0.9;

    @media (max-width: 1200px) {
        font-size: 56px;
    }

    @media (max-width: 800px) {
        font-size: 36px;
    }

`;

export const HeadLine = styled.p`
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
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 1200px) {
        width: 100%;
        margin: 10px 0 0;
    }
`;

export const ImgContent = styled.img`
    width: 350px;

    @media (max-width: 1200px) {
        width: 250px;
    }

    @media (max-width: 650px) {
        width: 25%;
    }
`;
