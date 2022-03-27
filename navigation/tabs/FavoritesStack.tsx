//libs
import {memo} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Platform} from 'react-native';

//components
import MealDetailScreen from '../../screens/MealDetailScreen';
import FavoritesScreen from '../../screens/FavoritesScreen';

//constants
import {COLORS} from '../../constants/colors';

//types
import {FavoritesStackParamList} from '../types';
import MenuButton from '../../components/MenuButton';

const Stack = createNativeStackNavigator<FavoritesStackParamList>();

const FavoritesStack = (): JSX.Element => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === 'ios' ? '' : COLORS.primaryColor,
        },
        headerTintColor: Platform.OS === 'ios' ? COLORS.primaryColor : 'white',
        headerLeft: () => <MenuButton />,
        headerTitleStyle: {
          fontFamily: 'open-sans-bold',
        },
      }}
      initialRouteName="Favorites"
    >
      <Stack.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          title: 'Your Favorites',
        }}
      />
      <Stack.Screen name="MealDetail" component={MealDetailScreen} />
    </Stack.Navigator>
  );
};

export default memo(FavoritesStack);
