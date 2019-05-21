import React from 'react'
//como o componente FamiliaSilva precisará do componente Membro, é preciso importá-lo
import Membro from './Membro'

export default props =>
    <div>
        {/* quando você faz referência a um componente, você cria uma instância daquele componente. Em JS, é possível instanciar uma função por meio da função construtora 
        (o que vai acontecer neste caso "por baixo dos panos") */}
        <Membro nome="Rafael" sobrenome="Silva"></Membro>
        <Membro nome="Ana " sobrenome="Silva"></Membro>
        <Membro nome="Gabriela" sobrenome="Silva"></Membro>
    </div>