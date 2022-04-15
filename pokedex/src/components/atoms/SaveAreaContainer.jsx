import { SafeAreaView, StyleSheet, StatusBar, Platform } from 'react-native'
import React from 'react'

const SaveAreaContainer = props => {
	const { children } = props

	return <SafeAreaView style={styles.AndroidSafeArea}>{children}</SafeAreaView>
}

const styles = StyleSheet.create({
	AndroidSafeArea: {
		paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
	},
})

export default SaveAreaContainer
