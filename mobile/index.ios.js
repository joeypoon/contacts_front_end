/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
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

var REQUEST_URL = 'https://contacts-back-end.herokuapp.com',
    REQUEST_USERS = 'https://contacts-back-end.herokuapp.com/users.json'

var ProximityList = require('./ProxList'),
    styles = require('./styles')

console.log(styles)

class AppNavigation extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <Navigator
        ref="navigator"
        style={styles.container}
        initialRoute={{name: 'First Route',index: 0}}
        renderScene={(route, navigator) =>
          <ProximityList
            name={route.name}
            route={route}
            navigator={navigator}
            styles={styles}
          />
        }
      />
    )
  }
}

AppRegistry.registerComponent('Contacts', () => AppNavigation);

