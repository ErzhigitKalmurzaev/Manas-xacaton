import React, { useState } from 'react';
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
  Flex,
  Image,
  HStack,
  VStack,
  FormHelperText
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
  const handleMultipleFileChange = (e, formik, target) => {
    const files = e.target.files;

    const filePromises = Array.from(files).map((file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (event) => {
          resolve(event.target.result);
        };
        reader.onerror = (error) => {
          reject(error);
        };
        reader.readAsDataURL(file);
      });
    });

    Promise.all(filePromises)
      .then((results) => {
        setImageSrcs({ ...imageSrcs, [target]: results });
        formik.setFieldValue("certs", files); // Установите все файлы в Formik
      })
      .catch((error) => {
        console.error("Error reading files:", error);
      });
  };
  const [imageSrcs, setImageSrcs] = useState(null);
  return (
    <Flex w={'100%'} justify={'center'} mt={4}>
      <Box w={'50%'}>
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
            certs: [],
          }}
          validateOnChange={false}
          validateOnBlur={false}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log(values);
            // Здесь можно добавить логику отправки формы на сервер
          }}
        >
          {(formik) => (
            <Form>
              <VStack spacing={2}>
              <HStack w={'100%'}>
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
                      <Input {...field} placeholder="Фамилия" variant={'outline'} />
                      <FormErrorMessage>{formik.errors.lastname}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
              </HStack>
              <HStack w={'100%'}>
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
              </HStack>
              <Field name="department">
                {({ field }) => (
                  <FormControl isInvalid={!!formik.errors.department}>
                    <FormLabel htmlFor="department">Отделение</FormLabel>
                    <Select {...field} placeholder="Выберите кафедру">
                      <option value="applied_mathematics">Кафедра прикладной математики</option>
                      <option value="computer_engineering">Кафедра компьютерной инженерии</option>
                      <option value="software_engineering">Кафедра программной инженерии</option>
                      <option value="physics">Кафедра физики</option>
                      <option value="chemistry">Кафедра химии</option>
                      <option value="biology">Кафедра биологии</option>
                      <option value="linguistics">Кафедра лингвистики</option>
                      <option value="history">Кафедра истории</option>
                      <option value="economics">Кафедра экономики</option>
                      <option value="law">Кафедра права</option>
                      <option value="psychology">Кафедра психологии</option>
                      {/* Добавьте другие кафедры по аналогии */}
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
                      <option value="doctorate">Докторантура</option>
                      <option value="magistrate">Магистратура</option>
                    </Select>
                    <FormErrorMessage>{formik.errors.type}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <ImageUpload
                multiple={true}
                formik={formik}
                set={setImageSrcs}
                sources={imageSrcs}
                target="diplom"
                title={"Диплом"} />

              <Field name="isForeigner">
                {({ field }) => (
                  <FormControl>
                    <Checkbox {...field}>Иностранец</Checkbox>
                  </FormControl>
                )}
              </Field>
              {formik.values.isForeigner && (
                <ImageUpload
                  multiple={true}
                  formik={formik}
                  set={setImageSrcs}
                  sources={imageSrcs}
                  target="nostrification"
                  title={"Нострификация"} />
              )}


              <ImageUpload
                multiple={false}
                formik={formik}
                set={setImageSrcs}
                sources={imageSrcs}
                target="passport"
                title={"Паспорт"} />



              <ImageUpload
                multiple={false}
                formik={formik}
                set={setImageSrcs}
                sources={imageSrcs}
                target="photo"
                title={"Фото"} />

              <ImageUpload
                multiple={true}
                formik={formik}
                set={setImageSrcs}
                sources={imageSrcs}
                target="certs"
                title={"Сертификаты"} />

              <Button mt={4} colorScheme="teal" isLoading={formik.isSubmitting} type="submit" >
                Зарегистрироваться
              </Button>
              </VStack>
            </Form>
          )}
        </Formik>
      </Box>
    </Flex>
  );
};

export default StudentApplicationForm;
