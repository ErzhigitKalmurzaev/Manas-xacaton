import { Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/table'
import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import FilterButton from '../ui/FilterButton'
import PageTitle from '../ui/PageTitle'
import useUserStore from '../store/useUserStore'

const ApplicationPage = () => {

  const navigation = useNavigate();
  const getApplicationsList = useUserStore(state => state.getApplicationsList);
  const applications_list = useUserStore(state => state.applications_list)

  const [filter, setFilter] = useState(0);
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    getApplicationsList();
  }, [])

  // console.log(applications_list)
  return (
    <Wrapper>
        <PageTitle text="Заявки"/>
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
                  <Th>Имя</Th>
                  <Th>Фамилия</Th>
                  <Th>email</Th>
                </Tr>
              </Thead>
              <Tbody>
                {
                  applications_list?.map(item => (
                    <Tr onClick={() => navigation(`${item?.id}`)}>
                      <Td>{item?.first_name}</Td>
                      <Td>{item?.last_name}</Td>
                      <Td>{item?.email}</Td>
                    </Tr>

                  ))
                }
              </Tbody>
            </Table>
          </TableContainer>
        </div>
    </Wrapper>
  )
}

export default ApplicationPage

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