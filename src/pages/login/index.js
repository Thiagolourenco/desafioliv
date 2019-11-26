import React, {useState} from 'react'
import {FaGithub} from 'react-icons/fa'

import {Container} from './styles'
import api from '../../services/api'

export default function Login({history}){
    const [name, setName] = useState('');

    async function handleSubmit(e){
        e.preventDefault();
        
        // const response = await api.post(`/users`, {name});


        const response = await api.post("/users", { name });

        const { _id } = response.data;
    
        history.push(`dashboard/${_id}`);
    
        
    }

    return (
        <Container>
            <FaGithub size={35} color="#000"/>
            <form onSubmit={handleSubmit}>
                <input value={name} onChange={text => setName(text.target.value)}/>
                <button>Acessar</button>
            </form>
        </Container>
    )
}