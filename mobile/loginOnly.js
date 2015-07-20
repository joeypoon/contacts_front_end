'use strict';

var React = require('react-native');
var Button = require('react-native-button'),
	Swiper = require('./swiper'),
	state = require('./state')
var {
  Text,
  View,
  TextInput,
  Navigator
} = React;

class LoginOnly extends React.Component{
	constructor(props){
		super(props)
		this.state = {
      		email: '',
      		password: ''
		}
	}

	_loginUser(){
		var {email, password} = this.state

	    state.login(email, password)
	    	.then((data) => {
	    		this.props.navigator.push({id: "ProximityList"})
	    	})
	    	.catch((e) => {
	    		console.log(e)
		    	// AlertIOS.alert('Login Failed', e)
		    })
	}

	_goRegister(){
		this.props.navigator.replace({id: "RegisterOnly", sceneConfig: Navigator.SceneConfigs.FloatFromBottom})
	}

	render(){
		var styles=this.props.styles
		return(
			<View style={styles.container}>
				<Text style={styles.title}>Login</Text>
				<TextInput 
					style={styles.input}
					onChangeText={(text) => this.setState({email: text})} 
					placeholder='Enter Email'
				/>
				<TextInput 
					style={styles.input} 
					secureTextEntry={true}
					onChangeText={(text) => this.setState({password: text})} 
					placeholder='Enter Password'
				/>
				<Text onPress={this._goRegister.bind(this)}>Already an existing user?</Text>
				<Swiper styles={styles} innerText={"Swipe to Login"} swipe_callback={this._loginUser.bind(this)}/>
			</View>
		)
	}
}

module.exports = LoginOnly