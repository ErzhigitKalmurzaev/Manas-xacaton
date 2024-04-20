import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button
} from '@chakra-ui/react'
import { Input, InputGroup, InputRightElement, Flex, FormControl,FormHelperText } from '@chakra-ui/react'
import { Checkbox } from '@chakra-ui/react'
import { Formik, Form, Field, ErrorMessage, } from 'formik';
import * as Yup from 'yup';
import useUserStore from '../store/useUserStore';

const StudentRegForm = () => {
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
    return (
        <>
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
                    </>
    )
}

export default StudentRegForm