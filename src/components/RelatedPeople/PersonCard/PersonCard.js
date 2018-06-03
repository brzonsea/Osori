import React from 'react';
import { Link } from 'react-router-dom';
import './PersonCard.css'

const PersonCard = ({ person }) => {
  return (
    <Link to={`/profile/${person.id}`} style={{ textDecoration: 'none' }}>
      <div className="person-card-container">
        <img src={person.Photo} className="person-picture" />
        <div className="person-name">
          {person.Name}
        </div>
      </div>
    </Link>
  );
}

export default PersonCard;
