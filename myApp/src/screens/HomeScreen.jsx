import { View, Text, Button } from 'react-native'

const HomeScreen = props => {
	const {
		navigation: { navigate },
	} = props
	console.log('props Home', props)
	// actions
	const goToSettings = () => {
		navigate('Settings')
	}

	return (
		<View>
			<Text>HomeScreen</Text>
			<Text>HomeScreen</Text>
			<Text>HomeScreen</Text>
			<Text>HomeScreen</Text>
			<Text>HomeScreen</Text>
			<Text>HomeScreen</Text>
			<Button title='Ir a ajustes' onPress={() => goToSettings()} />
		</View>
	)
}

export default HomeScreen
