'use strict';

var React = require('react-native')

var {
  Image,
  Text,
  View
} = React;

class LoadingView extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    var styles=this.props.styles
    return (
      <View style={styles.navigator}>
        <View style={styles.backgroundColor}>
          <Image style={styles.middleLogo} source={require('image!connect')}/>
        </View>
        <View style={styles.container}>
          <View style={styles.centeredContainer}>
            <Image 
              style={[styles.middleLogo]} 
              source={require('image!connect')}
            />
          </View>
        </View>
      </View>
    )
  }
}

module.exports = LoadingView