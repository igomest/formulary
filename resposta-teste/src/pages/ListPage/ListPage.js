import Header from "../../components/Header/Header"
import { Container, TitleContainer, Title, Footer } from "../SignUpPage/styledSignUpPage"
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

            <Footer>
                <p>Ivan Gomes - 2021</p>
            </Footer>

        </div>
    )
}


export default ListPage