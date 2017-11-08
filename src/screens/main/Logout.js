import React, { Component } from 'react';
import { Image, StyleSheet, AsyncStorage } from 'react-native';
import { Container, Header, Title, View, Left, Icon, Button, Body,
Text, Content, StyleProvider, Thumbnail, List, ListItem, Footer,
FooterTab } from 'native-base';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';

export default class Logout extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(material)}>
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name="md-home" />
            </Button>
          </Left>
          <Body><Title>Account</Title></Body>
        </Header>
        <Container style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
        <Content>
        <Text>Hello User!</Text>
        <Button danger
        onPress={() =>
            { 
                AsyncStorage.removeItem('@MedikonneAuth:token',
            () => this.props.navigation.navigate('Home'));
            }
            }><Text>Logout</Text></Button>
        </Content>
        </Container>
        <Footer>
            <FooterTab
            style={ {backgroundColor: '#16a085'} }>
            <Button vertical active>
                <Icon name="md-home" />
                <Text>Home</Text>
            </Button>
            <Button vertical>
                <Icon name="flask" />
                <Text>Tests</Text>
            </Button>
            <Button vertical>
                <Icon active name="settings" />
                <Text>Settings</Text>
            </Button>
            <Button vertical onPress={ () => this.props.navigation.navigate("LoginTab") }>
                <Icon name="person" />
                <Text>Account</Text>
            </Button>
            </FooterTab>
        </Footer>
      </Container>
      </StyleProvider>
    );
  }
}