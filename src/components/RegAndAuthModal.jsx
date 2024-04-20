import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    Button,
} from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import AuthForm from './AuthForm'
import StudentRegForm from './StudentRegForm'

const RegAndAuthModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Button 
                onClick={onOpen} 
                bg={'brand.blue'}
                w={'90%'}
                color={'white'}
                fontSize={14}
            >
                Войти или зарегистрироваться
            </Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay  backdropFilter='blur(5px)'/>
                <ModalContent rounded={'3xl'} >
                <Tabs>
                    <TabList >
                        <Tab roundedTopStart={'3xl'}>Вход</Tab>
                        <Tab >Регистрация</Tab>
                    </TabList>

                    <TabPanels>
                        <TabPanel>
                            <AuthForm/>
                        </TabPanel>
                        <TabPanel>
                            <StudentRegForm/>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
                </ModalContent>
            </Modal>
        </>
    )
}

export default RegAndAuthModal