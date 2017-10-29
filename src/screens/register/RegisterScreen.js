import React, { Component } from 'react';
import {KeyboardAvoidingView} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, 
Input, Item, Content, View, Text} from 'native-base';
export default class RegisterScreen extends Component {
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
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 8}}>
        <Text style={{ padding: 4, marginBottom: 28}}>Register to Medikonne</Text>
          <Item rounded style={{ marginBottom: 4}}>
            <Input placeholder="Full Name" />
          </Item>
          <Item rounded style={{ marginBottom: 4}}>
            <Input placeholder="Mobile Number" />
          </Item>
          <Item rounded style={{ marginBottom: 4}}>
            <Input secureTextEntry={true} placeholder="Password" />
          </Item>
          <Item rounded style={{ marginBottom: 4}}>
            <Input secureTextEntry={true} placeholder="Confirm Password" />
          </Item>
          <Button full rounded info style={{ marginBottom: 38}}><Text>Sign Up</Text></Button>
        </View>
      </Container>
    );
  }
}