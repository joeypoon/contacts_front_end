'use strict';
var React = require('react-native'),
	Swiper = require('./swiper'),
	state = require('./state')

var {
  AppRegistry,
  ListView,
  Image,
  Navigator,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  PanResponder,
  AlertIOS
} = React;

class ChooseInfo extends React.Component{
	constructor(props){
		super(props)
		this.state={
			bool_name: true,
			bool_email: true,
			bool_phone: false,
			bool_company: true,
			bool_linkedin: false,
			bool_facebook: false,
			bool_twitter: false,
			bool_instagram: false,
			bool_github: false,
			bool_site: false,
			name: '',
			email: '',
			phone: '',
			company: '',
			linkedin: '',
			facebook: '',
			twitter: '',
			instagram: '',
			github: '',
			site: ''
		}
	}

	componentDidMount(){
		state.user().then((data) => this.setState(data))
  	}

	_toggle(key){
		var newState = {}
		newState[key] = !this.state[key]
		this.setState(newState)
	}

	_checkUser(){
		state.outbound_user().then((outbound_id) => this._makeRequest(outbound_id))
	}

	_makeRequest(outbound_id){
		console.log(outbound_id)
		var {bool_name, bool_email, bool_phone, bool_company, bool_linkedin, bool_facebook, bool_twitter, bool_instagram, bool_github, bool_site} = this.state
	    state.requestUser(outbound_id, bool_name, bool_email, bool_phone, bool_company, bool_linkedin, bool_facebook, bool_twitter, bool_instagram, bool_github, bool_site)
	    	.then(() => {
	    		this.props.navigator.push({id: "ProximityList"})
	    	})
	    	.catch((e) => {
		    	AlertIOS.alert('Request failed', e)
		    })
	}

	_goBack(){
		this.props.navigator.pop()
	}

	render(){
		var styles = this.props.styles
		var routes = this.props.navigator.getCurrentRoutes(),
			this_route_index = routes.length-1,
			last_route = routes[this_route_index-1]
		return(
			<View style={styles.container}>
				<View style={styles.header}>
					<Text style={styles.headerText}>Choose what information to send:</Text>
				</View>
				<View style={styles.infoOptions}>
					<View style={styles.options}>
						<TouchableWithoutFeedback>
							<View style={[styles.contactParam, this.state.bool_name && styles.send]}>
								<Text style={styles.navName}>{this.state.name}</Text>
							</View>
						</TouchableWithoutFeedback>
					</View>
					<View style={styles.options}>
						<TouchableWithoutFeedback>
							<View style={[styles.contactParam, this.state.bool_email && styles.send]}>
								<Text style={styles.navName}>{this.state.email}</Text>
							</View>
						</TouchableWithoutFeedback>
					</View>
					<View style={styles.options}>
						<TouchableWithoutFeedback>
							<View style={[styles.contactParam, this.state.bool_company && styles.send]}>
								<Text style={styles.navName}>{this.state.company}</Text>
							</View>
						</TouchableWithoutFeedback>
					</View>
					{!!this.state.phone &&
						<View style={styles.options}>
							<TouchableWithoutFeedback onPress={this._toggle.bind(this, 'bool_phone')}>
								<View style={[styles.contactParam, this.state.bool_phone && styles.send]}>
									<Text style={styles.navName}>{this.state.phone}</Text>
								</View>
							</TouchableWithoutFeedback>
						</View>
					}
					{!!this.state.linkedin &&
						<View style={styles.options}>
							<TouchableWithoutFeedback onPress={this._toggle.bind(this, 'bool_linkedin')}>
								<View style={[styles.contactParam, this.state.bool_linkedin && styles.send]}>
									<Text style={styles.navName}>{this.state.linkedin}</Text>
								</View>
							</TouchableWithoutFeedback>
						</View>
					}
					{!!this.state.facebook &&
						<View style={styles.options}>
							<TouchableWithoutFeedback onPress={this._toggle.bind(this, 'bool_facebook')}>
								<View style={[styles.contactParam, this.state.bool_facebook && styles.send]}>
									<Text style={styles.navName}>{this.state.facebook}</Text>
								</View>
							</TouchableWithoutFeedback>
						</View>
					}
					{!!this.state.twitter &&
						<View style={styles.options}>
							<TouchableWithoutFeedback onPress={this._toggle.bind(this, 'bool_twitter')}>
								<View style={[styles.contactParam, this.state.bool_twitter && styles.send]}>
									<Text style={styles.navName}>{this.state.twitter}</Text>
								</View>
							</TouchableWithoutFeedback>
						</View>
					}
					{!!this.state.instagram &&
						<View style={styles.options}>
							<TouchableWithoutFeedback onPress={this._toggle.bind(this, 'bool_instagram')}>
								<View style={[styles.contactParam, this.state.bool_instagram && styles.send]}>
									<Text style={styles.navName}>{this.state.instagram}</Text>
								</View>
							</TouchableWithoutFeedback>
						</View>
					}
					{!!this.state.github &&
						<View style={styles.options}>
							<TouchableWithoutFeedback onPress={this._toggle.bind(this, 'bool_github')}>
								<View style={[styles.contactParam, this.state.bool_github && styles.send]}>
									<Text style={styles.navName}>{this.state.github}</Text>
								</View>
							</TouchableWithoutFeedback>
						</View>
					}
					{!!this.state.site &&
						<View style={styles.options}>
							<TouchableWithoutFeedback onPress={this._toggle.bind(this, 'bool_site')}>
								<View style={[styles.contactParam, this.state.bool_site && styles.send]}>
									<Text style={styles.navName}>{this.state.site}</Text>
								</View>
							</TouchableWithoutFeedback>
						</View>
					}
				</View>
				<Swiper 
					backRoute={last_route.name} 
					forwardRoute={'Users Near You'} 
					styles={styles} 
					color={"#DFD2F6"} 
					innerText={"Swipe to Share"} 
					callback={this._checkUser.bind(this)}
					callback_back={this._goBack.bind(this)}
				/>
			</View> 
		)
	}
}

module.exports = ChooseInfo