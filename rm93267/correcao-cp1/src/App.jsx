import React from "react";
import { useState } from 'react'

export default function App(){

    //const objAluno ={
    //    nome: 'joaquim',
    //    rm: 99999,
    //    turma: '1TDSZ'
    //}

    const[aluno, setAluno] = useState({
        nome: 'joaquim',
        rm: 99999,
        turma: '1TDSZ'
    })

    
    const nota1 = 6
    const nota2 = 8
    const nota3 = 9

    return(
        <>
            <h1>CP1 de RWD 1º Semestre</h1>
        </>
    )
}