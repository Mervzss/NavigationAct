import React from 'react';
import { View, Text,Button  } from 'react-native';

export default class SettingScreen extends React.Component {
    static navigationOptions ={header:null}
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Setting Screen</Text>

      </View>
    );
  }
}
