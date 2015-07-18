'use strict';

var React = require('react-native'),
  NavigationBarWithoutSearch = require('./navigationBarWithoutSearch'),
	state = require('./state')

var {
 AppRegistry,
  ListView,
  Image,
  Text,
  View,
  TouchableHighlight
} = React;

class Inbound extends React.Component{
	constructor(props){
		super(props)
		this.state = {
	      dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}), 
	      loaded: false 
	    }
	}

	componentDidMount(){
    	this._getInboundPendingContacts();
  	}

	_getInboundPendingContacts(){
  	var {dataSource} = this.state

  	state.inboundContacts(dataSource).then((data) => this.setState(data))
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

  _selectUser(user){
    console.log('Chose user')
    state.outbound_user(user.id)
    this.props.navigator.push({id: "ChooseInfo"})
  }

	_renderUser(user, sectionId, rowId) {
    var styles = this.props.styles
    return (
      <TouchableHighlight onPress={() => this._selectUser(user)}>
        <View style={styles.usersContainer}>
          <Image style={styles.image} source={{uri: `${user.avatar}`}}/>
          <View style={styles.homeInfoContainer}>
            <Text style={styles.name}> {user.name} </Text>
            <Text style={styles.email}> {user.company || 'Evaluating their options...'} </Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }

	render() {
		var styles = this.props.styles
  	console.log('Rendering Inbound')
  	if (!this.state.loaded) {
    		return this._renderLoadingView();
  	}

    return (
      <View style={styles.container}>
        <View style={styles.test}>
        </View>
      	<ListView
  	        dataSource={this.state.dataSource}
  	        renderRow={this._renderUser.bind(this)}
  	        style={styles.listView}
        />
      </View>
    )
	}
}

module.exports = Inbound