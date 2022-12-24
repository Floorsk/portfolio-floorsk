import styled from "styled-components";
import AnchorLink from 'react-anchor-link-smooth-scroll-v2'

export const Container = styled.main`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const AboutSection = styled.section`
    width: 71%;
    margin: 60px 0;

    @media (max-width: 620px) {
        width: 90%;
        margin: 30px 0 0;
    }
`;

export const Title = styled.h1`
    font-size: 56px;
    color: #F9A826;
    text-align: left;

    @media (max-width: 620px) {
        font-size: 36px;
    }
`;

export const DescriptionArea = styled.div`
    margin: 3rem auto;
    padding: 0 180px;
    min-height: 230px;

    @media (max-width: 1200px) {
        padding: 0 60px;
    }

    @media (max-width: 800px) {
        padding: 0 0px;
    }
`;

export const Text = styled.p`
    font-family: 'Georgia', sans-serif;
    font-size: 1.3rem;
    line-height: 1.6em;
    margin: 1rem 0;
    text-align: justify;

    @media (max-width: 620px) {
        font-size: 1.05rem;
    }
`;

export const Highlight = styled(AnchorLink)`
    color: #F9A826;
    cursor: pointer;
    font-weight: 600;
    text-decoration: none;
`;

export const HobbieArea = styled.div`
    width: 100%;
    margin: 1.5rem 0;
    display: flex;
    justify-content: space-between;

    @media (max-width: 620px) {
        display: inline;
    }
`;

export const HobbieDescription = styled.div`
    width: 50%;
    display: flex;
    align-items: center;

    @media (max-width: 620px) {
        width: 100%;
    }
`;

export const ImgContainer = styled.div`
    width: 40%;

    @media (max-width: 1400px) {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    @media (max-width: 620px) {
        width: 100%;
        margin-top: 10px;
    }
`;

export const ImgContent = styled.img`
    width: 90%;

    @media (max-width: 620px) {
        width: 70%;
    }
`;