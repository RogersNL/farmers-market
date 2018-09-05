import React from 'react';
import PropTypes from 'prop-types';

function Produce(props){
  return(
    <div>
      <h3>{props.month}</h3>
      <ul>{props.selection.map((produce, index) =>
        <li key={index}>{produce}</li>
      )}</ul>

    </div>
  );
}

Produce.propTypes = {
  month: PropTypes.string.isRequired,
  selection: PropTypes.arrayOf(PropTypes.string.isRequired)
};

export default Produce;
