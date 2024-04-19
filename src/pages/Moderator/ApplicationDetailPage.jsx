import styled from '@emotion/styled'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import PageTitle from '../../ui/PageTitle'

const ApplicationDetailPage = () => {

  const navigation = useNavigate();

  const [filter, setFilter] = useState(0);

  return (
    <Wrapper>
        <PageTitle text="Заявка"/>
        
    </Wrapper>
  )
}

export default ApplicationDetailPage

const Wrapper = styled('div')`
  padding: 60px 10px 20px 10px;
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