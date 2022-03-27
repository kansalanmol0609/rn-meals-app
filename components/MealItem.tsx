//libs
import {NavigationProp, useNavigation} from '@react-navigation/native';
import React, {memo, useCallback} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, ImageBackground} from 'react-native';

//types
import {Meal} from '../models/meal';
import {MealsStackParamList} from '../navigation/types';

type Props = {
  item: Meal;
};

const MealItem = ({item}: Props): JSX.Element => {
  const navigation = useNavigation<NavigationProp<MealsStackParamList>>();

  const handleSelectMeal = useCallback(() => {
    navigation.navigate('MealDetail', {
      mealId: item.id,
    });
  }, [item.id, navigation]);

  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={handleSelectMeal}>
        <View>
          <View style={{...styles.mealRow, ...styles.mealHeader}}>
            <ImageBackground source={{uri: item.imageUrl}} style={styles.bgImage}>
              <Text style={styles.title} numberOfLines={1}>
                {item.title}
              </Text>
            </ImageBackground>
          </View>
          <View style={{...styles.mealRow, ...styles.mealDetails}}>
            <Text style={styles.mealDetailsText}>{item.duration}m</Text>
            <Text style={styles.mealDetailsText}>{item.complexity.toUpperCase()}</Text>
            <Text style={styles.mealDetailsText}>{item.affordability.toUpperCase()}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mealDetailsText: {
    fontFamily: 'open-sans',
  },
  mealItem: {
    height: 200,
    width: '100%',
    backgroundColor: 'grey',
    marginVertical: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  mealRow: {
    flexDirection: 'row',
  },
  mealHeader: {
    height: '85%',
  },
  mealDetails: {
    height: '15%',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bgImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 18,
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingVertical: 8,
    paddingHorizontal: 12,
    textAlign: 'center',
  },
});

export default memo(MealItem);
