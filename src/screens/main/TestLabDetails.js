import React, {Component} from 'react';
import DatePicker from 'react-native-datepicker';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';
import { StyleProvider, Container, Text, H1,
Button, View, Content, Card, CardItem, Body, Item,
Input } from 'native-base';
import { AsyncStorage, ToastAndroid } from 'react-native';
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
            requestAppointment: false,
            notes: '',
            token: '',
            details: ''
        }

        this._requestAppointment = this._requestAppointment.bind(this);
        this.getToken();
    }

    async getToken() {
        let promise = await AsyncStorage.getItem('@MedikonneAuth:token').
        then(token => {
            this.setState({token: token});  
        }).done(); 
    }

    _requestAppointment() {
        let details = this.props.navigation.state.params;        
        console.log(this.props);
        this.setState({requestAppointment: true});
        var formdata = new FormData();
        
        formdata.append('token', this.state.token);
        formdata.append('lab_id', details.lab.lab_id);
        formdata.append('test_id', details.lab.test_id);
        formdata.append('date_time_tz', this.state.datetime1);
        formdata.append('notes', this.state.notes);

        console.log("Details", details);
    
        fetch("http://10.0.2.2/app.request.lab.appointment", {method: "POST", body: formdata})
            .then(response => response.json())
            .then((responseData) => {
                this.setState({response: responseData});
                if(responseData.success) {
                    ToastAndroid.showWithGravityAndOffset('Appointment Booked!', ToastAndroid.LONG, ToastAndroid.BOTTOM, 25, 50);                    
                }
                console.log(responseData);
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
                onChangeText={(notes) => this.setState({notes: notes })}
                value={this.state.notes}
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