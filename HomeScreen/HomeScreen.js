import React from 'react';
import { View, Text,Button,TextInput  } from 'react-native';
import Icons from "react-native-vector-icons/Ionicons"
export default class HomeScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
          headerTitle: "sad",
          headerRight: (
            <Button
              onPress={navigation.getParam('Home')}
              title="omygosh"
              color="pink"
            />
          ),
          navigationOptions:{
            tabBarIcon: ({tintcolor}) =>{
                <Icons name="ios-home" size={30}/>
          }
        }
          }
          
    }
    state={
        name:""
    }
    onchangeName = (value) =>{
        this.setState({
            name: value,
           
        })  
        
    }
    onchangeAge = (value) =>{
        this.setState({
            age: value,
            
        })  
        
    }
    onchangeAddress = (value) =>{
        this.setState({

            address: value,
        })  
        
    }
    clickButton = () =>{
        this.setState({
            name:""
        })
        
        
        return this.props.navigation.navigate('First',{
            name: this.state.name,
            age: this.state.age,
            address: this.state.address
        })
    }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <TextInput placeholder="Enter Name" value={this.state.name} onChangeText={this.onchangeName} style={{width:"100%"}} />
        <TextInput placeholder="Age" value={this.state.age} onChangeText={this.onchangeAge} style={{width:"100%"}} />
        <TextInput placeholder="Address" value={this.state.address} onChangeText={this.onchangeAddress} style={{width:"100%"}} />
        <Button
          title="Go to Details"
          color="pink"
          onPress={() => this.clickButton()}
        />
      </View>
    );
  }
}
