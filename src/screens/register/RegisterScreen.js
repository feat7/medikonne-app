import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, 
Input, Item, Content, View, Text} from 'native-base';
import FormData from 'FormData';
import { ToastAndroid } from 'react-native';


export default class RegisterScreen extends Component {

  constructor() {
    super();
    this.state = {
      name: '',
      mobile: '',
      password: '',
      confirm_password: '',
    }
  }

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent
            onPress={ () => this.props.navigation.goBack() }>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Register</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="settings" />
            </Button>
          </Right>
        </Header>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 8,
        backgroundColor: '#fff'}}>
        <Text style={{ padding: 4, marginBottom: 28}}>Register to Medikonne</Text>
          <Item rounded style={{ marginBottom: 4}}>
            <Input placeholder="Full Name" 
            onChangeText={(name) => this.setState({name: name })}
            value={this.state.name}
            style={{marginLeft: 10}}/>
          </Item>
          <Item rounded style={{ marginBottom: 4}}>
            <Input placeholder="Mobile Number" 
            onChangeText={(mobile) => this.setState({mobile: mobile })}
            value={this.state.mobile}
            style={{marginLeft: 10}}/>
          </Item>
          <Item rounded style={{ marginBottom: 4}}>
            <Input secureTextEntry={true} placeholder="Password"
            onChangeText={(password) => this.setState({password: password })} 
            value={this.state.password}
            style={{marginLeft: 10}}/>
          </Item>
          <Item rounded style={{ marginBottom: 4}}>
            <Input secureTextEntry={true} placeholder="Confirm Password"
            onChangeText={(confirm_password) => this.setState({confirm_password: confirm_password })}
            value={this.state.confirm_password}
            style={{marginLeft: 10}} />
          </Item>
          <Button full rounded info style={{ marginBottom: 38}}
          onPress={() =>   
            {
              var formdata = new FormData();

              console.log(this.state);
              formdata.append('name', this.state.name)
              formdata.append('mobile', this.state.mobile)
              formdata.append('password', this.state.password)
              formdata.append('confirm_password', this.state.confirm_password)
            
              fetch("http://10.0.2.2/app.register", {method: "POST", body: formdata})
                    .then((response) => response.json())
                    .then((responseData) => {
                        this.setState({response: responseData});
                        console.log(responseData)
                        if(responseData.success) {
                          ToastAndroid.showWithGravityAndOffset('Registered Successfully!', ToastAndroid.LONG, ToastAndroid.BOTTOM, 25, 50);
                        }
                    })
                    .done()
                }    
            
          }><Text>Sign Up</Text></Button>
        </View>
      </Container>
    );
  }
}