import React, { useEffect, useState } from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaBook,
  FaStar,
  FaCodeBranch
} from "react-icons/fa";

import Header from "../../components/Header";
import api from "../../services/api";

import { Container, Content, Fotter, FotterLi } from "./styles";

export default function Dashboard({ match }) {
  const [data, setData] = useState([]);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    async function loadingApi() {
      const name = match.params.name;
      const response = await api.get(`/users/${name}`);

      setData(response.data);
      console.log(match.params.name);
    }

    loadingApi();
  }, [match.params.name]);

  useEffect(() => {
    async function loadRepos() {
      const name = match.params.name;
      const response = await api.get(`users/${name}/repos`);

      setRepos(response.data);
    }
    loadRepos();
  }, [match.params.name]);

  return (
    <Container>
      <Header />
      <Content>
        <div>
          <img src={data.avatar_url} alt="AvatarUser" />
          <p>
            <FaMapMarkerAlt size={15} color="#000" /> {data.location}
          </p>
          <p> {data.blog}</p>
          <p>
            <FaEnvelope size={15} color="#000" /> {data.email}
          </p>
        </div>

        <div className="gpbutton">
          <button>
            <FaBook size={15} color="#000" /> Repositorires {data.public_repos}
          </button>
          <button> Packages</button>
          <button> People</button>
          <button> Projects</button>
        </div>

        <p>Pinned repositories</p>

        <Fotter>
          {repos.slice(0, 3).map(item => (
            <FotterLi key={item.id}>
              <a href={item.url}>
                <FaBook size={15} color="#000" />
                {item.name}
              </a>
              <p>{item.description}</p>

              <ul>
                <li>{item.language}</li>
                <li>
                  <FaStar size={15} color="#000" />
                  {item.stargazers_count}
                </li>
                <li>
                  <FaCodeBranch size={15} color="#000" />
                  {item.forks}
                </li>
              </ul>
            </FotterLi>
          ))}
        </Fotter>
      </Content>
    </Container>
  );
}
