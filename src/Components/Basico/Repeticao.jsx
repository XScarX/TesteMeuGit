import React from 'react'
import Produtos from '../data/produtos'


function getProdutos() {
    return Produtos.map(prod => {
        return <li key={prod.id}>
            {prod.id} - {prod.nome} - R$ {prod.preco}</li>
    })
}

export default props => {
    return (
        <div>
            <h2>Repetição</h2>
            <ul>
                {getProdutos()}
            </ul>
        </div>
    )
}