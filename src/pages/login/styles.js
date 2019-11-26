import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    flex-direction: column; 
    margin-top: 50px;
    
    form {
    
    display: flex;
    flex-direction: column;

    input {
        margin-top: 30px;
        height: 40px;
        width: 350px;
        background: #c4c4c4;
        border-radius: 5px;
        border: 0;
    }    
    
    button {
        border: 0;
        background: #000;
        height: 40px;
        border-radius: 5px;
        margin-top: 10px;
        color: #fff;    
        font-size: 18px;
    }
    }
    
`
