import React from 'react';
import { View, Text,Button  } from 'react-native';

export default class ProfileScreen extends React.Component {
    static navigationOptions ={header:null}
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Profile Screen</Text>

      </View>
    );
  }
}
