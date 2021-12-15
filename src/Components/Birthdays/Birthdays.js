import './Birthdays.css';
import React from 'react';
import BdayCard from '../BdayCard/BdayCard.js';

const Birthdays = ({months}) => {

  const card = months.map(month => {
    return (
      <BdayCard
        name={month.name}
        id={month.id}
        key={month.id}
      />
    )
  })

  return (
    <section className='birthday-grid'>
      {card}
    </section>
  )
}

export default Birthdays;