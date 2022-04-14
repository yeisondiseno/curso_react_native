import { TextInput, Button, Text, View } from 'react-native'

const LoginForm = () => {
	return (
		<View>
			<TextInput placeholder='Email' />
			<TextInput placeholder='Contraseña' />
			<Button title='Enviar' onPress={() => console.log('Press')} />
		</View>
	)
}

export default LoginForm
