import React from 'react';

const ComfortGoods = (props) => {
  const {goods} = props.item;

  return (
    goods.map((good)=>
      <li key={good.toString()} className="property__inside-item">
        {good}
      </li>
    )
  );
};

export {ComfortGoods};
