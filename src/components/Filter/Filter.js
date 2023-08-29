import React from 'react';

export const Filter = props => {
  return (
    <>
      <h3>Find contacts by name</h3>
      <label>
        <input
          type="text"
          name="name"
          onChange={evt => props.filterFunc(evt.target.value)}
          placeholder="Enter name here....."
        />
      </label>
    </>
  );
};
