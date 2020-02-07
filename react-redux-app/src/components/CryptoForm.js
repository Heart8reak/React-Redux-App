import React from 'react';
import { connect } from 'react-redux';

import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { green } from '@material-ui/core/colors';

import { getData } from '../actions';


const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});

const CryptoForm = props => {
  const handleGetData = e => {
    e.preventDefault();
    props.getData();
  };

  const classes = useStyles();
  return (
    <>
      {props.isFetchingData ? (
        <div>--We are retreiving your data--</div>
      ) : (
          <ThemeProvider theme={theme}>
            <Button
              onClick={handleGetData}
              variant="contained"
              color="primary"
              className={classes.margin}
            >Show me the $$$
            </Button>
          </ThemeProvider>
          // <button onClick={handleGetData}>Show me the $$$</button>
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
