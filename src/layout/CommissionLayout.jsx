import { Button, Flex, Input} from '@chakra-ui/react'
import styled from '@emotion/styled';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import manas_logo from '../assets/image/Manas_logo.png';
import { FiTrendingUp } from "react-icons/fi";
import { SiGoogleforms } from "react-icons/si";
import { SlNotebook } from "react-icons/sl";

const CommissionLayout = () => {

    const navigate = useNavigate();

    const [activePage, setActivePage] = useState(0)

    const changePage = (index, item) => {
        navigate(item?.link)
        setActivePage(index)
    }

    const pages = [
        {text: "Рейтинг", link: "rating", icon: <FiTrendingUp size={26}/>},
        {text: "Анкеты", link: "questionnaires", icon: <SiGoogleforms size={26}/>},
        {text: "Экзамены", link: "exams", icon: <SlNotebook size={26}/>},
    ]

    return (
        <>
            <WrapLayout>
                <Navbar>
                    <NavbarInner>
                        <p className='role'>Коммисия</p>
                        {
                            pages?.map((item, index) => (
                                <NavbarButton key={index+'but'} style={activePage === index ? {color: 'white'} : {color: '#98a2b3'}} onClick={() => changePage(index, item)}>
                                    {item?.icon} {item?.text}
                                </NavbarButton>
                            ))
                        }
                    </NavbarInner>
                </Navbar>
                <Content>
                    <Outlet/>
                </Content>
            </WrapLayout>
        </>
    )
}

export default CommissionLayout;

const WrapLayout = styled("div")`
  display: flex;
  background: white;
  min-height: 100vh;
  
`;
const Content = styled("div")`
  padding-left: 300px;
  max-width: 95%;
  width: 100%;
  margin: 0 auto;
`;
const Navbar = styled('div')`
    position: fixed;
    top: 0;
    left: 0;
    width: 300px;
    height: 100vh;
    z-index: 100;
    background: #2f4050;
    
    .logo {
        width: 130px;
        height: 130px;
        margin: 30px auto;
    }
`;
const NavbarInner = styled('div')`
    display: flex;
    flex-direction: column;
    gap: 2px;
    .role {
        font-size: 20px;
        font-weight: 500;
        margin-top: 50px;
        padding: 15px 20px;
        color: white;
    }
`
const NavbarButton = styled('button')`
    width: 100%;
    display: flex;
    gap: 10px;
    font-size: 19px;
    text-align: start;
    color: '#d0d2d4';
    padding: 10px 30px;
    padding-left: 20px;
    :hover {
        transition: 0.3s ease;
        background: '#9ca6b7';
        color: white;
    }
`;