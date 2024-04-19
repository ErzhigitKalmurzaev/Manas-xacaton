import styled from '@emotion/styled'
import React from 'react'

const FilterButton = ({ text, onClick, active }) => {
  return (
    <Button onClick={onClick} style={active ? { transition: '0.4s ease', background: '#b80924', color: 'white'} : {}}>
        {text}
    </Button>
  )
}

export default FilterButton

const Button = styled('button')`
    color: #b80924;
    background: white;
    border: 1px solid #b80924;
    border-radius: 24px;
    padding: 6px 12px;
    font-size: 16px;
    font-weight: 500;
`