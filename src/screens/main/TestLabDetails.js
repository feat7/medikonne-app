import React, {Component} from 'react';
import DatePicker from 'react-native-datepicker';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';
import { StyleProvider, Container, Text, H1,
Button, View, Content, Card, CardItem, Body, Item,
Input } from 'native-base';
import FormData from 'FormData';

export default class TestLabDetails extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: `${navigation.state.params.title}`,
         headerTitleStyle : {textAlign: 'center',alignSelf:'center'},
            headerStyle:{
                backgroundColor:'white',
            },
        });

    constructor() {
        super();
        this.state = {
            datetime1: '',
            requestAppointment: false
        }

        this._requestAppointment = this._requestAppointment.bind(this);
    }

    _requestAppointment() {
        this.setState({requestAppointment: true});
        var formdata = new FormData();
        
        console.log(this.state);
        formdata.append('mobile', this.state.mobile)
        formdata.append('password', this.state.password)
    
        fetch("http://10.0.2.2/app.request.lab.appointment", {method: "POST", body: formdata})
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({response: responseData});

            }
            ).done()      
    }

    render() {
        let details = this.props.navigation.state.params;
        return (
            <StyleProvider style={getTheme(material)}>
            <Container style={{flex:1}}>
            <Content>
                <Card>
                <CardItem header>
                    <Text>{details.lab.lab.name}</Text>
                </CardItem>
                <CardItem>
                    <Body>
                    <Text>
                        {details.lab.test.description}
                    </Text>
                    </Body>
                </CardItem>
                <CardItem footer>
                    <Text>{details.lab.price} INR</Text>
                </CardItem>
            </Card>
            </Content>
                
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <DatePicker 
                style={{width: 200}}
                date={this.state.datetime1}
                mode="datetime"
                format="YYYY-MM-DD HH:mm"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateIcon: {
                    position: 'absolute',
                    left: 0,
                    top: 4,
                    marginLeft: 0
                  },
                  dateInput: {
                    marginLeft: 36
                  }
                }}
                minuteInterval={10}
                onDateChange={(datetime) => {this.setState({datetime1: datetime});}}
              />
            <Item rounded>
                <Input
                multiline={true}
                style={{marginLeft: 8}}
                placeholder='Any special note (optional)'/>
            </Item>
              <Button
              full
              onPress={this._requestAppointment}><Text>Request Appointment</Text></Button>
              </View>
            </Container>
            </StyleProvider> 
        );
    }
}