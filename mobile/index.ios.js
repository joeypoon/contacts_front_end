/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
var React = require('react-native');
var Button = require('react-native-button');

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

var ProximityList = require('./ProxList'),
    styles = require('./styles'),
    LoginView = require('./login'),
    ProfileView = require('./profile'),
    PendingContacts = require('./pendingContacts'),
    ChooseInfo = require('./chooseInfo'),
    ContactsManager = require('./contactsManager'),
    state = require('./state')

class AppNavigation extends React.Component{
  constructor(props){
    super(props)

    // test if user is already logged in, navigate to other screen
    state.user().then((data)=> {
      this.refs.navigator.replace({id: "ChooseInfo"})
    })
  }

  _renderScene(route, nav){
    switch (route.id) {
      case "LoginView":
        return <LoginView navigator={nav} styles={styles} route={route}/>
      case "ProximityList":
        return <ProximityList navigator={nav} styles={styles} route={route}/>
      case "ProfileView":
        return <ProfileView navigator={nav} styles={styles} route={route}/>
      case "ChooseInfo":
        return <ChooseInfo navigator={nav} styles={styles} route={route}/>
      case "ContactsManager":
        return <ContactsManager navigator={nav} styles={styles} route={route}/>
      case "PendingContacts":
        return <PendingContacts navigator={nav} styles={styles} route={route}/>
      default:
        return null
    }
  }

  render(){
    return(
      <Navigator
        ref="navigator"
        style={styles.navigator}
        initialRoute={{id: "LoginView"}}
        renderScene = {(route, navigator) => this._renderScene(route, navigator)}
        configureScene={() => Navigator.SceneConfigs.FloatFromRight}
      />
    )
  }
}

AppRegistry.registerComponent('Contacts', () => AppNavigation);