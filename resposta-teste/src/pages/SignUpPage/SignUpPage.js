import {
    AdressContainer,
    CardContainer,
    CardInput,
    Container,
    ContentAdress,
    ContentData,
    Footer,
    InputContainer,
    ItemsContainer,
    MatriculationContainer,
    Payment,
    PaymentContainer,
    SelectContainer,
    Title,
    TitleContainer,
    UserAdress,
    UserData,
} from "./styledSignUpPage"

import Header from "../../components/Header/Header"

const SignUpPage = () => {
    return (
        <div>
            <Header />

            <Container>
                <TitleContainer>
                    <Title>
                        <p>Cadastro</p>
                    </Title>
                </TitleContainer>


                <InputContainer>
                    <UserData>
                        <ContentData>Nome</ContentData>
                        <input />

                        <ContentData>Email</ContentData>
                        <input />

                        <ContentData>CPF</ContentData>
                        <input placeholder={"111.111.111-01"} />
                    </UserData>

                    <AdressContainer>
                        <UserAdress>
                            <ContentAdress>Endereço</ContentAdress>
                            <input placeholder={"Rua, Número e Bairro"} />

                            <ContentAdress>CEP</ContentAdress>
                            <input placeholder={"22.222-000"} />
                        </UserAdress>

                        <UserAdress>
                            <ContentAdress>Estado</ContentAdress>
                            <input />

                            <ContentAdress>Cidade</ContentAdress>
                            <input />
                        </UserAdress>
                    </AdressContainer>
                </InputContainer>

                <PaymentContainer>
                    <Payment>Formas de Pagamento</Payment>
                    <hr />
                    <CardInput>
                        <input type="radio" />
                        <label>Cartão de Crédito</label>

                        <input type="radio" />
                        <label>Boleto Bancário</label>
                    </CardInput>

                    <ItemsContainer>

                        <CardContainer>
                            <ContentData>Nome no Cartão</ContentData>
                            <input placeholder={"Nome impresso no cartão"} />

                            <ContentAdress>Número do Cartão</ContentAdress>
                            <input placeholder={"5555 5555 5555 5555"} />
                        </CardContainer>

                        <CardContainer>
                            <ContentAdress>Data de Expiração</ContentAdress>
                            <SelectContainer>
                                <select>
                                    <option>Mês</option>
                                </select>

                                <select>
                                    <option>Mês</option>
                                </select>
                            </SelectContainer>

                            <ContentAdress>Código de Segurança</ContentAdress>
                            <input placeholder={"XXX"} />
                        </CardContainer>
                    </ItemsContainer>
                </PaymentContainer>

                <MatriculationContainer>
                    <p>Seu cartão será debitado em R$49,00</p>
                    <button>REALIZAR MATRÍCULA</button>
                    <p>Informações seguras e criptografadas</p>
                </MatriculationContainer>

                <Footer>
                   <p>Ivan Gomes - 2021</p>
                </Footer>
            </Container>
        </div>
    )
}


export default SignUpPage