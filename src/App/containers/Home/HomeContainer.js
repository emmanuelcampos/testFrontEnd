import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator, TouchableHighlight, Alert } from 'react-native';
import { Avatar, SearchBar, Overlay, Header, Icon } from "react-native-elements";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { clearToken } from '../../utils/storage';
import * as loginActions from '../../redux/actions/loginAction';
import * as searchActions from '../../redux/actions/searchAction';
import { NavigationActions, StackActions } from 'react-navigation';


class HomeContainer extends Component {

	state = {
		search: '',
		overlayVisible: false,
		textOverlay: "",
		countPage: 1
	};

	constructor(props) {
		super(props);
	}

	updateSearch = search => {
		this.setState({ search });
		if (search.length >= 2) {
			this.setState({ countPage: 1 })
			this.props.actions.search.search(search, 1);
		}

	};

	clearSearch = () => {
		this.props.actions.search.searchClear();
	};

	logout = () => {
		clearToken();
		this.props.actions.logOut.logOut();
		const { navigation } = this.props;
		const resetAction = StackActions.reset({
			index: 0,
			actions: [
				NavigationActions.navigate({ routeName: 'login' }),
			],
		});
		navigation.dispatch(resetAction);
	};

	_onEndReached = (info) => {
		if (info.distanceFromEnd >= -10) {
			this.setState({ countPage: this.state.countPage + 1 })
			this.props.actions.search.search(this.state.search, this.state.countPage + 1);
		}
	};

	onPress = (description) => {
		if (description != null) {
			this.setState({ overlayVisible: true, textOverlay: description });
		} else {
			Alert.alert('', "It does not contain more description", [{ text: 'OK', onPress: () => console.log('OK Pressed') },], { cancelable: false });
		}
	};

	render() {
		const { search } = this.state;
		return (
			<View style={styles.container}>

				<Header
					backgroundColor='#2c3e50'
					leftComponent={<Avatar
						size="medium"
						rounded
						title="#"
						source={{
							uri:
								this.props.data.avatar_url,
						}}					
					/>}
					centerComponent={{ text: this.props.data.login, style: { color: '#fff' } }}
					rightComponent={<Icon
						name='power-off'
						type='font-awesome'
						color='#FFFFFF'
						size={32}
						onPress={() => this.logout()} />}
				/>

				<View style={styles.content}>

					<SearchBar
						containerStyle={{ backgroundColor: "#FFFFFF" }}
						inputContainerStyle={{ backgroundColor: "#2c3e50" }}
						placeholder="Type Here..."
						onChangeText={this.updateSearch}
						value={search}
						onClear={this.clearSearch}
						showLoading={this.props.isLoading}
					/>

					{<FlatList
						data={this.props.items}
						renderItem={({ item: userData }) =>

							<TouchableHighlight onPress={() => this.onPress(userData.description)}>

								<View style={styles.listItem}>
									<View style={{ flex: 1 }}>
										<Text style={styles.title}>
											{userData.display_name == null ? userData.name : userData.display_name}
										</Text>
										<Text style={styles.subtitle}>
											{userData.short_description == null ? "It does not contain description" : userData.short_description}
										</Text>
									</View>
								</View>

							</TouchableHighlight>


						}
						onEndReached={this._onEndReached}
						onEndReachedThreshold={0.05}
						keyExtractor={(item, index) => index}
						renderFooter={() => {
							<View style={{ flex: 1, padding: 10 }}>
								<ActivityIndicator size="small" />
							</View>
						}}
					/>

					}


				</View>

				<Overlay
					isVisible={this.state.overlayVisible}
					onBackdropPress={() => this.setState({ overlayVisible: false })}
					width="auto"
					height="auto"
				>
					<Text>{this.state.textOverlay}</Text>
				</Overlay>


			</View>
		);
	}
}

const mapStateToProps = state => (
	{
		data: state.login.data.data,
		items: state.search.items,
		isLoading: state.loading.isLoading,
	});

const mapDispatchToProps = (dispatch) => {
	return {
		actions: {
			logOut: bindActionCreators(loginActions, dispatch),
			search: bindActionCreators(searchActions, dispatch),
		}
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
	},
	content: {
		flex: 10,
		backgroundColor: '#FFFFFF'
	},
	listItem: {
		flex: 1,
		flexDirection: 'row',
		borderBottomWidth: 1,
		borderBottomColor: '#d6d7da',
		padding: 6,
	},
	title: {
		fontSize: 25,
		textAlign: 'left',
		margin: 6,
	},
	subtitle: {
		fontSize: 18,
		textAlign: 'left',
		margin: 6,
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)