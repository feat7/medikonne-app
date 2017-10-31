import { TabNavigator } from 'react-navigation';
import LoginScreen from './screens/login/LoginScreen'
import MainScreen from './screens/main/MainScreen'

const HomeTabs = TabNavigator({
    Home: {
        screen: MainScreen
    },
    Login: {
        screen: LoginScreen
    }

}, { headerMode: 'screen'});

export default HomeTabs;