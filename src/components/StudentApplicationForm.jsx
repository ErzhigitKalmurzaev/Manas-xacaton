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
  FormHelperText,
  Text
} from '@chakra-ui/react';
import ImageUpload from './ImageUpload';
import useUserStore from '../store/useUserStore';

const validationSchema = Yup.object().shape({
  first_name: Yup.string().required('Обязательное поле'),
  last_name: Yup.string().required('Обязательное поле'),
  email: Yup.string().email('Некорректный email').required('Обязательное поле'),
  phone_number: Yup.string().required('Обязательное поле'),
  department: Yup.string().required('Обязательное поле'),
  type: Yup.string().required('Обязательное поле'),
  diplom: Yup.mixed().required('Обязательное поле'),
  isForeigner: Yup.boolean(),
  nostrification: Yup.mixed().required('Обязательное поле').typeError('Обязательное поле'),
  passport_front: Yup.mixed().required('Обязательное поле'),
  passport_back: Yup.mixed().required('Обязательное поле'),
  photo: Yup.mixed().required('Обязательное поле'),
  certs: Yup.mixed().required('Обязательное поле'),
});

const StudentApplicationForm = () => {
  const application = useUserStore((state) => state.application);
  const handleSubmit = async (values, { setSubmitting,setFieldError }) => {
    console.log(values);
    const response = await application(values);
    setSubmitting(false);
  };
  const [imageSrcs, setImageSrcs] = useState(null);
  return (
    <Flex w={'100%'} justify={'center'} mt={8}>
      <Box w={'50%'} bg={'gray.50'} rounded={'2xl'} p={4}>
        <Box textAlign={'center'}>
          <Text fontSize={24} fontWeight={'semibold'} pb={4}>Форма заявления поступления на магистратуру/докторантуру</Text>
        </Box>
        <Formik
          initialValues={{
            first_name: '',
            last_name: '',
            email: '',
            phone_number: '',
            department: '',
            type: '',
            diplom: null,
            isForeigner: false,
            nostrification: null,
            passport_front: null,
            passport_back: null,
            photo: null,
            certs: [],
          }}
          validateOnChange={false}
          validateOnBlur={false}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {(formik) => (
            <Form>
              <VStack spacing={2}>
              <HStack w={'100%'}>
                <Field name="first_name">
                  {({ field }) => (
                    <FormControl isInvalid={!!formik.errors.first_name}>
                      <FormLabel htmlFor="first_name">Имя</FormLabel>
                      <Input {...field} placeholder="Имя" />
                      <FormErrorMessage color={'red'}>{formik.errors.first_name}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <Field name="last_name">
                  {({ field }) => (
                    <FormControl isInvalid={!!formik.errors.last_name}>
                      <FormLabel htmlFor="last_name">Фамилия</FormLabel>
                      <Input {...field} placeholder="Фамилия" variant={'outline'} />
                      <FormErrorMessage>{formik.errors.last_name}</FormErrorMessage>
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

                <Field name="phone_number">
                  {({ field }) => (
                    <FormControl isInvalid={!!formik.errors.phone_number}>
                      <FormLabel htmlFor="phone">Телефон</FormLabel>
                      <Input {...field} placeholder="Телефон" />
                      <FormErrorMessage>{formik.errors.phone_number}</FormErrorMessage>
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
                sfv={formik.setFieldValue}
                multiple={false}
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
                  multiple={false}
                  formik={formik}
                  set={setImageSrcs}
                  sources={imageSrcs}
                  target="nostrification"
                  title={"Нострификация"} />
              )}

              <HStack w={'100%'}>
              <ImageUpload
                multiple={false}
                formik={formik}
                set={setImageSrcs}
                sources={imageSrcs}
                target="passport_front"
                title={"Паспорт спереди"} />

              <ImageUpload
                multiple={false}
                formik={formik}
                set={setImageSrcs}
                sources={imageSrcs}
                target="passport_back"
                title={"Паспорт сзади"} />
              </HStack>


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

              <Button mt={4} bg={'red.700'} color={'white'} isLoading={formik.isSubmitting} type="submit" _hover={{ bg: 'red.800' }} >
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
