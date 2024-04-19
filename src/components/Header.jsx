import styled from '@emotion/styled';
import React from 'react';
import manas_logo from '../assets/image/Manas_logo.png';

const Header = () => {
  return (
    <Wrapper>
        <img src={manas_logo} alt="manas_icon" style={{width: 90, height: 90}} />
        <Buttons>
            <div className='first_words'>
                <p className='univer'>КЫРГЫЗСКО-ТУРЕЦКИЙ УНИВЕРСИТЕТ МАНАС</p>
                <p className='slogan'>Больше, чем просто университет</p>
            </div>
            <div>
                <SignInButton>
                    Войти
                </SignInButton>
            </div>
        </Buttons>
    </Wrapper>
  )
}

export default Header

const Wrapper = styled('div')`
    background: #b80924;
    display: flex;
    flex-direction: row;
    height: 110px;
    padding: 10px 100px;
    gap: 120px;
`;
const Buttons = styled('div')`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding-right: 50px;
    .first_words {
        .univer {
            font-size: 20px;
            color: white;
        }
        .slogan {
            font-size: 18px;
            font-style: italic;
            color: white;
        }
    }
`
const SignInButton = styled('button')`
    width: 90px;
    height: 40px;
    border-radius: 10px;
    background: white;
    color: black;
    font-weight: 500;
`
