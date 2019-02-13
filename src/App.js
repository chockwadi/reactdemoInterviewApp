import React from 'react';
import axios from 'axios';
import TableA from './tableA';
import FormA from './FormA';
import {
  Toolbar,
  } from 'react-md';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      formAShowState:false
    }
  }
  componentDidMount() {
    axios.get('http://localhost:3000/a')
      .then((res) => {
        this.setState({ data: res.data })
      })
  }
  formAShowFunc(){
    this.state.formAShowState === false ?
    this.setState({ formAShowState: true })
    :
    this.setState({ formAShowState: false })
  }
  render() {
    return (
      <React.Fragment>
        <Toolbar
          colored
          title="React Management App"
        />
        {this.state.formAShowState === false ?
        <TableA data={this.state.data} formAShow={() => this.formAShowFunc()}/>
        :
        <FormA formAShow={() => this.formAShowFunc()}/>
        }
        <TableA data={this.state.data} formAShow={() => this.formAShowFunc()}/>
      </React.Fragment>
    )
  }
}
export default App;
