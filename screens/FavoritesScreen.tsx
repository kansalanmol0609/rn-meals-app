//libs
import {memo, useMemo} from 'react';
import {View, StyleSheet} from 'react-native';

//components
import MealsList from '../components/MealsList';

//constants
import {MEALS} from '../data/dummy-data';

const FavoritesScreen = () => {
  const favoriteMeals = useMemo(
    () => MEALS.filter((meal) => meal.id === 'm1' || meal.id === 'm2'),
    [],
  );

  return (
    <View style={styles.screen}>
      <MealsList mealsList={favoriteMeals} />
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

export default memo(FavoritesScreen);
