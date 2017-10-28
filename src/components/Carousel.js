import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import RnCarousel from 'react-native-carousel';
import { View, Text, Card, CardItem, Body, Content } from 'native-base';

export default class Carousel extends Component {
    render() {
        return (
            <RnCarousel width={375} animate={false} loop={false}>
                <Content>
                <Card>
                    <CardItem>
                        <Body>
                            <Text>Welcome To Medikonne</Text>
                        </Body>
                    </CardItem>
                </Card>
                </Content>
                <Content>
                <Card>
                    <CardItem>
                        <Body>
                            <Text>Welcome To Medikonne</Text>
                        </Body>
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