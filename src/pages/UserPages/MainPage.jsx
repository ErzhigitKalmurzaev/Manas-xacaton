import styled from '@emotion/styled'
import React from 'react'
import RedButton from '../../ui/RedButton'
import { useNavigate } from 'react-router-dom'
import { GoMoveToBottom } from "react-icons/go";

const MainPage = () => {
    
    const navigate = useNavigate();

    const scrollToBottom = () => {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
    }

  return (
    <Wrapper>
        <img src="http://oidb.manas.edu.kg/images/6.jpg" alt='banner' />
        <p className='date'>2023-06-21</p>
        <p className='header'>ИНСТИТУТ ЕСТЕСТВЕННЫХ НАУК ОБЪЯВЛЯЕТ НАБОР В МАГИСТРАТУРУ И ДОКТОРАНТУРУ (PhD) НА 2023-2024 УЧЕБНЫЙ ГОД</p>
        <Table>
            <p className="row title">
                КЫРГЫЗСКО-ТУРЕЦКИЙ УНИВЕРСИТЕТ «МАНАС»

                ИНСТИТУТ ЕСТЕСТВЕННЫХ НАУК

                ОБЪЯВЛЯЕТ НАБОР В МАГИСТРАТУРУ И ДОКТОРАНТУРУ (PhD)

                НА 2023-2024 УЧЕБНЫЙ ГОД
            </p>
            <div className="row">
                <p className="second_title">Условия приёма</p>
            </div>
            <div className="row">
                <p className="second_title">МАГИСТРАТУРА</p>
            </div>
            <div className="row">
                <p className="right_block">1. В магистратуру принимаются выпускники ВУЗов со средним баллом успеваемости не менее 2,00 балла по четырехбалльной системе оценки.</p>
            </div>
            <div className="row">
                <p className="right_block">2. Если диплом о высшем образовании гражданина Кыргызской Республики получен за пределами Кыргызской Республики или Турецкой Республики необходимо предоставить документ удостоверяющий прохождение процедуры нострификации в Министерстве образования и науки Кыргызской Республики. Если диплом о высшем образовании гражданина Турецкой Республики получен за пределами Турецкой Республики необходимо предоставить документ удостоверяющий прохождение процедуры нострификации в соответствующих государственных органах.</p>
            </div>
            <div className="row">
                <p className="right_block">3. На вступительных экзаменах результаты одного из нижеперечисленных международных тестов: ALES (срок действия 3 года) с пороговым баллом-55 баллов (при подсчете будут учитываться  результаты естественнонаучного блока) или эквивалентный балл  по международно признанным экзаменам GRE и GMAT (срок действия 5 лет) будут подсчитаны вместо письменного экзамена. Однако, участие в устном экзамене является обязательным. Итоговый проходной балл составляет 70 баллов. Кандидат не имеющий в наличии один из вышеперечисленных сертификатов будет сдавать вступительные экзамены (письменно и устно).</p>
            </div>
            <div className="row">
                <p className="second_title">ДОКТОРАНТУРА (PhD)</p>
            </div>
            <div className="row">
                <p className="right_block">1. В докторантуру принимаются выпускники магистратуры и дипломированные специалисты (с пятилетним высшим образованием), а также выпускники медицинских факультетов и ветеринарных факультетов со средним баллом успеваемости не менее 2,50 балла по четырехбалльной системе оценки.</p>
            </div>
            <div className="row">
                <p className="right_block">2. Если диплом о высшем образовании гражданина Кыргызской Республики получен за пределами Кыргызской Республики и Турецкой Республики необходимо предоставить документ удостоверяющий прохождение процедуры нострификации в  в  Министерстве образования и науки Кыргызской Республики. Если диплом о высшем образовании гражданина Турецкой Республики получен за пределами Турецкой Республики необходимо предоставить документ удостоверяющий прохождение процедуры нострификации в соответствующих государственных органах.</p>
            </div>
            <div className="row">
                <p className="right_block">3. На вступительных экзаменах результаты одного из нижеперечисленных международных тестов: ALES (срок действия 3 года) с пороговым баллом-55 баллов (при подсчете будут учитываться  результаты естественнонаучного блока) или эквивалентный балл по международно признанным экзаменам GRE и GMAT (срок действия 5 лет) будут подсчитаны вместо письменного экзамена. Однако, участие в устном экзамене является обязательным. Итоговый проходной балл составляет 70 баллов. Кандидат не имеющий в наличии один из вышеперечисленных сертификатов будет сдавать вступительные экзамены (письменно и устно).</p>
            </div>
            <div className="row">
                <p className="right_block">4. Для поступления в докторантуру обязательно наличие сертификата по одному из утвержденных Ученым советом университета иностранных языков (английский, немецкий, французский и русский). Помимо сертификата по иностранному языку Центра тестирования и распределения Кыргызско-Турецкого университета «Манас» (проходной балл-50, срок действия сертификата – 3 года) принимаются сертификаты Центра тестирования и распределения Турецкой Республики (проходной балл-50), а также сертификаты других международных тестов. Результаты других международных тестов будут подсчитаны в соответствии с утвержденной Ученым Советом университета таблицей «эквивалентности экзаменов по иностранному языку». Выпускники факультета иностранных языков обязуются предоставить сертификат по иностранному языку (кроме основного профилирующего языка). Для граждан СНГ русский язык не рассматривается в качестве иностранного.</p>
            </div>
            <div className="row">
                <div className="right_block">Для иностранных граждан, выпускников зарубежных ВУЗов (кроме вузов ТР); иностранных граждан, выпускников ВУЗов КР, обучавшихся не на кыргызском и турецком языках; а также, кандидатов в рамках двусторонних соглашений между ВУЗами предусмотрена следующая процедура приема:</div>
            </div>
            <div className="row">
                <div className="right_block">1. В магистратуру принимаются выпускники ВУЗов (бакалавр) со средним баллом успеваемости не менее 2,00 балла по четырехбалльной системе оценки. В докторантуру принимаются выпускники магистратуры и дипломированные специалисты (с пятилетним высшим образованием), со средним баллом успеваемости не менее 2,50 балла по четырехбалльной системе оценки.</div>
            </div>
            <div className="row">
                <div className="right_block">2. Кандидаты должны предоставить документ, удостоверяющий прохождение процедуры нострификации в соответствующих государственных органах Кыргызской Республики и/или Турецкой Республики.</div>
            </div>
            <div className="row">
                <div className="right_block">3. Кандидатам предоставляется возможность выбора языка для участия в вступительном устном экзамене. Не требуется сертификат по иностранному языку а также не предусмотрена сдача письменного экзамена.</div>
            </div>
            <div className="row">
                <p className="second_title">ОБЩИЕ ПОЛОЖЕНИЯ И  НЕОБХОДИМЫЕ ДОКУМЕНТЫ ДЛЯ РЕГИСТРАЦИИ</p>
            </div>
            <div className="row">
                <p className="right_block">Прием документов будет осуществляться в Институте естественных наук с 3 июля по 25 августа 2023 г. (до 17:30 по Бишкекскому времени), а также посредством следующей электронной почты: bilgi.fbe@manas.edu.kg или можно пройти электронную регистрацию на сайте:info.manas.edu.kg/sinav</p>
            </div>
            <div className="row">
                <p className="right_block">1. Регистрационную форму можно получить по следующему адресу: https://manas.edu.kg/tr/Graduate+School+of+Science+and+Technology/formlar или посредством следующей электронной почты:  bilgi.fbe@manas.edu.kg.</p>
            </div>
            <div className="row">
                <p className="right_block">2. Для поступления в магистратуру требуется копия диплома бакалавра, в докторантуру диплом магистра или диплом специалиста (с пятилетним высшим образованием). При зачислении требуется предоставить оригинал дипломов.</p>
            </div>
            <div className="row">
                <p className="right_block">3. Документ о нострификации диплома (о высшем образовании, полученного за пределами Кыргызской Республики и Турецкой Республики). При зачислении требуется предоставить оригинал документа.</p>
            </div>
            <div className="row">
                <p className="right_block">4. Копия вкладыша к диплому (табель успеваемости, транскрипт).</p>
            </div>
            <div className="row">
                <p className="right_block">5. Фотография 3х4 2 шт.</p>
            </div>
            <div className="row">
                <p className="right_block">6. Копия паспорта или идентификационная карта (ID card).</p>
            </div>
            <div className="row">
                <p className="right_block">7. Оригинал или копия сертификата международных экзаменов (при наличии): ALES, GRE, GMAT.</p>
            </div>
            <div className="row">
                <p className="right_block">8. Для докторантуры оригинал или копия сертификата по иностранному языку.</p>
            </div>
        </Table>
        <Table>
            <div className="row">
                <p className="second_title">ПРЕДОСТАВЛЯЕМЫЕ ВОЗМОЖНОСТИ</p>
            </div>
            <div className="row">
                <p className="right_block">1. Бесплатное обучение.</p>
            </div>
            <div className="row">
                <p className="right_block">2. Магистрантам и докторантам ежемесячно выплачиваются стипендии (размер стипендии составляет не менее 7200 сомов для магистратуры и 9600 сомов для докторантуры).</p>
            </div>
            <div className="row">
                <p className="right_block">3. Успешные студенты могут быть трудоустроены в университете на условиях неполного рабочего дня.</p>
            </div>
            <div className="row">
                <p className="right_block">4. На территории кампуса им. Ч. Айтматова имеются студенческие общежития.</p>
            </div>
        </Table>

        <Table>
            <div className="row">
                <p className="second_title">ВАЖНЫЕ ПРИМЕЧАНИЯ</p>
            </div>
            <div className="row">
                <p className="right_block">1. Для информации: Адрес: г. Бишкек, мкр. Джал, кампус им. Ч. Т. Айтматова К-ТУ «Манас», здание Института естественных наук 2-этаж. Тел.: 00 996 (312) 25 35 57 внутренний: 107, Электронная почта: bilgi.fbe@manas.edu.kg  Whatsapp:  +996(559) 761988 или +996(700)125056.</p>
            </div>
            <div className="row">
                <p className="right_block">2. Заявки с недостоверной или неполной информацией будут считаться не действительными.</p>
            </div>
            <div className="row">
                <p className="right_block">3. Обучение в университете ведется на кыргызском и турецком языках. При необходимости, предусмотрено обучение на подготовительных языковых курсах. Абитуриенты, для которых кыргызский и/или турецкий языки не являются родными (а также выпускники вузов, обучающихся на одном из вышеперечисленных языков), но владеющие вышеупомянутыми языками или одним из языков, с целью подтверждения уровня знаний, предусмотрен языковой экзамен (проходной порог-67 баллов). Языковой экзамен (по кыргызскому и турецкому языкам) будет проведен 7-8 сентября 2023 года Высшей школой иностранных языков Кыргызско-Турецкого университета «Манас».</p>
            </div>
        </Table>

        <div className='button_div'>
            <RedButton text='Подать заявку'  onClick={() => navigate("/form")}/>
        </div>

        <div className="scroll_button" onClick={scrollToBottom}>
            <GoMoveToBottom size={35} style={{margin: 'auto auto'}} color='white'/>
        </div>
    </Wrapper>
  )
}

