import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, 
Input, Item, Content, View, Text} from 'native-base';
export default class LoginScreen extends Component {
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
            <Input placeholder="Mobile number" />
          </Item>
          <Item rounded style={{ marginBottom: 4}}>
            <Input placeholder="Password" />
          </Item>
            <Button full rounded info bordered style={{ marginBottom: 28}}><Text>Login</Text></Button>
        </View>
      </Container>
    );
  }
}