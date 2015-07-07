/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  ListView,
  StyleSheet,
  Text,
  View,
} = React;

var REQUEST_URL = 'https://contacts-back-end.herokuapp.com'
var REQUEST_USERS = 'https://contacts-back-end.herokuapp.com/users.json'

var Contacts = React.createClass({

  getInitialState: function() {
    return { dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}), loaded: false }
    loaded: false
  },

  componentDidMount: function() {
    this.fetchData();
  },

  fetchData: function() {
    fetch(REQUEST_USERS)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData),
          loaded: true
        })
      })
      .done()
  },

  render: function() {

    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderUser}
        style={styles.listView}
      />
    )

  },

  renderLoadingView: function() {
    return (
      <View style={styles.container}>
        <Text>
          Loading users...
        </Text>
      </View>
    )
  },

  renderUser: function(user) {

    return (
      <View style={styles.container}>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.email}>{user.email}</Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  name: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  email: {
    textAlign: 'center',
  },
  listView: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF'
  }
});

AppRegistry.registerComponent('Contacts', () => Contacts);
