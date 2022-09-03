import React from "react"

export default function MediaAluno(props) {
    return (
        <div>
            <h2>Componente MÉDIA-ALUNO</h2>
            <div>
                <p><strong>Aluno : </strong>{props.aluno.nome}</p>
                <p><strong>RM : </strong>{props.aluno.rm}</p>
                <p><strong>Turma : </strong>{props.aluno.turma}</p>
                <p><strong>MÉDIA : </strong>{props.nota1}</p>
            </div>
        </div>
    )
}