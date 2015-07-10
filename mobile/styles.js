'use strict';
var React = require('react-native');

var {
  StyleSheet,
} = React;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  navigator: {
    flex: 1,
  },
  usersContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0,
    borderWidth: 1,
    borderColor: '#000',
  },
  image: {
    height: 50,
    width: 50,
    backgroundColor: '#333',
    marginRight: 10,
  },
  name: {
    fontSize: 14,
    marginBottom: 8,
    textAlign: 'center',
  },
  email: {
    fontSize:10,
    textAlign: 'center',
  },
  listView: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },
  input: {
    fontSize: 14,
    backgroundColor: '#efefef',
    flex: 6,
  },
  label: {
    flex: 6,
    textAlign: 'center',
  }
});

module.exports = styles