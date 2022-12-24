import styled from "styled-components";

export const ProjectArea = styled.section`
    width: 80%;
    margin: 0 70px;

    @media (max-width: 480px) {
        margin: 0;
    }
`;

export const ImgLink = styled.a`
    width: 100%;
`;

export const Expose = styled.div`
    margin: 1rem 0;
    display: flex;
    justify-content: space-between;
`;

export const ProjectImg = styled.img`
    width: 100%;
`;

export const Title = styled.h2`
    font-size: 26px;
    margin: 1rem 0;

    @media (max-width: 480px) {
        font-size: 22px;
    }
`;

export const Icons = styled.div`
    width: 20%;
    display: flex;
    justify-content: space-around;

    @media (max-width: 480px) {
        width: 30%;
    }
`;

export const IconLink = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    cursor: pointer;
`;

export const ProjectInfoArea = styled.div`
    width: 100%;
`;

export const TechInfo = styled.p`
    margin: 1.5rem 0;
    font-weight: 400;
    font-size: 16px;
    color: #F9A826;
`;