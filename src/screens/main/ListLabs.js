import React, { Component } from 'react';
import { ToastAndroid, TouchableOpacity } from 'react-native';
import { Container, Header, Title, View, Left, Icon, Button, Body,
    Text, Content, StyleProvider, Thumbnail, List, ListItem, Footer,
    FooterTab, Spinner, Item, Input } from 'native-base';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';

export default class ListLabs extends Component {

    constructor()
    {
        super();
        this.state = {
            fetched: false,
            testList: []
        }
        console.log(this.state);
    }

    componentWillMount()
    {
        fetch("http://10.0.2.2/app.test.cost/get?test_id="+this.props.navigation.state.params.test_id, {method: "GET"})
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
                <Body><Title>Labs for {this.props.navigation.state.params.test}</Title></Body>
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
                        <TouchableOpacity>
                        <ListItem onPress={
                          () => this.props.navigation.navigate('TestLabDetails', {lab: item, title: item.test.name})  
                        }>
                            <Thumbnail square size={80} source={require('../../img/laboratory.png')} />
                            <Body>
                            <Text>{item.lab.name}</Text>
                            <Text note>{item.lab.description}</Text>
                            <Text note>Price: {item.price} INR</Text>
                            </Body>
                        </ListItem>
                        </TouchableOpacity>
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
