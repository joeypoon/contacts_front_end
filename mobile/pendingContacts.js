'use strict';
var React = require('react-native'),
	Inbound = require('./inbound'),
	Outbound = require('./outbound')

var {
  AppRegistry,
  TabBarIOS,
  ListView,
  Image,
  Navigator,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} = React;

class PendingContacts extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			selectedTab: 'inbound'
		}
	}

	render(){
		var styles = this.props.styles
		return(
			<TabBarIOS selectedTab={this.state.selectedTab}>
				<TabBarIOS.Item
					title="Inbound"
					selected={this.state.selectedTab === 'inbound'}
					onPress={() => 
						this.setState({
							selectedTab: 'inbound'
						})
					}
				>
					<Inbound styles={styles} navigator={this.props.navigator} route={this.props.route}/>
				</TabBarIOS.Item>
				<TabBarIOS.Item
					title="Outbound"
					selected={this.state.selectedTab === 'outbound'}
					onPress={() => 
						this.setState({
							selectedTab: 'outbound'
						})
					}
				>
					<Outbound styles={styles} navigator={this.props.navigator} route={this.props.route}/>
				</TabBarIOS.Item>
			</TabBarIOS>
		)
	}
}

module.exports = PendingContacts