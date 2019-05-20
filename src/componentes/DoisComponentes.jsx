import React from 'react'


const CompA = props =>
    <h1>Primeiro diz: {props.valor}</h1>

const CompB = props =>
    <h1>Segundo diz: {props.valor}</h1>

//uma vez que não se está importando por padrão 
export { CompA, CompB }
