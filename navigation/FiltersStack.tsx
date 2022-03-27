//libs
import {memo} from 'react';
import {Platform} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';

//components
import FiltersScreen from '../screens/FiltersScreen';
import MenuButton from '../components/MenuButton';
import HeaderButton from '../components/HeaderButton';

//types
import {FiltersStackParamList} from './types';

//constants
import {COLORS} from '../constants/colors';

const Stack = createNativeStackNavigator<FiltersStackParamList>();

const FiltersStack = (): JSX.Element => {
  const navigation = useNavigation();

  return (
    <Stack.Navigator
      initialRouteName="Filters"
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === 'ios' ? '' : COLORS.primaryColor,
        },
        headerTintColor: Platform.OS === 'ios' ? COLORS.primaryColor : 'white',
        headerTitleStyle: {
          fontFamily: 'open-sans-bold',
        },
      }}
    >
      <Stack.Screen
        name="Filters"
        component={FiltersScreen}
        options={{
          title: 'Filter Meals',
          headerLeft: () => <MenuButton />,
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
                title="Save"
                iconName="ios-save"
                onPress={() => {
                  console.log('Saving Filters!!!!');
                }}
              />
            </HeaderButtons>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default memo(FiltersStack);
