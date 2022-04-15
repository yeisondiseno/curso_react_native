import { SafeAreaView, Text, Button } from 'react-native'

const SettingsScreen = props => {
	const {
		navigation: { navigate },
	} = props

	// actions
	const goToPage = ({ pageName }) => {
		navigate(pageName)
	}

	return (
		<SafeAreaView>
			<Text>SettingsScreen</Text>
			<Text>SettingsScreen</Text>
			<Text>SettingsScreen</Text>
			<Text>SettingsScreen</Text>
			<Text>SettingsScreen</Text>
			<Button
				title='Ir a Home'
				onPress={() => goToPage({ pageName: 'Home' })}
			/>
		</SafeAreaView>
	)
}

export default SettingsScreen
