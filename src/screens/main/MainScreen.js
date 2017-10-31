import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import { Container, Header, Title, View, Left, Icon, Button, Body,
Text, Content, StyleProvider, Thumbnail, List, ListItem, Footer,
FooterTab } from 'native-base';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';

export default class HomeScreen extends Component {
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
          <Body><Title>Medikonne</Title></Body>
        </Header>
        <Content>
            <List>
            <ListItem
            onPress={ () => this.props.navigation.navigate("ListTests") }>
                <Thumbnail square size={80} source={require('../../img/laboratory.png')} />
                <Body>
                <Text>Tests</Text>
                <Text note>Take a test</Text>
                </Body>
            </ListItem>
            <ListItem>
                <Thumbnail square size={80} source={require('../../img/laboratory.png')} />
                <Body>
                <Text>Medikonne</Text>
                <Text note>Its time to make the difference</Text>
                </Body>
            </ListItem>
            </List>
        </Content>
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