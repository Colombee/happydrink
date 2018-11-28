import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import '../css/App.css';
import { establishments } from './establishments/fixtures';
import Establishment from './Establishment';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pseudo  : "Colombe",
            searchStringUser: "",
        }
    }
    handleChange(e){
        this.setState({searchStringUser: e.target.value});
    }
    randomPseudo = () => {
        let randomPseudo = ""
        const possible = "colombe"
        const size = Math.floor(Math.random() * 10) + 5
        for( let i=0; i < size; i++ ){
            randomPseudo += possible.charAt(Math.floor(Math.random() * possible.length))
        }
        this.setState({
            pseudo : randomPseudo
        })
    }
    render() {
        const establishmentFilter = establishments.filter((searchText) => {
        let search = searchText.name + " " + searchText.description;
        return search.toLowerCase().match(this.state.searchStringUser);
    })

    const listEstablishment = establishmentFilter.map( (establishment) => {
      return (
          <Establishment
              key={ establishment.id }
              establishment={ establishment } 
          />
      )
    })
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome "{ this.state.pseudo }" to { this.props.title }</h2>
        </header>
        <div className="App-intro">
            <p> <a onClick={ this.randomPseudo } >Changer le pseudo !</a> </p>
            <div>
                <input
                    type="text"
                    placeholder="search"
                    value={this.state.searchStringUser}
                    onChange={this.handleChange.bind(this)}
                />
            </div>
            <section>
                { listEstablishment }
            </section>
        </div>
      </div>
    );
  }
}

export default App;
