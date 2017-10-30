import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, 
Input, Item, Content, View, Text} from 'native-base';
import { ToastAndroid } from 'react-native';
import FormData from 'FormData';

export default class LoginScreen extends Component {

  constructor() {
    super();
    this.state = {
      mobile: '',
      password: '',
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
            <Title>Login</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="settings" />
            </Button>
          </Right>
        </Header>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 8,
        backgroundColor: '#fff'}}>
        <Text style={{ padding: 4, marginBottom: 28}}>Login to Medikonne</Text>
          <Item rounded style={{ marginBottom: 4}}>
            <Input placeholder="Mobile number"
            onChangeText={(mobile) => this.setState({mobile: mobile })}
            value={this.state.mobile} />
          </Item>
          <Item rounded style={{ marginBottom: 4}}>
            <Input secureTextEntry={true} placeholder="Password" 
            onChangeText={(password) => this.setState({password: password })}
            value={this.state.password}/>
          </Item>
            <Button full rounded info bordered style={{ marginBottom: 28}}
            onPress={() =>   
              {
                var formdata = new FormData();
  
                console.log(this.state);
                formdata.append('mobile', this.state.mobile)
                formdata.append('password', this.state.password)
              
                fetch("http://10.0.2.2/app.login", {method: "POST", body: formdata})
                      .then((response) => response.json())
                      .then((responseData) => {
                          this.setState({response: responseData});
                          console.log(responseData)
                          if(responseData.success) {
                            ToastAndroid.showWithGravityAndOffset('Logged in Successfully!', ToastAndroid.LONG, ToastAndroid.BOTTOM, 25, 50);
                          } else {
                            ToastAndroid.showWithGravityAndOffset('Invaild Credentials', ToastAndroid.LONG, ToastAndroid.BOTTOM, 25, 50);                            
                          }
                      })
                      .done()
                  }    
              
            }><Text>Login</Text></Button>
        </View>
      </Container>
    );
  }
}