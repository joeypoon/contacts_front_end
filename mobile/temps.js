// 'use strict';

// var React = require('react-native');
// var {
//   Text,
//   View,
//   TextInput
// } = React;

// var REMOTE = 'https://contacts-back-end.herokuapp.com'

// class LoginView extends React.Component{
// 	constructor(props){
// 		super(props)
// 	}

// 	_goLogin(){
// 		this.props.navigator.push({id: "LoginOnly"})
// 	}

// 	_goSignup(){
// 		this.props.navigator.push({id: "SignupOnly"})
// 	}

// 	render(){
// 		var styles=this.props.styles
// 		return(
// 			<View style={styles.container}>
// 				<View>
// 					<Text onPress={() => this._goLogin.bind(this)}> Swipe to Login</Text>
// 				</View>
// 				<View>
// 					<Text onPress={() => this._goSignup.bind(this)}>Swipe to SignUp</Text>
// 				</View>
// 			</View>
// 		)
// 	}
// }

// module.exports = LoginView;

//     LoginOnly = require('./loginOnly'),
//     SignupOnly = require('./signupOnly'),

//       case "LoginOnly":
//         return <LoginOnly navigator={nav} styles={styles} route={route}/>
//       case "SignupOnly":
//         return <SignupOnly navigator={nav} styles={styles} route={route}/>

//         