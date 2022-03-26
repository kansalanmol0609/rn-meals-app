//libs
import {memo} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Ionicons} from '@expo/vector-icons';

//components
import MealsStack from './MealsStack';
import FavoritesScreen from '../screens/FavoritesScreen';

//types
import {RootNavigatorParamList} from './types';
import {COLORS} from '../constants/colors';

const Tab = createBottomTabNavigator<RootNavigatorParamList>();

const RootNavigator = (): JSX.Element => (
  <NavigationContainer>
    <Tab.Navigator screenOptions={{headerShown: false, tabBarActiveTintColor: COLORS.accentColor}}>
      <Tab.Screen
        name="Meals"
        component={MealsStack}
        options={{
          tabBarIcon: (tabInfo) => (
            <Ionicons name="ios-restaurant" size={25} color={tabInfo.color} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarIcon: (tabInfo) => <Ionicons name="ios-star" size={25} color={tabInfo.color} />,
        }}
      />
    </Tab.Navigator>
  </NavigationContainer>
);

export default memo(RootNavigator);
