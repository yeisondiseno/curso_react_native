import { Text, Button, SafeAreaView } from 'react-native'

const HomeScreen = props => {
	const {
		navigation: { navigate },
	} = props

	// actions
	const goToSettings = () => {
		navigate('Settings')
	}

	return (
		<SafeAreaView>
			<Text>HomeScreen</Text>
			<Text>HomeScreen</Text>
			<Text>HomeScreen</Text>
			<Text>HomeScreen</Text>
			<Text>HomeScreen</Text>
			<Text>HomeScreen</Text>
			<Button title='Ir a ajustes' onPress={() => goToSettings()} />
		</SafeAreaView>
	)
}

export default HomeScreen
