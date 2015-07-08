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
          />
        }
      />
    )
  }
}

class ProximityList extends React.Component{
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
    fetch(REQUEST_USERS)
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
    return (
      <View style={styles.container}>
        <Text>
          Loading users...
        </Text>
      </View>
    )
  }

  _selectUser(user){
    console.log(user)
    var nextIndex = this.props.route.index + 1
    this.props.navigator.push({
      name: "WAT",
      index: nextIndex
    })
  }

  _renderUser(user, sectionId, rowId) {
    console.log(user, sectionId, rowId, this)
    return (
      <TouchableHighlight onPress={() => this._selectUser(user)}>
        <View style={styles.usersContainer}>
          <Image style={styles.image}/>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.email}>{user.email}</Text>
        </View>
      </TouchableHighlight>
    );
  }


  render() {
    console.log('Rendering List')
    if (!this.state.loaded) {
      return this._renderLoadingView();
    }

    return (
      // myRoutes[this.props.route.name]
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this._renderUser.bind(this)}
        style={styles.listView}
      />
    )
  }
}

var styles = StyleSheet.create({
  container: {
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
    backgroundColor: '#F5FCFF'
  }
});

AppRegistry.registerComponent('Contacts', () => AppNavigation);

