import styled from '@emotion/styled'
import React from 'react'

const RedButton = ({ text, onClick }) => {
  return (
    <Button onClick={onClick}>
        {text}
    </Button>
  )
}

export default RedButton

const Button = styled('button')`
    background: #b80924;
    color: white;
    border-radius: 10px;
    padding: 12px 12px;
    font-size: 17px;
    font-weight: 500;
`