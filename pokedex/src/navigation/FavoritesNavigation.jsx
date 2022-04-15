import { createStackNavigator } from '@react-navigation/stack'
// screen
import Favorites from '../screens/Favorites'

// init
const Stack = createStackNavigator()

const FavoritesNavigation = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name='Favorite'
				component={Favorites}
				options={{ title: 'Favoritos' }}
			/>
		</Stack.Navigator>
	)
}

export default FavoritesNavigation
