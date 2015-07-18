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
				<Menu styles={styles} parent={parent} />
				<View style={styles.imageContainer}>
					<Image style={styles.profilePic} source={{uri: `${this.state.avatar || null}`}} />
				</View>
				<View style={styles.infoContainer}>
					<View style={styles.inputHolder}>
						<Text style={styles.label}>Name:</Text>
						<TextInput style={styles.input} 
							placeholder='Did not share Name'
							value={parent.state.name}
							editable={false}
						/>
					</View>
					<View style={styles.inputHolder}>
						<Text style={styles.label}>Email:</Text>	
						<TextInput style={styles.input} 
							placeholder='Did not share Email' 
							value={parent.state.email}
							editable={false}
						/>
					</View>
					<View style={styles.inputHolder}>
						<Text style={styles.label}>Company:</Text>	
						<TextInput style={styles.input} 
							placeholder='Did not share Company' 
							value={parent.state.company}
							editable={false}
						/>
					</View>
					<View style={styles.inputHolder}>
						<Text style={styles.label}>Phone:</Text>	
						<TextInput style={styles.input} 
							placeholder='Did not share Phone' 
							value={parent.state.phone}
							editable={false}
						/>
					</View>
					<View style={styles.inputHolder}>
						<Text style={styles.label}>LinkedIn</Text>	
						<TextInput style={styles.input} 
							placeholder='Did not share LinkedIn' 
							value={parent.state.linkedin}
							editable={false}
						/>
					</View>
					<View style={styles.inputHolder}>
						<Text style={styles.label}>Facebook</Text>	
						<TextInput style={styles.input} 
							placeholder='Did not share Facebook' 
							value={parent.state.facebook}
							editable={false}
						/>
					</View>
					<View style={styles.inputHolder}>
						<Text style={styles.label}>Twitter:</Text>	
						<TextInput style={styles.input} 
							placeholder='Did not share Twitter' 
							value={parent.state.twitter}
							editable={false}
						/>
					</View>
					<View style={styles.inputHolder}>
						<Text style={styles.label}>Instagram:</Text>	
						<TextInput style={styles.input} 
							placeholder='Did not share Instagram' 
							value={parent.state.instagram}
							editable={false}
						/>
					</View>
					<View style={styles.inputHolder}>
						<Text style={styles.label}>Github:</Text>	
						<TextInput style={styles.input} 
							placeholder='Did not share Github' 
							value={parent.state.github}
							editable={false}
						/>
					</View>
					<View style={styles.inputHolder}>
						<Text style={styles.label}>Site:</Text>	
						<TextInput style={styles.input} 
							placeholder='Did not share Site' 
							value={parent.state.site}
							editable={false}
						/>
					</View>
				</View>
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
    		console.log(e)
	    	// AlertIOS.alert('Update Failed', e)
		})
	}

	_returnToContacts(){
		this.props.navigator.pop()
	}

	render(){
		var styles = this.props.styles
		console.log('rendering this guy\'s profile')
		return(
			<View style={styles.container}>
				<NavigationBarWithoutSearch styles={styles} route={this.props.route}/>
				<UserProfileBody styles={styles} parent={this}/>
				<View style={styles.swiper}>
					<Text style={styles.demand} onPress={this._returnToContacts.bind(this)}>Return to Contact List</Text>
				</View>
			</View>
		)
	}
}

module.exports = UserProfile;