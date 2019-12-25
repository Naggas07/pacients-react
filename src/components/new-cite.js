import React, { Component } from 'react'

export default class NewCite extends Component {
    state = {
        cite:{
            name: '',
            doctorName: '',
            date: '',
            hour: '',
            sympthom: ''
        },
        error: false
    }

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

        
    }

    render() {
        return (
            <div className=" card mt-5 py-5">
                <div className="card-body">
                    <h2 className="card-tittle text-center mb-5">Rellena el formulario para crear una nueva cita</h2>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Nombre</label>
                            <div className="col-sm-8 col-lg-10">
                                <input type="text" className="form-control" placeholder="Nombre del paciente" name="name" onChange={this.handleChange} value={this.state.name} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Nombre Doctor</label>
                            <div className="col-sm-8 col-lg-10">
                                <input type="text" className="form-control" placeholder="Nombre del Doctor" name="doctorName" onChange={this.handleChange} value={this.state.doctorName}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
                            <div className="col-sm-8 col-lg-4">
                                <input type="date" className="form-control"  name="date" onChange={this.handleChange} value={this.state.date}/>
                            </div>
                            <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
                            <div className="col-sm-8 col-lg-4">
                                <input type="time" className="form-control"  name="hour" onChange={this.handleChange} value={this.state.hour}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Síntomas</label>
                            <div className="col-sm-8 col-lg-10">
                                <textarea className="form-control" name="sympthom" placeholder="describe los síntomas" onChange={this.handleChange} value={this.state.sympthom}></textarea>
                            </div>
                        </div>
                        <button className="btn btn-success btn-block py-3 mt-2">Pedir cita</button>
                    </form>
                </div>
            </div>
        )
    }
}
