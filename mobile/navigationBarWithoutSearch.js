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

class NavigationBarWithoutSearch extends React.Component{
	constructor(props){
		super(props)

		this.state=this.props.parentState
	}

	componentWillReceiveProps(newProps){
		this.setState(newProps.parentState)
	}

	_toggleMenu(){
		this.setState({menuVisible: !this.state.menuVisible})
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
				<TouchableWithoutFeedback onPress={this._toggleMenu.bind(this)}>
					<Image style={[styles.menuInitiator, this.state.menuVisible && styles.menuVisible]} source={require('image!hamburglar')} />
				</TouchableWithoutFeedback>
			</View>
		)
	}
}

module.exports = NavigationBarWithoutSearch