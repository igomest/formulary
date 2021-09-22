import styled from "styled-components"


export const ListContainer = styled.section`
   display: flex;
   width: 20vw;
   height: 7vh;
   margin: 40px;
   margin-right: 12%;
   margin-bottom: 15px;
   

   p {
       padding: 10px;
       font-weight: bold;
       color: #1188EE;
       font-size: 1.2rem;
   }
`
export const ListLine = styled.span`
   width: 30%;
   margin-left: 30px;
   border: 1px solid #EFF4F9;
`

export const ClientName = styled.section`
  display: flex;
  width: 34vw;
  height: 14vh;
  flex-direction: column;
  align-items: center;

  p {
      padding: 10px;
      margin-right: 62%;
      margin-bottom: -5px;
      color: #445566;
      font-weight: bold;
  }

  input {
    background-color:  #EFF4F9;
    width: 90%;
    height: 6vh;
    border-radius: 5px;
    border: none;
    margin-left: 28px;
    padding-left: 20px;
  }
`
export const TableContainer = styled.section`
   display: flex;
   border: 1px solid black;
   width: 30vw;
   height: 70vh;
   margin: 60px;
`