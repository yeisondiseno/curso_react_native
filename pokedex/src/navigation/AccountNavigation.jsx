import { createStackNavigator } from '@react-navigation/stack'
// screen
import Account from '../screens/Account'

// init
const Stack = createStackNavigator()

const AccountNavigation = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name='Account' component={Account} options={{ title: 'Mi cuenta' }} />
		</Stack.Navigator>
	)
}

export default AccountNavigation
