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
		// this.state = {
			
		// }
	}

	_registerUser(){
		console.log(this.refs.email)
		// fetch(`${REMOTE}/users.json`, {
  // 			method: 'post',
		//   	body: JSON.stringify({
		//     	name: this.refs.name.value,
		//   	})
		// })
	}

	_loginUser(){

	}

	render(){
		var styles=this.props.styles
		return(
			<View style={styles.loginContainer}>
				<Text style={styles.label}>Login</Text>
				<TextInput ref="email" style={styles.input} placeholder='Enter Email'/>
				<TextInput style={styles.input} placeholder='Enter Password'/>
				<Button style={{color: 'green'}} onPress={this._loginUser}>
					Login!
				</Button>
				<Text style={styles.label}>SignUp</Text>
				<TextInput style={styles.input} placeholder='Enter Name' />
				<TextInput style={styles.input} placeholder='Enter Email' />
				<TextInput style={styles.input} placeholder='Enter Phone' />
				<TextInput style={styles.input} placeholder='Enter Company' />
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