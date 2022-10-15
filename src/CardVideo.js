import React from "react"
import InfosUsuario from "./InfosUsuario"



 export default function CardVideo() {

    const titulo = "Titulo do video"

    function reproduzVideo() {
        alert("O vídeo está sendo reproduzido");
      }

    return(
        <div className="box-pagina-principal" onClick={reproduzVideo}>
            <img className="img-card" src="https://picsum.photos/400/400?a=2" alt="" />
            <h4>{titulo}</h4>          
            <InfosUsuario/>            
        </div>
    )
}