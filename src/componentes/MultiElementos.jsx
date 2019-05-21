import React from 'react'

//solução mais usual
// export default props => 
//     <div>
//         <h1>Parte 1</h1>
//         <h2>Parte 2</h2>
//     </div>

//não cria nenhuma div
// export default props => 
//     <React.Fragment>
//         <h1>Parte 1</h1>
//         <h2>Parte 2</h2>
//     </React.Fragment>


//array de elementos
export default props => [    
    <h1>Parte 1</h1>,
    <h2>Parte 2</h2>
]