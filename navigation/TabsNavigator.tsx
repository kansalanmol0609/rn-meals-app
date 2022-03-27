//libs
import {memo} from 'react';
import {Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Ionicons} from '@expo/vector-icons';

//components
import MealsStack from './tabs/MealsStack';
import FavoritesStack from './tabs/FavoritesStack';

//constants
import {COLORS} from '../constants/colors';

//types
import {TabsNavigatorParamList} from './types';

const Tab = createBottomTabNavigator<TabsNavigatorParamList>();

const TabsNavigator = (): JSX.Element => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: COLORS.accentColor,
      tabBarActiveBackgroundColor: Platform.OS === 'android' ? COLORS.primaryColor : '',
      tabBarInactiveBackgroundColor: Platform.OS === 'android' ? COLORS.primaryColor : '',
      headerTitleStyle: {
        fontFamily: 'open-sans-bold',
      },
    }}
  >
    <Tab.Screen
      name="Meals"
      component={MealsStack}
      options={{
        tabBarIcon: (tabInfo) => <Ionicons name="ios-restaurant" size={25} color={tabInfo.color} />,
      }}
    />
    <Tab.Screen
      name="FavoritesNavigator"
      component={FavoritesStack}
      options={{
        tabBarIcon: (tabInfo) => <Ionicons name="ios-star" size={25} color={tabInfo.color} />,
      }}
    />
  </Tab.Navigator>
);

export default memo(TabsNavigator);
