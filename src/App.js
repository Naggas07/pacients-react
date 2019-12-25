import React, {Component} from 'react';
import './bootstrap.min.css'
import Header from './components/Header'
import NewCite from './components/new-cite'


class App extends Component{
  state = { 
    cites: []
  }

  createNewCite = data => {
    const cites = [...this.state.cites, data]
    this.setState({
      cites
    })
  }

  render() {
    return(
      <div className="container"> 
        <Header 
          tittle="Administrador de pacientes"
        />
        <div className="row">
          <div className="col-md-10 mx-auto">
            <NewCite createNewCite={this.createNewCite} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
