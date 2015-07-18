'use strict';
var React = require('react-native')

var {
  Text,
  View,
  TouchableWithoutFeedback
} = React;

class Swiper extends React.Component{
	constructor(props){
		super(props)
	}

	_handleSwipe(cb){
		cb()
	}

	render(){
		var styles = this.props.styles
		var callback = this.props.swipe_callback
		return(
			<TouchableWithoutFeedback onPress={this._handleSwipe.bind(this, callback)}>
				<View style={styles.swiper}>
					<Text style={styles.demand}>Swipe to Save</Text>
				</View>
			</TouchableWithoutFeedback>
		)
	}
}

module.exports = Swiper