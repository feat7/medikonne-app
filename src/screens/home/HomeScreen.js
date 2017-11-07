import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { Image, StyleSheet, AsyncStorage } from 'react-native';
import Carousel from '../../components/Carousel';
import { Container, Header, Title, View, Left, Icon, Button, Body,
Text, Content, StyleProvider } from 'native-base';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';

export default class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      token: null,
      fetched: false
    }
    this.getToken();
  }

  async getToken() {
    let promise = await AsyncStorage.getItem('@MedikonneAuth:token').
    then(token => {
      this.setState({token: token, loggedIn: true});
      const resetAction = NavigationActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({ routeName: 'Main'})
        ]
      })
      this.props.navigation.dispatch(resetAction)
      console.log(this.state);   
    }); 
  }

  componentWillMount() {
    
    if(this.state.loggedIn){
      const resetAction = NavigationActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({ routeName: 'Main'})
        ]
      })
      this.props.navigation.dispatch(resetAction)
    }
  }

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
        }}>
          <Carousel />
        </View>
        <View style={{
          flex: 0.7,
          padding: 8,
          backgroundColor: '#ecf0f1',
          justifyContent: 'center'          
        }}>
          <Button success full rounded style={{ marginBottom: 8 }}
          onPress={ () => this.props.navigation.navigate("Login") }>
            <Text>Login</Text>
          </Button>
          <Button info full rounded style={{ marginBottom: 8 }}
          onPress={ () => this.props.navigation.navigate("Register") }>
            <Text>Register</Text>
          </Button>
          <Button info full rounded
          onPress={ () => 
            { const resetAction = NavigationActions.reset({
                index: 0,
                actions: [
                  NavigationActions.navigate({ routeName: 'Main'})
                ]
              })
              this.props.navigation.dispatch(resetAction)
            }
            }>
            <Text>Home</Text>
          </Button>
        </View>
      </Container>
      </StyleProvider>
    );
  }
}

