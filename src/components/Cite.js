import React from 'react';

const Cite = ({cite, deleteCite}) => (
    <div className="media mt-3">
        <div className="media-body">
            <h3 className="mt-0">{cite.name}</h3>
            <p className="card-text"><span>Nombre doctor: </span>{cite.doctorName}</p>
            <p className="card-text"><span>Fecha: </span>{cite.date}</p>
            <p className="card-text"><span>Hora: </span>{cite.hour}</p>
            <p className="card-text"><span>Síntomas: </span></p>
            <p className="card-text">{cite.sympthom}</p>

            <button className="btn btn-danger" onClick={() => deleteCite(cite.id)}>Borrar &times;</button>
        </div>
        <hr></hr>
    </div>
)

export default Cite