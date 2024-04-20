import { Input } from '@chakra-ui/input'
import styled from '@emotion/styled'
import React, { useState } from 'react'
import FilterButton from '../ui/FilterButton'
import PageTitle from '../ui/PageTitle'
import { Text } from '@chakra-ui/layout'
import RedButton from '../ui/RedButton'
import { useNavigate } from 'react-router'

const ExamsDetailPage = () => {

  const navigation = useNavigate();

  const [filter, setFilter] = useState(0);
  const [grade, setGrade] = useState('');
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
        <PageTitle text="Экзамен студента"/>
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
              <button onClick={downloadFile}>Скачать файл</button>
            </div>
          ) : (
            <div>
              <p>Перетащите или выберите файл для загрузки.</p>
              <input type="file" onChange={handleFileChange} />
            </div>
          )}

        </div>
        <div className='grade'>
            <Text mb={1} fontWeight={500}>Оценка:</Text>
            <Input focusBorderColor="#2f4050" w={'40%'} mb={6} placeholder='Введите оценку...' value={grade} onChange={(e) => setGrade(e.target.value)}/>
            <RedButton text="Отправить" onClick={() => navigation(-1)}/>
        </div>
    </Wrapper>
  )
}

export default ExamsDetailPage

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

  .file {
    width: 700px;
    height: 700px;
    margin: 30px 0;
    border: '2px dashed #ccc';
    text-align: 'center';
    padding: '20px';
    /* border-bottom: 1px solid grey; */
  }

  .grade {
    display: flex;
    flex-direction: column;
    button {
        width: 150px;
        padding: 8px 12px;
        align-self: start;
        font-size: 16px;
        background: #2f4050;
    }
  }
`;