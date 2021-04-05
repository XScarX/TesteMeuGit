import React from 'react'
import Primeiro from './Components/Basico/Primeiro';
import ComParametro from './Components/Basico/ComParamentro'
import ComFilho from './Components/Basico/ComFilho'
import Card from './Components/Layout/Card'
import './App.css';
import Repeticao from "./Components/Basico/Repeticao"
import Condicional from './Components/Basico/Condicional'

export default props => (

    <div className="App">
        <Card titulo="Exercicio 1">
            Conteudo
        </Card>
        <Card titulo="Exercicio Lista">
            <ComFilho>
                <ul>
                    <li>Ana</li>
                    <li>Carlos</li>
                    <li>Bia</li>
                    <li>Oscar</li>
                </ul>
            </ComFilho>
        </Card>

        <Card titulo="Exercicio 2">
            <Primeiro></Primeiro>
        </Card>

        <Card titulo="Exercicio 3">
            <ComParametro titulo="Esse é Meu Titulo"
                subTitulo="Esse é Meu Sub Titulo" />
        </Card>

        <Card titulo="Exercicio 4">
            <ComParametro titulo="Opa"
                subTitulo="Epa" />
        </Card>

        <Card titulo="Exercicio 5">
            <Repeticao></Repeticao>
        </Card>

        <Card titulo="Exercicio 6">
            <Condicional numero={10}></Condicional>
        </Card>
    </div >

);