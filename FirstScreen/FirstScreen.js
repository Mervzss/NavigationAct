import React from 'react';
import { View, Text,Button } from 'react-native';

export default class FirstScreen extends React.Component {
    static navigationOptions ={header:null}
    
  render() {
      const getvar = this.props.navigation.getParam('val', 1)
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>First Screen {getvar}</Text>
        <Button
          title="Go to ..."
          color="pink"
          onPress={() => this.props.navigation.push('First')}
        />
        <Button
          title="Go to BACK"
          color="pink"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    );
  }
}
