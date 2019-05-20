import React from 'react'

//Elementos html tem propriedades que são utilizadas para personalizá-lo ou para passar alguma informação para que o elemento seja renderizado corretamente
//Também é possível ter propriedades dentro de componentes personalizados, que são recebidas através do parâmetro props
export default (props) => <h1>{props.valor}</h1>


//arrow function
//export default () => <h1>Primeiro Componente!</h1>


//função anônima
// export default function(){
//     return <h1>Primeiro Componente!</h1>
// }


// function primeiro(){
//     return <h1>Primeiro Componente!</h1>
// }

// export default primeiro