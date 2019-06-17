import React from 'react';
import SmurfStyle from './css/SmurfStyle';

const Smurf = props => {
  return (
    <SmurfStyle>
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
    </SmurfStyle>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

