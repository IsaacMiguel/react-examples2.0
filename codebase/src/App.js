import React, { Component } from 'react';

import logo from './logo.svg';

import './App.css';



var list = ['Karpov', 'Kasparov', 'Botvinnik'];



class Header extends Component{

	render() {

		return(

	    <div className="App-header">

	      <img src={ logo } className="App-logo" alt="logo" />

	      <h2>Welcome to React</h2>

	    </div>

	  )

	}

}



class Body extends Component{

	render() {

		return(

	    <p className="App-intro">

	      { this.props.title }

	    </p>

	  )

	}

}



class Lister extends Component{

	render() {

		const list = this.props.list;

	  const li = list.map((element, index) =>

	    <li key={ index.toString() }>

	      { element }

	      <input type="button" value="eliminar" onClick={ () => this.props.onDel(index) } />

	    </li>

	  )



	  return(

	    <ul>{ li }</ul>

	  )

	}

}



class App extends Component {

	constructor(props) {

    super(props);

    this.state = {

      value: '',

      list: list

    }

    this.handleChange = this.handleChange.bind(this)

    this.handleSubmit = this.handleSubmit.bind(this)

    this.handleDelete = this.handleDelete.bind(this)

    this.onDele = this.onDele.bind(this)

  }



  handleChange(event) {

    this.setState({ value: event.target.value });

  }



  handleSubmit(event) {

    list.push(this.state.value)

    this.setState({ list: list })

    this.setState({ value: '' })

  }



  handleDelete(event) {

    list.pop()

    this.setState({ list: list })

  }



  onDele(index) {

  	list.splice(index, 1)

  	this.setState({ list: list })

  }



  render() {

    return (

      <div className="App">

        <Header />

        <Body title="Ingrese un nombre para la lista . . ."/>

        <Lister list={ this.state.list } onDel={ index => this.onDele(index) } />

        <hr/>

        <label>

          Name:

          <input type="text" value={ this.state.value } onChange={ this.handleChange } />

        </label>

        <input type="button" value="Add" onClick={ this.handleSubmit } />

        <input type="button" value="Del last" onClick={ this.handleDelete } />

      </div>

    );

  }

}



export default App;
