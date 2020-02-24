import React from 'react';

import { createStyles, makeStyles } from '@material-ui/core/styles';

import BurgerIngredient from '@/components/BurgerIngredient';
import styles from './styles';

const useStyles = makeStyles(createStyles(styles));

const Burger = props => {
  const classes = useStyles();
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
