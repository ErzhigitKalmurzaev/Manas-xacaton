import { Checkbox } from '@chakra-ui/checkbox'
import { Input } from '@chakra-ui/input'
import { Text } from '@chakra-ui/layout'
import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import useUserStore from '../../store/useUserStore'
import PageTitle from '../../ui/PageTitle'
import RedButton from '../../ui/RedButton'

const ApplicationDetailPage = () => {

  const navigation = useNavigate();
  const { id } = useParams();

  const getApplicationById = useUserStore(state => state.getApplicationById);
  const application = useUserStore(state => state.application)

  const [filter, setFilter] = useState(0);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    getApplicationById({ id }).then(res => console.log(res))
  }, [id])


  const downloadFile = (selectedFile) => {
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
                    <Input value={application.first_name} disabled/>
                </div>
                <div className="col">
                    <Text fontWeight={500}>Фамилия</Text>
                    <Input value={application.last_name} disabled/>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Text fontWeight={500}>Телефон</Text>
                    <Input  value={application.phone_number} disabled/>
                </div>
                <div className="col">
                    <Checkbox size='lg' mt={5} colorScheme='blue' checked={application?.isForeigner}>
                        Иностранец
                    </Checkbox>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Text fontWeight={500}>Тип</Text>
                    <Input value={application?.type} disabled/>
                </div>
                <div className="col">
                    <Text fontWeight={500}>Email</Text>
                    <Input value={application?.email} disabled/>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Text fontWeight={500} mb={2}>Диплом</Text>
                    <div
                        style={{ width: '300px', height: '300px', border: '2px dashed #ccc', padding: '20px', textAlign: 'center', margin: '0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                    >
                    {application?.diplom ? (
                        <div>
                        {application?.diplom.type.startsWith('image/') ? (
                            <div>
                            <img src={imageUrl} alt="Selected file" style={{ maxWidth: '220px', maxHeight: '220px', marginBottom: '10px' }} />
                            </div>
                        ) : (
                            <div>
                            <strong>Выбранный файл:</strong> {application?.diplom.name}
                            </div>
                        )}
                        <div>
                            <strong>Тип файла:</strong> {application?.diplom.type}
                        </div>
                        <button onClick={() => downloadFile(application?.diplom)}>Скачать файл</button>
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
                    {application?.diplom ? (
                        <div>
                        {application?.diplom.type.startsWith('image/') ? (
                            <div>
                                <img src={imageUrl} alt="Selected file" style={{ maxWidth: '220px', maxHeight: '220px', marginBottom: '10px' }} />
                            </div>
                        ) : (
                            <div>
                            <strong>Выбранный файл:</strong> {application?.diplom.name}
                            </div>
                        )}
                        <div>
                            <strong>Тип файла:</strong> {application?.diplom.type}
                        </div>
                        <button onClick={() => downloadFile(application?.diplom)}>Скачать файл</button>
                        </div>
                    ) : (
                        <Text fontWeight={500}>Произошла ошибка!</Text>
                    )}

                    </div>
                </div>
            </div>
            <div className="row">
                {
                    application?.certs?.map(item => (
                        <div className="col">
                            <Text fontWeight={500} mb={2}>Сертификаты</Text>
                            <div
                                style={{ width: '300px', height: '300px', border: '2px dashed #ccc', padding: '20px', textAlign: 'center', margin: '0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                            >
                            {item ? (
                                <div>
                                {item?.type?.startsWith('image/') ? (
                                    <div>
                                        <img src={imageUrl} alt="Selected file" style={{ maxWidth: '220px', maxHeight: '220px', marginBottom: '10px' }} />
                                    </div>
                                ) : (
                                    <div>
                                    <strong>Выбранный файл:</strong> {item.name}
                                    </div>
                                )}
                                <div>
                                    <strong>Тип файла:</strong> {item.type}
                                </div>
                                <button onClick={() => downloadFile(item)}>Скачать файл</button>
                                </div>
                            ) : (
                                <Text fontWeight={500}>Произошла ошибка!</Text>
                            )}

                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="row">
                <div className="col">
                    <Text fontWeight={500} mb={2}>Паспорт (спереди)</Text>
                    <div
                        style={{ width: '300px', height: '300px', border: '2px dashed #ccc', padding: '20px', textAlign: 'center', margin: '0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                    >
                    {application?.passport_back ? (
                        <div>
                        {application?.passport_back?.type?.startsWith('image/') ? (
                            <div>
                                <img src={imageUrl} alt="Selected file" style={{ maxWidth: '220px', maxHeight: '220px', marginBottom: '10px' }} />
                            </div>
                        ) : (
                            <div>
                            <strong>Выбранный файл:</strong> {application?.passport_back?.name}
                            </div>
                        )}
                        <div>
                            <strong>Тип файла:</strong> {application?.passport_back?.type}
                        </div>
                        <button onClick={() => downloadFile(application?.passport_back)}>Скачать файл</button>
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
                    {application?.passport_front ? (
                        <div>
                        {application?.passport_front?.type.startsWith('image/') ? (
                            <div>
                                <img src={imageUrl} alt="Selected file" style={{ maxWidth: '220px', maxHeight: '220px', marginBottom: '10px' }} />
                            </div>
                        ) : (
                            <div>
                            <strong>Выбранный файл:</strong> {application?.passport_front?.name}
                            </div>
                        )}
                        <div>
                            <strong>Тип файла:</strong> {application?.passport_front?.type}
                        </div>
                        <button onClick={() => downloadFile(application?.passport_front)}>Скачать файл</button>
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