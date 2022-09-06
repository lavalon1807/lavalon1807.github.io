import React from 'react';
import {useSelector} from 'react-redux';
import PropTypes from 'prop-types';

const ADD_POST = 'ADD_POST'
const ChooseCity = ({items, onClick}) => {
  const {currentCity} = useSelector(state => state.CITY);

  const classChoose = currentCity === items ? `tabs__item--active` : ''

  return(
    <>
      <li className="locations__item" onClick={onClick}>
        <a className={`locations__item-link tabs__item ${classChoose}`}>
          <span>{items}</span>
        </a>
      </li>
    </>
  )
};

ChooseCity.propTypes = {
  items: PropTypes.string.isRequired,
};

export default ChooseCity;
