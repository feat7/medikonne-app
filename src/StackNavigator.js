import { StackNavigator } from 'react-navigation';
import HomeScreen from './screens/home/HomeScreen'
import LoginScreen from './screens/login/LoginScreen'
import RegisterScreen from './screens/register/RegisterScreen'
import MainScreen from './screens/main/MainScreen'
import ListTests from './screens/main/ListTests'
import ListLabs from './screens/main/ListLabs'
import HomeTabs from './screens/main/HomeTabs'

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
  },
  ListTests: {
    screen: ListTests,
    navigationOptions: ({navigation}) => ({
      header:false
    })
  },
  ListLabs: {
    screen: ListLabs,
    navigationOptions: ({navigation}) => ({
      header:false
    })
  },
  Main: {
    screen: HomeTabs,
    navigationOptions: ({navigation}) => ({
      header:false,
      tabBarVisible:false 
    })
  }
}, { headerMode: 'screen'});

export default RootNavigator;