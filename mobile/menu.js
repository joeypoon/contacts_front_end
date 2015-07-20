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
			.then(() => this.props.navigator.popToTop())
	}

	_route(route_id, route_name){
		console.log('routing')
		this.props.navigator.push({id: route_id, name: route_name})
	}

	render(){
		var parent=this.props.parent
		var styles=this.props.styles
		console.log(parent.state.menuVisible)
		return(
			<View style={[styles.menu, parent.state.menuVisible && styles.showMenu]}>
				<TouchableWithoutFeedback onPress={this._route.bind(this, "ProfileView", "Profile")}>
					<View style={[styles.menuItem]}>
						<Text>Profile</Text>
					</View>
				</TouchableWithoutFeedback>
				<TouchableWithoutFeedback onPress={this._route.bind(this, "ProximityList", "People Near You")}>
					<View style={[styles.menuItem]}>
						<Text>Proximity List</Text>
					</View>
				</TouchableWithoutFeedback>
				<TouchableWithoutFeedback onPress={this._route.bind(this, "ContactList", "Contacts")}>
					<View style={[styles.menuItem]}>
						<Text>Contact List</Text>
					</View>
				</TouchableWithoutFeedback>
				<TouchableWithoutFeedback onPress={this._route.bind(this, "PendingContacts", "Pending Contacts")}>
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