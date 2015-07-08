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
      <View style={this.props.styles.container}>
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
    return (
      <TouchableHighlight onPress={() => this._selectUser(user)}>
        <View style={this.props.styles.usersContainer}>
          <Image style={this.props.styles.image}/>
          <Text style={this.props.styles.name}>{user.name}</Text>
          <Text style={this.props.styles.email}>{user.email}</Text>
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
        style={this.props.styles.listView}
      />
    )
  }
}

module.exports= ProximityList;