import './App.css';
import React, {Component} from 'react';
import { months } from '../../months_data';
import Birthdays from '../Birthdays/Birthdays';
import Form from '../Form/Form';

class App extends Component {
  constructor() {
    super()
    this.state = {months};
  }

  render() {
    return (
      <div className="App">
        <h1>Birthdays</h1>
        <Form />
        <Birthdays months={months}/>
      </div>
    )
  };
}

export default App;
