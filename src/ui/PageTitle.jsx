import styled from '@emotion/styled';
import React from 'react'

const PageTitle = ({ text }) => {
  return (
    <TitleText>
      {text}
    </TitleText>
  )
}

export default PageTitle;

const TitleText = styled('div')`
    font-size: 26px;
    font-weight: 500;
`;
