import React from "react";
import { FaGithub } from "react-icons/fa";

import { Container } from "./styles";

export default function Header() {
  return (
    <Container>
      <header>
        <FaGithub size={35} color="#fff" />
        <a href="/">Why Github?</a>
        <nav>
          <a href="/dashboard">Enterprise</a>
          <a href="/dashboard">Explore</a>
          <a href="/dashboard">Marketplace</a>
          <a href="/dashboard">Picing</a>
        </nav>
        <input placeholder="search" />
        <button>Sign In</button>
        <button className="signup">Sign Up</button>
      </header>
    </Container>
  );
}
