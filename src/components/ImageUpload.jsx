import React from 'react'
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
    HStack
} from '@chakra-ui/react';

function ImageUpload({ sfv, formik, set, sources, target, title, multiple }) {
    const handleMultipleFileChange = (e) => {
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
                set({ ...sources, [target]: results });
                console.log({ ...sources, [target]: results });
                console.log(formik)
                if(multiple){
                    formik.values[target] = {...results}
                }else{
                    formik.values[target] = results[0]
                }
                
                console.log(formik)
            })
            .catch((error) => {
                console.error("Error reading files:", error);
            });
    };
    return (
        <Field name={target}>
            {({ field }) => (
                <FormControl isInvalid={!!formik.errors[target]}>
                    <FormLabel htmlFor={target}>{title}</FormLabel>
                    <Box border={'2px dashed'} borderColor={'gray.300'} rounded={'lg'}>
                    {sources !== null && sources[target] && (
                        <Flex maxW={'80%'}>
                            {sources[target].map((tgt, index) => (
                                
                                <Image 
                                    key={index} 
                                    rounded={'md'} 
                                    src={tgt.split(';').shift().trim()==='data:application/pdf'?'https://play-lh.googleusercontent.com/dl4ZuJhfD5xR9m2H-oZ9UcLZwYmGpmWMurPrvTiN831ZWLia9NbrYurXV-32wtOzPmM5':tgt} 
                                    w={'72px'} 
                                    h={'96px'} 
                                    m={2} 
                                    alt={`uploaded ${target}`} 
                                    fit={'cover'}
                                    />
                            ))}
                        </Flex>
                    )}
                    <Input
                    {...field.name}
                        type="file"
                        multiple={multiple}
                        onChange={(e) => { handleMultipleFileChange(e) }}
                        border={'none'}
                        mt={2}
                    />
                    </Box>
                    <FormErrorMessage>{formik.errors[target]}</FormErrorMessage>
                </FormControl>
            )}
        </Field>
    )
}

export default ImageUpload