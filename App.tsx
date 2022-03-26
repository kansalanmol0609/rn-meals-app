//libs
import React from 'react';
import {View, Text} from 'react-native';
import {useFonts} from 'expo-font';
import AppLoading from 'expo-app-loading';

//components
import RootNavigator from './navigation/RootNavigator';

export default function App() {
  const [fontLoaded, errors] = useFonts({
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  if (!fontLoaded) {
    return <AppLoading />;
  }

  if (errors) {
    return (
      <View>
        <Text>Error Occurred!</Text>
      </View>
    );
  }

  return <RootNavigator />;
}
