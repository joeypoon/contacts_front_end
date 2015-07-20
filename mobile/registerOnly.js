'use strict';

var React = require('react-native');
var Button = require('react-native-button'),
	state = require('./state')
var {
  Text,
  View,
  TextInput
} = React;

class RegisterOnly extends React.Component{
	constructor(props){
		super(props)
		this.state = {
      		newName: '',
      		newEmail: '',
			newPassword: '',
			newPassword_confirmation: ''
		}
	}

	_registerUser(){
		var {newName, newEmail, newPassword, newPassword_confirmation} = this.state
		
		state.register(newName, newEmail, newPassword, newPassword_confirmation)
			.then((data) => {
				this.props.navigator.push({id: "ProfileView", name: "Profile"})
			})
			.catch((e) => {
				AlertIOS.alert('Signup Failed', e)
			})
  	}

	render(){
		var styles=this.props.styles
		return(
			<View style={styles.container}>
				<Text style={styles.label}>SignUp</Text>
				<TextInput
					style={styles.input}
					onChangeText={(text) => this.setState({newName: text})}
					placeholder='Enter Name'
				/>
				<TextInput
					style={styles.input}
					onChangeText={(text) => this.setState({newEmail: text})}
					placeholder='Enter Email'
				/>
				<TextInput
					style={styles.input}
					secureTextEntry={true}
					onChangeText={(text) => this.setState({newPassword: text})}
					placeholder='Enter Password'
				/>
				<TextInput
					style={styles.input}
					secureTextEntry={true}
					onChangeText={(text) => this.setState({newPassword_confirmation: text})}
					placeholder='Confirm Password' />
				<Button style={{color: 'green'}} onPress={this._registerUser.bind(this)}>
					SignUp!
				</Button>
			</View>
		)
	}
}

module.exports = RegisterOnly