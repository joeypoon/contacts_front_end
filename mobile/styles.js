'use strict';
var React = require('react-native'),
    Dimensions = require('Dimensions')

var {width, height, scale} = Dimensions.get('window')

var {
  StyleSheet,
} = React;

var styles = StyleSheet.create({
  navigator: {
    flex: 1
  },
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  keyboardView: {
    transform: [{translateY:-height/4}]
  },
  backgroundColor: {
    width: width,
    height: height,
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#50A5A9',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  bodyWithTwoSwipers: {
    flex: 80,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  frontContainer: {
    width: width*.8,
    height: width*.8,
    position: 'relative',
    flexDirection: 'column'
  },
  frontLogo: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: width*.8,
    height: width*.8,
    opacity: .2
  },
  middleLogo: {
    width: width*.8,
    height: width*.8,
    opacity: .2
  },
  frontTitle: {
    fontSize: width/5,
    fontFamily: "Roboto-Light",
    position: 'absolute',
    color: '#ACDF4A',
    left: -width*.05,
    top: -width*.05
  },
  slogan: {
    fontSize: 20,
    fontFamily: "Roboto-Medium",
    position: "absolute",
    color: '#ACDF4A',
    left: width*.7*.6,
    top: width*.7*.82
  },
  bodyWithOneSwiper: {
    flex: 90,
    flexDirection: 'column'
  },
  placeholderUpper: {
    flex: 15
  },
  placeholderBottom: {
    flex: 24
  },
  middleContainer: {
    flex: 60,
    flexDirection: 'column',
  },
  loginHolder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  authHeader: {
    fontSize: 50,
    color: '#ACDF4A',
    fontFamily: 'Roboto-Medium'
  },
  inputHolder: {
    flex: 2
  },
  inputEntry: {
    fontSize: 30,
    fontFamily: "Roboto-Bold",
    // backgroundColor: 'rgba(49,114,117, 0.8)',
    padding: 5,
    flex: 1,
    color: 'white',
    borderBottomWidth: 3
    // textDecorationLine: 'underline',
    // textDecorationColor: 'white',
    // textDecorationStyle: 'solid'
  },
  listLogo: {
    opacity: .2
  },
  noData: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  bodyWithSwiper: {
    flex: 82,
    flexDirection: 'column'
  },
  topProfileInfo: {
    flex: 1.2,
    backgroundColor: 'red'
  },
  bottomProfileInfo: {
    flex: 1,
    backgroundColor: 'yellow'
  },
  bodyWithoutSwiper: {
    flex: 92,
    flexDirection: 'column'
  },
  loadingContainer: {
    flex: 92,
    justifyContent: 'center',
    alignItems: 'center'
  },
  label: {
    flex: 30,
    fontWeight: 'bold',
    fontSize: 14,
    paddingLeft: 30
  },
  input: {
    fontSize: 14,
    flex: 70
  },
  loginInput: {
    flex: 10
  },
  navBarContainer: {
    flexDirection: 'row',
    flex: 8,
    backgroundColor: '#fff',
    borderBottomWidth: 2
  },
  logo: {
    width: 40,
    height: 40,
    flexDirection: 'column'
  },
  menuInitiator: {
    width: width/10,
    height: width/10,
    marginTop: 15
  },
  navNameContainer: {
    flex: 75,
    justifyContent: 'center',
    alignItems: 'center'
  },
  navName: {
    fontSize: 20
  },
  navInput: {
    fontSize: 14,
    flex: 1
  },
  menu: {
    width: width/2,
    height: height*.6,
    flexDirection: 'column',
    position: 'absolute',
    top: 0,
    left: width,
    backgroundColor: '#efefef'
  },
  showMenu: {
    transform: [{translateX: -width/2}]
  },
  menuItem: {
    flex: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderLeftWidth: 1
  },
  menuVisible: {
    opacity: .7,
    transform: [{rotate: '90deg'}]
  },
  imageContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  profilePic: {
    height: 120,
    width: 120,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 60
  },
  infoContainer: {
    flex: 5,
    flexDirection: 'column'
  },
  swiper: {
    backgroundColor: '#ccc',
    flex: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  demand: {
    flex: 1,
    textAlign: 'center',
    fontSize: 25
  },
  usersContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#83CACD'
  },
  image: {
    height: 50,
    width: 50,
    backgroundColor: '#333',
    borderRadius: 25,
    margin: 7
  },
  homeInfoContainer: {
    flex: 70,
    flexDirection: 'column',
    marginLeft: 15
  },
  name: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 8
  },
  email: {
    fontSize:11
  },
  listView: {
    flex: 1
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
  bottomBarTag: {
    tintColor: 'red'
  }
});

module.exports = styles