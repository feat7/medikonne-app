import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import Carousel from '../../components/Carousel';
import { Container, Header, Title, View, Left, Icon, Button, Body } from 'native-base';

export default class HomeScreen extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='add' />
            </Button>
          </Left>
          <Body><Title>Medikonne</Title></Body>
        </Header>
        <View style={{
          flex: 1,
          
        }}>
          <Carousel />
        </View>
      </Container>
    );
  }
}