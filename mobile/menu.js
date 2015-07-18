'use strict';
var React = require('react-native');

var {
  Image,
  Text,
  View,
  TextInput,
  TouchableHighlight
} = React;

class Menu extends React.Component{
	constructor(props){
		super(props)
		this.state=this.props.parentState
	}

	componentWillReceiveProps(newProps){
		this.setState(newProps.parentState)
	}

	render(){
		var styles=this.props.styles
		return(
			<View style={[styles.menu, this.state.menuVisible && styles.menuVisible]}>
			</View>
		)
	}
}

module.exports = Menu