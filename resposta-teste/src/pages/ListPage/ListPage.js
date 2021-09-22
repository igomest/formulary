import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import { Container, TitleContainer, Title } from "../SignUpPage/styledSignUpPage"
import { ClientName, ListContainer, ListLine } from "./styledListPage"



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
                            <th>Cpf</th>
                            <th>Cirado em</th>
                        </tr>
                    </thead>


                    <tbody>
                        <tr>
                            <td></td>
                            <td>ivan@email.com</td>
                            <td>1/5/2021</td>
                            <td>
                                <p>Unpaid</p>
                            </td>
                        </tr>

                        <tr>
                            <td>Sim</td>
                            <td>Sonic</td>
                            <td>1/4/2021</td>
                            <td>
                                <p>Paid</p>
                            </td>
                        </tr>

                        <tr>
                            <td>Highlander</td>
                            <td>12/18/2020</td>
                            <td>
                                <p>Paid</p>
                            </td>
                            <td>$1152.35</td>
                        </tr>
                    </tbody>
                </table>
            </Container>

            <Footer />

        </div>
    )
}


export default ListPage