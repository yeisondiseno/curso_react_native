import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// screens
import Account from '../screens/Account'
import Pokedex from '../screens/Pokedex'
import Favorites from '../screens/Favorites'

// inits
const Tab = createBottomTabNavigator()

const Navigation = () => {
	return (
		<Tab.Navigator>
			<Tab.Screen name='Account' component={Account} />
			<Tab.Screen name='Favorites' component={Favorites} />
			<Tab.Screen name='Pokedex' component={Pokedex} />
		</Tab.Navigator>
	)
}

export default Navigation
