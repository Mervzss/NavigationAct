import React from 'react';
import { View, Text,Button  } from 'react-native';

export default class HomeScreen extends React.Component {
    static navigationOptions ={header:null}
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          color="pink"
          onPress={() => this.props.navigation.navigate('First')}
        />
      </View>
    );
  }
}
