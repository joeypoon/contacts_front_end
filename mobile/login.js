'use strict';

var React = require('react-native'),
	Swiper = require('./swiper'),
	Tiles = require('./tiles'),
	state = require('./state')

var {
  	Text,
	View,
	TextInput,
	Navigator,
	AlertIOS
} = React;

class LoginView extends React.Component{
	constructor(props){
		super(props)
	}

	_goLogin(){
		this.props.navigator.push({id: 'LoginOnly', name: "Login", sceneConfig: Navigator.SceneConfigs.FloatFromLeft})
	}

	_goRegister(){
		this.props.navigator.push({id: 'RegisterOnly', name: "Register", sceneConfig: Navigator.SceneConfigs.FloatFromLeft})
	}

	render(){
		var styles=this.props.styles
		return(
			<View style={styles.container}>
				<View style={styles.titlePage}>
					<View style={styles.cardholder}>
						<View style={styles.card}>
						</View>
						<Text style={styles.title}>AdMi</Text>
					</View>
				</View>
				<Swiper 
					backRoute={'Login'} 
					forwardRoute={'Login'} 
					styles={styles} 
					color={"#DFD2F6"} 
					innerText={"Swipe to Login"} 
					callback={this._goLogin.bind(this)}
					callback_back={this._goLogin.bind(this)}
				/>
				<Swiper 
					backRoute={'Register'} 
					forwardRoute={'Register'} 
					styles={styles} 
					color={"#BAA1E4"} 
					innerText={"Swipe to Register"} 
					callback={this._goRegister.bind(this)}
					callback_back={this._goRegister.bind(this)}
				/>
			</View>
		)
	}
}

module.exports = LoginView;
