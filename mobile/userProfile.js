'use strict';
var React = require('react-native'),
	NavigationBarWithoutSearch = require('./navigationBarWithoutSearch'),
	state = require('./state')

var {
  Image,
  Text,
  View,
  TextInput,
  TouchableHighlight
} = React;

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
			<View style={this.props.styles.container}>
				<NavigationBarWithoutSearch styles={this.props.styles} route={this.props.route}/>
				<View style={this.props.styles.imageContainer}>
					<Image style={this.props.styles.profilePic} source={{uri: `${this.state.avatar || null}`}} />
				</View>
				<View style={this.props.styles.infoContainer}>
					<View style={styles.inputHolder}>
						<Text style={styles.label}>Name:</Text>
						<TextInput style={this.props.styles.input} 
							placeholder='Did not share Name'
							onChangeText={(text) => this.setState({name: text})} 
							value={this.state.name}
							editable={false}
						/>
					</View>
					<View style={styles.inputHolder}>
						<Text style={styles.label}>Email:</Text>	
						<TextInput style={this.props.styles.input} 
							placeholder='Did not share Email' 
							onChangeText={(text) => this.setState({email: text})} 
							value={this.state.email}
							editable={false}
						/>
					</View>
					<View style={styles.inputHolder}>
						<Text style={styles.label}>Company:</Text>	
						<TextInput style={this.props.styles.input} 
							placeholder='Did not share Company' 
							onChangeText={(text) => this.setState({company: text})} 
							value={this.state.company}
							editable={false}
						/>
					</View>
					<View style={styles.inputHolder}>
						<Text style={styles.label}>Phone:</Text>	
						<TextInput style={this.props.styles.input} 
							placeholder='Did not share Phone' 
							onChangeText={(text) => this.setState({phone: text})} 
							value={this.state.phone}
							editable={false}
						/>
					</View>
					<View style={styles.inputHolder}>
						<Text style={styles.label}>LinkedIn</Text>	
						<TextInput style={this.props.styles.input} 
							placeholder='Did not share LinkedIn' 
							onChangeText={(text) => this.setState({linkedin: text})} 
							value={this.state.linkedin}
							editable={false}
						/>
					</View>
					<View style={styles.inputHolder}>
						<Text style={styles.label}>Facebook</Text>	
						<TextInput style={this.props.styles.input} 
							placeholder='Did not share Facebook' 
							onChangeText={(text) => this.setState({facebook: text})} 
							value={this.state.facebook}
							editable={false}
						/>
					</View>
					<View style={styles.inputHolder}>
						<Text style={styles.label}>Twitter:</Text>	
						<TextInput style={this.props.styles.input} 
							placeholder='Did not share Twitter' 
							onChangeText={(text) => this.setState({twitter: text})} 
							value={this.state.twitter}
							editable={false}
						/>
					</View>
					<View style={styles.inputHolder}>
						<Text style={styles.label}>Instagram:</Text>	
						<TextInput style={this.props.styles.input} 
							placeholder='Did not share Instagram' 
							onChangeText={(text) => this.setState({instagram: text})} 
							value={this.state.instagram}
							editable={false}
						/>
					</View>
					<View style={styles.inputHolder}>
						<Text style={styles.label}>Github:</Text>	
						<TextInput style={this.props.styles.input} 
							placeholder='Did not share Github' 
							onChangeText={(text) => this.setState({github: text})} 
							value={this.state.github}
							editable={false}
						/>
					</View>
					<View style={styles.inputHolder}>
						<Text style={styles.label}>Site:</Text>	
						<TextInput style={this.props.styles.input} 
							placeholder='Did not share Site' 
							onChangeText={(text) => this.setState({site: text})} 
							value={this.state.site}
							editable={false}
						/>
					</View>
				</View>
				<View style={styles.swiper}>
					<Text style={styles.demand} onPress={this._returnToContacts.bind(this)}>Return to Contact List</Text>
				</View>
			</View>
		)
	}
}

module.exports = UserProfile;