import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import { Container, TitleContainer, Title } from "../SignUpPage/styledSignUpPage"
import { ClientName, ListContainer, TableContainer } from "./styledListPage"



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

                <ClientName>
                    <p>Nome do Cliente</p>

                    <input />
                </ClientName>

                <TableContainer>

                </TableContainer>
            </Container>

            <Footer />

        </div>
    )
}


export default ListPage