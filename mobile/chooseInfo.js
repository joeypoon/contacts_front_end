'use strict';
var React = require('react-native');

var {
  AppRegistry,
  ListView,
  Image,
  Navigator,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} = React;

class ChooseInfo extends React.Component{
	constructor(props){
		super(props)
	}

	_backToList(){
		this.props.navigator.pop()
	}

	render(){
		var styles = this.props.styles
		return(
			<View style={styles.container}>
				<Text onPress={this._backToList.bind(this)}>Choose info to Send</Text>
			</View> 
		)
	}
}

module.exports = ChooseInfo