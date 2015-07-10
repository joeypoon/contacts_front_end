'use strict';

var React = require('react-native');
var Button = require('react-native-button');
var {
  Text,
  View,
  TextInput
} = React;

var REMOTE = 'https://contacts-back-end.herokuapp.com'

class LoginView extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			newEmail: '',
      email: '',
      password: '',
			newPassword: '',
			newPassword_confirmation: ''
		}
	}

	_saveInfo(){

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
	    			contact_info:{
	    				email: this.state.newEmail
	    			}
		  		}
  			})
		})
	}

	_loginUser(){
    fetch(`${REMOTE}/login.json`, {
  			method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
		  	body: JSON.stringify({
		  		user: {
            email: this.state.email,
		    		password: this.state.password
		  		}
  			})
		})
	}

	render(){
		var styles=this.props.styles
		return(
			<View style={styles.container}>
				<Text style={styles.label}>Login</Text>
				<TextInput style={styles.input} onChangeText={(text) => this.setState({email: text})} placeholder='Enter Email'/>
				<TextInput style={styles.input} onChangeText={(text) => this.setState({password: text})} placeholder='Enter Password'/>
				<Button style={{color: 'green'}} onPress={this._loginUser.bind(this)}>
					Login!
				</Button>
				<Text style={styles.label}>SignUp</Text>
				<TextInput
					style={styles.input}
					onChangeText={(text) => this.setState({newEmail: text})}
					placeholder='Enter Email'
				/>
				<TextInput
					style={styles.input}
					password='true'
					onChangeText={(text) => this.setState({newPassword: text})}
					placeholder='Enter Password'
				/>
				<TextInput
					style={styles.input}
					password='true'
					onChangeText={(text) => this.setState({newPassword_confirmation: text})}
					placeholder='Confirm Password' />
				<Button style={{color: 'green'}} onPress={this._registerUser.bind(this)}>
					SignUp!
				</Button>
			</View>
		)
	}
}


// onSomethingClicked: function() {
//    // this will push the new component on top of me (you can go back)
//    this.props.navigator.push({id: "SomeOtherComponent"});
// }


// onSomethingOtherClicked: function() {
//    // this will replace myself with the other component (no going back)
//    this.props.navigator.replace({id: "SomeOtherComponent"});
// }

module.exports = LoginView;
