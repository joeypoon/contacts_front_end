'use strict';
var React = require('react-native');

var {
  Image,
  Text,
  View,
  TextInput,
  TouchableHighlight
} = React;


class ProfileView extends React.Component{
	constructor(props){
		super(props)
	}

	_takeMeHome(){
		this.props.navigator.push({id: "ProximityList"})
	}

	render(){
		var styles = this.props.styles
		console.log('rendering profile')
		return(
			<View style={styles.container}>
				<Text onPress={this._takeMeHome.bind(this)} >Profile View, reroute to ProxList when done</Text>
			</View>
		)
	}
}

module.exports = ProfileView;