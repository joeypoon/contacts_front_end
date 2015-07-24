'use strict';
var React = require('react-native'),
	NavigationBarWithoutSearch = require('./navigationBarWithoutSearch'),
	Menu = require('./menu'),
	Swiper = require('./swiper'),
	state = require('./state')

var {
  Image,
  Text,
  View,
  TextInput,
  AlertIOS,
  TouchableHighlight
} = React;

class UserProfileBody extends React.Component{
	constructor(props){
		super(props)
	}

	render(){
		var parent=this.props.parent
		var styles=this.props.styles
		return (
			<View style={styles.bodyWithSwiper}>
				<View style={styles.topProfileInfo}>
					<View style={[styles.topSection, {alignItems: 'center'}]}>
						<Image 
							style={styles.profilePic} 
							source={{uri: `${parent.state.avatar}`}} 
						/>
					</View>
					<View style={styles.topSection}>
						<View style={styles.mainInputs}>
							<TextInput style={styles.nameInput} 
								multiline={true} 
								value={parent.state.name}
								editable={false}
							/>
							<TextInput style={styles.companyInput} 
								editable={false}
								onChangeText={(text) => this.temps.company = text}
								value={parent.state.company}
							/>
						</View>
					</View>
				</View>
				<View style={styles.bottomProfileInfo}>
					{!!parent.state.email &&
					<View style={styles.updateInfoHolder}>
						<View style={styles.imageHolder}>
							<Image 
								style={styles.infoLogo}
								source={require('image!email')}
							/>
						</View>
						<View style={styles.updateEntry}>
							<TextInput style={styles.input} 
								editable={false}
								value={parent.state.email}
							/>
						</View>
					</View>
					}
					{!!parent.state.phone &&
					<View style={styles.updateInfoHolder}>
						<View style={styles.imageHolder}>
							<Image 
								style={styles.infoLogo}
								source={require('image!phone')}
							/>
						</View>
						<View style={styles.updateEntry}>
							<TextInput style={styles.input}
								keyboardType='numeric'
								value={parent.state.phone}
								editable={false}
							/>
						</View>
					</View>
					}
					{!!parent.state.linkedin &&
					<View style={styles.updateInfoHolder}>
						<View style={styles.imageHolder}>
							<Image 
								style={styles.infoLogo}
								source={require('image!linkedin')}
							/>
						</View>
						<View style={styles.updateEntry}>
							<TextInput style={styles.input} 
								placeholder='LinkedIn' 
								value={parent.state.linkedin}
								editable={false}
							/>
						</View>
					</View>
					}
					{!!parent.state.facebook &&
					<View style={styles.updateInfoHolder}>
						<View style={styles.imageHolder}>
							<Image 
								style={styles.infoLogo}
								source={require('image!facebook')}
							/>
						</View>
						<View style={styles.updateEntry}>
							<TextInput style={styles.input} 
								placeholder='Facebook' 
								value={parent.state.facebook}
								editable={false}
							/>
						</View>
					</View>
					}
					{!!parent.state.twitter &&
					<View style={styles.updateInfoHolder}>
						<View style={styles.imageHolder}>
							<Image 
								style={styles.infoLogo}
								source={require('image!twitter')}
							/>
						</View>
						<View style={styles.updateEntry}>
							<TextInput style={styles.input} 
								placeholder='Twitter' 
								value={parent.state.twitter}
								editable={false}
							/>
						</View>
					</View>
					}
					{!!parent.state.skype &&
					<View style={styles.updateInfoHolder}>
						<View style={styles.imageHolder}>
							<Image 
								style={styles.infoLogo}
								source={require('image!skype')}
							/>
						</View>
						<View style={styles.updateEntry}>
							<TextInput style={styles.input} 
								placeholder='Skype' 
								value={parent.state.skype}
								editable={false}
							/>
						</View>
					</View>
					}
					{!!parent.state.instagram &&
					<View style={styles.updateInfoHolder}>
						<View style={styles.imageHolder}>
							<Image 
								style={styles.infoLogo}
								source={require('image!instagram')}
							/>
						</View>
						<View style={styles.updateEntry}>
							<TextInput style={styles.input} 
								placeholder='Instagram' 
								value={parent.state.instagram}
								editable={false}
							/>
						</View>
					</View>
					}
					{!!parent.state.github &&
					<View style={styles.updateInfoHolder}>
						<View style={styles.imageHolder}>
							<Image 
								style={styles.infoLogo}
								source={require('image!github')}
							/>
						</View>
						<View style={styles.updateEntry}>
							<TextInput style={styles.input} 
								placeholder='Github' 
								value={parent.state.github}
								editable={false}
							/>
						</View>
					</View>
					}
					{!!parent.state.site &&
					<View style={styles.updateInfoHolder}>
						<View style={styles.imageHolder}>
							<Image 
								style={styles.infoLogo}
								source={require('image!site')}
							/>
						</View>
						<View style={styles.updateEntry}>
							<TextInput style={styles.input} 
								placeholder='Site' 
								value={parent.state.site}
								editable={false}
							/>
						</View>
					</View>
					}
				</View>
				<Menu styles={styles} navigator={this.props.navigator} parent={parent} />
			</View>
		)
	}
}

class UserProfile extends React.Component{
	constructor(props){
		super(props)

		this.state={
			name: '',
			email: '',
			phone: '',
			company: '',
			linkedin: '',
			facebook: '',
			twitter: '',
			skype: '',
			instagram: '',
			github: '',
			site: '',
			avatar: ''
		}
	}

	componentDidMount(){
		state.connected_user()
		.then((other_id) => state.contactProfile(other_id))
		.then((responseData) => {
			this.setState(responseData.user)
		})
		.catch((e) => {
	    	AlertIOS.alert('Update Failed', e)
		})
	}

	_returnToContacts(){
		this.props.navigator.pop()
	}

	render(){
		var styles = this.props.styles
		var routes = this.props.navigator.getCurrentRoutes(),
			this_route_index = routes.length-1,
			last_route = routes[this_route_index-1]
		return(
			<View style={styles.container}>
				<NavigationBarWithoutSearch styles={styles} route={this.props.route} parent={this}/>
				<UserProfileBody navigator={this.props.navigator} styles={styles} parent={this}/>
				<Swiper 
					backRoute={last_route.name} 
					forwardRoute={last_route.name} 
					styles={styles} 
					innerText={"Swipe to Return"} 
					callback={this._returnToContacts.bind(this)}
					callback_back={this._returnToContacts.bind(this)}
				/>
			</View>
		)
	}
}

module.exports = UserProfile;