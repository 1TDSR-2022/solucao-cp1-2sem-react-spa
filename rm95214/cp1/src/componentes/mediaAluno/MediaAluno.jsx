import React from "react";



export default function MediaAluno(props){
    
    let media = 0

    const objEstilo = {
        color:"#000000",
        fontSize: "2rem"
    }

    const calculaMedia = ()=>{
        media = ((props.nota1 + props.nota2 + props.nota3)) / 3

        if (media <= 0){
            objEstilo.color = "#FF0000"
        }else if 
    }
    
    return(
        <div>
            <h2>Componente MÉDIA-ALUNO</h2>
            <div className="row">
                <p className="col-xm"><strong>Aluno: {props.aluno}</strong></p>
                <p className="col-xm"><strong>Turma: {props.nota1}</strong></p>
                <p className="col-xm"><strong>RM: {props.nota2}</strong></p>
                <p className="col-xm"><strong>MÉDIA: {props.nota3}</strong></p>
            </div>
        </div>
    )
}