import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import RnCarousel from 'react-native-carousel';
import { View, Text, Card, CardItem, Body, Content } from 'native-base';

export default class Carousel extends Component {
    render() {
        return (
            <RnCarousel width={375} animate={true} loop={true}
            indicatorAtBottom={false} delay={2000} indicatorSize={17}
            indicatorSpace={10}
            >
                <Content>
                <Card>
                    <CardItem cardHeader>
                        <Body>
                            <Text>Welcome To Medikonne</Text>
                        </Body>
                    </CardItem>
                    <CardItem cardBody>
                    <Image source={require('../img/swiper.jpg') } style={{height: 200, width: null, flex: 1}}/>
                </CardItem>
                </Card>
                </Content>
                <Content>
                <Card>
                    <CardItem cardHeader>
                        <Body>
                            <Text>Some more info..</Text>
                        </Body>
                    </CardItem>
                    <CardItem cardBody>
                        <Image source={require('../img/swiper.jpg') } style={{height: 200, width: null, flex: 1}}/>
                    </CardItem>
                </Card>
                </Content>
            </RnCarousel>
        )
    }
}

var styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'transparent',
    },
});