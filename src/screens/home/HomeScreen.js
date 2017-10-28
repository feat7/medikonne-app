import React from "react";
import { View, StatusBar } from "react-native";
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content,Text, Card, CardItem } from "native-base";
export default class HomeScreen extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Medikonne</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Card>
            <CardItem>
              <Body>
                <Text>Health is Wealth and Medikonne is best!</Text>
              </Body>
            </CardItem>
          </Card>
          <Container style={ { alignItems: 'center', justifyContent: 'center'} }>
          <Button full rounded dark
            style={{ marginTop: 10 }}
            onPress={() => this.props.navigation.navigate("Login")}>
            <Text>Sign In</Text>
          </Button>
          <Button full rounded primary
            style={{ marginTop: 10 }}
            onPress={() => this.props.navigation.navigate("Register")}>
            <Text>Sign Up</Text>
          </Button>
          </Container>
        </Content>
      </Container>
    );
  }
}