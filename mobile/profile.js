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

// <View style={styles.imageContainer}>
// 	<Image style={styles.profilePic} source={{uri: `${parent.state.avatar || null}`}} />
// </View>
// <View style={styles.infoContainer}>
// 	<View style={styles.inputHolder}>
// 		<Text style={styles.label}>Name:</Text>
// 		<TextInput style={styles.input} 
// 			placeholder='Name'
// 			onChangeText={(text) => this.temps.name = text}
// 			onEndEditing={() => parent.setState({name: this.temps.name})} 
// 			value={parent.state.name}
// 		/>
// 	</View>
// 	<View style={styles.inputHolder}>
// 		<Text style={styles.label}>Email:</Text>
// 		<TextInput style={styles.input} 
// 			placeholder='Email' 
// 			onChangeText={(text) => this.temps.email = text}
// 			onEndEditing={() => parent.setState({email: this.temps.email})} 
// 			value={parent.state.email}
// 			/>
// 	</View>
// 	<View style={styles.inputHolder}>
// 		<Text style={styles.label}>Company:</Text>
// 		<TextInput style={styles.input} 
// 			placeholder='Company' 
// 			onChangeText={(text) => this.temps.company = text}
// 			onEndEditing={() => parent.setState({company: this.temps.company})} 
// 			value={parent.state.company}
// 		/>
// 	</View>
// 	<View style={styles.inputHolder}>
// 		<Text style={styles.label}>Phone</Text>
// 		<TextInput style={styles.input}
// 			placeholder='Phone' 
// 			keyboardType='numeric'
// 			onChangeText={(text) => this.temps.phone = text}
// 			onEndEditing={() => parent.setState({phone: this.temps.phone})} 
// 			value={parent.state.phone}
// 		/>
// 	</View>
// 	<View style={styles.inputHolder}>
// 		<Text style={styles.label}>LinkedIn:</Text>
// 		<TextInput style={styles.input} 
// 			placeholder='LinkedIn' 
// 			onChangeText={(text) => this.temps.linkedin = text}
// 			onEndEditing={() => parent.setState({linkedin: this.temps.linkedin})} 
// 			value={parent.state.linkedin}
// 		/>
// 	</View>
// 	<View style={styles.inputHolder}>
// 		<Text style={styles.label}>Facebook:</Text>
// 		<TextInput style={styles.input} 
// 			placeholder='Facebook' 
// 			onChangeText={(text) => this.temps.facebook = text}
// 			onEndEditing={() => parent.setState({facebook: this.temps.facebook})} 
// 			value={parent.state.facebook}
// 		/>
// 	</View>
// 	<View style={styles.inputHolder}>
// 		<Text style={styles.label}>Twitter:</Text>
// 		<TextInput style={styles.input} 
// 			placeholder='Twitter' 
// 			onChangeText={(text) => this.temps.twitter = text}
// 			onEndEditing={() => parent.setState({twitter: this.temps.twitter})} 
// 			value={parent.state.twitter}
// 		/>
// 	</View>
// 	<View style={styles.inputHolder}>
// 		<Text style={styles.label}>Instagram:</Text>
// 		<TextInput style={styles.input} 
// 			placeholder='Instagram' 
// 			onChangeText={(text) => this.temps.instagram = text}
// 			onEndEditing={() => parent.setState({instagram: this.temps.instagram})} 
// 			value={parent.state.instagram}
// 		/>
// 	</View>
// 	<View style={styles.inputHolder}>
// 		<Text style={styles.label}>Github:</Text>
// 		<TextInput style={styles.input} 
// 			placeholder='Github' 
// 			onChangeText={(text) => this.temps.github = text}
// 			onEndEditing={() => parent.setState({github: this.temps.github})} 
// 			value={parent.state.github}
// 		/>
// 	</View>
// 	<View style={styles.inputHolder}>
// 		<Text style={styles.label}>Site:</Text>
// 		<TextInput style={styles.input} 
// 			placeholder='Site' 
// 			onChangeText={(text) => this.temps.site = text}
// 			onEndEditing={() => parent.setState({site: this.temps.site})} 
// 			value={parent.state.site}
// 		/>
// 	</View>
// </View>

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
				</View>
				<View style={styles.bottomProfileInfo}>
				</View>
				<Menu styles={styles} navigator={this.props.navigator} parent={parent}/>
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
			menuVisible: false
		}
	}

	componentDidMount(){
		state.user().then((data) => this.setState(data))
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
			<View style={styles.container}>
				<NavigationBarWithoutSearch styles={styles} parent={this} route={this.props.route}/>
				<ProfileBody styles={styles} parent={this} navigator={this.props.navigator}/>
				<Swiper 
					backRoute={last_route.id === "RegisterOnly" ? "Users Near You" : last_route.name} 
					forwardRoute={'Users Near You'} 
					styles={styles} 
					innerText={"Swipe to Update"} 
					callback={this._updateInfo.bind(this)}
					callback_back={this._goBack.bind(this)}
				/>
			</View>
		)
	}
}

module.exports = ProfileView;
