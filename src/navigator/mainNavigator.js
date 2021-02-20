import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps207728Navigator from '../features/Maps207728/navigator';
import Additem207727Navigator from '../features/Additem207727/navigator';
import Maps207723Navigator from '../features/Maps207723/navigator';
import UserProfile207719Navigator from '../features/UserProfile207719/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps207728: { screen: Maps207728Navigator },
Additem207727: { screen: Additem207727Navigator },
Maps207723: { screen: Maps207723Navigator },
UserProfile207719: { screen: UserProfile207719Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
