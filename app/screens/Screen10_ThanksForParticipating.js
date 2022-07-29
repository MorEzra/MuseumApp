import React  from 'react';
import { StatusBar } from 'expo-status-bar';
import {Text, ScrollView, View} from 'react-native';
import { globalStyles } from '../assets/styles/global';


export default function ThanksForParticipating({navigation}) {  
  return (      
    <View style={globalStyles.container}>           
      <ScrollView>
        <Text style = {globalStyles.header}>תודה על השתתפותך!</Text>
        <Text
        style = {
          globalStyles.instructionsText
        }>
          אנא החזירו את האייפד לכניסה, שם תקבלו את שובר המתנה
        </Text>      
        <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
}
  