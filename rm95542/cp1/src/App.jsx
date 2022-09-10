import React from "react"
import { useState, useEffect } from "react"
import MediaAluno from "./components/mediaAluno/MediaAluno"

export default function App() {

    // const objAluno = {
    //     nome: "Joaquim",
    //     rm: 99999,
    //     turma: "1TDSZ"
    // }

    const [aluno, setAluno] = useState({
        nome: "Guilherme",
        rm: 95624,
        turma: "1TDSZ"
    })

    // useEffect(() => {
    //     setAluno(objAluno)
    // }, [])

    const nota1 = 8
    const nota2 = 6
    const nota3 = 7

    // const notas = [nota1, nota2, nota3]

    return (
        <>
            <h1>Resultado prova semestral</h1>

            <div className="divTeste">
                Portal do aluno
                <p>Fiap universidade Paulista</p>
            </div>
            
            <div className="quebraPagina">
                <hr />
                <p>Página do aluno</p>
                <hr />
            </div>

            <MediaAluno
                aluno={aluno}
                nota1={nota1}
                nota2={nota2}
                nota3={nota3}
            />
        </>
    )
}

