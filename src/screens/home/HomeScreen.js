import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Title, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon, Button } from 'native-base';
const cards = [
  {
    text: 'Medikonne',
    name: 'Your health is important.',
    image: require('./img/swiper-1.jpg'),
  },
];
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
            flex:1,
            backgroundColor: '#3498db'
        }}>
          <DeckSwiper
            ref={(c) => this._deckSwiper = c}
            dataSource={cards}
            renderEmpty={() =>
              <View style={{ alignSelf: "center" }}>
                <Text>Over</Text>
              </View>}
            renderItem={item =>
              <Card style={{ elevation: 3 }}>
                <CardItem>
                  <Left>
                    <Thumbnail source={item.image} />
                    <Body>
                      <Text>{item.text}</Text>
                      <Text note>Your Health is Important</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image style={{ height: 300, flex: 1 }} source={item.image} />
                </CardItem>
                <CardItem>
                  <Icon name="heart" style={{ color: '#ED4A6A' }} />
                  <Text>{item.name}</Text>
                </CardItem>
              </Card>
            }
          />
        </View>
        <View style={{ flexDirection: "row", flex: 1, position: "absolute", bottom: 5, left: 0, right: 0, justifyContent: 'space-between', padding: 15 }}>
          <Button iconLeft onPress={() => this._deckSwiper._root.swipeLeft()}>
            <Icon name="arrow-back" />
            <Text>Previous</Text>
          </Button>
          <Button iconRight onPress={() => this._deckSwiper._root.swipeRight()}>
          <Text>Next</Text>
          <Icon name="arrow-forward" />
          </Button>
        </View>
      </Container>
    );
  }
}