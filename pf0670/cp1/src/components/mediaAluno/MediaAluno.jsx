import React from "react"
import "./MediaAluno.scss"

export default function MediaAluno(props) {


    const calculaMedia = () => {
        let media = ((props.nota1 + props.nota2 + props.nota3) / 3)

        if (media <= 0) {

            return <><strong>MÉDIA : </strong> <span style={{ color: "#FF0000", fontSize: "2rem" }}>{media}</span></>

        } else if (media > 0 && media < 6) {

            return <><strong>MÉDIA : </strong> <span style={{ color: "#FFA500", fontSize: "2rem" }}>{media}</span></>

        } else if (media >= 6) {

            return <><strong>MÉDIA : </strong> <span style={{ color: "#00FF00", fontSize: "2rem" }}>{media}</span></>

        }

    }

    return (
        <div>
            <h2>Componente MÉDIA-ALUNO</h2>
            <div className="row">
                <p className="col-xm"><strong>Aluno : </strong>{props.aluno.nome}</p>
                <p className="col-xm"><strong>RM : </strong>{props.aluno.rm}</p>
                <p className="col-xm"><strong>Turma : </strong>{props.aluno.turma}</p>
                <p>{calculaMedia()}</p>
            </div>
        </div>
    )
}










// const objEstilo = {
//     color: "#000000",
//     fontSize: "2rem"
// }

// let media = 0

// const calculaMedia = () => {
//     media = ((props.nota1 + props.nota2 + props.nota3) / 3)

//     if (media <= 0) {
//         objEstilo.color = "#FF0000"
//         return objEstilo
//     } else if (media > 0 && media < 6) {
//         objEstilo.color = "#FFA500"
//         return objEstilo
//     } else if (media >= 6) {
//         objEstilo.color = "#00FF00"
//         return objEstilo
//     }

// }



// 4 – No componente MediaAluno deve ser realizada através de uma função a média das
// notas recebidas. De acordo com o resultado deve ser impresso o seguinte: ( 3 Pontos)
// a) Se a média for igual a zero a nota deve ser apresentada com a cor vermelha.
// b) Se a média for maior que zero e menor que 6 a nota deve ser apresentada com a cor
// laranja.
// c) Se a média for maior que 6 a nota deve ser apresentada com a cor verde.
