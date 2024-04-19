import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
  FormControl,
  FormLabel,
  Input,
  Select,
  Checkbox,
  Button,
  FormErrorMessage,
  Box,
  Flex
} from '@chakra-ui/react';
import ImageUpload from './ImageUpload';

const validationSchema = Yup.object().shape({
  firstname: Yup.string().required('Обязательное поле'),
  lastname: Yup.string().required('Обязательное поле'),
  email: Yup.string().email('Некорректный email').required('Обязательное поле'),
  phone: Yup.string().required('Обязательное поле'),
  department: Yup.string().required('Обязательное поле'),
  type: Yup.string().required('Обязательное поле'),
  diplom: Yup.mixed().required('Обязательное поле'),
  isForeigner: Yup.boolean(),
  nostrification: Yup.mixed().when('isForeigner', {
    is: true,
    then: Yup.mixed().required('Обязательное поле'),
  }),
  passport: Yup.mixed().required('Обязательное поле'),
  photo: Yup.mixed().required('Обязательное поле'),
  certs: Yup.mixed().required('Обязательное поле'),
});

const StudentApplicationForm = () => {
  return (
    <Flex w={'100%'} justify={'center'}>
    <Box w={'70%'}>
      <Formik
        initialValues={{
          firstname: '',
          lastname: '',
          email: '',
          phone: '',
          department: '',
          type: '',
          diplom: null,
          isForeigner: false,
          nostrification: null,
          passport: null,
          photo: null,
          certs: null,
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
          // Здесь можно добавить логику отправки формы на сервер
        }}
      >
        {(formik) => (
          <Form>
            <Field name="firstname">
              {({ field }) => (
                <FormControl isInvalid={!!formik.errors.firstname}>
                  <FormLabel htmlFor="firstname">Имя</FormLabel>
                  <Input {...field} placeholder="Имя" />
                  <FormErrorMessage color={'red'}>{formik.errors.firstname}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name="lastname">
              {({ field }) => (
                <FormControl isInvalid={!!formik.errors.lastname}>
                  <FormLabel htmlFor="lastname">Фамилия</FormLabel>
                  <Input {...field} placeholder="Фамилия" variant={'outline'}/>
                  <FormErrorMessage>{formik.errors.lastname}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name="email">
              {({ field }) => (
                <FormControl isInvalid={!!formik.errors.email}>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Input {...field} placeholder="Email" />
                  <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name="phone">
              {({ field }) => (
                <FormControl isInvalid={!!formik.errors.phone}>
                  <FormLabel htmlFor="phone">Телефон</FormLabel>
                  <Input {...field} placeholder="Телефон" />
                  <FormErrorMessage>{formik.errors.phone}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name="department">
              {({ field }) => (
                <FormControl isInvalid={!!formik.errors.department}>
                  <FormLabel htmlFor="department">Отделение</FormLabel>
                  <Select {...field} placeholder="Выберите отделение">
                    {/* Здесь можно добавить варианты отделений */}
                  </Select>
                  <FormErrorMessage>{formik.errors.department}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name="type">
              {({ field }) => (
                <FormControl isInvalid={!!formik.errors.type}>
                  <FormLabel htmlFor="type">Тип</FormLabel>
                  <Select {...field} placeholder="Выберите тип">
                    {/* Здесь можно добавить варианты типов */}
                  </Select>
                  <FormErrorMessage>{formik.errors.type}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name="diplom">
              {({ field }) => (
                <FormControl isInvalid={!!formik.errors.diplom}>
                  <FormLabel htmlFor="diplom">Диплом</FormLabel>
                  <Input {...field} type="file" />
                  <FormErrorMessage>{formik.errors.diplom}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name="isForeigner">
              {({ field }) => (
                <FormControl>
                  <Checkbox {...field}>Иностранец</Checkbox>
                </FormControl>
              )}
            </Field>

            {formik.values.isForeigner && (
              <Field name="nostrification">
                {({ field }) => (
                  <FormControl isInvalid={!!formik.errors.nostrification}>
                    <FormLabel htmlFor="nostrification">Нострификация</FormLabel>
                    <Input {...field} type="file" />
                    <FormErrorMessage>{formik.errors.nostrification}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
            )}

            <Field name="passport">
              {({ field }) => (
                <FormControl isInvalid={!!formik.errors.passport}>
                  <FormLabel htmlFor="passport">Паспорт</FormLabel>
                  <Input {...field} type="file" />
                  <FormErrorMessage>{formik.errors.passport}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name="photo">
              {({ field }) => (
                <FormControl isInvalid={!!formik.errors.photo}>
                  <FormLabel htmlFor="photo">Фото</FormLabel>
                  <ImageUpload field={field}/>
                  <FormErrorMessage>{formik.errors.photo}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name="certs">
              {({ field }) => (
                <FormControl isInvalid={!!formik.errors.certs}>
                  <FormLabel htmlFor="certs">Сертификаты</FormLabel>
                  <Input {...field} type="file" />
                  <FormErrorMessage>{formik.errors.certs}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <ImageUpload/>

            <Button mt={4} colorScheme="teal" isLoading={formik.isSubmitting} type="submit">
              Зарегистрироваться
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
    </Flex>
  );
};

export default StudentApplicationForm;
