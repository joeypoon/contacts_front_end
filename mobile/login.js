'use strict';

var React = require('react-native');
var Button = require('react-native-button');
var {
	AsyncStorage,
  	Text,
	View,
	TextInput,
	AlertIOS
} = React;

let state = require('./state'); // { user: prop() }

var REMOTE = 'https://contacts-back-end.herokuapp.com'

class LoginView extends React.Component{
	constructor(props){
		super(props)
		
		this.state = {
      		email: 'paulsaad.13@gmail.com',
      		password: 'password',
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

	_loginUser(){
		var {email, password} = this.state

	    state.login(email, password)
	    	.then((data) => {
	    		this.props.navigator.push({id: "ProfileView"})
	    	})
	    	.catch((e) => {
	    		console.log(e)
		    	// AlertIOS.alert('Login Failed', e)
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
					value={this.state.email}
				/>
				<TextInput 
					style={styles.input} 
					password={true}
					onChangeText={(text) => this.setState({password: text})} 
					placeholder='Enter Password'
					value={this.state.password}
				/>
				<Button style={{color: 'green'}} onPress={this._loginUser.bind(this)}>
					Login!
				</Button>

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
					password={true}
					onChangeText={(text) => this.setState({newPassword: text})}
					placeholder='Enter Password'
				/>
				<TextInput
					style={styles.input}
					password={true}
					onChangeText={(text) => this.setState({newPassword_confirmation: text})}
					placeholder='Confirm Password' />
				<Button style={{color: 'green'}} onPress={this._registerUser.bind(this)}>
					SignUp!
				</Button>
			</View>
		)
	}
}

module.exports = LoginView;
