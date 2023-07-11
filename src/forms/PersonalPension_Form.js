import React from 'react';
import {
    StyleSheet, 
    View, 
    KeyboardAvoidingView,
    ScrollView,
    ImageBackground
} from 'react-native';
// import {} from 'react-native-elements';
import { Card, CardItem, DatePicker, Label, Input, Radio, ListItem, Text, Form, Item, Button, Picker, CheckBox } from 'native-base';

import defaultStyles from '../styles/DefaultStyles';
import { Icon } from 'react-native-elements';
import Swiper from 'react-native-swiper'
import { RadioButton } from 'react-native-paper';
import PersonalDetails from '../components/PersonalDetails';
import Employment from '../components/Employment';
import BenefitsHistory from '../components/BenefitsHistory';
import PPBeneficiary from '../components/PPBeneficiary';
import MedicalHistory from '../components/MedicalHistory';

export default class PersonalPension_Form extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <ImageBackground
                source={{uri: 'http://localhost:8081/src/media/donewell-life-logo.jpg'}}
                style={{width: '100%', height: '100%'}}
                imageStyle={{opacity: 0.3}}>
                <Swiper
                    showsPagination={false}
                    loop={false}
                    scrollsToTop={true}>
                    <PersonalDetails />
                    <Employment />
                    <BenefitsHistory />
                    <MedicalHistory />
                    <PPBeneficiary />
                    <PPBeneficiary />
                    <PPBeneficiary />
                </Swiper>

            </ImageBackground>
        )
    }
}