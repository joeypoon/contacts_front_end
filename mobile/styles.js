'use strict';
var React = require('react-native');

var {
  StyleSheet,
} = React;

var styles = StyleSheet.create({
  navigator: {
    flex: 1
  },
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  label: {
    flex: 6,
    textAlign: 'center'
  },
  input: {
    fontSize: 14,
    flex: 1,
    margin: 5
  },
  navBarContainer: {
    flexDirection: 'row',
    flex: 8,
    backgroundColor: '#fff'
  },
  logo: {
    flex: 15,
    backgroundColor: 'red',
    opacity: .5,
    flexDirection: 'column'
  },
  hamburgerMenu: {
    fontSize: 15,
    flex: 20
  },
  navNameContainer: {
    flex: 70,
    justifyContent: 'center',
    alignItems: 'center'
  },
  navName: {
    fontSize: 20
  },
  imageContainer: {
    flex: 23,
    backgroundColor: '#efefef',
    justifyContent: 'center',
    alignItems: 'center'
  },
  profilePic: {
    height: 120,
    width: 120,
    borderWidth: 3,
    borderColor: 'black',
    borderRadius: 60
  },
  infoContainer: {
    flex: 59,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  swiper: {
    backgroundColor: '#ccc',
    flex: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  demand: {
    flex: 1
  },
  usersContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0,
    borderWidth: 1,
    borderColor: '#000'
  },
  image: {
    height: 50,
    width: 50,
    backgroundColor: '#333',
    marginRight: 10
  },
  name: {
    fontSize: 14,
    marginBottom: 8,
    textAlign: 'center'
  },
  email: {
    fontSize:10,
    textAlign: 'center'
  },
  listView: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF'
  },
  header: {
    flex: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    flex: 1,
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20
  },
  infoOptions: {
    flex: 70,
    flexDirection: 'column'
  },
  options: {
    flex: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 5
  },
  send: {
    backgroundColor: 'green',
    borderRadius: 20
  },
  contactParam: {
    flex: 1,
    marginRight: 30,
    marginLeft: 30,
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: '#efefef',
    alignItems: 'center',
    justifyContent: 'center'
  },
  contactsList: {
    flex: 92,
    flexWrap: 'wrap'
  },
  contactList: {
    flex: 50,
    height: 100,
    backgroundColor: 'orange',
    borderWidth: 2,
    borderColor: 'black'
  },
  bottomBarTag: {
    tintColor: 'red'
  },
  inbound: {
    backgroundColor: 'red'
  },
  outbound: {
    backgroundColor: 'blue'
  }
});

module.exports = styles