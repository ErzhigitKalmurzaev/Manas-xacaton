import React, {useEffect, useState} from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
    Input,
    FormControl,
    FormHelperText,
    InputGroup,
    InputRightElement,
    Button,
    VStack,
    HStack,
    Text,
    Link,
    Checkbox,
    Flex,
    FormErrorMessage,
    FormLabel,
    Select,
    Box
} from '@chakra-ui/react';
import useUserStore from '../store/useUserStore';

function RegistrationPage() {
    const [userData, setUserData] = useState({email:"", token:""});
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const email = urlParams.get('email');
        const token = urlParams.get('token');
        setUserData({email, token});
      }, []);

    const register = useUserStore((state) => state.register)
    const state = useUserStore.getState();
    const [show, setShow] = React.useState(false);
    const handleClick = () => setShow(!show);

    const initialValues = {
        first_name: '',
        last_name: '',
        phone_number: '',
        password: '',
        confirmPassword: '',
    };

    

    const validationSchema = Yup.object().shape({
        first_name: Yup.string().required('First Name is required'),
        last_name: Yup.string().required('Last Name is required'),
        phone_number: Yup.string().required('phone is required'),
        password: Yup.string().required('Password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm Password is required'),
    });

    const handleSubmit = async (values, { setSubmitting,setFieldError }) => {
        console.log({...values,email:userData.email, token:userData.token})
        const response = await register({...values,email:userData.email, token:userData.token});
        setSubmitting(false);
    };
  return (
    <>
        <Flex w={'100%'} justify={'center'} pt={4}>
        <Box w={'30%'}>
        <Formik
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                    validationSchema={validationSchema}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <VStack spacing={4}>
                                <HStack spacing={2} w={'100%'}>
                                    <Field name="first_name">
                                        {({ field }) => (
                                            <FormControl isInvalid={!!field.error}>
                                                <Input {...field} placeholder="Имя" />
                                                <ErrorMessage name="first_name" component={FormHelperText} color="red" />
                                            </FormControl>
                                        )}
                                    </Field>

                                    <Field name="last_name">
                                        {({ field }) => (
                                            <FormControl isInvalid={!!field.error}>
                                                <Input {...field} placeholder="Фамилия" />
                                                <ErrorMessage name="last_name" component={FormHelperText} color="red" />
                                            </FormControl>
                                        )}
                                    </Field>
                                </HStack>

                                

                                <Field name="phone_number">
                                    {({ field }) => (
                                        <FormControl isInvalid={!!field.error}>
                                            <Input {...field} placeholder="Телефон"  />
                                            <ErrorMessage name="phone_number" component={FormHelperText} color="red" />
                                        </FormControl>
                                    )}
                                </Field>

                                <Field name="password">
                                    {({ field }) => (
                                        <FormControl isInvalid={!!field.error}>
                                            <InputGroup size="md">
                                                <Input
                                                    {...field}
                                                    pr="4.5rem"
                                                    type={show ? 'text' : 'password'}
                                                    placeholder="Пароль"
                                                />
                                                <InputRightElement width="4.5rem">
                                                    <Button h="1.75rem" size="sm" onClick={handleClick}>
                                                        {show ? 'Hide' : 'Show'}
                                                    </Button>
                                                </InputRightElement>
                                            </InputGroup>
                                            <ErrorMessage name="password" component={FormHelperText} color="red" />
                                        </FormControl>
                                    )}
                                </Field>

                                <Field name="confirmPassword">
                                    {({ field }) => (
                                        <FormControl isInvalid={!!field.error}>
                                            <InputGroup size="md">
                                                <Input
                                                    {...field}
                                                    pr="4.5rem"
                                                    type={show ? 'text' : 'password'}
                                                    placeholder="Подтвердите пароль"
                                                />
                                                <InputRightElement width="4.5rem">
                                                    <Button h="1.75rem" size="sm" onClick={handleClick}>
                                                        {show ? 'Hide' : 'Show'}
                                                    </Button>
                                                </InputRightElement>
                                            </InputGroup>
                                            <ErrorMessage name="confirmPassword" component={FormHelperText} color="red" />
                                        </FormControl>
                                    )}
                                </Field>

                                <Flex justify="center" w="100%" pt={2}>
                                    <Button
                                        isLoading={isSubmitting}
                                        type="submit"
                                        bg="red.700"
                                        color="white"
                                        rounded="2xl"
                                        w="70%"
                                        _hover={{ bg: 'red.800' }}
                                    >
                                        {isSubmitting ? 'Создание...' : 'Подвердить'}
                                    </Button>
                                </Flex>
                            </VStack>
                        </Form>
                    )}
                </Formik>
        </Box>
        </Flex>
    </>
  )
}

export default RegistrationPage