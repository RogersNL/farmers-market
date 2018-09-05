import React from 'react';
import PropTypes from 'prop-types';

function Produce(props){
  return(
    <div className = "card">
      <h3 className = "card-title">{props.month}</h3>
      <div className = "card-body">
        <ul>{props.selection.map((produce, index) =>
          <li key={index}>{produce}</li>
        )}</ul>
      </div>
      <style jsx>
        {`h3 {
            font-size: 40px;
          }
          .card {
            background-color: #c8fff9;
            margin-bottom: 30px;
          }
          .card:hover{
            background-color: #05e1fc;
          }
        `}

      </style>
    </div>
  );
}

Produce.propTypes = {
  month: PropTypes.string.isRequired,
  selection: PropTypes.arrayOf(PropTypes.string.isRequired)
};

export default Produce;
