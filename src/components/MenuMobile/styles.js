import styled from "styled-components";
import { Link } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll-v2'

export const Container = styled.div`
    display: ${(props) => props.show || 'none'};
    position: absolute;
    width: 100%;
    height: 100vh;
    background-color: #FFFFFF;
    top: 0;
    opacity: 0.9;
`;

export const Nav = styled.ul`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    list-style: none;
`;

export const NavItens = styled.li`
    margin: 20px;
    padding: 20px;
    font-size: 18px;

`;

export const NavLink = styled(Link)`
    text-decoration: none;
    color: #161617;
    opacity: 0.7;

    &:hover {
        opacity: 1;
        color: #F9A826;
    }

`;

export const ALink = styled(AnchorLink)`
    text-decoration: none;
    color: #161617;
    opacity: 0.7;

    &:hover {
        opacity: 1;
        color: #F9A826;
    }

`;