import React from 'react';
import { useSelector } from 'react-redux';

import isEmpty from 'lodash/isEmpty';

import { createStyles, makeStyles } from '@material-ui/core/styles';

import BurgerIngredient from '@/components/BurgerIngredient';
import styles from './styles';

const useStyles = makeStyles(createStyles(styles));

const Burger = props => {
  const classes = useStyles();
  const ingredients = useSelector(state => state.ingredients);
  const transformIngredients = Object.keys(ingredients)
    .map(igKey => {
      return [...Array(ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  if (isEmpty(transformIngredients)) {
    return (
      <div className={classes.Burger}>
        <BurgerIngredient type="bread-top" />
        <p>Please start add ingredients</p>
        <BurgerIngredient type="bread-bottom" />
      </div>
    );
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
