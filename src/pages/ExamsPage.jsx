import { Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/table'
import styled from '@emotion/styled'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import FilterButton from '../ui/FilterButton'
import PageTitle from '../ui/PageTitle'

const ExamsPage = () => {

  const navigation = useNavigate();

  const [filter, setFilter] = useState(0);

  return (
    <Wrapper>
        <PageTitle text="Экзамены"/>
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
              <Tbody onClick={() => navigation('detail')}>
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
    </Wrapper>
  )
}

export default ExamsPage

const Wrapper = styled('div')`
  padding: 40px 10px 20px 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  
  .table {
    border: 1px solid #edf2f7;
    margin: 20px 0;
  }

  .filters {
    display: flex;
    gap: 10px;
    margin: 30px 0 0 0;
  }
`;