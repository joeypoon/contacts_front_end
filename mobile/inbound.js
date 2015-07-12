'use strict';

var React = require('react-native');
var {
 AppRegistry,
  ListView,
  Image,
  Text,
  View,
  TouchableHighlight
} = React;

class Inbound extends React.Component{
	constructor(props){
		super(props)
	}

	render(){
		var styles = this.props.styles
		return(
			<View style={[styles.container, styles.inbound]}>
		        <Text>
	        	  Inbound Pending Contacts
		        </Text>
	    	</View>
		)
	}
}

module.exports = Inbound