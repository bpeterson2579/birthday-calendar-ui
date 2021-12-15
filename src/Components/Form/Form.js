import './Form.css';
import React from 'react';

const Form = () => {
  return(
    <form className='input-list'>
      <div className='input-style'>
        <label for='name'>Name:</label>
        <input type='text' name='name' required />
      </div>
      <div className='input-style'>
        <label for='month'>Month:</label>
        <input type='number' name='month' required />
      </div>
      <div className='input-style'>
        <label for='day'>Day:</label>
        <input type='number' name='day' required />
      </div>
      <button className='submit'>Add this Birthday!</button>
    </form>
  )
}

export default Form;