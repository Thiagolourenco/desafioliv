import styled from "styled-components";

export const Container = styled.div`
  padding: 0;
  margin: 0;
`;

export const Content = styled.div`
  margin-top: 20px;
  margin-left: 80px;

  > p {
    color: #95a5a6;
    font-size: 18px;
    margin-left: 35px;
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;

    img {
      height: 150px;
      width: 150px;
      border-radius: 5px;
    }

    p {
      font-size: 15px;
      margin-left: 10px;
    }
  }

  .gpbutton {
    display: flex;
    flex-direction: row;

    button {
      border: 0;
      background: transparent;
      margin-top: 20px;
      margin-left: 30px;
    }
  }
`;

export const Fotter = styled.ul`
  display: flex;
  list-style: none;
  justify-content: center;
  align-items: center;
`;

export const FotterLi = styled.li`
  display: flex;
  flex-direction: column;

  width: 300px;
  height: 150px;
  border-radius: 5px;
  border-top: 1px solid rgba(196, 196, 196, 0.9);
  border-left: 1px solid rgba(196, 196, 196, 0.9);
  border-right: 1px solid rgba(196, 196, 196, 0.9);
  border-bottom: 1px solid rgba(196, 196, 196, 0.9);

  margin: 10px;

  a {
    text-decoration: none;
    display: flex;
    align-self: flex-start;
    margin: 10px;
    font-size: 15px;
  }

  p {
    font-size: 15px;
    color: rgba(196, 196, 196, 196);
    margin-left: 10px;
  }

  ul {
    list-style: none;
    display: flex;
    align-self: flex-start;
    flex-direction: row;

    li {
      margin: 5px;
      margin-bottom: 10px;
      display: flex;
      flex-direction: row;
    }
  }
`;
