import React from "react";


function BigCard(props) {
    return (
        <div className="container my-5">
            <div className="col-md-12 contenedor-bienvenida p-3 bg-light">
                <h1 className="parrafo-titulo display-4 mt-5 lh-1 fw-medium">{props.titulo}</h1>
                <p className="parrafo-texto fs-5">{props.texto}</p>
                <button type="button" class="btn btn-primary mt-2 mb-5 fs-4">{props.boton}</button>
            </div>
        </div>
    )
}

export default BigCard