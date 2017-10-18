import { StackNavigator } from 'react-navigation';
import { Platform, StatusBar } from 'react-native';

import HomeScreen from './src/screens/HomeScreen';
import CardsScreen from './src/screens/CardsScreen';

export default StackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Cards: {
    screen: CardsScreen,
  },
}, {
  cardStyle: {
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
  },
});
