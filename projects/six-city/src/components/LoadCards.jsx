import React from 'react';
import Card from './Card';

const LoadCards = ({onMouseEnter, onMouseLeave, massChooseCards}) => {

  return(
    massChooseCards.map(item =>
        <Card
        key = {item.id}
        items={item}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}/>
      )
  )
};

export default LoadCards;
