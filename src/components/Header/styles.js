import styled from "styled-components";

export const Container = styled.div`
  header {
    background: #000;
    height: 50px;
    padding: 10px;
    padding-left: 80px;
    color: #fff;

    display: flex;
    align-items: center;

    a {
      font-size: 18px;
      margin-left: 10px;
      color: #fff;
    }

    nav {
      display: flex;
      flex-direction: row;

      padding-left: 20px;

      a {
        margin: 15px;
        font-size: 18px;
        text-decoration: none;
        color: #fff;
      }
    }

    input {
      border: 0;
      border-radius: 5px;
      width: 250px;
      height: 30px;
      margin-left: 100px;
    }

    button {
      border: 0;
      background: transparent;
      color: #fff;
      font-size: 18px;
      margin-left: 18px;
    }
  }
`;
