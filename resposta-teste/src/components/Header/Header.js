import { ButtonContainer, HeaderContainer } from "./styledHeader"
import { goToListPage } from "../../router/coordinator"
import { goToSignUpPage } from "../../router/coordinator"
import { useHistory } from "react-router"

const Header = () => {

    const history = useHistory()

    return (
        <HeaderContainer>
            <ButtonContainer>
                <button onClick={() => goToListPage(history)}>Lista</button>

                <button onClick={() => goToSignUpPage(history)}>Cadastro</button>
            </ButtonContainer>
        </HeaderContainer>
    )
}

export default Header