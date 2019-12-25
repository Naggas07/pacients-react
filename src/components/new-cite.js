import React, { Component } from 'react';
import uuid from 'uuid';


const initialState = {
    cite:{
        name: '',
        doctorName: '',
        date: '',
        hour: '',
        sympthom: ''
    },
    error: false
}


export default class NewCite extends Component {
    state = { ...initialState }

    handleChange = e => {
        this.setState({
            cite:{
                ...this.state.cite,
                [e.target.name]: e.target.value
            }
        })
    }

    handleSubmit = e => {
        e.preventDefault()

        const { name, doctorName, date, hour, sympthom } = this.state.cite

        if( name === '' || doctorName === '' || date === '' || hour === '' || sympthom === '') {
            this.setState({
                error: true
            })

            return
        }

        // generate objetc to parent 

        const newCite = { ...this.state.cite}
        newCite.id = uuid()

        this.props.createNewCite(newCite)

        // reset state when ok 

        this.setState({
            ...initialState
        })

    }

    render() {

        // extract state value 
        const {error} = this.state

    
        return (
            <div className=" card mt-5 py-5">
                <div className="card-body">
                    <h2 className="card-tittle text-center mb-5">Rellena el formulario para crear una nueva cita</h2>
                    { error ? <div className="alert alert-danger mt-2 mb-3 text-center">Todos los campos son obligatorios</div> : null }
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Nombre</label>
                            <div className="col-sm-8 col-lg-10">
                                <input type="text" className="form-control" placeholder="Nombre del paciente" name="name" onChange={this.handleChange} value={this.state.cite.name} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Nombre Doctor</label>
                            <div className="col-sm-8 col-lg-10">
                                <input type="text" className="form-control" placeholder="Nombre del Doctor" name="doctorName" onChange={this.handleChange} value={this.state.cite.doctorName}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
                            <div className="col-sm-8 col-lg-4">
                                <input type="date" className="form-control"  name="date" onChange={this.handleChange} value={this.state.cite.date}/>
                            </div>
                            <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
                            <div className="col-sm-8 col-lg-4">
                                <input type="time" className="form-control"  name="hour" onChange={this.handleChange} value={this.state.cite.hour}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Síntomas</label>
                            <div className="col-sm-8 col-lg-10">
                                <textarea className="form-control" name="sympthom" placeholder="describe los síntomas" onChange={this.handleChange} value={this.state.cite.sympthom}></textarea>
                            </div>
                        </div>
                        <button className="btn btn-success btn-block py-3 mt-2">Pedir cita</button>
                    </form>
                </div>
            </div>
        )
    }
}
