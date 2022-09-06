import React, { useState } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import {Provider, useSelector, useDispatch} from 'react-redux';
import Main from './components/Main';
import Login from './components/Sign-in';
import Favorites from './components/favorites/Favorites';
import Property from './components/listProperty/Property';
import Error from './components/Error'
import {fetchOfferList, fetchFavorites, sendFavorites} from './components/redux/api-create'
import {LoadData} from './components/LoadData'
import PrivateRoute from './components/private-route'
import {actionCity} from './components/redux/choose-city-process/action-city';

const AppRoute = {
  ROOT: `/`
};

const App = (props) => {

  const {currentCity} = useSelector((state) => state.CITY);
  const {data, isDataLoaded} = useSelector((state) => state.OFFER);
  const {authorizationStatus} = useSelector((state) => state.LOAD_AUTH);

  const [activeCity, setActiveCity] = useState('Paris');
  const dispatch = useDispatch();

  if(!isDataLoaded) {
    dispatch(fetchOfferList())
  }

  if(!isDataLoaded) {
    return (
      <LoadData />
    )
  }

  dispatch(fetchFavorites())

  let massChooseCards = []
  data.forEach((item) => {
    currentCity === item.city.name ? massChooseCards.push(item) : null
  })

  const click = (e) => {
    const cityRich = e.currentTarget.innerText
    dispatch(actionCity(cityRich))
    setActiveCity(e.currentTarget.innerText)
  }

  return(
    <HashRouter>
      <Switch>
        <Route path={AppRoute.ROOT} exact>
          <Main
            toggle={click}
            currentcity={currentCity}
            massChooseCards={massChooseCards}
            activeCity={activeCity}
          />
        </Route>
        <Route path='/login' exact><Login /></Route>
        <Route path='/property/:id' exact>
          <Property
            massChooseCards={massChooseCards}
            activeCity={activeCity}
          />
        </Route>
        <PrivateRoute path='/favorites' exact component={Favorites}></PrivateRoute>
        <Route path ='/error' exact><Error /></Route>
        <Route><Error /></Route>
      </Switch>
    </HashRouter>
  )
};

export default App;
