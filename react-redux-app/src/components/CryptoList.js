import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getData } from '../actions';

const CryptoList = ({ cryptos }) => {
  useEffect(() => {
    getData();
  }, []);
  console.log(cryptos);
  return (
    <>
      {/* {props.error ? (
        <div className="error">{props.error}</div>
      ) : ( */}
      {cryptos.map(crypto => (
        <div>
          <h3>
            {crypto.id}
          </h3>
          <p>
            ${crypto.current_price}
          </p>

        </div>
      ))}
    </>
  );
};
const mapStateToProps = state => {
  return {
    cryptos: state.cryptos,
    error: state.error
  };
};

export default connect(mapStateToProps, { getData })(CryptoList);
