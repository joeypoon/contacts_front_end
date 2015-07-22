'use strict';

var React = require('react-native'),
	Swiper = require('./swiper'),
	state = require('./state')

var {
  Text,
  View,
  TextInput,
  Navigator
} = React;

class RegisterOnly extends React.Component{
	constructor(props){
		super(props)
		this.state = {
      		newName: '',
      		newEmail: '',
			newPassword: '',
			newPassword_confirmation: '',
			keyboard: false
		}
	}

	_registerUser(){
		var {newName, newEmail, newPassword, newPassword_confirmation} = this.state
		
		state.register(newName, newEmail, newPassword, newPassword_confirmation)
			.then(() => {
				this.props.navigator.push({id: "ProfileView", name: "Profile"})
			})
			.catch((e) => {
				console.log(e)
				// AlertIOS.alert('Signup Failed', e)
			})
  	}

  	_goLogin(){
		this.props.navigator.replace({id: "LoginOnly", sceneConfig: Navigator.SceneConfigs.FloatFromBottom})
	}

	render(){
		var styles=this.props.styles
		return(
			<View style={[styles.container, !!this.state.keyboard && styles.keyboardView]}>
				<View style={styles.registerTitle}><Text style={styles.title}>Register</Text></View>
				<TextInput
					style={styles.loginInput}
					onChangeText={(text) => this.setState({newName: text})}
					placeholder='Enter Name'
					onFocus={() => this.setState({keyboard: true})}
					onBlur={() => this.setState({keyboard: false})}
				/>
				<TextInput
					style={styles.loginInput}
					onChangeText={(text) => this.setState({newEmail: text})}
					placeholder='Enter Email'
					onFocus={() => this.setState({keyboard: true})}
					onBlur={() => this.setState({keyboard: false})}
				/>
				<TextInput
					style={styles.loginInput}
					secureTextEntry={true}
					onChangeText={(text) => this.setState({newPassword: text})}
					placeholder='Enter Password'
					onFocus={() => this.setState({keyboard: true})}
					onBlur={() => this.setState({keyboard: false})}
				/>
				<TextInput
					style={styles.loginInput}
					secureTextEntry={true}
					onChangeText={(text) => this.setState({newPassword_confirmation: text})}
					placeholder='Confirm Password' 
					onFocus={() => this.setState({keyboard: true})}
					onBlur={() => this.setState({keyboard: false})}
				/>
				<Text onPress={this._goLogin.bind(this)}>Already an existing user?</Text>
				<Swiper styles={styles} innerText={"Swipe to Register"} swipe_callback={this._registerUser.bind(this)}/>
			</View>
		)
	}
}

module.exports = RegisterOnly