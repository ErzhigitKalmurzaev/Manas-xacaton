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
import { Input, InputGroup, InputRightElement, Flex } from '@chakra-ui/react'
import { Checkbox } from '@chakra-ui/react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import useUserStore from '../store/useUserStore';

import { FormControl, FormLabel, FormHelperText } from '@chakra-ui/react';

const Header = () => {
    const signIn = useUserStore((state) => state.signIn)
    const initialValues = {
        email: '',
        password: '',
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Неверный email').required('Email is required'),
        password: Yup.string().required('Password is required'),
        rememberMe: false
    });

    const handleSubmit = (values, { setSubmitting }) => {
        signIn(values.email,values.password)
        setSubmitting(false);
    };
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
    const styles = {
        input: {
            borderWidth: '2px',
            borderColor: 'gray.300',
        },
    };
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
                        <ModalOverlay backdropFilter='blur(10px)' />
                        <ModalContent rounded={'lg'}>
                            <ModalHeader>Вход</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                                <Formik
                                    initialValues={initialValues}
                                    onSubmit={handleSubmit}
                                    validationSchema={validationSchema}
                                >
                                    {({ isSubmitting }) => (
                                        <Form>
                                            <Field name="email">
                                                {({ field }) => (
                                                    <FormControl isInvalid={!!field.error}>
                                                        <Input {...field} id="email" placeholder='email' sx={styles.input} autoComplete='off' />
                                                        <ErrorMessage name="email" component={FormHelperText} color="red" />
                                                    </FormControl>
                                                )}
                                            </Field>

                                            <Field name="password">
                                                {({ field }) => (
                                                    <FormControl mt={4} isInvalid={!!field.error}>
                                                        <InputGroup size='md'>
                                                            <Input
                                                                {...field}
                                                                pr='4.5rem'
                                                                id="password"
                                                                type={show ? 'text' : 'password'}
                                                                placeholder='пароль'
                                                                sx={styles.input}
                                                            />
                                                            <InputRightElement width='4.5rem'>
                                                                <Button h='1.75rem' size='sm' onClick={handleClick}>
                                                                    {show ? 'Hide' : 'Show'}
                                                                </Button>
                                                            </InputRightElement>
                                                        </InputGroup>
                                                        <ErrorMessage name="password" component={FormHelperText} color="red" autoComplete='off' />
                                                    </FormControl>
                                                )}
                                            </Field>

                                            <Field name="rememberMe" type="checkbox">
                                                {({ field }) => (
                                                    <FormControl mt={4}>
                                                        <Checkbox {...field} id="rememberMe">
                                                            Запомнить меня
                                                        </Checkbox>
                                                    </FormControl>
                                                )}
                                            </Field>
                                            <Flex justify={'center'} w={'100%'} pt={2}>
                                                <Button isLoading={isSubmitting} type="submit" bg='red.700' color={'white'} mr={3} my={2} rounded={'2xl'} w={'70%'} _hover={{ bg: 'red.800' }}>
                                                    {isSubmitting ? 'Вход...' : 'Войти'}
                                                </Button>
                                            </Flex>
                                        </Form>
                                    )}
                                </Formik>
                            </ModalBody>
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
