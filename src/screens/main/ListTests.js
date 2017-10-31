import React, { Component } from 'react';
import { ToastAndroid } from 'react-native';
import { Container, Header, Title, View, Left, Icon, Button, Body,
    Text, Content, StyleProvider, Thumbnail, List, ListItem, Footer,
    FooterTab, Spinner } from 'native-base';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';

export default class ListTests extends Component {

    constructor()
    {
        super();
        this.state = {
            fetched: false,
            testList: []
        }
    }

    componentWillMount()
    {
        fetch("http://10.0.2.2/app.test.cost", {method: "GET"})
        .then((response) => response.json())
        .then((responseData) => {
            console.log(responseData)
            this.setState({ fetched: true });
            if(responseData.success) {
                this.setState({testList: responseData.data});
                ToastAndroid.showWithGravityAndOffset('Fetched!', ToastAndroid.LONG, ToastAndroid.BOTTOM, 25, 50);
            }
        })
        .done()
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
              <Content>
                {
                    this.state.fetched ? <List dataArray={this.state.testList}
                    renderRow={(item) =>
                        <ListItem>
                            <Thumbnail square size={80} source={require('../../img/laboratory.png')} />
                            <Body>
                            <Text>{item.test.name}</Text>
                            <Text note>{item.test.description}</Text>
                            <Text note>{item.price}</Text>
                            </Body>
                        </ListItem>
                    }>
                    </List> : <Spinner />
                }
              </Content>
              <Footer>
                  <FooterTab
                  style={ {backgroundColor: '#16a085'} }>
                  <Button vertical
                  onPress={ () => this.props.navigation.navigate('HomeTab') }>
                      <Icon name="md-home" />
                      <Text>Home</Text>
                  </Button>
                  <Button vertical active>
                      <Icon name="flask" />
                      <Text>Lab</Text>
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
