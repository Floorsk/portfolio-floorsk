import styled from "styled-components";

export const Container = styled.li`
    width: 90px;
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 1rem;
    background-color: #000;
    color: #FFF;
    opacity: 0.9;
    margin: .7rem;

    &:hover {
        cursor: pointer;
        background-color: #F9A826;
        color: #FFF;
    }

    @media (max-width: 1200px) {
        width: 72px;
        height: 72px;
    }

    @media (max-width: 480px) {
        width: 67px;
        height: 67px;
    }

`;


