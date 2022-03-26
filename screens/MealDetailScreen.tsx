//libs
import React, {memo, useLayoutEffect, useMemo} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';

//components
import HeaderButton from '../components/HeaderButton';

//types
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MealsStackParamList} from '../navigation/types';
import {MEALS} from '../data/dummy-data';

type Props = NativeStackScreenProps<MealsStackParamList, 'MealDetail'>;

const MealDetailScreen = ({route, navigation}: Props) => {
  const {mealId} = route.params;

  const selectedMeal = useMemo(() => MEALS.find((meal) => meal.id === mealId), [mealId]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: selectedMeal?.title,
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Favorite"
            iconName="ios-star"
            onPress={() => {
              console.log('Mark as Favorite!');
            }}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation, selectedMeal?.title]);

  return (
    <View style={styles.screen}>
      <Text>{selectedMeal?.title}</Text>
      <Button
        title="Go Back to Categories"
        onPress={() => {
          navigation.popToTop();
        }}
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

export default memo(MealDetailScreen);
