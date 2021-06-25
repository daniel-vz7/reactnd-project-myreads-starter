import React from 'react';
import PropTypes from 'prop-types';

const ShelfChanger = ({ value, onChange, bookId}) => {
  return (
    <select
      value={value}
      onChange={(event) => {
        event.persist();
        onChange(bookId, event.target.value);
      }}
      >
      <option value="move" disabled>Move to...</option>
      <option value="currentlyReading">Currently Reading</option>
      <option value="wantToRead">Want to Read</option>
      <option value="read">Read</option>
      <option value="none" disabled>None</option>
    </select>
  )
}

ShelfChanger.propTypes = {
  value: PropTypes.string.isRequired,
  bookId: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default ShelfChanger;