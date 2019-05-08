//sem o ReactDom não é possível inserir os componentes na página
import ReactDOM from 'react-dom'
import React from 'react'

const elemento = document.getElementById('root')

//uma vez que a div cujo id = root é obtida, utiliza o ReactDOM para inserir conteúdo na página
//ReactDOM.render('Olá React', elemento)

ReactDOM.render(<h1>Olá React</h1>, elemento)