export default MainPage

const Wrapper = styled('div')`
    width: 70%;
    margin: 40px auto;
    position: 'relative';
    img {
        width: 100%;
        height: 500px;
    }
    .date {
        padding: 10px 0;
    }
    .header {
        font-size: 28px;
        padding: 20px 0;
        border-bottom: 1px solid gray;
        border-top: 1px solid gray;
    }
    .button_div {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .scroll_button {
        position: fixed;
        right: 0;
        bottom: 0;
        z-index: 100;
        width: 55px;
        height: 55px;
        margin: 30px;
        border-radius: 50%;
        background: #b80924;
        display: flex;
        text-align: center;
        align-items: center;
        cursor: pointer;
        box-shadow: 0px 0px 25px #b80924;
        p {
            color: white;
            font-size: 17px;
            font-weight: 500;
        }
    }
`;
const Table = styled('div')`
    margin: 30px 0;
    border: 1px solid black;
    .title {
        font-size: 20px;
        font-weight: 500;
        text-align: center;
        padding: 20px;
    }
    .second_title {
        font-size: 18px;
        font-weight: 500;
        padding: 8px;
    }
    .row {
        display: flex;
        border-bottom: 1px solid black;
    }
    .left_block {
        border-right: 1px solid black;
        padding: 8px;
    }
    .right_block {
        padding: 8px;
    }
`