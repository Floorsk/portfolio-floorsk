import styled from "styled-components";

export const Container = styled.footer`
    width: 100vw;
    height: 120px;
    background-color: #000;
    opacity: 0.9;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

export const Copyright = styled.p`
    opacity: 0.9;
    font-size: 14px;
    font-weight: 300;
    color: #FFF;
`;

export const Icons = styled.ul`
    display: flex;
    list-style: none;
`;

export const IconItem = styled.li`
    margin: 0 10px;
`;

export const IconLink = styled.a`
    width: 40px;
    height: 40px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FFF;
    color: #000;

    &:hover {
        cursor: pointer;
        background-color: #F9A826;
        color: #FFF;
    }
`;