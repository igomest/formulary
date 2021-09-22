import styled from "styled-components"


export const Container = styled.div`
   display: flex;
   height: 100%;
   flex-direction: column;
   align-items: center;

   table {
      border-collapse: collapse;
      background-color: white;
      width: 30vw;
      min-height: 10vh;
      text-align: left;
      overflow: hidden;
      margin: 40px;
      margin-left: 5%;
   } 

   thead {
      border: 2px solid #ccd9e5;
  }

  th {
    padding: 0.5rem 2rem;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    font-size: 0.7rem;
    font-weight: 900;
    border: 2px solid #ccd9e5;
  }

  td {
    padding: 0.1rem 2rem;
    border: 2px solid #ccd9e5;
  }


`
export const TitleContainer = styled.section`
  display: flex;
  width: 100%;
  height: 13vh;
  background: #EFF4F9;
  justify-content: center;
  align-items: center;
`
export const Title = styled.section`
   display: flex;
   width: 16vw;
   height: 10vh;
   margin-right: 14%;
   align-items: center;

   p {
       font-size: 4rem;
       color:  #445566;
   }
`
export const Form = styled.form`
`

export const InputContainer = styled.section`
   display: flex;
   flex-direction: column;
   width: 35vw;
   height: 55vh;
   margin-top: 70px;
   align-items: center;
`

export const ContentData = styled.p`
   margin-left: 20px;
   margin-bottom: 5px;
   color: #445566;
   font-weight: bold;
`

export const UserData = styled.section`
   display: flex;
   width: 90%;
   height: 35vh;
   flex-direction: column;

   input {
       background-color:  #EFF4F9;
       width: 90%;
       height: 5vh;
       border-radius: 5px;
       border: none;
       margin-left: 20px;
       padding-left: 14px;
       color: #bbccdd;
       font-weight: bold;
   }
   

`
export const AdressContainer = styled.section`
   display: flex;
   width: 90%;
   height: 35vh;
   flex-direction: row;
   justify-content: space-evenly;
`

export const UserAdress = styled.section`
   display: flex;
   width: 50%;
   height: 22vh;
   flex-direction: column;
   margin-top: 20px;
   margin-left: 10px;

   input {
       width: 80%;
       height: 5vh;
       margin-left: 10px;
       background-color:  #EFF4F9;
       border: none;
       border-radius: 5px;
       padding-left: 14px;
       font-weight: bold;
       color: #bbccdd;
   }

   select {
      background-color:  #EFF4F9;
       width: 85%;
       height: 5vh;
       border-radius: 5px;
       border: none;
       margin-left: 10px;
       padding-left: 14px;
       font-weight: bold;
       color: #bbccdd;
   }
`
export const ContentAdress = styled.p`
   margin-left: 14px;
   margin-bottom: 5px;
   font-weight: bold;
   color: #445566;
`
export const PaymentContainer = styled.section`
   display: flex;
   width: 35vw;
   height: 40vh;
   margin-top: 20px;
   flex-direction: column;
   
`
export const Row = styled.span`
   width: 80%;
   margin-left: 48px;
   border: 1px solid #EFF4F9;
`

export const Payment = styled.p`
   margin-left: 50px;
   color: #1188EE;
   font-weight: bold;
`

export const CardInput = styled.section` 
   display: flex;
   width: 55%;
   height: 5vh;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   margin-left: 50px;
   
   input {
       width: 15px;
       height: 15px;
   }

  label {
       font-weight: bold;
       color: #445566;
  }
`

export const ItemsContainer = styled.div`
    display: flex;
    width: 90%;
    height: 25vh;
    flex-direction: row;
    justify-content: space-between;
    margin: 20px;
`

export const CardContainer = styled.section`
   display: flex;
   width: 50%;
   height: 22vh;
   flex-direction: column;
   margin-left: 30px;
   justify-content: center;

   input {
       width: 80%;
       height: 5vh;
       margin-left: 10px;
       background-color:  #EFF4F9;
       border: none;
       border-radius: 5px;
       padding-left: 14px;
       font-weight: bold;
       color: #bbccdd;
   }
   
`
export const SelectContainer = styled.section`
    display: flex;
    width: 100%;
    height: 6vh;
    justify-content: space-evenly;
    align-items: center;

    select {
       width: 37%;
       height: 6vh;
       margin-left: 10px;
       background-color:  #EFF4F9;
       border: none;
       border-radius: 5px;
       margin-right: 25px;
       color: #bbccdd;
       padding-left: 20px;
       font-weight: bold;
   }
`
export const MatriculationContainer = styled.section`
   display: flex;
   flex-direction: column;
   height: 17vh;
   width: 20vw;
   margin-top: 20px;
   margin-bottom: 25%;
   margin-left: 7%;

   p {
       margin-left: 10px;
   }

   button {
       width: 60%;
       height: 30%;
       margin-left: 10px;
       background-color: #1188EE;
       border: none;
       border-radius: 5px;
       color: white;
       cursor: pointer;
       font-weight: bold;
       font-size: 1rem;

       :active {
          background-color: #126BF0;
       }
   }
`
