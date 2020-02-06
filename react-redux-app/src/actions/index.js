import axios from 'axios'

export const FETCH_DATA = "FETCH_DATA"
export const UPDATE_CRYPTO = "UPDATE_CRYPTO"
export const SET_ERROR = "SET_ERROR"

export getData = () => dispatch => {
    dispatch({ type: FETCH_DATA});
    setTimeout(() => {
        axios 
        .get( 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true')
        .then(res => {
            console.log("Response: ", res)
            dispatch({ type: UPDATE_CRYPTO, payload: res.data})
        })
        .catch(err => {
            console.log("Error fetching data from API Error: ", err)
dispatch({ type: SET_ERROR, payload: "Error fetching data from API"})
        })
    }, 2000)
}