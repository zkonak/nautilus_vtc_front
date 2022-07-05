import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import * as FaIcons from 'react-icons/fa' 

import { SidebarData } from './SideBarData';

const Navbar = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    
    background-color:${props => props.theme.colors.green};
`

const MenuIconOpen = styled(Link)`
    display: flex;
    justify-content: start;
    font-size: 1.5rem;
    margin: 1rem;
    color: ${props => props.theme.colors.white};
`

const MenuIconClose = styled(Link)`
    display: flex;
    justify-content: end;
    font-size: 1.5rem;
    margin-top: 0.75rem;
    margin-right: 1rem;
    color: ${props => props.theme.colors.white};
`

const SidebarMenu = styled.div<{close: boolean}>`
    width: 250px;
    height:100vh;
    background-color:${props => props.theme.colors.green};
    position: fixed;
    top: 0;
    left: ${({ close}) => close ? '0' : '-100%'};
    transition: .6s;
    z-index:10;
    
`

const MenuItems = styled.li`
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: start;
    width: 100%;
    height: 90px;
    padding: 1rem 0 1.25rem;
`

const MenuItemLinks = styled(Link)`
    display: flex;
    align-items: center;
    padding: 0 2rem;
    font-size: 20px;
    text-decoration: none;
    color:${props => props.theme.colors.white};

    &:hover {
        background-color: ${props => props.theme.colors.white};
        color: ${props => props.theme.colors.green};
        width: 100%;
        height: 45px;
        text-align: center;
        border-radius: 5px;
        margin: 0 2rem;
    }
`

const Sidebar= () => {
    const [close, setClose] = useState(true)
    const showSidebar = () => setClose(!close)
    return (
        <>
            <Navbar>
                <MenuIconOpen to="#" onClick={showSidebar}>
                    <FaIcons.FaBars />
                </MenuIconOpen>
            </Navbar>

            <SidebarMenu close={close}>
                <MenuIconClose to="#" onClick={showSidebar}>
                    <FaIcons.FaTimes />
                </MenuIconClose>

                {SidebarData.map((item, index) => {
                    return (
                        <MenuItems key={index}>
                            <MenuItemLinks to={item.path}>
                                {item.icon}
                                <span style={{marginLeft: '16px'}}>{item.title}</span>
                            </MenuItemLinks>
                        </MenuItems>
                    )
                })}
            </SidebarMenu>
        </>
    )
}

export default Sidebar