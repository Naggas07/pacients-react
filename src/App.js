import React, {Component} from 'react';
import './bootstrap.min.css'
import Header from './components/Header'
import NewCite from './components/new-cite'
import ListCites from './components/listCites'


class App extends Component{
  state = { 
    cites: []
  }

  // aplication ready 
  componentDidMount()  {
    const citesLS = localStorage.getItem('cites')
    if(citesLS){
      this.setState({
        cites: JSON.parse(citesLS)
      })
    } 
  }

  // when eliminate and add new cite 

  componentDidUpdate() {
    localStorage.setItem('cites', JSON.stringify(this.state.cites))
  }

  createNewCite = data => {
    const cites = [...this.state.cites, data]
    this.setState({
      cites
    })
  }

  deleteCite = id => {
    const actualCites = [...this.state.cites]
    const cites = actualCites.filter(cite => cite.id !== id)

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
          <div className="mt-5 col-md-10 mx-auto">
            <ListCites  cites={this.state.cites} deleteCite={this.deleteCite}/>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
