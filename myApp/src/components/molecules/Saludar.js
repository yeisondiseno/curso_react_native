import { Text } from 'react-native'

const Saludar = props => {
	const { name = 'Yeison' } = props
	return <Text>Holaaaaa {name}</Text>
}

export default Saludar
