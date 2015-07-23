'use strict';

var React = require('react-native'),
	Swiper = require('./swiper'),
	state = require('./state')

var {
  Text,
  View,
  TextInput,
  Navigator,
  AlertIOS,
  Image
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
				AlertIOS.alert('Signup Failed', e)
			})
  	}

  	_goLogin(){
		this.props.navigator.replace({id: "LoginOnly", name: "Login", sceneConfig: Navigator.SceneConfigs.FloatFromBottom})
	}

	_goHome(){
		this.props.navigator.popToTop()
	}

	//<Text onPress={this._goLogin.bind(this)}>Already an existing user?</Text>

	render(){
		var styles=this.props.styles
		var nav = this.props.navigator
		var routes = this.props.navigator.getCurrentRoutes(),
			this_route_index = routes.length-1,
			last_route = routes[this_route_index-1]
		return(
			<View style={styles.navigator}>
				<View style={styles.backgroundColor}>
					<Image style={styles.middleLogo} source={require('image!connect')}/>
				</View>
				{!this.state.loading &&
					<View style={styles.container}>
						<View style={styles.bodyWithOneSwiper}>
							<View style={styles.placeholderUpper}>
							</View>
							<View style={styles.middleContainer}>
								<View style={styles.loginHolder}>
									<Text style={styles.authHeader}>Register</Text>
								</View>
								<View style={styles.inputHolder}>
									<TextInput
										style={styles.inputEntry}
										onChangeText={(text) => this.setState({newName: text})}
										placeholder='Enter Name'
									/>
									<TextInput
										style={styles.inputEntry}
										onChangeText={(text) => this.setState({newEmail: text})}
										placeholder='Enter Email'
									/>
									<TextInput
										style={styles.inputEntry}
										secureTextEntry={true}
										onChangeText={(text) => this.setState({newPassword: text})}
										placeholder='Enter Password'
									/>
									<TextInput
										style={styles.inputEntry}
										secureTextEntry={true}
										onChangeText={(text) => this.setState({newPassword_confirmation: text})}
										placeholder='Confirm Password' 
									/>
								</View>
							</View>
							<View style={styles.placeholderBottom}>
							</View>
						</View>
						<Swiper 
							backRoute={last_route.name} 
							forwardRoute={'Your Profile'} 
							styles={styles} 
							innerText={"Swipe to Register"} 
							callback={this._registerUser.bind(this)}
							callback_back={this._goHome.bind(this)}
						/>
					</View>
				}
				{!!this.state.loading &&
					<View style={styles.container}>
						<View style={styles.centeredContainer}>
							<Image 
								style={[styles.loadingLogo]} 
								source={require('image!connect')}
							/>
						</View>
					</View>
				}
			</View>
		)
	}
}

module.exports = RegisterOnly