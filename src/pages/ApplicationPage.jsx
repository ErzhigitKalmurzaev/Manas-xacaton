import { Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/table'
import styled from '@emotion/styled'
import React from 'react'
import PageTitle from '../ui/PageTitle'

const ApplicationPage = () => {
  return (
    <Wrapper>
        <PageTitle text="Заявки"/>
        <div className="table">
          <TableContainer w='100%'>
            <Table variant='simple'>
              <TableCaption>Imperial to metric conversion factors</TableCaption>
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
    </Wrapper>
  )
}

export default ApplicationPage

const Wrapper = styled('div')`
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;