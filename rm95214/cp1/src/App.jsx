import React, { useState } from 'react';
import { useEffect } from 'react';

export default function App(){
    
    //const objAluno = {
        //nome: "Joaquim",
        //rm : 999999,
        //turma : "1tdsz"
        //}
    const nota1 = 0
    const nota2 = 5
    const nota3 = 7

    const [aluno, setAluno] = useState({
        nome: "Joaquim",
        rm : 999999,
        turma : "1tdsz"
    })

    useEffect(()=> {
        setAluno(objAluno)
    }, [])
  
    
    return(
        <>
            <h1>CP1 RWD 1° SEMESTRE</h1>
        </>
    )
}