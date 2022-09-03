import React from "react";



export default function MediaAluno(props){
    return(
        <div>
            <h2>Componente MÉDIA-ALUNO</h2>
            <div>
                <p><strong>Aluno: {props.aluno}</strong></p>
                <p><strong>Turma: {props.nota1}</strong></p>
                <p><strong>RM: {props.nota2}</strong></p>
                <p><strong>MÉDIA: {props.nota3}</strong></p>
            </div>
        </div>
    )
}