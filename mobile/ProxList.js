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

var REMOTE = 'https://contacts-back-end.herokuapp.com'

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
    fetch(`${REMOTE}/users.json`)
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

  	if(user.name=='Nikita Toy'){
  		this.props.navigator.jumpTo('WAT1')
  		return
  	}
  	console.log(this.props.navigator.getCurrentRoutes())
    console.log(user)
    var nextIndex = this.props.route.index + 1
    console.log(this.props.route)
    this.props.navigator.push({
      name: "WAT"+this.props.route.index,
      index: nextIndex,
    })
  }

  _renderUser(user, sectionId, rowId) {
  	var styles = this.props.styles
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
  	var styles = this.props.styles
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

module.exports= ProximityList;