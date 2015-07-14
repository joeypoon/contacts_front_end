'use strict';

var React = require('react-native');
var Button = require('react-native-button');
var {
  Text,
  View,
  TextInput
} = React;

var REMOTE = 'https://contacts-back-end.herokuapp.com'

class SignupOnly extends React.Component{
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
		fetch(`${REMOTE}/users.json`, {
  			method: 'post',
	        headers: {
	          'Accept': 'application/json',
	          'Content-Type': 'application/json'
	        },
			body: JSON.stringify({
		  		user: {
		    		password: this.state.newPassword,
		    		password_confirmation: this.state.newPassword_confirmation,
					email: this.state.newEmail,
					name: this.state.newName
				}
	        })
    	}).then((response) => {
    		console.log(response)
			if(response.status > 400){
				response.json().then((responseData) => alert(`${responseData.error}`))
			} else {
				response.json().then((responseData) => 
					this.props.navigator.replace({id: "ProfileView", userid: `${responseData.id}`})
				)
			}
		})
  	}

	render(){
		var styles=this.props.styles
		return(
			<View style={styles.container}>
				<Text style={styles.label}>Login</Text>
				<TextInput 
					style={styles.input}
					onChangeText={(text) => this.setState({email: text})} 
					placeholder='Enter Email'
				/>
				<TextInput 
					style={styles.input} 
					password={true}
					onChangeText={(text) => this.setState({password: text})} 
					placeholder='Enter Password'
				/>
				<Button style={{color: 'green'}} onPress={this._loginUser.bind(this)}>
					Login!
				</Button>
			</View>
		)
	}
}

module.exports = SignupOnly