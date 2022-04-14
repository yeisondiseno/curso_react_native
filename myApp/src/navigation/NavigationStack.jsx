import { createNativeStackNavigator } from '@react-navigation/native-stack'
// screens
import HomeScreen from '../screens/HomeScreen'
import SettingsScreen from '../screens/SettingsScreen'

const Stack = createNativeStackNavigator()

const NavigationStack = () => {
	return (
		<Stack.Navigator initialRouteName='Home'>
			<Stack.Screen name='Home' component={HomeScreen} />
			<Stack.Screen name='Settings' component={SettingsScreen} />
		</Stack.Navigator>
	)
}

export default NavigationStack
