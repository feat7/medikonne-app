import { StackNavigator } from 'react-navigation';
import HomeScreen from './screens/home/HomeScreen'
import LoginScreen from './screens/home/LoginScreen'

const RootNavigator = StackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Login: {
    screen: LoginScreen,
  }
});

export default RootNavigator;