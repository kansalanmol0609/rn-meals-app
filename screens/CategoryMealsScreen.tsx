//libs
import React, {memo, useMemo} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

//components
import MealsList from '../components/MealsList';

//constants
import {MEALS} from '../data/dummy-data';

//types
import {MealsStackParamList} from '../navigation/types';

type Props = NativeStackScreenProps<MealsStackParamList, 'CategoryMeals'>;

const CategoryMealsScreen = ({route}: Props): JSX.Element => {
  const {categoryId} = route.params;

  const displayedMeals = useMemo(
    () => MEALS.filter((meal) => meal.categoryIds.indexOf(categoryId) >= 0),
    [categoryId],
  );

  return <MealsList mealsList={displayedMeals} />;
};

export default memo(CategoryMealsScreen);
