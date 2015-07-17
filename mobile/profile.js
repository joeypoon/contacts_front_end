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
			avatar: ''
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
				<NavigationBarWithoutSearch styles={this.props.styles} route={this.props.route}/>
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
				<View style={styles.swiper}>
					<Text style={styles.demand} onPress={this._updateInfo.bind(this)}>SWIPE TO SAVE (Click for now)</Text>
				</View>
			</View>
		)
	}
}

module.exports = ProfileView;