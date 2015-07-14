'use strict';
var React = require('react-native');

var {
  Image,
  Text,
  View,
  TextInput,
  TouchableHighlight
} = React;

class NavigationBarWithoutSearch extends React.Component{
	constructor(props){
		super(props)
	}

	render(){
		var route = this.props.route
		var styles = this.props.styles
		return(
			<View style={styles.navBarContainer}>
				<View style={styles.logo}></View>
				<View style={styles.navNameContainer}>
					<Text style={styles.navName}>{route.name}</Text>
				</View>
				<View style={styles.logo}>
					<Text style={styles.hamburgerMenu}>-</Text>
					<Text style={styles.hamburgerMenu}>-</Text>
					<Text style={styles.hamburgerMenu}>-</Text>
				</View>
			</View>
		)
	}
}

module.exports = NavigationBarWithoutSearch