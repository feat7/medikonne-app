import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { Image, StyleSheet, AsyncStorage, Alert, ToastAndroid } from 'react-native';
import Carousel from '../../components/Carousel';
import { Container, Header, Title, View, Left, Icon, Button, Body,
Text, Content, StyleProvider, Spinner } from 'native-base';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';
import FormData from 'FormData';

export default class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      token: null,
      fetched: false
    }

  }

  async onRetreive() {
    const token = await AsyncStorage.getItem('@MedikonneAuth:token');
    this.setState({token: token}, (token) => console.log(token));
    
          var formdata = new FormData();
          
          console.log("token",token,"state", this.state.token);
          formdata.append('token', this.state.token);
      
          fetch("http://10.0.2.2/app.check.auth", {method: "POST", body: formdata})
              .then(response => response.json())
              .then((responseData) => {
                  this.setState({fetched: true, loggedIn: responseData.success});
                  if(responseData.success) {

                      ToastAndroid.showWithGravityAndOffset('Logging in!', ToastAndroid.LONG, ToastAndroid.BOTTOM, 25, 50);  
                      const resetAction = NavigationActions.reset({
                        index: 0,
                        actions: [
                          NavigationActions.navigate({ routeName: 'Main'})
                        ]
                      })
                      this.props.navigation.dispatch(resetAction)                  
                  }
                  console.log("fjldjfldf",responseData);
              }
              ).done()
  }

  componentWillMount() {
    this.onRetreive();
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
        {this.state.fetched ? null : <Content><Spinner /></Content>}
        
        {this.state.loggedIn ? <Text>Already Logged in!</Text> : 
          <Container>
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
          </View></Container>
          
        }
      </Container>
      </StyleProvider>
    );
  }
}

