import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavigationActions, StackActions } from 'react-navigation';

import Login from '../../components/login/Login';
import { getToken, getValue } from '../../utils/storage';
import * as loginActions from '../../redux/actions/loginAction';
import { validate } from '../../utils/validation';


class LoginContainer extends Component {

	constructor(props) {
		super(props);
	}


	login = (params) => {
		const emailValidation = validate('email', params.email.trim())
		const passwordValidation = validate('password', params.password.trim())     

		if(emailValidation.isError)
		{
			return Alert.alert('',emailValidation.messageError,[{text: 'OK', onPress: () => console.log('OK Pressed')},],{cancelable: false},);
		}
		if(passwordValidation.isError)
		{
			return Alert.alert('',passwordValidation.messageError,[{text: 'OK', onPress: () => console.log('OK Pressed')},],{cancelable: false},);
		}						

		this.props.actions.login.authorize(params.email.trim(), params.password.trim());
	}
	render() {
		const { data } = this.props;

		getToken().then((token) => {

			console.log("tokenECR");
			console.log(token);
			if (token !== null) {
				getValue("data").then((data) => {
					console.log(data);
					if (data != null)
					{						
						this.props.actions.login.succesLogin(true, JSON.parse(data), token);
					}
						
				});
			}
		});
		if (data.loggedIn) 
		{
			const { navigation } = this.props;
			const resetAction = StackActions.reset(
				{
					index: 0,
					actions: [NavigationActions.navigate({ routeName: 'home' }),],
				});
			navigation.dispatch(resetAction);
		}
		return (
			<Login action={this.login} isloading={this.props.isLoading} />
		);
	}
}
const mapStateToProps = state => (
	{
		isLoading: state.loading.isLoading,
		data: state.login.data
	});

const mapDispatchToProps = (dispatch) => {
	return {
		actions: {
			login: bindActionCreators(loginActions, dispatch)
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
