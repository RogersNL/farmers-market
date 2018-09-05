import React from 'react';
import PropTypes from 'prop-types';

function Day(props){
  return(
    <div>
      <h3>{props.day}</h3>
      <p>{props.location}</p>
      <p>{props.hours}</p>
      <p>Booth {props.booth}</p>
    </div>
  );
}

Day.propTypes = {
  day: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  hours: PropTypes.string.isRequired,
  booth: PropTypes.string.isRequired
};
export default Day;
