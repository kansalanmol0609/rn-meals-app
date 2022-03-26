//libs
import React, {memo, useCallback, useMemo} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

//components
import MealItem from '../components/MealItem';

//types
import {MEALS} from '../data/dummy-data';
import {MealsStackParamList} from '../navigation/types';
import type {Meal} from '../models/meal';

type Props = NativeStackScreenProps<MealsStackParamList, 'CategoryMeals'>;

const CategoryMealsScreen = ({route}: Props): JSX.Element => {
  const {categoryId} = route.params;

  const displayedMeals = useMemo(
    () => MEALS.filter((meal) => meal.categoryIds.indexOf(categoryId) >= 0),
    [categoryId],
  );

  const renderMealItem = useCallback(
    (itemData: {item: Meal}) => <MealItem item={itemData.item} />,
    [],
  );

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
        style={{width: '100%', padding: 10}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default memo(CategoryMealsScreen);
