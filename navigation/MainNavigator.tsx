//libs
import {memo} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

//components
import TabsNavigator from './TabsNavigator';

//constants
import {COLORS} from '../constants/colors';

//types
import {MainNavigatorParamList} from './types';
import FiltersStack from './FiltersStack';

const Drawer = createDrawerNavigator<MainNavigatorParamList>();

const App = (): JSX.Element => (
  <NavigationContainer>
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: COLORS.accentColor,
        drawerLabelStyle: {
          fontFamily: 'open-sans-bold',
        },
      }}
    >
      <Drawer.Screen
        name="TabsNavigator"
        component={TabsNavigator}
        options={{
          title: 'Meals',
        }}
      />
      <Drawer.Screen
        name="FiltersNavigator"
        component={FiltersStack}
        options={{
          title: 'Filters',
        }}
      />
    </Drawer.Navigator>
  </NavigationContainer>
);

export default memo(App);
