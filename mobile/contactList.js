'use strict';

var React = require('react-native');
var {
 AppRegistry,
  ListView,
  Image,
  Navigator,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} = React;

var REMOTE = 'https://contacts-back-end.herokuapp.com'

let state = require('./state'); // { user: prop() }

class ContactList extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}), 
      loaded: false 
    }
  }

  componentDidMount(){
    this._getContacts();
  }

  _getContacts(){
    var {dataSource} = this.state

    state.contactList(dataSource).then((data) => this.setState(data))
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

  _seeUserProfile(user){
    console.log('See this guy\'s profile')
    state.connected_user(user.id)
    this.props.navigator.push({id: "UserProfile"})
  }

  _renderUser(user, sectionId, rowId) {
  	var styles = this.props.styles
    return (
      <TouchableHighlight onPress={() => this._seeUserProfile(user)}>
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
    console.log('Rendering List')
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

module.exports = ContactList;