import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import { Container, TitleContainer, Title } from "../SignUpPage/styledSignUpPage"
import { ClientName, ListContainer, ListLine } from "./styledListPage"

const userData = [
    {
        cpf: 22222222210,
        name: "Ivan",
        email: "ivan@gmail.com",
        date: "21/09/2021"
    },
    {
        cpf: 22235622102,
        name: "Ana",
        email: "ana@gmail.com",
        date: "19/09/2021"
    },
    {
        cpf: 25975322210,
        name: "Felipe",
        email: "felipe@outlook.com",
        date: "18/09/2021"
    },
    {
        cpf: 25996525210,
        name: "Amanda",
        email: "amanda@outlook.com",
        date: "17/09/2021"
    }
]


const ListPage = () => {


    return (
        <div>
            <Header />

            <Container>
                <TitleContainer>
                    <Title>
                        <p>Lista</p>
                    </Title>
                </TitleContainer>

                <ListContainer>
                    <p>Lista de Clientes</p>
                </ListContainer>
                <ListLine />

                <ClientName>
                    <p>Nome do Cliente</p>

                    <input />
                </ClientName>

                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Email</th>
                            <th>CPF</th>
                            <th>Criado em:</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        {userData.map((user) => (
                            <tr>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.cpf}</td>
                                <td>{user.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Container>

            <Footer />

        </div>
    )
}


export default ListPage
