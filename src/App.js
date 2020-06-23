import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Frase from './components/Frase';
import axios from 'axios';

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 2rem;
  flex-direction: column;
`;

const Boton = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #FFF;
  margin-top: 1rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  opacity: 0.65;
  border: 2px solid black;
  transition: background-size .8s ease;

  :hover {
    cursor: pointer;
    opacity: 0.8;
    background-size: 400px;
  }
`;

function App() {

  // State de frases
  const [ frase, guardarFrase ] = useState({});

  const consultarAPI2 = () => {
    const api = fetch('http://quotes.stormconsultancy.co.uk/random.json');
    const frase = api.then( respuesta => respuesta.json());
    frase.then(resultado => console.log(resultado));
  }

  const consultarAPI = async () => {
    const api = await axios.get('http://quotes.stormconsultancy.co.uk/random.json')
      .then(response => {
        console.log(response)
        guardarFrase(response.data);
      });
  }

  // Cargar frase por defecto
  useEffect( () => {
    consultarAPI()
  }, []);

  return (
    <Contenedor>
      <Frase
        frase={frase}
      >
      </Frase>

      <Boton
        onClick={ consultarAPI } // Se llama enseguida (al momento de cargarse)
        // onClick={ () => consultarAPI() } Espera el onClick para llamarse
      >
        Quote
      </Boton>
    </Contenedor>
  );
}

export default App;
