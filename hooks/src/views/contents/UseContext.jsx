import './UseContext.css'
import React, { UseContext } from 'react'

import { AppContexto } from '../../data/Store'

const UseContext = props => {
    const{contextoNome, setContextoNome} = useContext(AppContexto)
    const{contextoSenha, setContextoSenha} = useContext(AppContexto)

    return (
        <div>
            <div classname="titulo">
                <h1>UseContext</h1>
                <h2>Aceita um objeto de contexto e retorna o valor atual do contexto</h2>
            </div>

            <div className="conteudo">
                <label className="campo"> Acesso encapsulado ao contexto (Store)</label>
                <p className="mensagem">Nome: {contextoNome}</p>
                <p className="mensagem">Senha: {contextoNome}</p>
            </div>
        </div>
    )
}
export default UseContext 