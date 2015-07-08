/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');

var {
  AppRegistry,
  Image,
  ListView,
  StyleSheet,
  Text,
  View,
} = React;

var REQUEST_URL = 'https://contacts-back-end.herokuapp.com',
    REQUEST_USERS = 'https://contacts-back-end.herokuapp.com/users.json'


// class App extends React.Component{
//   constructor(props){
//     super(props)
//   }

//   render(){
//     <Navigator
//       initialRoute={
//         {
//           name: 'AppNavigator', 
//           index: 0
//         }
//       }
//       renderScene={(route, navigator) => 
//         <Contacts
//           name={route.name}
//         />
//       }
//     />
//   }
// }


class Contacts extends React.Component{
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

  _renderUser(user) {
    return (
      <View style={styles.usersContainer}>
        <Image style={styles.image}/>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.email}>{user.email}</Text>
      </View>
    );
  }


  render() {
    if (!this.state.loaded) {
      return this._renderLoadingView();
    }

    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this._renderUser}
        style={styles.listView}
      />
    )
  }
}

var styles = StyleSheet.create({
  container: {
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

AppRegistry.registerComponent('Contacts', () => Contacts);

