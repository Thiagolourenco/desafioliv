import styled from 'styled-components'

export const Container = styled.div`
    padding: 0;
    margin: 0;

    header {
        background: #000;
        height: 50px;
        padding: 10px;
        color: #fff;
        
        display: flex;
        align-items: center;

        a {
            font-size: 18px;
            margin-left: 10px;
        }

        nav {
            display: flex;
            flex-direction: row;
            
            padding-left:  20px;
         
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

export const Footter = styled.div`

`;