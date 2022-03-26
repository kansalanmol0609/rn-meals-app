//libs
import {memo} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Platform} from 'react-native';

//components
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

//constants
import {COLORS} from '../constants/colors';

//types
import {MealsStackParamList} from './types';

const Stack = createNativeStackNavigator<MealsStackParamList>();

const MealsStack = (): JSX.Element => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: Platform.OS === 'ios' ? '' : COLORS.primaryColor,
      },
      headerTintColor: Platform.OS === 'ios' ? COLORS.primaryColor : 'white',
    }}
    initialRouteName="CategoriesScreen"
  >
    <Stack.Screen
      name="CategoriesScreen"
      component={CategoriesScreen}
      options={{
        title: 'Meal Categories',
      }}
    />
    <Stack.Screen name="CategoryMeals" component={CategoryMealsScreen} />
    <Stack.Screen name="MealDetail" component={MealDetailScreen} />
  </Stack.Navigator>
);

export default memo(MealsStack);
