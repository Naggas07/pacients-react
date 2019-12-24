import React, { Component } from 'react'

export default class NewCite extends Component {
    state = {

    }
    render() {
        return (
            <div className=" card mt-5 py-5">
                <div className="card-body">
                    <h2 className="card-tittle text-center mb-5">Rellena el formulario para crear una nueva cita</h2>
                    <form>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Nombre</label>
                            <div className="col-sm-8 col-lg-10">
                                <input type="text" className="form-control" placeholder="Nombre del paciente" name="name" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Nombre Doctor</label>
                            <div className="col-sm-8 col-lg-10">
                                <input type="text" className="form-control" placeholder="Nombre del Doctor" name="doctorName" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
                            <div className="col-sm-8 col-lg-4">
                                <input type="date" className="form-control"  name="date" />
                            </div>
                            <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
                            <div className="col-sm-8 col-lg-4">
                                <input type="time" className="form-control"  name="hour" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Síntomas</label>
                            <div className="col-sm-8 col-lg-10">
                                <textarea className="form-control" name="sympthom" placeholder="describe los síntomas"></textarea>
                            </div>
                        </div>
                        <input type="sumbit" className="btn btn-success btn-block py-3 mt-2" value="Crear cita"></input>
                    </form>
                </div>
            </div>
        )
    }
}
