'use strict';

var React = require('react-native')

var {
  	Text,
	View,
	Image
} = React;

class Tiles extends React.Component{
	constructor(props){
		super(props)
	}

	render(){
		var styles=this.props.styles

		return(
			<View style={styles.container}>
				<View style={styles.rowTiles}>
					<View style={styles.tile}>
						<Image style={styles.tileImage} source={require('image!shake')}/>
					</View>
					<View style={styles.tile}>
						<Image style={styles.tileImage} source={require('image!shake')}/>
					</View>
					<View style={styles.tile}>
						<Image style={styles.tileImage} source={require('image!shake')}/>
					</View>
				</View>
				<View style={styles.rowTiles}>
					<View style={styles.tile}>
						<Image style={styles.tileImage} source={require('image!shake')}/>
					</View>
					<View style={styles.tile}>
						<Image style={styles.tileImage} source={require('image!shake')}/>
					</View>
					<View style={styles.tile}>
						<Image style={styles.tileImage} source={require('image!shake')}/>
					</View>
				</View>
				<View style={styles.rowTiles}>
					<View style={styles.tile}>
						<Image style={styles.tileImage} source={require('image!shake')}/>
					</View>
					<View style={styles.tile}>
						<Image style={styles.tileImage} source={require('image!shake')}/>
					</View>
					<View style={styles.tile}>
						<Image style={styles.tileImage} source={require('image!shake')}/>
					</View>
				</View>
				<View style={styles.rowTiles}>
					<View style={styles.tile}>
						<Image style={styles.tileImage} source={require('image!shake')}/>
					</View>
					<View style={styles.tile}>
						<Image style={styles.tileImage} source={require('image!shake')}/>
					</View>
					<View style={styles.tile}>
						<Image style={styles.tileImage} source={require('image!shake')}/>
					</View>
				</View>
			</View>

		)
	}
}

module.exports = Tiles