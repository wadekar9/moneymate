import React from 'react';
import { Platform, UIManager } from 'react-native';
import RootNavigator from './src/Navigation/RootNavigator';
import CustomStatusBar from './src/Components/CustomStatusBar';
import { Provider } from 'react-redux';
import RootStore from './src/Redux/Store/RootStore';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const App = () => {
  return (
    <Provider store={RootStore}>
      <CustomStatusBar />
      <RootNavigator />
    </Provider>
  )
}

export default App;