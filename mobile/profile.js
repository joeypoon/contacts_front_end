'use strict';
var React = require('react-native'),
	NavigationBarWithoutSearch = require('./navigationBarWithoutSearch'),
	Menu = require('./menu'),
	Swiper = require('./swiper'),
	state = require('./state'),
	Dimensions = require('Dimensions')

var {width, height, scale} = Dimensions.get('window')

var {
	CameraRoll,
	Image,
	Text,
	View,
	TextInput,
	TouchableHighlight,
	AlertIOS,
	TouchableWithoutFeedback
} = React;

class ProfileBody extends React.Component{
	constructor(props){
		super(props)
		this.temps=this.props.parent.state
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
								placeholder='Name'
								multiline={true}
								onChangeText={(text) => this.temps.name = text}
								onEndEditing={() => parent.setState({name: this.temps.name})} 
								value={parent.state.name}
							/>
							<TextInput style={styles.companyInput} 
								placeholder='Company' 
								onChangeText={(text) => this.temps.company = text}
								onEndEditing={() => parent.setState({company: this.temps.company})} 
								value={parent.state.company}
							/>
						</View>
					</View>
				</View>
				<View style={styles.bottomProfileInfo}>
					<View style={styles.updateInfoHolder}>
						<View style={styles.imageHolder}>
							<Image 
								style={styles.infoLogo}
								source={require('image!email')}
							/>
						</View>
						<View style={styles.updateEntry}>
							<TextInput style={styles.input} 
								placeholder='Email' 
								onChangeText={(text) => this.temps.email = text}
								onEndEditing={() => parent.setState({email: this.temps.email})} 
								value={parent.state.email}
							/>
						</View>
					</View>
					<View style={styles.updateInfoHolder}>
						<View style={styles.imageHolder}>
							<Image 
								style={styles.infoLogo}
								source={require('image!phone')}
							/>
						</View>
						<View style={styles.updateEntry}>
							<TextInput style={styles.input}
								placeholder='Phone' 
								keyboardType='numeric'
								onChangeText={(text) => this.temps.phone = text}
								onEndEditing={() => parent.setState({phone: this.temps.phone})} 
								value={parent.state.phone}
							/>
						</View>
					</View>
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
								onChangeText={(text) => this.temps.linkedin = text}
								onEndEditing={() => parent.setState({linkedin: this.temps.linkedin})} 
								value={parent.state.linkedin}
							/>
						</View>
					</View>
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
								onChangeText={(text) => this.temps.facebook = text}
								onEndEditing={() => parent.setState({facebook: this.temps.facebook})} 
								value={parent.state.facebook}
							/>
						</View>
					</View>
					<View style={styles.updateInfoHolder}>
						<View style={styles.imageHolder}>
							<Image 
								style={styles.infoLogo}
								source={require('image!twitter')}
							/>
						</View>
						<View style={styles.updateEntry}>
							<TextInput style={styles.input} 
								onFocus={() => parent.setState({keyboard: true})}
								onBlur={() => parent.setState({keyboard: false})}
								placeholder='Twitter' 
								onChangeText={(text) => this.temps.twitter = text}
								onEndEditing={() => parent.setState({twitter: this.temps.twitter})} 
								value={parent.state.twitter}
							/>
						</View>
					</View>
					<View style={styles.updateInfoHolder}>
						<View style={styles.imageHolder}>
							<Image 
								style={styles.infoLogo}
								source={require('image!skype')}
							/>
						</View>
						<View style={styles.updateEntry}>
							<TextInput style={styles.input} 
								onFocus={() => parent.setState({keyboard: true})}
								onBlur={() => parent.setState({keyboard: false})}
								placeholder='Skype' 
								onChangeText={(text) => this.temps.skype = text}
								onEndEditing={() => parent.setState({skype: this.temps.skype})} 
								value={parent.state.skype}
							/>
						</View>
					</View>
					<View style={styles.updateInfoHolder}>
						<View style={styles.imageHolder}>
							<Image 
								style={styles.infoLogo}
								source={require('image!instagram')}
							/>
						</View>
						<View style={styles.updateEntry}>
							<TextInput style={styles.input} 
								onFocus={() => parent.setState({keyboard: true})}
								onBlur={() => parent.setState({keyboard: false})}
								placeholder='Instagram' 
								onChangeText={(text) => this.temps.instagram = text}
								onEndEditing={() => parent.setState({instagram: this.temps.instagram})} 
								value={parent.state.instagram}
							/>
						</View>
					</View>
					<View style={styles.updateInfoHolder}>
						<View style={styles.imageHolder}>
							<Image 
								style={styles.infoLogo}
								source={require('image!github')}
							/>
						</View>
						<View style={styles.updateEntry}>
							<TextInput style={styles.input} 
								onFocus={() => parent.setState({keyboard: true})}
								onBlur={() => parent.setState({keyboard: false})}
								placeholder='Github' 
								onChangeText={(text) => this.temps.github = text}
								onEndEditing={() => parent.setState({github: this.temps.github})} 
								value={parent.state.github}
							/>
						</View>
					</View>
					<View style={styles.updateInfoHolder}>
						<View style={styles.imageHolder}>
							<Image 
								style={styles.infoLogo}
								source={require('image!site')}
							/>
						</View>
						<View style={styles.updateEntry}>
							<TextInput style={styles.input} 
								onFocus={() => parent.setState({keyboard: true})}
								onBlur={() => parent.setState({keyboard: false})}
								placeholder='Site' 
								onChangeText={(text) => this.temps.site = text}
								onEndEditing={() => parent.setState({site: this.temps.site})} 
								value={parent.state.site}
							/>
						</View>
					</View>
				</View>
				<Menu styles={styles} navigator={this.props.navigator} parent={parent} />
			</View>
		)
	}
}

