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
//o nome do componente pode ser diferente do nome do arquivo
// import PrimeiroComponente from './componentes/PrimeiroComponente'
// import ReactDOM from 'react-dom'
// import React from 'react'

// const elemento = document.getElementById('root')

// ReactDOM.render(
//     <div>
//         <PrimeiroComponente valor='Rafaela'></PrimeiroComponente>   
//     </div>
//     , elemento)

//---------------------------------------------------------------------------------------------------------------------------------------------
// import ReactDOM from 'react-dom'
// import React from 'react'

//como não utilizou-se o export default, na importação, os componentes devem vir entre {} (operador de desestruturação)
// import { CompA, CompB as B} from './componentes/DoisComponentes'

// const elemento = document.getElementById('root')

// ReactDOM.render(
//     <div>
//         <CompA valor="Componente A"></CompA>
//         <B valor="Componente B"></B>
//     </div>
// , elemento)

//Quando um componente é exportado usando export default, pode-se escolher qualquer nome no momento da importação
//Quando utiliza-se somente export, na importação tem-se que usar exatamente os mesmos nomes. No entanto, pode-se utilizar alias.

//---------------------------------------------------------------------------------------------------------------------------------------------
// import ReactDOM from 'react-dom'
// import React from 'react'
// import MultiElementos from './componentes/MultiElementos'

// const elemento = document.getElementById('root')

// ReactDOM.render(
//     <div>
//         <MultiElementos></MultiElementos>
//     </div>
// , elemento)

//---------------------------------------------------------------------------------------------------------------------------------------------
//Uma aplicação em react, nada mais é que uma árvore de componentes: tem-se um componente inicial e, a partir dele, incocam-se outros componentes e assim sucessivamente 
//e a aplicação será composta com todos os componentes colaborando entre si
// import ReactDOM from 'react-dom'
// import React from 'react'
// import FamiliaSilva from './componentes/FamiliaSilva'

// const elemento = document.getElementById('root')

// ReactDOM.render(
//     <div>
//         <FamiliaSilva></FamiliaSilva>
//     </div>
// , elemento)

//---------------------------------------------------------------------------------------------------------------------------------------------
import ReactDOM from 'react-dom'
import React from 'react'
import Familia from './componentes/Familia'
import Membro from './componentes/Membro'

const elemento = document.getElementById('root')

ReactDOM.render(
    <div>
        <Familia>
            <Membro nome="Rafaela" sobrenome=" Polizel"></Membro>
            <Membro nome="Rosa" sobrenome=" Polizel"></Membro>
            <Membro nome="Clarice" sobrenome=" Polizel"></Membro>
            <Membro nome="Antonio" sobrenome=" Polizel"></Membro>
        </Familia>
    </div>
, elemento)