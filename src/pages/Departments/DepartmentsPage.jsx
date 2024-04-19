import { Button } from '@chakra-ui/button'
import { useDisclosure } from '@chakra-ui/hooks'
import { Input } from '@chakra-ui/input'
import { Text } from '@chakra-ui/layout'
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/modal'
import { Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/table'
import styled from '@emotion/styled'
import React, { useState } from 'react'
import FilterButton from '../../ui/FilterButton'
import PageTitle from '../../ui/PageTitle'
import RedButton from '../../ui/RedButton'

const DepartmentPage = () => {

  const [filter, setFilter] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Wrapper>
        <div className='title'>
          <PageTitle text="Зав. кафедры"/>
          <RedButton text='+ Добавить зав. кафедру' onClick={onOpen}/>
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
              <ModalHeader textAlign={'center'}>Добавление зав. кафедры</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <p style={{fontWeight: '500'}}>Email:</p>
                <Input focusBorderColor="#b80924" mb={3} description="email" label='Email' />
                <p style={{fontWeight: '500', margin: '5px auto', textAlign: 'center'}}>Чтобы добавить заведующего кафедрой введите его email адресс.</p>
              </ModalBody>

              <ModalFooter>
                <Button bg={'#b80924'} color={'white'} margin={"0 auto"}>Отправить</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
    </Wrapper>
  )
}

export default DepartmentPage

const Wrapper = styled('div')`
  padding: 60px 10px 20px 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  .title {
    display: flex;
    justify-content: space-between;
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
