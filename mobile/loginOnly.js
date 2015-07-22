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

class LoginOnly extends React.Component{
	constructor(props){
		super(props)
		this.state = {
      		email: '',
      		password: '',
      		keyboard: false
		}
	}

	_loginUser(){
		var {email, password} = this.state

	    state.login(email, password)
	    	.then((data) => {
	    		this.props.navigator.push({id: "ProximityList", name: "People Near You"})
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
		var nav = this.props.navigator
		console.log(this.state.keyboard)
		return(
			<View style={[styles.container, !!this.state.keyboard && styles.keyboardView]}>
				<View style={styles.loginTitle}><Text style={styles.title}>Login</Text></View>
				<TextInput 
					style={styles.loginInput}
					onChangeText={(text) => this.setState({email: text})} 
					placeholder='Enter Email'
					onFocus={() => this.setState({keyboard: true})}
					onBlur={() => this.setState({keyboard: false})}
				/>
				<TextInput 
					style={styles.loginInput} 
					secureTextEntry={true}
					onChangeText={(text) => this.setState({password: text})} 
					placeholder='Enter Password'
					onFocus={() => this.setState({keyboard: true})}
					onBlur={() => this.setState({keyboard: false})}
				/>
				<Text onPress={this._goRegister.bind(this)}>Not already a user?</Text>
				<Swiper navigator={nav} styles={styles} innerText={"Swipe to Login"} swipe_callback={this._loginUser.bind(this)}/>
			</View>
		)
	}
}

module.exports = LoginOnly