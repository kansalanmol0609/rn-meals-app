//libs
import React, {memo, useCallback} from 'react';
import {FlatList} from 'react-native';

//types
import type {Category} from '../models/category';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MealsStackParamList} from '../navigation/types';

//constants
import {CATEGORIES} from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';

type Props = NativeStackScreenProps<MealsStackParamList, 'CategoriesScreen'>;

const CategoriesScreen = (props: Props) => {
  const renderItem = useCallback(
    (itemData: {item: Category}) => <CategoryGridTile item={itemData.item} />,
    [],
  );

  return <FlatList data={CATEGORIES} numColumns={2} renderItem={renderItem} />;
};

export default memo(CategoriesScreen);
