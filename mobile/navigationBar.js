'use strict';
var React = require('react-native');

var {
  Image,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  TouchableWithoutFeedback
} = React;

class NavigationBar extends React.Component{
	constructor(props){
		super(props)
	}

	_toggleMenu(){
		var parent = this.props.parent
		parent.setState({menuVisible: !parent.state.menuVisible})
	}

	render(){
		var route = this.props.route
		var styles = this.props.styles
		var parent = this.props.parent
		return(
			<View style={styles.navBarContainer}>
				<View style={styles.logo}></View>
				<View style={styles.navNameContainer}>
					<TextInput style={styles.navInput} placeholder={route.name} />
				</View>
				<TouchableWithoutFeedback onPress={this._toggleMenu.bind(this)}>
					<Image style={[styles.menuInitiator, parent.state.menuVisible && styles.menuVisible]} source={require('image!hamburglar')} />
				</TouchableWithoutFeedback>
			</View>
		)
	}
}

module.exports = NavigationBar