import React, { useState } from 'react';
import { useEffect } from 'react';
import MediaAluno from './componentes/mediaAluno/MediaAluno';

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

    //useEffect(()=> {
        //setAluno(objAluno)
    //}, [])
  
    
    return(
        <>

        <div class="divteste">
            ESCOPO DA DIV
            <p>ESCOPO DO P</p>
        </div>


       <div className='quebraPagina'>
       <hr/>
        <p>Quebra de página</p>
        <hr/>
       </div>

            <h1>CP1 RWD 1° SEMESTRE</h1>
            <MediaAluno
            aluno = {aluno}
            nota = {nota1}
            nota2 = {nota2}
            nota3 = {nota3}/>
        </>
    )
}