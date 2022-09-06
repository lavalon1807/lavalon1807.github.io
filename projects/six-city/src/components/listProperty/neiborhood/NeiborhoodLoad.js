import React from 'react';
import Neiborhood from './Neiborhood';

const NeiborhoodLoad = (props) => {
  const {sentence} = props;

  return (
    sentence.map((it) =>
      <Neiborhood
        key={it.id}
        items={it}
      />)
  );
};

export default NeiborhoodLoad;
