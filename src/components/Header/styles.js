import styled from 'styled-components';
import { Link } from 'react-router-dom';
import  AnchorLink  from 'react-anchor-link-smooth-scroll-v2'

export const Container = styled.div`
    width: 100%;
    height: 180px;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

export const RightArea = styled.div`
    display: flex;
    align-items: center;
`;

export const ImgContainer = styled.img`
    width: 110px;
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
`;

export const NavItens = styled.li`
    margin: 0 20px;
    padding: 0 20px;
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
