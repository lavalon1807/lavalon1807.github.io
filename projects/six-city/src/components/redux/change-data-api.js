import {addFavorites} from './favorite-process/action-favorite';
import {loadOffer, loadOneOffer, loadNearby} from './load-offer-process/action-create-offer';
import {loadComments} from './comments-process/action-comments';
// с помощью этой функции мы тащим с сервера определенные данные

function camelize(text) {
  text = text.replace(/[-_\s.]+(.)?/g, (_, c) => c ? c.toUpperCase() : ``);
  return text.substr(0, 1).toLowerCase() + text.substr(1);
}

const loadData = (data, favor) => {

  const camelizeNestedKeys = function (dataObj) {
    return JSON.parse(JSON.stringify(dataObj).replace(/("\w+":)/g, function (keys) {
      return camelize(keys);
    }));
  };

  const initial = `Paris`;
  const cities = data.reduce((appacity, currentValue) => {
    return [...appacity, currentValue.city.name];
  }, [initial]);

  const unicumCities = [...new Set(cities)];

  const dataFavorite = data.map((item)=>
    item.id === favor.id ? favor : item
  );

  return loadOffer(unicumCities, camelizeNestedKeys(dataFavorite));
};

const loadDataFavorite = (data) => {

  const camelizeNestedKeys = function (dataObj) {
    return JSON.parse(JSON.stringify(dataObj).replace(/("\w+":)/g, function (keys) {
      return camelize(keys);
    }));
  };

  return addFavorites(camelizeNestedKeys(data));
};

const loadOfferOne = (data) => {

  const camelizeNestedKeys = function (dataObj) {
    return JSON.parse(JSON.stringify(dataObj).replace(/("\w+":)/g, function (keys) {
      return camelize(keys);
    }));
  };

  return loadOneOffer(camelizeNestedKeys(data));
};

const loadOfferNearby = (data) => {
  const camelizeNestedKeys = function (dataObj) {
    return JSON.parse(JSON.stringify(dataObj).replace(/("\w+":)/g, function (keys) {
      return camelize(keys);
    }));
  };

  return loadNearby(camelizeNestedKeys(data));
};

const loadCommentsForReview = (data, id) => {
  const camelizeNestedKeys = function (dataObj) {
    return JSON.parse(JSON.stringify(dataObj).replace(/("\w+":)/g, function (keys) {
      return camelize(keys);
    }));
  };

  return loadComments(camelizeNestedKeys(data), id);
};

export {loadData, loadDataFavorite, loadOfferOne, loadOfferNearby, loadCommentsForReview};
