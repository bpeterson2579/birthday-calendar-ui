import './BdayCard.css';
import React from 'react';

const BdayCard = (month) => {
  return (
    <section className='bday-card'>
      <h1>{month.name}</h1>
    </section>
  )
}

export default BdayCard;