import styled from "styled-components"


export const ListContainer = styled.section`
   display: flex;
   border: 1px solid black;
   width: 20vw;
   height: 7vh;
   margin: 40px;
   margin-right: 12%;
   

   p {
       padding: 10px;
   }
`

export const ClientName = styled.section`
  display: flex;
  width: 30vw;
  height: 14vh;
  border: 1px solid black;
  flex-direction: column;
  align-items: center;

  p {
      padding: 10px;
      margin-right: 64%;
      margin-bottom: -5px;
      color: #445566;
  }

  input {
    background-color:  #EFF4F9;
    width: 90%;
    height: 5vh;
    border-radius: 5px;
    border: none;
    margin-left: 20px;
  }
`
export const TableContainer = styled.section`
   display: flex;
   border: 1px solid black;
   width: 30vw;
   height: 70vh;
   margin: 60px;
`