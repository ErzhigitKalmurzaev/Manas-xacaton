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
import ImageUpload from '../components/ImageUpload'
import useUserStore from '../store/useUserStore';

function ExamResultsUploadPage() {
    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Некорректный email').required('Обязательное поле'),
        exam_lists: Yup.mixed().required('Обязательное поле'),
    });
    const postExamLists = useUserStore(state=>state.postExamLists)
    const handleSubmit = async (values, { setSubmitting,setFieldError }) => {
        await postExamLists(values);
        setSubmitting(false);
      };
      const [imageSrcs, setImageSrcs] = useState(null);
    return (
        <Flex w={'100%'} mt={8}>
                <Formik
                    initialValues={{
                        email: '',
                        exam_lists: null,
                    }}
                    validateOnChange={false}
                    validateOnBlur={false}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >{(formik) => (
                    <Form>
                        <HStack align={'start'}>
                        <Field name="email">
                            {({ field }) => (
                                <FormControl isInvalid={!!formik.errors.email}>
                                    <FormLabel htmlFor="email">Email</FormLabel>
                                    <Input {...field} placeholder="Email" />
                                    <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>
                        
                        <ImageUpload
                            sfv={formik.setFieldValue}
                            multiple={false}
                            formik={formik}
                            set={setImageSrcs}
                            sources={imageSrcs}
                            target="exam_lists"
                            title={"Фото/сканы работы студента"} />
                            </HStack>
                            <Flex w={'100%'} justify={'center'}><Button mt={4} bg={'red.700'} color={'white'} isLoading={formik.isSubmitting} type="submit" _hover={{ bg: 'red.800' }} >
                            Загрузить
                        </Button></Flex>
                        
                    </Form>
                )}
                </Formik>
        </Flex>
    )
}

export default ExamResultsUploadPage