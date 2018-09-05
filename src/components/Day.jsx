import React from 'react';
import PropTypes from 'prop-types';

function Day(props){
  return(
    <div className="card">
      <h3 className="card-title">{props.day}</h3>
      <div className="card-body">
        <h4>{props.location}</h4>
        <p>{props.hours}</p>
        <p>Booth {props.booth}</p>
      </div>
      <style jsx>{`
        h3 {
          font-size: 40px;
        }
        .card {
          background-color: #4db9ff;
        }
        .card:hover {
          text-align:right;
          background-color: #d0cf58;
          margin-bottom: 30px;
        }

      `}</style>
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
