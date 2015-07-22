'use strict';

var React = require('react-native'),
	Swiper = require('./swiper'),
	Tiles = require('./tiles'),
	state = require('./state')

var {
  	Text,
	View,
	TextInput,
	Navigator
} = React;

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

	//<Text style={styles.title}>AdMi</Text>

	render(){
		var styles=this.props.styles
		return(
			<View style={styles.container}>
				<View style={styles.titlePage}>
					<Tiles styles={styles}/>
				</View>
				<Swiper styles={styles} color={"#ddd"} innerText={"Swipe to Login"} swipe_callback={this._goLogin.bind(this)}/>
				<Swiper styles={styles} color={"#bbb"} innerText={"Swipe to Register"} swipe_callback={this._goRegister.bind(this)}/>
			</View>
		)
	}
}

module.exports = LoginView;
