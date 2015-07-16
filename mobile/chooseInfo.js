'use strict';
var React = require('react-native'),
	state = require('./state')

var {
  AppRegistry,
  ListView,
  Image,
  Navigator,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback
} = React;

class ChooseInfo extends React.Component{
	constructor(props){
		super(props)
		this.state={
			name: false,
			email: false,
			phone: false,
			company: false,
			linkedin: false,
			facebook: false,
			twitter: false,
			instagram: false,
			github: false,
			site: false
		}
	}

	componentDidMount(){
		
	}

	_backToList(){
		this.props.navigator.replace({id: "ProximityList"})
	}

	_toggle(){
		console.log(this.refs)
	}

	render(){
		var styles = this.props.styles
		console.log(state.user())
		return(
			<View style={styles.container}>
				<View style={styles.header}>
					<Text style={styles.headerText}>Choose what information to send:</Text>
				</View>
				<View style={styles.infoOptions}>
					<View style={styles.options}>
						<TouchableWithoutFeedback onPress={() => this._toggle()}>
							<View style={[styles.contactParam, this.state.name && styles.send]}>
								<Text style={styles.navName} ref="name">Hello</Text>
							</View>
						</TouchableWithoutFeedback>
					</View>
					<View style={styles.options}>
						<TouchableWithoutFeedback onPress={() => this._toggle()}>
							<View style={[styles.contactParam, this.state.name && styles.send]}>
								<Text style={styles.navName} ref="name">Hello</Text>
							</View>
						</TouchableWithoutFeedback>
					</View>
					<View style={styles.options}>
						<TouchableWithoutFeedback onPress={() => this._toggle()}>
							<View style={[styles.contactParam, this.state.name && styles.send]}>
								<Text style={styles.navName} ref="name">Hello</Text>
							</View>
						</TouchableWithoutFeedback>
					</View>
					<View style={styles.options}>
						<TouchableWithoutFeedback onPress={() => this._toggle()}>
							<View style={[styles.contactParam, this.state.name && styles.send]}>
								<Text style={styles.navName} ref="name">Hello</Text>
							</View>
						</TouchableWithoutFeedback>
					</View>
					<View style={styles.options}>
						<TouchableWithoutFeedback onPress={() => this._toggle()}>
							<View style={[styles.contactParam, this.state.name && styles.send]}>
								<Text style={styles.navName} ref="name">Hello</Text>
							</View>
						</TouchableWithoutFeedback>
					</View>
					<View style={styles.options}>
						<TouchableWithoutFeedback onPress={() => this._toggle()}>
							<View style={[styles.contactParam, this.state.name && styles.send]}>
								<Text style={styles.navName} ref="name">Hello</Text>
							</View>
						</TouchableWithoutFeedback>
					</View>
					<View style={styles.options}>
						<TouchableWithoutFeedback onPress={() => this._toggle()}>
							<View style={[styles.contactParam, this.state.name && styles.send]}>
								<Text style={styles.navName} ref="name">Hello</Text>
							</View>
						</TouchableWithoutFeedback>
					</View>
					<View style={styles.options}>
						<TouchableWithoutFeedback onPress={() => this._toggle()}>
							<View style={[styles.contactParam, this.state.name && styles.send]}>
								<Text style={styles.navName} ref="name">Hello</Text>
							</View>
						</TouchableWithoutFeedback>
					</View>
					<View style={styles.options}>
						<TouchableWithoutFeedback onPress={() => this._toggle()}>
							<View style={[styles.contactParam, this.state.name && styles.send]}>
								<Text style={styles.navName} ref="name">Hello</Text>
							</View>
						</TouchableWithoutFeedback>
					</View>
					<View style={styles.options}>
						<TouchableWithoutFeedback onPress={() => this._toggle()}>
							<View style={[styles.contactParam, this.state.name && styles.send]}>
								<Text style={styles.navName} ref="name">Hello</Text>
							</View>
						</TouchableWithoutFeedback>
					</View>
				</View>
				<View style={styles.swiper}>
					<Text style={styles.demand} onPress={this._backToList.bind(this)}>Swipe to send request</Text>
				</View>
			</View> 
		)
	}
}

module.exports = ChooseInfo