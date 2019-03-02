import React, { Component } from "react";
import { TextInput, StyleSheet } from "react-native";

export default class Input extends Component {
	render() {
		const {
			textInputStyle,
		} = this.props;
		return (
			<TextInput
				style={[styles.textInput, textInputStyle]}
				{...this.props}
			/>
		);
	}
}

const styles = StyleSheet.create({
	textInput: {
		width: "90%",
		alignSelf: "center",
		height: 40,
		fontSize: 15,
		fontWeight: "bold",
		backgroundColor: '#FFFFFF',
		marginBottom: 10,
		padding: 10,
		color: '#000000'
	}
});