class ProfileView extends React.Component{
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
			avatar: '',
			menuVisible: false,
			keyboard: false
		}
	}

	componentDidMount(){
		state.user().then((data) => {
			this.setState(data)
			this.refs.ProfileBody.temps = data
		})
  	}

	_updateInfo(){
		var {name, email, phone, company, linkedin, facebook, twitter, skype, instagram, github, site} = this.state

	    state.profileUpdate(name, email, phone, company, linkedin, facebook, twitter, skype, instagram, github, site)
	    	.then(() => {
	    		this.props.navigator.push({id: "ProximityList", name: "Users Near You"})
	    	})
	    	.catch((e) => {
	    		console.log(e)
		    	AlertIOS.alert('Update Failed', e)
		    })
	}

	_goBack(){
		var routes = this.props.navigator.getCurrentRoutes(),
			this_route_index = routes.length-1,
			last_route = routes[this_route_index-1]
		if(last_route.id=="RegisterOnly"){
			this.props.navigator.push({id: "ProximityList", name: "Users Near You"})
		} else {
			this.props.navigator.pop()
		}
	}

	render(){
		var styles = this.props.styles
		console.log('rendering profile')
		var routes = this.props.navigator.getCurrentRoutes(),
			this_route_index = routes.length-1,
			last_route = routes[this_route_index-1]
		return(
			<View style={styles.navigator}>
				<View style={[styles.container, !!this.state.keyboard && styles.keyboardView]}>
					<NavigationBarWithoutSearch styles={styles} parent={this} route={this.props.route}/>
					<ProfileBody ref="ProfileBody" styles={styles} parent={this} navigator={this.props.navigator}/>
					<Swiper 
						backRoute={last_route.id === "RegisterOnly" ? "Users Near You" : last_route.name} 
						forwardRoute={'Users Near You'} 
						styles={styles} 
						innerText={"Swipe to Update"} 
						callback={this._updateInfo.bind(this)}
						callback_back={this._goBack.bind(this)}
					/>
				</View>
			</View>
		)
	}
}

module.exports = ProfileView;
