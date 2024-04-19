import { Button, Flex, Input} from '@chakra-ui/react'
import styled from '@emotion/styled';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import manas_logo from '../assets/image/Manas_logo.png';

const DepartmentLayout = () => {

    const navigate = useNavigate();

    const [activePage, setActivePage] = useState(0)

    const changePage = (index, item) => {
        navigate(item?.link)
        setActivePage(index)
    }

    const pages = [
        {text: "Заявки", link: "/department/applications"},
        {text: "Рейтинг", link: "/department/rating"},
        {text: "Коммиссия", link: "/department/commission"},
        {text: "Анкеты", link: "/department/questionnaires"},
    ]

    return (
        <>
            <WrapLayout>
                <Navbar>
                    <img src={manas_logo} className='logo' alt="" />
                    <NavbarInner>
                        <p className='role'>Зав. кафедра</p>
                        {
                            pages?.map((item, index) => (
                                <NavbarButton key={index+'but'} style={activePage === index ? {background: '#b80924', color: 'white'} : {}} onClick={() => changePage(index, item)}>
                                    {item?.text}
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

export default DepartmentLayout

const WrapLayout = styled("div")`
  display: flex;
  background: white;
  min-height: 100vh;
  
`;
const Content = styled("div")`
  padding-left: 350px;
  max-width: 95%;
  width: 100%;
  margin: 0 auto;
`;
const Navbar = styled('div')`
    position: fixed;
    top: 0;
    left: 0;
    width: 350px;
    height: 100vh;
    z-index: 100;
    /* border-right: 1px solid black; */
    background: #f7f7f7;
    box-shadow: 2px 3px 7px grey;
    
    .logo {
        width: 130px;
        height: 130px;
        margin: 30px auto;
    }
`;
const NavbarInner = styled('div')`
    padding: 0 40px;
    display: flex;
    flex-direction: column;
    gap: 2px;
    .role {
        font-size: 22px;
        font-weight: 500;
        text-align: center;
        margin: 20px 0;
    }
`
const NavbarButton = styled('button')`
    width: 100%;
    /* height: 40px; */
    /* border-bottom: 1px solid black; */
    font-size: 20px;
    text-align: start;
    padding: 10px 30px;
    padding-left: 20px;
    border-radius: 10px;
    :hover {
        transition: 0.3s ease;
        background: #b80924;
        color: white;
    }
`;