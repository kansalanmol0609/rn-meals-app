//libs
import React, {memo, useLayoutEffect, useMemo} from 'react';
import {View, Text, ScrollView, Image, StyleSheet} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';

//components
import HeaderButton from '../components/HeaderButton';

//types
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MealsStackParamList} from '../navigation/types';
import {MEALS} from '../data/dummy-data';

type Props = NativeStackScreenProps<MealsStackParamList, 'MealDetail'>;

const ListItem = (props: {children: string}) => (
  <View style={styles.listItem}>
    <Text style={styles.mealDetailsText}>{props.children}</Text>
  </View>
);

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

  if (!selectedMeal) {
    return null;
  }

  return (
    <ScrollView>
      <Image source={{uri: selectedMeal.imageUrl}} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.mealDetailsText}>{selectedMeal.duration}m</Text>
        <Text style={styles.mealDetailsText}>{selectedMeal.complexity.toUpperCase()}</Text>
        <Text style={styles.mealDetailsText}>{selectedMeal.affordability.toUpperCase()}</Text>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {selectedMeal.ingredients.map((ingredient) => (
        <ListItem key={ingredient}>{ingredient}</ListItem>
      ))}
      <Text style={styles.title}>Steps</Text>
      {selectedMeal.steps.map((step) => (
        <ListItem key={step}>{step}</ListItem>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  details: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around',
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    textAlign: 'center',
  },
  mealDetailsText: {
    fontFamily: 'open-sans',
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
  },
});

export default memo(MealDetailScreen);
