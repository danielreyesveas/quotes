import React from 'react';
import styled from '@emotion/styled';

const ContenedorFrase = styled.div`
    padding: 3rem;
    border-radius: .5rem;
    background-color: #FFF;
    max-width: 800px;
    margin-top: 3rem;
    @media (min-width: 992px){
        margin-top: 1rem;
    }

    h1 {
        font-family: 'Roboto', sans-serif;
        text-align: center;
        position: relative;
        padding-left: 2rem;

        &::before{
            content: open-quote;
            font-size: 5rem;
            color: black;
            position: absolute;
            left: -1rem;
            top: -2rem;
        }
        
        &::after{
            content: close-quote;
            font-size: 5rem;
            color: black;
            position: absolute;
            right: -2rem;
        }
    }

    p {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 1.4rem;
        text-align: center;
        color: #666;
        margin-top: 4rem;
    }
`;

const Frase = ({frase}) => {
    return (
        <ContenedorFrase>
            <h1>{frase.quote}</h1>
            <p>- {frase.author}</p>
        </ContenedorFrase>
    );
}
 
export default Frase;