import React from 'react';
import { connect } from 'react-redux';

import { getData } from '../actions';

const CryptoForm = props => {
  const handleGetData = e => {
    e.preventDefault();
    props.getData();
  };

  return (
    <>
      {props.isFetchingData ? (
        <div>--We are retreiving your data--</div>
      ) : (
        <button onClick={handleGetData}>Show me the $$$</button>
      )}
    </>
  );
};

const mapStateToProps = state => {
  return {
    isFetchingData: state.isFetchingData
  };
};

export default connect(mapStateToProps, { getData })(CryptoForm);
