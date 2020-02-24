import React from 'react';

import { createStyles, makeStyles } from '@material-ui/core/styles';

import styles from './styles';

const useStyles = makeStyles(createStyles(styles));

const BurgerIngredient = props => {
  const { type } = props;
  const classes = useStyles();

  switch (type) {
    case 'bread-bottom':
      return <div className={classes.BreadBottom} />;
    case 'bread-top':
      return (
        <div className={classes.BreadTop}>
          <div className={classes.Seeds1} />
          <div className={classes.Seeds2} />
        </div>
      );
    case 'meat':
      return <div className={classes.Meat} />;
    case 'cheese':
      return <div className={classes.Cheese} />;
    case 'bacon':
      return <div className={classes.Bacon} />;
    case 'salad':
      return <div className={classes.Salad} />;
    default:
      return null;
  }
};

export default BurgerIngredient;
