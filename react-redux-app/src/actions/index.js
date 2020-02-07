import axios from 'axios';

export const FETCH_DATA = 'FETCH_DATA';
export const UPDATE_CRYPTO = 'UPDATE_CRYPTO';
export const SET_ERROR = 'SET_ERROR';

export const getData = () => dispatch => {
  dispatch({ type: FETCH_DATA });
  axios
    .get(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
    )
    .then(res => {
      console.log('Response: ', res.data);
      dispatch({ type: UPDATE_CRYPTO, payload: res.data });
    })
    .catch(err => {
      console.log('Error fetching data from API Error: ', err);
      dispatch({ type: SET_ERROR, payload: 'Error fetching data from API' });
    });
};
