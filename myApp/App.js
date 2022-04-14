import { StyleSheet, Text, View } from 'react-native'
// molecules
import LoginForm from './src/components/molecules/LoginForm'
import Saludar from './src/components/molecules/Saludar'

const App = () => {
	return (
		<View style={styles.container}>
			<Text>Curso de React Native</Text>
			<Saludar name='Agustin' />
			<Saludar name='Juana' />
			<Saludar name='Natalia' />

			<LoginForm />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
})

export default App
