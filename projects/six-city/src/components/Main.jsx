import React, { useCallback, useState } from 'react';
import Header from './header/Header';
import Card from './Card';
import LoadCards from './LoadCards';
import Map from './Map/Map';
import LoadCity from './LoadCity';
import SortingCards from './SortingCards';
import {fetchOfferList} from './redux/api-create';
import { LoadData } from './LoadData';

const Main = (props) => {
  const {
    massChooseCards,
    toggle,
    activeCity,
    currentcity,
  } = props // все берем из App

  const [active, setActive] = useState(null)
  const [isToggleOn, setIsToggleOn] = useState(false)
  const haveOpen = false;
  const initialState = 'Popular'
  const [addSort, setAddSort] = useState(initialState)

  const clickOnSort = isToggleOn ? 'places__options--opened' : ''

  const handleClick = (e) => {
    // setIsToggleOn(!isToggleOn)
    document.querySelector('.places__options').classList.toggle('places__options--opened');
  }

  const onclick = (e) => {
    setAddSort(e.currentTarget.innerText)

    if(e.currentTarget.innerText === 'Top rated first') {
      massChooseCards.sort((a, b) => {
        return a.rating - b.rating
      })
    } else if(e.currentTarget.innerText === 'Price: low to high') {
      massChooseCards.sort((a, b) => {
        return a.price - b.price
      })
    } else if(e.currentTarget.innerText === 'Price: high to low') {
      massChooseCards.sort((a, b) => {
        return b.price - a.price
      })
    } else if (e.currentTarget.innerText === 'Popular') {
      massChooseCards.sort((a, b) => {
        return a.id - b.id
      })
    }
  }

  document.onclick = (e) => {
    if (e.target.className !== 'places__sorting-type'
      && document.querySelector('.places__options') !== null) {
      document.querySelector('.places__options').classList.remove('places__options--opened');
    }
  }

  const handleMouseEnter = useCallback((item) => {
    setActive(item)
  }, [])

  const handleMouseLeave = useCallback((item) => {
    setActive(null)
  }, [])

  const placeCount = massChooseCards.length

  return(
    <>
      <div style={{display: "none"}}>
        <svg xmlns="http://www.w3.org/2000/svg"><symbol id="icon-arrow-select" viewBox="0 0 7 4"><path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"></path></symbol><symbol id="icon-bookmark" viewBox="0 0 17 18"><path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"></path></symbol><symbol id="icon-star" viewBox="0 0 13 12"><path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"></path></symbol></svg>
      </div>

      <div className="page page--gray page--main">

        <Header />

        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <section className="locations container">
              <ul className="locations__list tabs__list">



                <LoadCity onClick={toggle} />



              </ul>
            </section>
          </div>
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{placeCount} places to stay in {currentcity}</b>
                <form className="places__sorting" action="#" method="get">
                  <span className="places__sorting-caption">Sort by</span>
                  <span className="places__sorting-type" tabIndex="0" onClick={handleClick}>
                    {addSort}
                    <svg className="places__sorting-arrow" width="7" height="4">
                      <use xlinkHref="#icon-arrow-select"></use>
                    </svg>
                  </span>
                  <ul className={`places__options places__options--custom ${clickOnSort}`}>


                    <SortingCards addSort={addSort} onclick={onclick}/>


                  </ul>
                </form>
                <div className="cities__places-list places__list tabs__content">



                <LoadCards
                  massChooseCards={massChooseCards}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                />



                </div>
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">


                  <Map
                    active={active}
                    massChooseCards={massChooseCards}
                    activeCity={activeCity}
                    currentcity={currentcity}
                  />


                </section>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default Main;

