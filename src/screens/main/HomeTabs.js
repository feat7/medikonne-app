import { TabNavigator } from 'react-navigation';
import LoginScreen from '../login/LoginScreen'
import MainScreen from './MainScreen'
import Logout from './Logout'

const HomeTabs = TabNavigator({
    HomeTab: {
        screen: MainScreen,
        navigationOptions: ({navigation}) => ({
            header:false,
            tabBarVisible:false 
        })
    },
    LoginTab: {
        screen: Logout,
        navigationOptions: ({navigation}) => ({
            header:false,
            tabBarVisible:false 
        })
    }

}, { headerMode: 'none'});

export default HomeTabs;