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
`;

export const Title = styled.h1`
    font-size: 56px;
    color: #F9A826;
    text-align: left;
`;

export const DescriptionArea = styled.div`
    margin: 3rem auto;
    padding: 0 180px;
    min-height: 230px;
`;

export const Text = styled.p`
    font-family: 'Georgia', sans-serif;
    font-size: 1.3rem;
    line-height: 1.6em;
    margin: 1rem 0;
    text-align: justify;
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
`;

export const HobbieDescription = styled.div`
    width: 50%;
    display: flex;
    align-items: center;  
`;

export const ImgContainer = styled.div`
    width: 40%;
`;

export const ImgContent = styled.img`
    width: 90%;
`;