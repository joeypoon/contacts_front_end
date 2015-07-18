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
  TouchableHighlight,
  TouchableWithoutFeedback
} = React;

class ProfileBody extends React.Component{
	constructor(props){
		super(props)
	}

	render(){
		var parent=this.props.parent
		var styles=this.props.styles
		return (
			<View style={styles.bodyWithSwiper}>
				<View style={styles.imageContainer}>
					<Image style={styles.profilePic} source={{uri: `${parent.state.avatar || null}`}} />
				</View>
				<View style={styles.infoContainer}>
					<View style={styles.inputHolder}>
						<Text style={styles.label}>Name:</Text>
						<TextInput style={styles.input} 
							placeholder='Name'
							onChangeText={(text) => parent.setState({name: text})} 
							value={parent.state.name}
						/>
					</View>
					<View style={styles.inputHolder}>
						<Text style={styles.label}>Email:</Text>
						<TextInput style={styles.input} 
							placeholder='Email' 
							onChangeText={(text) => parent.setState({email: text})} 
							value={parent.state.email}
							/>
					</View>
					<View style={styles.inputHolder}>
						<Text style={styles.label}>Company:</Text>
						<TextInput style={styles.input} 
							placeholder='Company' 
							onChangeText={(text) => parent.setState({company: text})} 
							value={parent.state.company}
						/>
					</View>
					<View style={styles.inputHolder}>
						<Text style={styles.label}>Phone</Text>
						<TextInput style={styles.input}
							 placeholder='Phone' 
							onChangeText={(text) => parent.setState({phone: text})} 
							value={parent.state.phone}
						/>
					</View>
					<View style={styles.inputHolder}>
						<Text style={styles.label}>LinkedIn:</Text>
						<TextInput style={styles.input} 
							placeholder='LinkedIn' 
							onChangeText={(text) => parent.setState({linkedin: text})} 
							value={parent.state.linkedin}
						/>
					</View>
					<View style={styles.inputHolder}>
						<Text style={styles.label}>Facebook:</Text>
						<TextInput style={styles.input} 
							placeholder='Facebook' 
							onChangeText={(text) => parent.setState({facebook: text})} 
							value={parent.state.facebook}
						/>
					</View>
					<View style={styles.inputHolder}>
						<Text style={styles.label}>Twitter:</Text>
						<TextInput style={styles.input} 
							placeholder='Twitter' 
							onChangeText={(text) => parent.setState({twitter: text})} 
							value={parent.state.twitter}
						/>
					</View>
					<View style={styles.inputHolder}>
						<Text style={styles.label}>Instagram:</Text>
						<TextInput style={styles.input} 
							placeholder='Instagram' 
							onChangeText={(text) => parent.setState({instagram: text})} 
							value={parent.state.instagram}
						/>
					</View>
					<View style={styles.inputHolder}>
						<Text style={styles.label}>Github:</Text>
						<TextInput style={styles.input} 
							placeholder='Github' 
							onChangeText={(text) => parent.setState({github: text})} 
							value={parent.state.github}
						/>
					</View>
					<View style={styles.inputHolder}>
						<Text style={styles.label}>Site:</Text>
						<TextInput style={styles.input} 
							placeholder='Site' 
							onChangeText={(text) => parent.setState({site: text})} 
							value={parent.state.site}
						/>
					</View>
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
		var {name, email, phone, company, linkedin, facebook, twitter, instagram, github, site} = this.state

	    state.profileUpdate(name, email, phone, company, linkedin, facebook, twitter, instagram, github, site)
	    	.then(() => {
	    		this.props.navigator.push({id: "ProximityList"})
	    	})
	    	.catch((e) => {
	    		console.log(e)
		    	// AlertIOS.alert('Update Failed', e)
		    })
	}

	render(){
		console.log(`profileView: ${this.state.menuVisible}`)
		var styles = this.props.styles
		console.log('rendering profile')
		return(
			<View style={styles.container}>
				<NavigationBarWithoutSearch styles={styles} parent={this} route={this.props.route}/>
				<ProfileBody styles={styles} parent={this} navigator={this.props.navigator}/>
				<Swiper styles={styles} swipe_callback={this._updateInfo.bind(this)}/>
			</View>
		)
	}
}

module.exports = ProfileView;

// <TouchableWithoutFeedback onPress={this._updateInfo.bind(this)}>
// 					<View style={styles.swiper}>
// 						<Text style={styles.demand}>Swipe to Save</Text>
// 					</View>
// 				</TouchableWithoutFeedback>