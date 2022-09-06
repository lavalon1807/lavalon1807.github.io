import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../header/Header';
import DataProp from './DataProp';
import ReviewLoader from './ReviewsLoader';
import NeiborhoodLoad from './neiborhood/NeiborhoodLoad';
import Comments from './Comments';
import Map from '../Map/Map';
import PicturePlace from './picturePlaces/PicturePlace';
import {ComfortGoods} from './ComfortGoods';
import {takeComments, fetchOffer, fetchNearby} from '../redux/api-create';
import {LoadData} from '../LoadData';
import {NoAuth} from './picturePlaces/noAuthComments';

const Property = ({massChooseCards, activeCity}) => {
  const {loadComments} = useSelector((state) => state.COMMENT);
  const {authorizationStatus} = useSelector((state) => state.LOAD_AUTH);
  const {isLoaded, oneOffer, sentence} = useSelector((state) => state.OFFER);

  const params = useParams();
  const id = Number(params.id);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(takeComments(id));
    dispatch(fetchOffer(id));
    dispatch(fetchNearby(id));
  }, [id]);

  if (!isLoaded) {
    return (
      <LoadData />
    );
  }

  const chiefHost = !oneOffer.host.isPro ? `visually-hidden` : ``;
  const chiefHostMain = oneOffer.host.isPro ? `property__avatar-wrapper--pro` : ``;
  const commentUser = loadComments[id] || [];

  return (
    <>
      <div style={{display: `none`}}>
        <svg xmlns="http://www.w3.org/2000/svg"><symbol id="icon-arrow-select" viewBox="0 0 7 4"><path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"></path></symbol><symbol id="icon-bookmark" viewBox="0 0 17 18"><path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"></path></symbol><symbol id="icon-star" viewBox="0 0 13 12"><path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"></path></symbol></svg>
      </div>

      <div className="page">

        <Header />

        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">

                {/* загружаем изображения */}
                <PicturePlace items={oneOffer} />


              </div>
            </div>
            <div className="property__container container">
              <div className="property__wrapper">


                <DataProp items={oneOffer} />


                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <ul className="property__inside-list">


                    <ComfortGoods item={oneOffer}/>


                  </ul>
                </div>
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div className={`property__avatar-wrapper user__avatar-wrapper ${chiefHostMain}`}>
                      <img className="property__avatar user__avatar" src={oneOffer.host.avatarUrl} width="74" height="74" alt="Host avatar" />
                    </div>
                    <span className="property__user-name">
                      {oneOffer.host.name}
                    </span>
                    <span className={`property__user-status ${chiefHost}`}>
                      Pro
                    </span>
                  </div>
                  <div className="property__description">
                    <p className="property__text">
                      {oneOffer.description}
                    </p>
                  </div>
                </div>
                <section className="property__reviews reviews">
                  <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{commentUser.length}</span></h2>
                  <ul className="reviews__list">

                    {/* Загружаем отзывы */}
                    <ReviewLoader commentsMap={commentUser} />

                  </ul>

                  {authorizationStatus === `AUTH` ? (
                    <Comments />
                  ) : (
                    <NoAuth />
                  )
                  }


                </section>
              </div>
            </div>
            <section className="property__map map" style={{margin: `auto`, maxWidth: `1144px`}}>


              <Map
                massChooseCards={massChooseCards} activeCity={activeCity}
              />


            </section>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title" style={{marginTop: `50px`}}>Other places in the neighbourhood</h2>
              <div className="near-places__list places__list">

                {/* Тут выводим карточки соседи */}
                <NeiborhoodLoad massChooseCards={massChooseCards} sentence={sentence}/>


              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
};

Property.propTypes = {
  massChooseCards: PropTypes.array.isRequired,
  activeCity: PropTypes.string.isRequired,
};

export {Property};
export default Property;
