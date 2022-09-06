import React from 'react';
import {useSelector} from 'react-redux';
import ChooseCity from './ChooseCity';

const LoadCity = ({onClick}) => {
  const {city} = useSelector(state => state.OFFER);

  return(
    city.map((item) => <ChooseCity
      key={item}
      items={item}
      onClick={onClick}
      />
    )
  )
}

export default LoadCity;
