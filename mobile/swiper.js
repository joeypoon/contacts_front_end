'use strict';
var React = require('react-native'),
	Dimensions = require('Dimensions'),
	SwipeableElement = require('./swipeableElement')

var {width, height, scale} = Dimensions.get('window')

var {
  Text,
  View,
  PanResponder,
  TouchableWithoutFeedback
} = React;


class Swiper extends React.Component{
	constructor(props){
		super(props)
	}

	_handleSwipeRight(cb){
		cb()
	}

	_handleSwipeLeft(){
		this.props.navigator.pop()
	}

	// <TouchableWithoutFeedback onPress={this._handleSwipe.bind(this, callback)}>
	// 			<View style={[styles.swiper, !!this.props.color && {backgroundColor: this.props.color}]}>
	// 				<Text style={styles.demand}>{this.props.innerText || "Swipe to Save"}</Text>
	// 			</View>
	// 		</TouchableWithoutFeedback>

	render(){
		console.log(width, height)
		var styles = this.props.styles
		var callback = this.props.swipe_callback
		return(
			<SwipeableElement
				color={this.props.color}
	        	component={<Text style={{alignSelf: 'center', fontSize: 30, fontFamily: 'Roboto-Light'}}>{this.props.innerText}</Text>}
	        	swipeRightTextColor={'red'}
	        	swipeRightBackgroundColor={'#000000'}
	        	swipeLeftTextColor={'black'}
	        	swipeLeftBackgroundColor={'#FF0000'}
	        	onSwipeRight={this._handleSwipeRight.bind(this, callback)}
	        	onSwipeLeft={this._handleSwipeLeft.bind(this, callback)} 
          	/>
		)
	}
}

module.exports = Swiper