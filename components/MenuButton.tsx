//libs
import {memo} from 'react';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import {useNavigation} from '@react-navigation/native';

//components
import HeaderButton from './HeaderButton';
import {MainNavigatorParamList} from '../navigation/types';

//types
import {DrawerNavigationProp} from '@react-navigation/drawer';

const MenuButton = () => {
  const navigation = useNavigation<DrawerNavigationProp<MainNavigatorParamList>>();

  return (
    <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item
        title="Menu"
        iconName="ios-menu"
        onPress={() => {
          navigation.toggleDrawer();
        }}
      />
    </HeaderButtons>
  );
};

export default memo(MenuButton);
