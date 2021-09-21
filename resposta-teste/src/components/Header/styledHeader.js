import styled from "styled-components"


export const HeaderContainer = styled.header`
  display: flex;
  height: 7vh;
  background-color: #17222D;
  align-items: center;
  justify-content: flex-end;
`
export const ButtonContainer = styled.div`
  display: flex;
  width: 10vw;
  height: 6vh;
  justify-content: space-evenly;
  align-items: center;
  margin-right: 70px;

  button {
      width: 80px;
      height: 34px;
      border: none;
      color: white;
      background-color: #17222D;
      cursor: pointer;
      font-size: 18px;
  }
`