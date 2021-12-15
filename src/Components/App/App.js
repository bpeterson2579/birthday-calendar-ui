import './App.css';
import React, {Component} from 'react';
import { months } from '../../months_data';
import Birthdays from '../Birthdays/Birthdays';
import Form from '../Form/Form';

class App extends Component {
  constructor() {
    super();
    this.state = {
      months: months,
      birthdays: [],
    };
  }

  componentDidMount = () => {
    return fetch('http://localhost:3001/api/v1/birthdays')
      .then(response => response.json())
      .then(data => this.setState({birthdays: data}))
      .catch(error => console.log(error))
  }

  addBirthday = (newBday) => {
    this.setState({birthdays: [...this.state.birthdays, newBday]});
  }

  render() {
    return (
      <div className="App">
        <h1>Birthdays</h1>
        <Form addBirthday={this.addBirthday} />
        <Birthdays months={this.state.months} birthdays={this.state.birthdays}/>
      </div>
    )
  };
}

export default App;
