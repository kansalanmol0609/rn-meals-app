//libs
import {memo, useCallback} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';

//components
import MealItem from '../components/MealItem';

//types
import type {Meal} from '../models/meal';

type Props = {
  mealsList: Array<Meal>;
};

const MealsList = ({mealsList}: Props): JSX.Element => {
  const renderMealItem = useCallback(
    (itemData: {item: Meal}) => <MealItem item={itemData.item} />,
    [],
  );

  return (
    <View style={styles.list}>
      <FlatList
        data={mealsList}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
        style={{width: '100%', padding: 10}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default memo(MealsList);
