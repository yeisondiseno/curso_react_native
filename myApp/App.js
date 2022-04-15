import { StyleSheet } from 'react-native'
// navigation
import { NavigationContainer } from '@react-navigation/native'
// import NavigationStack from './src/navigation/NavigationStack'
// import NavigationTab from './src/navigation/NavigationTab'
import navigationDrawer from './src/navigation/navigationDrawer'

const App = () => {
	return (
		<NavigationContainer>
			{/* <NavigationStack /> */}
			{/* <NavigationTab /> */}
			<navigationDrawer />
		</NavigationContainer>
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
