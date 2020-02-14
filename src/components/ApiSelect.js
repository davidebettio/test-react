import React, { useRef } from 'react';
import PropTypes from 'prop-types';

function ApiSelect(props) {
  const selectRef = useRef();
  const {options} = props;
  const listOptions = options.map((option, i) =>
    <option key={i} value={i}>{option}</option>
  );

  function handleChange(e) {
    props.onChange(e.target.value);
  }
  
  return (
    <select ref={selectRef} onChange={handleChange}>
      {listOptions}
    </select>
  );
}

ApiSelect.defaultProps = {
  options: []
};

ApiSelect.propTypes = {
  options: PropTypes.array,
  onChange: PropTypes.func.isRequired,
};

export default ApiSelect;