import { StackNavigator } from 'react-navigation';
import HomeScreen from './screens/home/HomeScreen'
import LoginScreen from './screens/login/LoginScreen'
import RegisterScreen from './screens/register/RegisterScreen'

const RootNavigator = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({navigation}) => ({
      header:false
    })
  },
  Login: {
    screen: LoginScreen,
    navigationOptions: ({navigation}) => ({
      header:false
    })
  },
  Register: {
    screen: RegisterScreen,
    navigationOptions: ({navigation}) => ({
      header:false
    })
  }
}, { headerMode: 'screen'});

export default RootNavigator;