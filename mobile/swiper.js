'use strict';
var React = require('react-native'),
	Dimensions = require('Dimensions')

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

	// componentWillMount(){
	// 	console.log('hi')
	//     this._panResponder = PanResponder.create({
	//     	onStartShouldSetPanResponder: () => true,
	//     	onMoveShouldSetPanResponder: () => true,
	//         onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
	//         onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

	//         onPanResponderGrant: (evt, gestureState) => {
	// 			console.log("RESPONDER GRANTED")
	// 	        // The guesture has started. Show visual feedback so the user knows
	// 	        // what is happening!

	// 	        // gestureState.{x,y}0 will be set to zero now
	//         },
	//         onPanResponderMove: (evt, gestureState) => {
	// 			console.log("RESPONDER MOVING")	
	// 	        // The most recent move distance is gestureState.move{X,Y}

	// 	        // The accumulated gesture distance since becoming responder is
	// 	        // gestureState.d{x,y}
	//         },
	//         onPanResponderTerminationRequest: (evt, gestureState) => true,
	//         onPanResponderRelease: (evt, gestureState) => {
	//         	console.log("RESPONDER RELEASED")
	//         },
	//         onPanResponderTerminate: (evt, gestureState) => {
	//         	console.log("RESPONDER TERMINATED")
	//         }
	//     })
	// }

	 // this._previousLeft = 0
	 //    this._previousBottom = 0
	 //    this._circleStyles = {
	 //    	left: this._previousLeft,
	 //    	bottom: this._previousTop,
	 //    }

	// _handleGrant(){
	// 	console.log('MOVE INITIATED')
	// }

	// _handleMove(){
	// 	console.log('HANDLING MOVEMENT')
	// }

	// _handleRelease(){
	// 	console.log("HANDLING RELEASE")
	// }

	// _handleEnd(){
	// 	console.log("HANDLING TERMINATION")
	// }
	// 
	// {...this._panResponder.panHandlers}

	_handleSwipe(cb){
		cb()
	}

	render(){
		console.log(width, height)
		var styles = this.props.styles
		var callback = this.props.swipe_callback
		return(
			<TouchableWithoutFeedback onPress={this._handleSwipe.bind(this, callback)}>
				<View style={[styles.swiper, !!this.props.color && {backgroundColor: this.props.color}]}>
					<Text style={styles.demand}>{this.props.innerText || "Swipe to Save"}</Text>
				</View>
			</TouchableWithoutFeedback>
		)
	}
}

module.exports = Swiper