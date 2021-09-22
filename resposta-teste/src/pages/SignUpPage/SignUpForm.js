import {
    AdressContainer,
    CardContainer,
    CardInput,
    ContentAdress,
    ContentData,
    Form,
    Information,
    InputContainer,
    ItemsContainer,
    MatriculationContainer,
    Payment,
    PaymentContainer,
    Row,
    SelectContainer,
    UserAdress,
    UserData,
} from "./styledSignUpPage"
import useForm from "../../hooks/useForm"


const SignUpForm = () => {

    const [form, onChange, changeThePage] = useForm({
        name: "",
        email: "",
        cpf: "",
        adress: "",
        state: "",
        cep: "",
        city: "",
        credit: "",
        billet: "",
        cardName: "",
        cardNumber: "",
        dateExp: "",
        yearExp: "",
        securityCode: ""
    })

    const onSubmitForm = (event) => {
        event.preventDefault()
        console.log("Formulário enviado!", form)
        changeThePage()
    }

    return (
        <>
            <Form onSubmit={onSubmitForm}>
                <InputContainer>
                    <UserData>
                        <ContentData>Nome</ContentData>
                        <input
                            onChange={onChange}
                            value={form.name}
                            name={"name"}
                            pattern={"^.{3,}"}
                            title={"O nome deve ter no mínimo 3 caracteres"}
                            required
                        />

                        <ContentData>Email</ContentData>
                        <input
                            onChange={onChange}
                            value={form.email}
                            name={"email"}
                            required
                        />

                        <ContentData>CPF</ContentData>
                        <input
                            placeholder={"111.111.111-01"}
                            value={form.cpf}
                            type={"number"}
                            name={"cpf"}
                            onChange={onChange}
                            required
                        />
                    </UserData>

                    <AdressContainer>
                        <UserAdress>
                            <ContentAdress>Endereço</ContentAdress>
                            <input
                                placeholder={"Rua, Número e Bairro"}
                                onChange={onChange}
                                value={form.adress}
                                name={"adress"}
                                required
                            />

                            <ContentAdress>CEP</ContentAdress>
                            <input
                                placeholder={"22.222-000"}
                                value={form.cep}
                                type={"number"}
                                name={"cep"}
                                onChange={onChange}
                                required
                            />
                        </UserAdress>

                        <UserAdress>
                            <ContentAdress>Estado</ContentAdress>
                            <select value={form.state} onChange={onChange} name={"state"} required>
                                <option>Selecione o estado</option>
                                <option>MG</option>
                                <option>SP</option>
                            </select>

                            <ContentAdress>Cidade</ContentAdress>
                            <select value={form.city} onChange={onChange} name={"city"} required>
                                <option>Cidade</option>
                                <option>Belo Horizonte</option>
                                <option>São Paulo</option>
                            </select>
                        </UserAdress>
                    </AdressContainer>
                </InputContainer>

                <PaymentContainer>
                    <Payment>Forma de Pagamento</Payment>
                    <Row />

                    <CardInput>
                        <input type="radio" required value={form.credit} onChange={onChange} name={"credit"} />
                        <label>Cartão de Crédito</label>

                        <input type="radio" required value={form.billet} onChange={onChange} name={"billet"} />
                        <label>Boleto Bancário</label>
                    </CardInput>

                    <ItemsContainer>

                        <CardContainer>
                            <ContentData>Nome no Cartão</ContentData>
                            <input
                                placeholder={"Nome impresso no cartão"}
                                onChange={onChange}
                                value={form.cardName}
                                name={"cardName"}
                                pattern={"^.{10,}"}
                                title={"O nome no cartão deve ter no mínimo 10 caracteres"}
                                required
                            />

                            <ContentAdress>Número do Cartão</ContentAdress>
                            <input
                                placeholder={"5555 5555 5555 5555"}
                                value={form.cardNumber}
                                type={"number"}
                                name={"cardNumber"}
                                onChange={onChange}
                                required
                            />
                        </CardContainer>

                        <CardContainer>
                            <ContentAdress>Data de Expiração</ContentAdress>
                            <SelectContainer>
                                <select value={form.dateExp} onChange={onChange} name={"dateExp"} required>
                                    <option>Mês</option>
                                    <option>Janeiro</option>
                                    <option>Fevereiro</option>
                                    <option>Março</option>
                                    <option>Abril</option>
                                    <option>Maio</option>
                                    <option>Junho</option>
                                    <option>Julho</option>
                                    <option>Agosto</option>
                                    <option>Setembro</option>
                                    <option>Outubro</option>
                                    <option>Novembro</option>
                                    <option>Dezembro</option>
                                </select>

                                <select value={form.yearExp} onChange={onChange} name={"yearExp"} required>
                                    <option>Ano</option>
                                    <option>2020</option>
                                    <option>2021</option>
                                    <option>2022</option>
                                    <option>2023</option>
                                    <option>2024</option>
                                    <option>2025</option>
                                    <option>2026</option>
                                    <option>2027</option>
                                    <option>2028</option>
                                    <option>2029</option>
                                </select>
                            </SelectContainer>

                            <ContentAdress>Código de Segurança</ContentAdress>
                            <input
                                placeholder={"XXX"}
                                onChange={onChange}
                                type={"number"}
                                value={form.securityName}
                                name={"securityName"}
                                required
                            />
                        </CardContainer>
                    </ItemsContainer>
                    <Row />
                </PaymentContainer>
                

                <MatriculationContainer>
                    <p>Seu cartão será debitado em R$49,00</p>
                    <button type={"submit"}>REALIZAR MATRÍCULA</button>
                    <Information>Informações seguras e criptografadas</Information>
                </MatriculationContainer>
            </Form>
        </>
    )
}

export default SignUpForm