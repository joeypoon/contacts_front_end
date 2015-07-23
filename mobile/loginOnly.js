'use strict';

var React = require('react-native'),
	Swiper = require('./swiper'),
	state = require('./state')
var {
  Text,
  View,
  TextInput,
  Navigator,
  Image,
  AlertIOS
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
	    		this.props.navigator.push({id: "ProximityList", name: "Users Near You"})
	    	})
	    	.catch((e) => {
		    	AlertIOS.alert('Login Failed', e)
		    })
	}

	_goRegister(){
		this.props.navigator.replace({id: "RegisterOnly", name: "Register", sceneConfig: Navigator.SceneConfigs.FloatFromBottom})
	}

	_goHome(){
		this.props.navigator.popToTop()
	}

	// <View style={styles.lowerLeft}>
	// 							<TextInput 
	// 								style={styles.inputEntry}
	// 								onChangeText={(text) => this.setState({email: text})} 
	// 								placeholder='Enter Email'
	// 							/>
	// 						</View>
	// 						<View style={styles.lowerRight}>
	// 							<TextInput 
	// 								style={styles.inputEntry} 
	// 								secureTextEntry={true}
	// 								onChangeText={(text) => this.setState({password: text})} 
	// 								placeholder='Enter Password'
	// 							/>
	// 						</View>

	render(){
		var styles=this.props.styles
		var nav = this.props.navigator
		console.log(this.state.keyboard)
		return(
			<View style={styles.container}>
				<View style={styles.cardContainer}>
					<Image style={styles.loginCard} source={require('image!cardStock')}>
						<View style={styles.cardHeader}>
							<Text>LOGIN</Text>
						</View>
						<View style={styles.cardInfo}>
							<View style={styles.cardInputHolder}>

							</View>
							<View style={styles.cardInputHolder}>

							</View>
						</View>
					</Image>
				</View>
				<Swiper 
					backRoute={'Home Screen'} 
					forwardRoute={'Users Near You'} 
					styles={styles} 
					color={"#DFD2F6"} 
					innerText={"Swipe to Login"} 
					callback={this._loginUser.bind(this)}
					callback_back={this._goHome.bind(this)}
				/>
			</View>
		)
	}
}

module.exports = LoginOnly