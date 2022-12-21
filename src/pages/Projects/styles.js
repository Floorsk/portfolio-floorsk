import styled from "styled-components";

export const Container = styled.section`
    width: 80%;
    /* margin: 60px 0; */
    display: flex;
    flex-direction: column;
`;

export const TopArea = styled.div`
    display: flex;
    justify-content: space-around;
`;

export const ImgArea = styled.div`
    width: 30%;
`;

export const ImgContent = styled.img`
    width: 350px;
`;

export const ProjectSection = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const Title = styled.h2`
    color: #F9A826;
    font-size: 56px;
    margin-bottom: 1rem;
`;

export const SubTitle = styled.p`
    font-size: 1.5rem;
    line-height: 1.5;
    text-align: justify;
`;

export const ProjectsArea = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    flex-wrap: wrap;
    margin: 60px 0;
`;