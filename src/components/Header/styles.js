import styled from 'styled-components';
import { Link } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll-v2'

export const Container = styled.div`
    width: 100%;
    height: 180px;
    display: flex;
    align-items: center;
    justify-content: space-around;

    @media (max-width: 620px) {
        height: 120px;
        justify-content: space-between;
    }
`;

export const RightArea = styled.div`
    display: flex;
    align-items: center;

    @media (max-width: 620px) {
        margin-left: 25px;
    }
`;

export const ImgContainer = styled.img`
    width: 110px;

    @media (max-width: 620px) {
        width: 70px;
    }
`;

export const Title = styled.h1`
    opacity: 0.8;
    margin: 0 10px;
    font-size: 18px;
`;

export const Nav = styled.ul`
    display: flex;
    flex-direction: row;
    list-style: none;

    @media (max-width: 620px) {
        margin-right: 25px;
    }
`;

export const NavItens = styled.li`
    margin: 0 20px;
    padding: 0 20px;
    font-size: 18px;

    @media (max-width: 800px) {
        margin: 0 20px;
        padding: 0 0px;
    }

    @media (max-width: 620px) {
        display: none;
    }
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

export const MenuButton = styled.div`
    display: none;
    margin-right: 20px;

    @media (max-width: 620px) {
        display: inline;
    }
`;