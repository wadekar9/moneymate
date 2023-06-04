import React from 'react';
import { Platform, UIManager } from 'react-native';
import RootNavigator from './src/Navigation/RootNavigator';
import CustomStatusBar from './src/Component/CustomStatusBar';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const App = () => {
  return (
    <>
      <CustomStatusBar />
      <RootNavigator />
    </>
  )
}

export default App;