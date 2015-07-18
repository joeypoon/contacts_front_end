'use strict';

var React = require('react-native'),
    NavigationBarWithoutSearch = require('./navigationBarWithoutSearch'),
    Menu = require('./menu'),
    state = require('./state')

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

class ContactList extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}), 
      loaded: false,
      menuVisible: false
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
          <Image style={styles.image} source={{uri: `${user.avatar}`}}/>
          <View style={styles.homeInfoContainer}>
            <Text style={styles.name}> {user.name} </Text>
            <Text style={styles.email}> {user.company || "Evaluating their options..."} </Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }

  render() {
  	var styles = this.props.styles
    console.log('Rendering contact list')
    if (!this.state.loaded) {
      return this._renderLoadingView();
    }

    return (
      <View style={styles.container}>
        <NavigationBarWithoutSearch styles={styles} parent={this} route={this.props.route}/>
        <View style={styles.bodyWithoutSwiper}>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={this._renderUser.bind(this)}
            style={styles.listView}
          />
          <Menu styles={styles} navigator={this.props.navigator} parent={this}/>
        </View>
      </View>
    )
  }
}

module.exports = ContactList;