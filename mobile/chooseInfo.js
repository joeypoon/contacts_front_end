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
		this.props.navigator.replace({id: "ProximityList"})
	}

	render(){
		var styles = this.props.styles
		return(
			<View style={styles.container}>
				<View style={styles.header}>
					<Text style={styles.headerText}>Choose what information to send:</Text>
				</View>
				<View style={styles.infoOptions}>

				</View>
				<View style={styles.swiper}>
					<Text style={styles.demand} onPress={this._backToList.bind(this)}>Swipe to send request</Text>
				</View>
			</View> 
		)
	}
}

module.exports = ChooseInfo