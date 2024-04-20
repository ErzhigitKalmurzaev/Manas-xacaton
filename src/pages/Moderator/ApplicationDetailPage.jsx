import { Checkbox } from '@chakra-ui/checkbox'
import { Input } from '@chakra-ui/input'
import { Text } from '@chakra-ui/layout'
import styled from '@emotion/styled'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import PageTitle from '../../ui/PageTitle'
import RedButton from '../../ui/RedButton'

const ApplicationDetailPage = () => {

  const navigation = useNavigate();

  const [filter, setFilter] = useState(0);
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

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
        <PageTitle text="Заявка"/>
        <Form>
            <div className="row">
                <div className="col">
                    <Text fontWeight={500}>Имя</Text>
                    <Input value='Нуратан' disabled/>
                </div>
                <div className="col">
                    <Text fontWeight={500}>Фамилия</Text>
                    <Input value='Кадыров' disabled/>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Text fontWeight={500}>Телефон</Text>
                    <Input value='Нуратан' disabled/>
                </div>
                <div className="col">
                    <Checkbox size='lg' mt={5} colorScheme='blue' defaultChecked>
                        Иностранец
                    </Checkbox>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Text fontWeight={500}>Имя</Text>
                    <Input value='Нуратан' disabled/>
                </div>
                <div className="col">
                    <Text fontWeight={500}>Имя</Text>
                    <Input value='Нуратан' disabled/>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Text fontWeight={500} mb={2}>Диплом</Text>
                    <div
                        style={{ width: '300px', height: '300px', border: '2px dashed #ccc', padding: '20px', textAlign: 'center', margin: '0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                    >
                    {selectedFile ? (
                        <div>
                        {selectedFile.type.startsWith('image/') ? (
                            <div>
                            <img src={imageUrl} alt="Selected file" style={{ maxWidth: '220px', maxHeight: '220px', marginBottom: '10px' }} />
                            </div>
                        ) : (
                            <div>
                            <strong>Выбранный файл:</strong> {selectedFile.name}
                            </div>
                        )}
                        <div>
                            <strong>Тип файла:</strong> {selectedFile.type}
                        </div>
                        <button onClick={downloadFile}>Скачать файл</button>
                        </div>
                    ) : (
                        <Text fontWeight={500}>Произошла ошибка!</Text>
                    )}

                    </div>
                </div>
                <div className="col">
                    <Text fontWeight={500} mb={2}>Сертификаты</Text>
                    <div
                        style={{ width: '300px', height: '300px', border: '2px dashed #ccc', padding: '20px', textAlign: 'center', margin: '0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                    >
                    {selectedFile ? (
                        <div>
                        {selectedFile.type.startsWith('image/') ? (
                            <div>
                                <img src={imageUrl} alt="Selected file" style={{ maxWidth: '220px', maxHeight: '220px', marginBottom: '10px' }} />
                            </div>
                        ) : (
                            <div>
                            <strong>Выбранный файл:</strong> {selectedFile.name}
                            </div>
                        )}
                        <div>
                            <strong>Тип файла:</strong> {selectedFile.type}
                        </div>
                        <button onClick={downloadFile}>Скачать файл</button>
                        </div>
                    ) : (
                        <Text fontWeight={500}>Произошла ошибка!</Text>
                    )}

                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Text fontWeight={500} mb={2}>Сертификаты</Text>
                    <div
                        style={{ width: '300px', height: '300px', border: '2px dashed #ccc', padding: '20px', textAlign: 'center', margin: '0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                    >
                    {selectedFile ? (
                        <div>
                        {selectedFile.type.startsWith('image/') ? (
                            <div>
                                <img src={imageUrl} alt="Selected file" style={{ maxWidth: '220px', maxHeight: '220px', marginBottom: '10px' }} />
                            </div>
                        ) : (
                            <div>
                            <strong>Выбранный файл:</strong> {selectedFile.name}
                            </div>
                        )}
                        <div>
                            <strong>Тип файла:</strong> {selectedFile.type}
                        </div>
                        <button onClick={downloadFile}>Скачать файл</button>
                        </div>
                    ) : (
                        <Text fontWeight={500}>Произошла ошибка!</Text>
                    )}

                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Text fontWeight={500} mb={2}>Паспорт (спереди)</Text>
                    <div
                        style={{ width: '300px', height: '300px', border: '2px dashed #ccc', padding: '20px', textAlign: 'center', margin: '0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                    >
                    {selectedFile ? (
                        <div>
                        {selectedFile.type.startsWith('image/') ? (
                            <div>
                                <img src={imageUrl} alt="Selected file" style={{ maxWidth: '220px', maxHeight: '220px', marginBottom: '10px' }} />
                            </div>
                        ) : (
                            <div>
                            <strong>Выбранный файл:</strong> {selectedFile.name}
                            </div>
                        )}
                        <div>
                            <strong>Тип файла:</strong> {selectedFile.type}
                        </div>
                        <button onClick={downloadFile}>Скачать файл</button>
                        </div>
                    ) : (
                        <Text fontWeight={500}>Произошла ошибка!</Text>
                    )}

                    </div>
                </div>
                <div className="col">
                    <Text fontWeight={500} mb={2}>Паспорт (сзади)</Text>
                    <div
                        style={{ width: '300px', height: '300px', border: '2px dashed #ccc', padding: '20px', textAlign: 'center', margin: '0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                    >
                    {selectedFile ? (
                        <div>
                        {selectedFile.type.startsWith('image/') ? (
                            <div>
                                <img src={imageUrl} alt="Selected file" style={{ maxWidth: '220px', maxHeight: '220px', marginBottom: '10px' }} />
                            </div>
                        ) : (
                            <div>
                            <strong>Выбранный файл:</strong> {selectedFile.name}
                            </div>
                        )}
                        <div>
                            <strong>Тип файла:</strong> {selectedFile.type}
                        </div>
                        <button onClick={downloadFile}>Скачать файл</button>
                        </div>
                    ) : (
                        <Text fontWeight={500}>Произошла ошибка!</Text>
                    )}

                    </div>
                </div>
            </div>
            <div className='submit_button'>
                <RedButton text="Одобрить" onClick={() => {}} className="conf"/>
                <RedButton text="Отклонить" onClick={() => {}}/>
            </div>
        </Form>
    </Wrapper>
  )
}

export default ApplicationDetailPage

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
const Form = styled('div')`
    display: flex;
    flex-direction: column;
    gap: 15px;
    .row {
        display: flex;
        flex-direction: row;
        gap: 50px;
    }
    .col {
        display: flex;
        flex-direction: column;
        justify-content: center;
        input {
            width: 350px;
            color: black;
        }
    }
    .submit_button {
        display: flex;
        gap: 20px;
        font-size: 15px;
        margin: 20px 0;
        .conf {
            background: #2f4050;
        }
    }
`