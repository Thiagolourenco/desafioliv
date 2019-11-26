import React, {useEffect, useState} from 'react'
import {FaGithub, FaMapMarkerAlt, FaEnvelope, FaBook} from 'react-icons/fa'

import {Container, Content,Footter} from  './styles'

import api from '../../services/api'

export default function Dashboard({match}){

    const [data, setData] = useState([]);

    useEffect(() => {
        async function loadingApi(){
            const response = await api.get('/users', {
                headers: {
                    user: match.params.id
                }
            })

            console.log(response.data)
            setData(response.data)
        }

        loadingApi();
    }, [match.params.id])

    return (
        <Container>
            <header>
                <FaGithub size={35} color="#fff"/>
                <a>Why Github?</a>
                <nav>
                    <a href="#">Enterprise</a>
                    <a href="#">Explore</a>
                    <a href="#">Marketplace</a>
                    <a href="">Picing</a>    
                </nav>  
                <input placeholder="search"/>   
                <button>Sign In</button>  
                <button className="signup">Sign Up</button>         
            </header>

            <Content>
                <div>
                    <img src={data.avatar_url}/>
                    <p><FaMapMarkerAlt size={15} color="#000"/>     {data.location}</p>
                    <p>http://www.camuda.org</p>
                    <p><FaEnvelope size={15} color="#000" />   info@camunda.com</p>
                </div>

                <div className="gpbutton">
                    <button ><FaBook size={15} color="#000"/>  Repositorires {data.public_repos}</button>
                    <button>  Packages</button>
                    <button>  People</button>
                    <button>  Projects</button>

                </div>

                

                <p>Pinned repositories</p>

                <Footter>
                   <div>
                        <a href="#">camunda-bpm-platform</a>
                        <p>Flexible fow workend and decision</p>
                        <ul>
                            <li>Java</li>
                            <li></li>
                        </ul>
                   </div>
                   <div></div>
                   <div></div>
                   <div></div>
                   <div></div>
                </Footter>

               
            </Content>
        </Container>
    )
}