//libs
import React, {memo} from 'react';
import {Platform} from 'react-native';
import {HeaderButton, HeaderButtonProps} from 'react-navigation-header-buttons';
import {Ionicons} from '@expo/vector-icons';

//constants
import {COLORS} from '../constants/colors';

type Props = HeaderButtonProps;

const CustomHeaderButton = (props: Props) => (
  <HeaderButton
    IconComponent={Ionicons}
    iconSize={23}
    color={Platform.OS === 'android' ? 'white' : COLORS.primaryColor}
    {...props}
  />
);

export default memo(CustomHeaderButton);
