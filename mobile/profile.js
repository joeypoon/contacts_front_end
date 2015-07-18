'use strict';
var React = require('react-native'),
	NavigationBarWithoutSearch = require('./navigationBarWithoutSearch'),
	Menu = require('./menu'),
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

		this.state=this.props.parentState
	}

	componentWillReceiveProps(newProps){
		this.setState(newProps.parentState)
	}

	render(){
		var styles=this.props.styles
		return (
			<View style={styles.bodyWithSwiper}>
				<Menu styles={styles} parentState={this.state}/>
				<View style={styles.imageContainer}>
					<Image style={styles.profilePic} source={{uri: `${this.state.avatar || null}`}} />
				</View>
				<View style={styles.infoContainer}>
					<View style={styles.inputHolder}>
						<Text style={styles.label}>Name:</Text>
						<TextInput style={styles.input} 
							placeholder='Name'
							onChangeText={(text) => this.setState({name: text})} 
							value={this.state.name}
						/>
					</View>
					<View style={styles.inputHolder}>
						<Text style={styles.label}>Email:</Text>
						<TextInput style={styles.input} 
							placeholder='Email' 
							onChangeText={(text) => this.setState({email: text})} 
							value={this.state.email}
							/>
					</View>
					<View style={styles.inputHolder}>
						<Text style={styles.label}>Company:</Text>
						<TextInput style={styles.input} 
							placeholder='Company' 
							onChangeText={(text) => this.setState({company: text})} 
							value={this.state.company}
						/>
					</View>
					<View style={styles.inputHolder}>
						<Text style={styles.label}>Phone</Text>
						<TextInput style={styles.input}
							 placeholder='Phone' 
							onChangeText={(text) => this.setState({phone: text})} 
							value={this.state.phone}
						/>
					</View>
					<View style={styles.inputHolder}>
						<Text style={styles.label}>LinkedIn:</Text>
						<TextInput style={styles.input} 
							placeholder='LinkedIn' 
							onChangeText={(text) => this.setState({linkedin: text})} 
							value={this.state.linkedin}
						/>
					</View>
					<View style={styles.inputHolder}>
						<Text style={styles.label}>Facebook:</Text>
						<TextInput style={styles.input} 
							placeholder='Facebook' 
							onChangeText={(text) => this.setState({facebook: text})} 
							value={this.state.facebook}
						/>
					</View>
					<View style={styles.inputHolder}>
						<Text style={styles.label}>Twitter:</Text>
						<TextInput style={styles.input} 
							placeholder='Twitter' 
							onChangeText={(text) => this.setState({twitter: text})} 
							value={this.state.twitter}
						/>
					</View>
					<View style={styles.inputHolder}>
						<Text style={styles.label}>Instagram:</Text>
						<TextInput style={styles.input} 
							placeholder='Instagram' 
							onChangeText={(text) => this.setState({instagram: text})} 
							value={this.state.instagram}
						/>
					</View>
					<View style={styles.inputHolder}>
						<Text style={styles.label}>Github:</Text>
						<TextInput style={styles.input} 
							placeholder='Github' 
							onChangeText={(text) => this.setState({github: text})} 
							value={this.state.github}
						/>
					</View>
					<View style={styles.inputHolder}>
						<Text style={styles.label}>Site:</Text>
						<TextInput style={styles.input} 
							placeholder='Site' 
							onChangeText={(text) => this.setState({site: text})} 
							value={this.state.site}
						/>
					</View>
				</View>
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
		var styles = this.props.styles
		console.log('rendering profile')
		return(
			<View style={styles.container}>
				<NavigationBarWithoutSearch styles={styles} parentState={this.state} route={this.props.route}/>
				<ProfileBody styles={styles} parentState={this.state}/>
				<TouchableWithoutFeedback onPress={this._updateInfo.bind(this)}>
					<View style={styles.swiper}>
						<Text style={styles.demand}>Swipe to Save</Text>
					</View>
				</TouchableWithoutFeedback>
			</View>
		)
	}
}

module.exports = ProfileView;