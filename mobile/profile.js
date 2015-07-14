'use strict';
var React = require('react-native'),
	NavigationBarWithoutSearch = require('./navigationBarWithoutSearch')

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
	}

	_takeMeHome(){
		this.props.navigator.push({id: "ProximityList"})
	}

	render(){
		var styles = this.props.styles
		console.log('rendering profile')
		return(
			<View style={styles.container}>
				<NavigationBarWithoutSearch styles={styles} route={this.props.route}/>
				<View style={styles.imageContainer}>
					<Image style={styles.profilePic} />
				</View>
				<View style={styles.infoContainer}>
					<TextInput style={styles.input} placeholder='Name'/>
					<TextInput style={styles.input} placeholder='Phone'/>
					<TextInput style={styles.input} placeholder='Company'/>
					<TextInput style={styles.input} placeholder='Facebook'/>
					<TextInput style={styles.input} placeholder='Instagram'/>
					<TextInput style={styles.input} placeholder='Github'/>
					<TextInput style={styles.input} placeholder='LinkedIn'/>
					<TextInput style={styles.input} placeholder='Twitter'/>
					<TextInput style={styles.input} placeholder='Site'/>
				</View>
				<View style={styles.swiper}>
					<Text style={styles.demand} onPress={this._takeMeHome.bind(this)}>SWIPE TO SAVE (Click for now)</Text>
				</View>
			</View>
		)
	}
}

module.exports = ProfileView;