import { Input } from '@chakra-ui/input'
import { Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr, } from '@chakra-ui/table'
import styled from '@emotion/styled'
import React, { useState } from 'react'
import { useNavigation } from 'react-router'
import FilterButton from '../ui/FilterButton'
import PageTitle from '../ui/PageTitle'
import RedButton from '../ui/RedButton'
import { Button } from '@chakra-ui/react'
import { BsArrowDown } from 'react-icons/bs' 

const QuestionnairesPage = () => {

  // const navigation = useNavigation();

  const [filter, setFilter] = useState(0);
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      const url = URL.createObjectURL(file);
      setImageUrl(url);
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      setSelectedFile(file);
      const url = URL.createObjectURL(file);
      setImageUrl(url);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const downloadFile = () => {
    if (selectedFile) {
      const url = URL.createObjectURL(selectedFile);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', selectedFile.name);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <Wrapper>
        <PageTitle text="Анкеты"/>
        <div className='filters'>
          <FilterButton text="Магистратура" onClick={() => setFilter(0)} active={filter === 0} />
          <FilterButton text="Докторантура" onClick={() => setFilter(1)} active={filter === 1} />
        </div>
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          style={{ width: '600px', minHeight: '300px', border: '2px dashed #ccc', padding: '20px', textAlign: 'center', margin: '30px 0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          {selectedFile ? (
            <div>
              {selectedFile.type.startsWith('image/') ? (
                <div>
                  <img src={imageUrl} alt="Selected file" style={{ maxWidth: '100%', maxHeight: '400px', marginBottom: '10px' }} />
                </div>
              ) : (
                <div>
                  <strong>Выбранный файл:</strong> {selectedFile.name}
                </div>
              )}
              <div>
                <strong>File Type:</strong> {selectedFile.type}
              </div>
              <Button mt={4} onClick={downloadFile} _hover={{ color: 'blue.500' }} leftIcon={<BsArrowDown/>}>Скачать файл</Button>
            </div>
          ) : (
            <div>
              <p>Перетащите или выберите файл для загрузки.</p>
              <input type="file" onChange={handleFileChange} />
            </div>
          )}
        </div>
        <div className='submit_button'>
          <RedButton text='Отправить' onClick={() => {}}/>
        </div>
    </Wrapper>
  )
}

export default QuestionnairesPage

const Wrapper = styled('div')`
  padding: 40px 10px 20px 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  .filters {
    display: flex;
    gap: 10px;
    margin: 30px 0 0 0;
  }

  .submit_button {
    align-self: start;
    button {
      width: 130px;
      background: #2f4050;
    }
  }

  .file {
    width: 700px;
    height: 700px;
    margin: 30px 0;
    border: '2px dashed #ccc';
    text-align: 'center';
    padding: '20px';
    /* border-bottom: 1px solid grey; */
  }
`;