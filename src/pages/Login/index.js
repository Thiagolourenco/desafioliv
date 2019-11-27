import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";

import { Container } from "./styles";

export default function Login({ history }) {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    history.push(`/dashboard/${name}`);
  }

  return (
    <Container>
      <FaGithub size={80} color="#000" />
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={text => setName(text.target.value)}
          placeholder="Informe usuário do GitHub"
        />
        <button>Acessar</button>
      </form>
    </Container>
  );
}
