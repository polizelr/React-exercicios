// //sem o ReactDom não é possível inserir os componentes na página
// import ReactDOM from 'react-dom'
// import React from 'react'

// const elemento = document.getElementById('root')

// //uma vez que a div cujo id = root é obtida, utiliza o ReactDOM para inserir conteúdo na página
// //ReactDOM.render('Olá React', elemento)

// ReactDOM.render(<h1>Olá React</h1>, elemento)





//manipular a DOM de forma manual -------------------------------------------------------------------------------------------------------------
// import ReactDOM from 'react-dom'

// const lista = document.createElement('ul')

// let item = document.createElement('li')
// let texto = document.createTextNode('Pedro')
// item.appendChild(texto)
// lista.appendChild(item)

// item = document.createElement('li')
// texto = document.createTextNode('Ana')
// item.appendChild(texto)
// lista.appendChild(item)

// item = document.createElement('li')
// texto = document.createTextNode('Maria')
// item.appendChild(texto)
// lista.appendChild(item)

// const elemento = document.getElementById('root')
// elemento.appendChild(lista)


//com JSX ------------------------------------------------------------------------------------------------------------------------------------
// import ReactDOM from 'react-dom'
// import React from 'react'

// const element = document.getElementById('root')

// ReactDOM.render(
//     <ul>
//         <li>Pedro</li>
//         <li>Ana</li>
//         <li>Maria</li>
//     </ul>
//     , element)

//Quando tem-se uma Single Page Aplication tem-se uma única página na aplicação (public -> index.html). Como tem-se apenas uma única página,
//todo conteúdo (inclusive o html) gerado será a partir do JS. Utilizando o JSX, o conteúdo é gerado de forma mais simples, sem necessariamente precisar interagir com métodos e mais métodos para manipular a DOM



//---------------------------------------------------------------------------------------------------------------------------------------------
import PrimeiroComponente from './componentes/PrimeiroComponente'
import ReactDOM from 'react-dom'
import React from 'react'

const elemento = document.getElementById('root')

ReactDOM.render(
    <div>
        <PrimeiroComponente valor='Rafaela'></PrimeiroComponente>   
    </div>
    , elemento)

