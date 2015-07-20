'use strict';

var React = require('react-native'),
	Swiper = require('./swiper')

var {
  	Text,
	View,
	TextInput,
	Navigator,
	AlertIOS
} = React;

let state = require('./state'); // { user: prop() }

class LoginView extends React.Component{
	constructor(props){
		super(props)
	}

	_goLogin(){
		this.props.navigator.push({id: 'LoginOnly', sceneConfig: Navigator.SceneConfigs.FloatFromLeft})
	}

	_goRegister(){
		this.props.navigator.push({id: 'RegisterOnly', sceneConfig: Navigator.SceneConfigs.FloatFromLeft})
	}

	render(){
		var styles=this.props.styles
		return(
			<View style={styles.container}>
				<View style={styles.titlePage}>
					<Text>Swap Meet</Text>
				</View>
				<Swiper styles={styles} innerText={"Swipe to Login"} swipe_callback={this._goLogin.bind(this)}/>
				<Swiper styles={styles} innerText={"Swipe to Register"} swipe_callback={this._goRegister.bind(this)}/>
			</View>
		)
	}
}

module.exports = LoginView;
