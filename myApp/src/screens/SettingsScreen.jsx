import { View, Text, Button } from 'react-native'

const SettingsScreen = props => {
	const {
		navigation: { navigate },
	} = props

	// actions
	const goToPage = ({ pageName }) => {
		navigate(pageName)
	}

	return (
		<View>
			<Text>SettingsScreen</Text>
			<Text>SettingsScreen</Text>
			<Text>SettingsScreen</Text>
			<Text>SettingsScreen</Text>
			<Text>SettingsScreen</Text>
			<Button
				title='Ir a Home'
				onPress={() => goToPage({ pageName: 'Home' })}
			/>
		</View>
	)
}

export default SettingsScreen
