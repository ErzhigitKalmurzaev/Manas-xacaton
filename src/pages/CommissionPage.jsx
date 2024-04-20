import { Button } from '@chakra-ui/button'
import { useDisclosure } from '@chakra-ui/hooks'
import { Input } from '@chakra-ui/input'
import { Text } from '@chakra-ui/layout'
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/modal'
import { Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/table'
import styled from '@emotion/styled'
import React, { useState } from 'react'
import FilterButton from '../ui/FilterButton'
import PageTitle from '../ui/PageTitle'
import RedButton from '../ui/RedButton'
import axiosInstance from '../api/axios'
import { toast } from 'react-toastify'

const CommissionPage = () => {

  const [filter, setFilter] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure()
  const handleNewCommission = async () => {
    try {
      const response = await axiosInstance.post(`/users/commission/create/`, {email:email, role: 'COMMISSIONER', department: 1})
      if(response) {
        toast.success('Ссылка на регистрацию отправлено на email!')
      } else {
        toast.error('Произошла ошибка!')
      }
      onClose()
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  return (
    <Wrapper>
        <div className='title'>
          <PageTitle text="Коммисия"/>
          <RedButton text='+ Добавить коммисию' onClick={onOpen}/>
        </div>
        <div className='filters'>
          <FilterButton text="Новые" onClick={() => setFilter(0)} active={filter === 0} />
          <FilterButton text="Одобренные" onClick={() => setFilter(1)} active={filter === 1} />
          <FilterButton text="Отказанные" onClick={() => setFilter(2)} active={filter === 2} />
        </div>
        <div className="table">
          <TableContainer w='100%'>
            <Table variant='simple'>
              <Thead>
                <Tr>
                  <Th>To convert</Th>
                  <Th>into</Th>
                  <Th isNumeric>multiply by</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>inches</Td>
                  <Td>millimetres (mm)</Td>
                  <Td isNumeric>25.4</Td>
                </Tr>
                <Tr>
                  <Td>feet</Td>
                  <Td>centimetres (cm)</Td>
                  <Td isNumeric>30.48</Td>
                </Tr>
                <Tr>
                  <Td>yards</Td>
                  <Td>metres (m)</Td>
                  <Td isNumeric>0.91444</Td>
                </Tr>
              </Tbody>
              <Tfoot>
                <Tr>
                  <Th>To convert</Th>
                  <Th>into</Th>
                  <Th isNumeric>multiply by</Th>
                </Tr>
              </Tfoot>
            </Table>
          </TableContainer>
        </div>

        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader textAlign={'center'}>Добавление коммисии</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <p style={{fontWeight: '500'}}>Email:</p>
                <Input value={email} onChange={(e) => setEmail(e.target.value)} focusBorderColor="#2f4050" mb={3} description="email" label='Email' />
                <p style={{fontWeight: '500', margin: '5px auto', textAlign: 'center'}}>Чтобы добавить члена коммисии введите его email адресс.</p>
              </ModalBody>

              <ModalFooter>
                <Button bg={'#2f4050'} color={'white'} margin={"0 auto"} onClick={handleNewCommission}>Отправить</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
    </Wrapper>
  )
}

export default CommissionPage

const Wrapper = styled('div')`
  padding: 40px 10px 20px 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  .title {
    display: flex;
    justify-content: space-between;

    button {
      background: #2f4050;
    }
  }
  
  .table {
    border: 1px solid #edf2f7;
    margin: 20px 0;
  }

  .filters {
    display: flex;
    gap: 10px;
    margin: 30px 0 0 0;
  }

  .modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 20px;
    border: 1px solid #ccc;
    z-index: 9999;
  }
`;
