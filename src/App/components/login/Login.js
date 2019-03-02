import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Image } from 'react-native-elements';

import Input from '../commons/Input';

class Login extends Component {
	state = { email: '', password: '' }

	render() {
		return (
			<View style={styles.container} >
				<Image
					source={require('../../assets/github_256.png')}
					style={{ width: 200, height: 200, marginBottom: 50 }}
				/>
				<Input
					placeholder='Email'
					onChangeText={(value) => this.setState({ email: value })}
					keyboardType='email-address'
				/>
				<Input
					placeholder='Password'
					secureTextEntry
					onChangeText={(value) => this.setState({ password: value })} />
				<Button
					title='Login'
					buttonStyle={styles.buttonLogin}
					titleStyle={styles.buttontitleStyle}
					type="outline"
					loading={this.props.isloading}
					onPress={() => this.props.action({ email: this.state.email, password: this.state.password })} />
			</View>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#2c3e50',
	},
	buttonLogin: {
		backgroundColor: '#FFFFFF',
		color: 'red',
		marginTop: 30,
		width: 200,
		justifyContent: 'center'
	},
	buttontitleStyle: {
		color: '#000000'
	}
})

export default Login;
