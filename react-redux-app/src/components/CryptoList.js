import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import { getData } from '../actions';


const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },
  media: {
    height: 140,
  },
});

const CryptoList = ({ cryptos }) => {
  const classes = useStyles();
  useEffect(() => {
    getData();
  }, []);
  // console.log(cryptos);
  return (
    <>
      {/* {props.error ? (
        <div className="error">{props.error}</div>
      ) : ( */}
      {cryptos.map(crypto => (
        <div>
          <Card>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                style={{ width: '50px', height: '50px' }}
                image={crypto.image}
                title={crypto.id}
              />
              <CardContent>
                <Typography
                  gutterBottom variant='h5'
                  component="h2"
                >
                  {crypto.id}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  ${crypto.current_price}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  ${crypto.market_cap}
                </Typography>

              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      ))}

      {/* {cryptos.map(crypto => (
        <div>
          <h3><span><img src={crypto.image} alt={crypto.id} /></span>
            {crypto.id}
          </h3>
          <p>
            ${crypto.current_price}
          </p>
          <p>Market Cap: {crypto.market_cap}</p>

        </div>
      ))} */}
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
