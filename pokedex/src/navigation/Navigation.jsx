import { Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome5'
// navigation
import FavoritesNavigation from './FavoritesNavigation'
import AccountNavigation from './AccountNavigation'
import PokedexNavigation from './PokedexNavigation'

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
				component={FavoritesNavigation}
				options={{
					tabBarLabel: 'favoritos',
					tabBarIcon: ({ color, size }) => (
						<Icon name='heart' color={color} size={size - 5} />
					)
				}}
			/>
			<Tab.Screen
				name='Pokedex'
				component={PokedexNavigation}
				options={{
					tabBarLabel: '',
					tabBarIcon: () => renderPokeBall()
				}}
			/>
			<Tab.Screen
				name='Account'
				component={AccountNavigation}
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
