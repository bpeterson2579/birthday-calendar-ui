import './Form.css';
import React, {Component} from 'react';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      month: '',
      day: '',
    };
  }

  grabValues = (event) => {
    this.setState({[event.target.name]: [event.target.value]})
  }

  enterBday = (event) => {
    event.preventDefault();
    const newBday = {
      id: Date.now(),
      ...this.state
    }
    this.props.addBirthday(newBday)
  }

  render() {
    return(
      <form className='input-list'>
        <div className='input-style'>
          <label for='name'>Name:</label>
          <input type='text' name='name' value={this.state.name} onChange={event => this.grabValues(event)} required />
        </div>
        <div className='input-style'>
          <label for='month'>Month:</label>
          <input type='number' name='month' value={this.state.month} onChange={event => this.grabValues(event)} required />
        </div>
        <div className='input-style'>
          <label for='day'>Day:</label>
          <input type='number' name='day' value={this.state.day} onChange={event => this.grabValues(event)} required />
        </div>
        <button className='submit' onClick={event => this.enterBday(event)}>Add this Birthday!</button>
      </form>
    )
  }
}

export default Form;