import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';


const Container = styled.div`
    height:5rem;
    background-color: cadetblue;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    `
const MenuLeft= styled.div`
    display: flex;
    width: 80%;
    justify-content: space-between;
    align-items: center;
`
const Logo = styled.span`
    font-size:2rem;
    font-weight:bold;
    color:white;
    text-decoration:underline;
    flex: 1;
    `
const Menu = styled.ul`
    display: flex;
    justify-content: space-between;
    flex: 1;
        @media only screen and (max-width: 700px){
        flex-direction: column;
        height: 100vh;
        background-color: dodgerblue;
        position: absolute;
        justify-content: center;
        text-align:center;
        width: 15rem;
        top: 0;
        right: ${({active}) => active ? "0" : "-15rem"};
        z-index:100;
        };
`
const MenuItem = styled.li`
    list-style:none;
    color: white;
    font-weight: bold;
    cursor: pointer; 
`
const Hamburger = styled.div`
    cursor: pointer;
    @media only screen and (min-width: 700px){
        display: none;
    }
`

const Navbar = ( {active, setActive} ) => {
    

    const menuItems = [
    {
        id: 1,
        name: 'home',
    },
    {
        id: 2,
        name: 'about',
    },
    {
        id: 2,
        name: 'services',
    },
    {
        id: 2,
        name: 'contact',
    },
];

    return (
        <Container>
            <MenuLeft>
                <Logo>View</Logo>
                <Menu onClick={() => setActive(false)} active={active}>
                    {menuItems.map(item => (
                        <MenuItem>{item.name}</MenuItem>
                    ))}
                </Menu>
            </MenuLeft>
            <Button name={"join us"} color={"white"} backgroundColor={"#e9696b"} />
            <Hamburger onClick={()=>setActive(!active)}>
                {active ? <CloseIcon /> : < MenuIcon /> }
            </Hamburger>
        </Container>
    )
}

export default Navbar
                
                
