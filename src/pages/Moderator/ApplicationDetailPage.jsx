import { Checkbox } from '@chakra-ui/checkbox'
import { Input } from '@chakra-ui/input'
import { Text } from '@chakra-ui/layout'
import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { toast } from 'react-toastify'
import useUserStore from '../../store/useUserStore'
import PageTitle from '../../ui/PageTitle'
import RedButton from '../../ui/RedButton'

const ApplicationDetailPage = () => {

  const navigation = useNavigate();
  const { id } = useParams();

  const getApplicationById = useUserStore(state => state.getApplicationById);
  const postConfirmStatus = useUserStore(state => state.postConfirmStatus);
  const application = useUserStore(state => state.application)

  const [filter, setFilter] = useState(0);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    getApplicationById({ id })
  }, [id])

  const changeConfirm = async (conf) => {
    const data = await postConfirmStatus({request_id: id, is_confirmed: conf})
    if(data) {
        toast.success("Ваш запрос обработан успешно!")
        navigation(-1)
    }
  }


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
                    <Text fontWeight={500}>Фото (4x3)</Text>
                    <img src={application?.photo} alt="" />
                </div>
                <div className="col">
                    <Text fontWeight={500}>Диплом</Text>
                    <img src={application?.diplom} alt="" />
                </div>
                <div className="col">
                    <Text fontWeight={500}>Диплом (подтверждение для иностранцев)</Text>
                    <img src={application?.nostrification} alt="" />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Text fontWeight={500}>Паспорт (спереди)</Text>
                    <img src={application?.passport_front} alt="" />
                </div>
                <div className="col">
                    <Text fontWeight={500}>Паспорт (сзади)</Text>
                    <img src={application?.passport_back} alt="" />
                </div>
            </div>
            <div className='submit_button'>
                <RedButton text="Одобрить" onClick={() => changeConfirm(1)} className="conf"/>
                <RedButton text="Отклонить" onClick={() => changeConfirm(-1)}/>
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
        img {
            width: 250px;
            height: 250px;
            border: 1px dashed #ccc;
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