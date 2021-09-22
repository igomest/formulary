import { Container, TitleContainer, Title } from "./styledSignUpPage"
import Header from "../../components/Header/Header"
import SignUpForm from "./SignUpForm"
import Footer from "../../components/Footer/Footer"



const SignUpPage = () => {

    return (
        <>
            <Header />

            <TitleContainer>
                <Title>
                    <p>Cadastro</p>
                </Title>
            </TitleContainer>

            <Container>
                <SignUpForm />
            </Container>

            <Footer />
        </>
    )
}


export default SignUpPage