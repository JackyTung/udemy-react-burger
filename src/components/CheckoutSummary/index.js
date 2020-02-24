import React from 'react';

import Button from '@material-ui/core/Button';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import styles from './styles';

const useStyles = makeStyles(createStyles(styles));

const CheckoutSummary = () => {
  const classes = useStyles();
  const handleClickCancel = () => {};
  const handleClickSuccess = () => {};

  return (
    <div className={classes.checkoutSummary}>
      <Typography className="text-bold">We hope it tastes well!</Typography>

      <Button variant="contained" color="secondary" onClick={handleClickCancel}>
        CANCEL
      </Button>
      <Button variant="contained" color="primary" onClick={handleClickSuccess}>
        CONTINUE
      </Button>
    </div>
  );
};

/*
<Burger />
*/

export default CheckoutSummary;
