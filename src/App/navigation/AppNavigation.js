import { createStackNavigator } from 'react-navigation';

import LoginContainer from '../containers/login/LoginContainer';
import HomeContainer from '../containers/Home/HomeContainer';

const AppStackNavigator = createStackNavigator(
    {        
        login: { screen: LoginContainer },
        home: { screen: HomeContainer },
    }, {        
        headerMode: 'none',
    })

export default AppStackNavigator