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
        flex-direction: column;
    }
`;

export const HeadLineArea = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 7rem;
    padding: 1rem 0;
`;

export const HeadTitle = styled.h1`
    color: #F9A826;
    margin-bottom: 15px;
    font-size: 86px;
    opacity: 0.9;
`;

export const HeadLine = styled.p`
    font-size: 1.5rem;
    line-height: 1.5;
    text-align: justify;
`;

export const ImgArea = styled.div`
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: center;

`;

export const ImgContent = styled.img`
    width: 350px;
`;
