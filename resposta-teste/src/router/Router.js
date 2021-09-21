import { BrowserRouter, Switch, Route } from "react-router-dom"
import ListPage from "../pages/ListPage/ListPage"
import SignUpPage from "../pages/SignUpPage/SignUpPage"


const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={"/"}>
                    <SignUpPage />
                </Route>

                <Route exact path={"/lista"}>
                    <ListPage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}


export default Router