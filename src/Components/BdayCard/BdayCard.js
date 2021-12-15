import './BdayCard.css';
import React from 'react';

const BdayCard = ({name, id, birthdays}) => {

  const birthday = birthdays.filter(birthday => {
    return birthday.month === id;
  }).map(bday => {
    return(
      <div className='birthdays'>
        <p>{bday.name}: {bday.month}/{bday.day}</p>
        <button className='delete'>X</button>
      </div>
    )
  })

  return (
    <section className='bday-card'>
      <h1>{name}</h1>
      {birthday}
    </section>
  )
}

export default BdayCard;