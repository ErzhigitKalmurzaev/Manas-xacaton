import styled from '@emotion/styled';
import React from 'react';
import manas_logo from '../assets/image/Manas_logo.png';
import { Button, useDisclosure } from '@chakra-ui/react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'

const Header = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Wrapper>
            <img src={manas_logo} alt="manas_icon" style={{ width: 90, height: 90 }} />
            <Buttons>
                <div className='first_words'>
                    <p className='univer'>КЫРГЫЗСКО-ТУРЕЦКИЙ УНИВЕРСИТЕТ МАНАС</p>
                    <p className='slogan'>Больше, чем просто университет</p>
                </div>
                <div>
                    <Button onClick={onOpen}>Войти</Button>

                    <Modal isOpen={isOpen} onClose={onClose}>
                        <ModalOverlay backdropFilter='blur(10px) hue-rotate(90deg)'/>
                        <ModalContent>
                            <ModalHeader>Modal Title</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                            </ModalBody>

                            <ModalFooter>
                                <Button colorScheme='blue' mr={3} onClick={onClose}>
                                    Close
                                </Button>
                                <Button variant='ghost'>Secondary Action</Button>
                            </ModalFooter>
                        </ModalContent>
                    </Modal>
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
