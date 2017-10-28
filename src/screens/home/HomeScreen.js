import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import Carousel from '../../components/Carousel';
import { Container, Header, Title, View, Left, Icon, Button, Body,
Text, Content, StyleProvider } from 'native-base';
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
        <View style={{
          flex: 1,
          backgroundColor: '#ecf0f1'          
        }}>
          <Carousel />
        </View>
        <View style={{
          flex: 0.7,
          padding: 8,
          backgroundColor: '#ecf0f1'          
        }}>
          <Button success full rounded style={{ marginBottom: 8 }}
          onPress={ () => this.props.navigation.navigate("Login") }>
            <Text>Login</Text>
          </Button>
          <Button info full rounded>
            <Text>Register</Text>
          </Button>
        </View>
      </Container>
      </StyleProvider>
    );
  }
}