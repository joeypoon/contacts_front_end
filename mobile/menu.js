'use strict';
var React = require('react-native'),
	state = require('./state')

var {
  Image,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  TouchableWithoutFeedback
} = React;

class Menu extends React.Component{
	constructor(props){
		super(props)
	}

	_logOut(){
		state.user(null)
			.then(() => this.props.navigator.replace({id: 'LoginView'}))
	}

	_route(route_id){
		console.log('routing')
		this.props.navigator.push({id: route_id})
	}

	render(){
		var parent=this.props.parent
		var styles=this.props.styles
		console.log(parent.state.menuVisible)
		return(
			<View style={[styles.menu, parent.state.menuVisible && styles.showMenu]}>
				<TouchableWithoutFeedback onPress={this._route.bind(this, "ProfileView")}>
					<View style={[styles.menuItem]}>
						<Text>Profile</Text>
					</View>
				</TouchableWithoutFeedback>
				<TouchableWithoutFeedback onPress={this._route.bind(this, "ProximityList")}>
					<View style={[styles.menuItem]}>
						<Text>Proximity List</Text>
					</View>
				</TouchableWithoutFeedback>
				<TouchableWithoutFeedback onPress={this._route.bind(this, "ContactList")}>
					<View style={[styles.menuItem]}>
						<Text>Contact List</Text>
					</View>
				</TouchableWithoutFeedback>
				<TouchableWithoutFeedback onPress={this._route.bind(this, "PendingContacts")}>
					<View style={[styles.menuItem]}>
						<Text>Pending Contacts</Text>
					</View>
				</TouchableWithoutFeedback>
				<TouchableWithoutFeedback onPress={this._logOut.bind(this)}>
					<View style={[styles.menuItem]}>
						<Text>Logout</Text>
					</View>
				</TouchableWithoutFeedback>
			</View>
		)
	}
}

module.exports = Menu