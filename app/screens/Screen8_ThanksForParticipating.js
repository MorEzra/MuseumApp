import React  from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';


export default function ThanksForParticipating({navigation}) {
  
  return (      
    <View style={styles.container}>     
      <Text style = {styles.header}>תודה על השתתפותך!</Text>
      <Text>אנא החזירו את האייפד לכניסה, שם תקבלו את שובר המתנה</Text>
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',    
    },    
  
    header: {
      textDecorationLine:'underline',
      fontSize:20,
      fontWeight:"bold",
      color: "lightblue",  
    },     
  });
  