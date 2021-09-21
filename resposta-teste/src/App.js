import Router from "./router/Router"
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300&display=swap');
    font-family: 'Nunito', sans-serif;
  }
`

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Router />
    </div>
  )
}

export default App
