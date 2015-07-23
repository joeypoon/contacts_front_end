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
  Animation,
  AlertIOS
} = React;

class LoginOnly extends React.Component{
	constructor(props){
		super(props)
		this.state = {
      		email: '',
      		password: '',
      		loading: false,
		}
	}

	//bounceValue: new Animated.Value(0)

	// componentDidMount(){
	// 	if (this.state.loading){
	// 	    this.state.bounceValue.setValue(1.5)
	// 	    Animated.spring(
	// 	      this.state.bounceValue,
	// 	      {
	// 	        toValue: 0.8,
	// 	        friction: 1,
	// 	      }
	// 	    ).start()
	// 	}
	// }

	_loginUser(){
		var {email, password} = this.state
		this.setState({loading: true})

	    state.login(email, password)
	    	.then((data) => {
	    		this.setState({loading: false})
	    		this.props.navigator.push({id: "ProximityList", name: "Users Near You"})
	    	})
	    	.catch((e) => {
	    		this.setState({loading: false})
		    	AlertIOS.alert('Login Failed', e)
		    })
	}

	_goRegister(){
		this.props.navigator.replace({id: "RegisterOnly", name: "Register", sceneConfig: Navigator.SceneConfigs.FloatFromBottom})
	}

	_goHome(){
		this.props.navigator.popToTop()
	}

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
									<Text style={styles.authHeader}>Login</Text>
								</View>
								<View style={styles.inputHolder}>
									<TextInput 
										style={styles.inputEntry}
										onChangeText={(text) => this.setState({email: text})} 
										placeholder='Enter Email'
									/>
									<TextInput 
										style={styles.inputEntry} 
										secureTextEntry={true}
										onChangeText={(text) => this.setState({password: text})} 
										placeholder='Enter Password'
									/>
								</View>
							</View>
							<View style={styles.placeholderBottom}>
							</View>
						</View>
						<Swiper 
							backRoute={'Home Screen'} 
							forwardRoute={'Users Near You'} 
							styles={styles} 
							innerText={"Swipe to Login"} 
							callback={this._loginUser.bind(this)}
							callback_back={this._goHome.bind(this)}
						/>
					</View>
				}
				{!!this.state.loading &&
					<View style={styles.container}>
						<View style={styles.centeredContainer}>
							<Image 
								style={[styles.middleLogo]} 
								source={require('image!connect')}
							/>
						</View>
					</View>
				}
			</View>
		)
	}
}

module.exports = LoginOnly