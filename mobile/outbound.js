'use strict';

var React = require('react-native');
var {
 AppRegistry,
  ListView,
  Image,
  Text,
  View
} = React;

class Outbound extends React.Component{
	constructor(props){
		super(props)
	}

	render(){
		var styles = this.props.styles
		return(
			<View style={[styles.container, styles.outbound]}>
		        <Text>
	        	  Outbound Pending Contacts
		        </Text>
	    	</View>
		)
	}
}

module.exports = Outbound