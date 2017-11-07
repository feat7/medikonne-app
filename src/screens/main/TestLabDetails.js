import React, {Component} from 'react';
import DatePicker from 'react-native-datepicker';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';
import { StyleProvider, Container, Text, H1 } from 'native-base';

export default class TestLabDetails extends Component {
    constructor() {
        super();
    }

    render() {
        let details = this.props.navigation.state.params;
        return (
            <StyleProvider style={getTheme(material)}>
            <Container style={{flex:1, alignItems: 'center', justifyContent:'center'}}>
                <H1>{details.lab.lab.name}</H1>
                <Text>{details.lab.lab.description}</Text>
            </Container>
            </StyleProvider> 
        );
    }
}