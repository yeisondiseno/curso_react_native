import { Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome5'
// screens
import Account from '../screens/Account'
import Pokedex from '../screens/Pokedex'
import Favorites from '../screens/Favorites'

// inits
const Tab = createBottomTabNavigator()

const Navigation = () => {
	// render
	const renderPokeBall = () => (
		<Image
			source={require('../assets/pokeball.png')}
			style={{ width: 75, height: 75, top: -15 }}
		/>
	)

	return (
		<Tab.Navigator>
			<Tab.Screen
				name='Favorites'
				component={Favorites}
				options={{
					tabBarLabel: 'favoritos',
					tabBarIcon: ({ color, size }) => (
						<Icon name='heart' color={color} size={size - 5} />
					)
				}}
			/>
			<Tab.Screen
				name='Pokedex'
				component={Pokedex}
				options={{
					tabBarLabel: '',
					tabBarIcon: () => renderPokeBall()
				}}
			/>
			<Tab.Screen
				name='Account'
				component={Account}
				options={{
					tabBarLabel: 'Cuenta',
					tabBarIcon: ({ color, size }) => (
						<Icon name='user' color={color} size={size - 5} />
					)
				}}
			/>
		</Tab.Navigator>
	)
}

export default Navigation
