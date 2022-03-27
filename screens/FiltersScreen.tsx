//libs
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {memo, useCallback, useEffect, useState} from 'react';
import {View, Text, StyleSheet, Switch, Platform} from 'react-native';

//constants
import {COLORS} from '../constants/colors';

//types
import {FiltersStackParamList} from '../navigation/types';

type FilterSwitchProps = {
  label: string;
  value: boolean;
  onValueChange: (newValue: boolean) => void;
};

const FilterSwitch = (props: FilterSwitchProps): JSX.Element => (
  <View style={styles.filterContainer}>
    <Text>{props.label}</Text>
    <Switch
      trackColor={{true: COLORS.primaryColor}}
      thumbColor={Platform.OS === 'android' ? COLORS.primaryColor : ''}
      value={props.value}
      onValueChange={props.onValueChange}
    />
  </View>
);

type Props = NativeStackScreenProps<FiltersStackParamList, 'Filters'>;

const FiltersScreen = (props: Props): JSX.Element => {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  //todo -
  // const saveFilters = useCallback(() => {
  //   const appliedFilters = {
  //     isGlutenFree,
  //     isLactoseFree,
  //     isVegan,
  //     isVegetarian,
  //   };

  //   console.log(appliedFilters);
  // }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian]);

  // useEffect(() => props.navigation.setOptions({saveFilters}), [props.navigation, saveFilters]);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters/ Restrictions</Text>
      <FilterSwitch
        label="Gluten-free"
        value={isGlutenFree}
        onValueChange={(newValue: boolean) => setIsGlutenFree(newValue)}
      />
      <FilterSwitch
        label="Lactose-free"
        value={isLactoseFree}
        onValueChange={(newValue: boolean) => setIsLactoseFree(newValue)}
      />
      <FilterSwitch
        label="Vegan"
        value={isVegan}
        onValueChange={(newValue: boolean) => setIsVegan(newValue)}
      />
      <FilterSwitch
        label="Vegetarian"
        value={isVegetarian}
        onValueChange={(newValue: boolean) => setIsVegetarian(newValue)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    margin: 20,
    textAlign: 'center',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginVertical: 12,
  },
});

export default memo(FiltersScreen);
