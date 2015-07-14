'use strict';

var React = require('react-native');
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
    	this._fetchData();
  	}

	_fetchData(){
	    fetch(`${REMOTE}/10/inbound`)
	      	.then((response) => response.json())
	      	.then((responseData) => {
	        	this.setState({
		          	dataSource: this.state.dataSource.cloneWithRows(responseData),
		          	loaded: true
	        	})
	      	})
      	.done()
  	}

  	_renderLoadingView() {
    	var styles=this.props.styles
	    return (
	      	<View style={styles.container}>
	       		<Text>
	          		Loading users...
	        	</Text>
	      	</View>
	    )
  	}

  	_renderUser(user, sectionId, rowId) {
	  	var styles = this.props.styles
	    return (
        	<View style={styles.usersContainer}>
	          <Image style={styles.image}/>
	          <Text style={styles.name}> {user.name} </Text>
	          <Text style={styles.email}> {user.email} </Text>
	        </View>
	    );
	}

	render(){
		var styles = this.props.styles
		return(
			<View style={[styles.container, styles.inbound]}>
		        <Text>
	        	  Inbound Pending Contacts
		        </Text>
	    	</View>
		)
	}
}

module.exports = Inbound