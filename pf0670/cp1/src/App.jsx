import React from "react"
import { useState, useEffect } from "react"

export default function App() {

    // const objAluno = {
    //     nome: "Joaquim",
    //     rm: 99999,
    //     turma: "1TDSZ"
    // }

    const [aluno, setAluno] = useState({
        nome: "Joaquim",
        rm: 99999,
        turma: "1TDSZ"
    })

    // useEffect(() => {
    //     setAluno(objAluno)
    // }, [])

    const nota1 = 0
    const nota2 = 0
    const nota3 = 0

    // const notas = [nota1, nota2, nota3]

    return (
        <>
            <h1>CP1 de RWD 1º SEMESTRE</h1>
        </>
    )
}

// 2 – No App.jsx crie a seguinte estrutura. ( 3 Pontos)
// a) Crie um fragmento.
// b) Um elemento h1 com o texto “CP1 de RWD 1º SEMESTRE”.
// c) Declare um useState de nome aluno que recebe um objeto do tipo aluno com os
// seguintes atributos:
// 1 – nome = Joaquim
// 2 – rm = 99999
// 3 – turma = 1TDSZ
// d) Três constantes declaradas como nota1, nota2 e nota3.