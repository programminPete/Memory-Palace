import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import SearchBar from '../../components/InputBar/SearchBar';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      //store each node in here as an object with these attributes
      nodes: [],
      id: 0,
      nodeNum: 0,
      dateDescription: '',
      date: '',
      locX: 0,
      locY: 0,
      monthWord: '',
      dayWord: '',
      baseYearWord: '',
      endYearWord: '',
      monthImgArray: [],
      dayImgArray: [],
      baseYearImgArray: [],
      endYearImgArray: [],
    }

    this.handleWordSelect = this.handleWordSelect.bind(this);
    // this.handleConfirmInput = this.handleConfirmInput.bind(this);
    this.handleConfirmDropdownWords = this.handleConfirmDropdownWords.bind(this);
  }

  handleWordSelect(e){
    e.preventDefault();
    this.setState({wordVal: e.target.value});
  }

  handleSearchTermSubmit(e){
    e.preventDefault();
    this.props.onSearchTermSubmit();
  }

  handleConfirmDropdownWords(e){
    let indexIncrement = this.state.nodeNum + 1;
    const node = {
      day:0,
      month:0,
      baseYear:0,
      endYear:0,
    }

    //update data
    this.state.nodes.push(node);

    //push nodes to database
    fetch('', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(this.state.node[this.state.nodeNum])
    }).then((res)=>{
      console.log(res)
    }).catch((err)=>{
      console.log(err)
    })

    this.setState({
      nodes: this.state.nodes,
      nodeNum: indexIncrement
    })
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <SearchBar
          searchTerm={this.state.searchTerm}
          onSearchTermSubmit={this.handleSearchTermSubmit}/>
      </div>
    );
  }
}

export default App;
