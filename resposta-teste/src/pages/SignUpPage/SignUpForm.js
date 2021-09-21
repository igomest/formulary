import {
    AdressContainer,
    CardContainer,
    CardInput,
    ContentAdress,
    ContentData,
    Form,
    InputContainer,
    ItemsContainer,
    MatriculationContainer,
    Payment,
    PaymentContainer,
    SelectContainer,
    UserAdress,
    UserData,
} from "./styledSignUpPage"
import useForm from "../../hooks/useForm"
import { useHistory } from "react-router"
import { goToListPage } from "../../router/coordinator"

const SignUpForm = () => {

    const [ form, onChange ] = useForm({
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


    const history = useHistory()


    const onSubmitForm = (event) => {
        event.preventDefault()
        console.log("Formulário enviado!", form)
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
                            pattern={"^.{11,}"}
                            title={"O cpf deve ter no mínimo 11 números"}
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
                                pattern={"^.{8,}"}
                                title={"O cpf deve ter no mínimo 8 números"}
                                required
                            />
                        </UserAdress>

                        <UserAdress>
                            <ContentAdress>Estado</ContentAdress>
                            <select value={form.state} onChange={onChange} name={"state"} required>
                                <option>Selecione o estado</option>
                                <option>Selecione o estado</option>
                                <option>Selecione o estado</option>
                            </select>

                            <ContentAdress>Cidade</ContentAdress>
                            <select value={form.city} onChange={onChange} name={"city"} required>
                                <option>Mês</option>
                                <option>Mês</option>
                                <option>Mês</option>
                            </select>
                        </UserAdress>
                    </AdressContainer>
                </InputContainer>

                <PaymentContainer>
                    <Payment>Formas de Pagamento</Payment>
                    <hr />
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
                                pattern={"^.{3,}"}
                                title={"O nome deve ter no mínimo 3 caracteres"}
                                required
                            />

                            <ContentAdress>Número do Cartão</ContentAdress>
                            <input
                                placeholder={"5555 5555 5555 5555"}
                                value={form.cardNumber}
                                type={"number"}
                                name={"cardNumber"}
                                onChange={onChange}
                                pattern={"^.{16,}"}
                                title={"O cartão deve ter no mínimo 16 dígitos"}
                                required
                            />
                        </CardContainer>

                        <CardContainer>
                            <ContentAdress>Data de Expiração</ContentAdress>
                            <SelectContainer>
                                <select value={form.dateExp} onChange={onChange} name={"dateExp"} required>
                                    <option>Mês</option>
                                    <option>Mês</option>
                                    <option>Mês</option>
                                </select>

                                <select value={form.yearExp} onChange={onChange} name={"yearExp"} required>
                                    <option>Ano</option>
                                    <option>Ano</option>
                                    <option>Ano</option>
                                </select>
                            </SelectContainer>

                            <ContentAdress>Código de Segurança</ContentAdress>
                            <input
                                placeholder={"XXX"}
                                onChange={onChange}
                                type={"number"}
                                value={form.securityName}
                                pattern={"^.{3,}"}
                                title={"O código de segurança deve ter no mínimo 3 caracteres"}
                                name={"securityName"}
                                required
                            />
                        </CardContainer>
                    </ItemsContainer>
                </PaymentContainer>

                <MatriculationContainer>
                    <p>Seu cartão será debitado em R$49,00</p>
                    <button  type={"submit"}>REALIZAR MATRÍCULA</button>
                    <p>Informações seguras e criptografadas</p>
                </MatriculationContainer>
            </Form>
        </>
    )
}

export default SignUpForm