import React from 'react';
import { View, Text,Button } from 'react-native';

export default class FirstScreen extends React.Component {

    
  render() {
      const getName = this.props.navigation.getParam('name', "no name")
      const getAge = this.props.navigation.getParam('age', "no name")
      const getAddress = this.props.navigation.getParam('address', "no name")
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>First Screen {getName}
        
        </Text>
        <Text>{getAge}</Text>
        <Text>{getAddress}</Text>
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
