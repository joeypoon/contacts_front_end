'use strict';

var React = require('react-native'),
	state = require('./state')
var {
 AppRegistry,
  ListView,
  Image,
  Text,
  View,
  TouchableHighlight
} = React;

class Outbound extends React.Component{
	constructor(props){
		super(props)
		this.state = {
	      dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}), 
	      loaded: false 
	    }
	}

	componentDidMount(){
    	this._getOutboundPendingContacts();
  	}

  	_getOutboundPendingContacts(){
    	var {dataSource} = this.state
    	
    	state.outboundContacts(dataSource).then((data) => this.setState(data))
  	}

    _renderLoadingView() {
    	var styles=this.props.styles
    	return (
      		<View style={styles.loadingContainer}>
        		<Text>
          			Loading users...
        		</Text>
      		</View>
    	)
  	}

  	_renderUser(user, sectionId, rowId) {
  		var styles = this.props.styles
    	return (
      		<TouchableHighlight onPress={() => this._selectUser(user)}>
        		<View style={styles.usersContainer}>
          			<Image style={styles.image}/>
          			<Text style={styles.name}> {user.name} </Text>
          			<Text style={styles.email}> {user.email} </Text>
        		</View>
  			</TouchableHighlight>
    	);
  	}

  	render() {
  		var styles = this.props.styles
    	console.log('Rendering Outbound')

    	if (!this.state.loaded) {
      		return this._renderLoadingView();
    	}

	    return (
	    	<ListView
		        dataSource={this.state.dataSource}
		        renderRow={this._renderUser.bind(this)}
		        style={styles.listView}
	      	/>
	    )
	}
}

module.exports = Outbound