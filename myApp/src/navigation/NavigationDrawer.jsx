import { createDrawerNavigator } from '@react-navigation/drawer'
// screens
import HomeScreen from '../screens/HomeScreen'
import SettingsScreen from '../screens/SettingsScreen'

const Drawer = createDrawerNavigator()

const navigationDrawer = () => {
	return (
		<Drawer.Navigator>
			<Drawer.Screen name='home' component={HomeScreen} />
			<Drawer.Screen name='Settings' component={SettingsScreen} />
		</Drawer.Navigator>
	)
}

export default navigationDrawer
