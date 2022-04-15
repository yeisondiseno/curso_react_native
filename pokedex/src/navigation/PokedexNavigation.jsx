import { createStackNavigator } from '@react-navigation/stack'
// screen
import Pokedex from '../screens/Pokedex'
import Pokemon from '../screens/Pokemon'

// init
const Stack = createStackNavigator()

const PokedexNavigation = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name='Pokedex' component={Pokedex} />
			<Stack.Screen name='Pokemon' component={Pokemon} />
		</Stack.Navigator>
	)
}

export default PokedexNavigation
