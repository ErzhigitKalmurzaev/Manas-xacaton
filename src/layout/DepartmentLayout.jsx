import { Button, Flex } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

const DepartmentLayout = () => {
    const navigate = useNavigate();
    const pages = [
        {text: "заявки", link: "/department/applications"},
        {text: "рейтинг", link: "/department/rating"},
        {text: "коммиссия", link: "/department/commission"},
        {text: "анкеты", link: "/department/questionnaires"},
    ]
    return (
        <>
            <Flex>
                <Flex direction={"column"}>
                    {pages.map((page, index) => (
                        <Button key={index} onClick={() => navigate(page.link)}>
                            {page.text}
                        </Button>
                    ))}
                </Flex>
                <Flex>
                    <Outlet/>
                </Flex>
            </Flex>
        </>
    )
}

export default DepartmentLayout