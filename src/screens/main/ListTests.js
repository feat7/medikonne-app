import React, { Component } from 'react';
import { ToastAndroid } from 'react-native';
import { Container, Header, Title, View, Left, Icon, Button, Body,
    Text, Content, StyleProvider, Thumbnail, List, ListItem, Footer,
    FooterTab, Spinner, Item, Input } from 'native-base';
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
        fetch("http://10.0.2.2/app.tests", {method: "GET"})
        .then(response => response.json())
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
                <Body><Title>Tests</Title></Body>
              </Header>
              <Header searchBar rounded>
                <Item>
                    <Icon name="ios-search" />
                    <Input placeholder="Search" />
                    <Icon name="ios-flask" />
                </Item>
                <Button transparent>
                    <Text>Search</Text>
                </Button>
                </Header>
              <Content>
                {
                    this.state.fetched ? <List dataArray={this.state.testList}
                    renderRow={(item) =>
                        <ListItem
                        onPress={ () => this.props.navigation.navigate('ListLabs', {test_id: item.id, test: item.name}) }>
                            <Thumbnail square size={80} source={require('../../img/laboratory.png')} />
                            <Body>
                            <Text>{item.name}</Text>
                            <Text note>{item.description}</Text>
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
