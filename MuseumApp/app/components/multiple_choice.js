import React from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScreenStackHeaderBackButtonImage } from 'react-native-screens';
import csv from 'csvtojson';
import { ToastAndroid } from 'react-native-web';
// This Component receives the next_art_multiple_choice.csv with text-trios 
// for options and renders a multiple choice button array.
// Todo - switch to work only with jsons? Is a function that should be called? or just loads and dispalys inside module?

const csvFilePath='./../assets/texts/multiple_choice.csv';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      marginHorizontal: 16,
    },
    title: {
      textAlign: 'center',
      marginVertical: 8,
    },
    fixToText: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    separator: {
      marginVertical: 8,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
  });

function getTextFromCsv({picture}) { 
    return ( 
        csv().fromFile(csvFilePath).then((jsonObj)) =>{console.log(jsonObj)};
   )
}

function MultipleChoice({picture}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View style={styles.fixToText}>
            <Button
              title="Left button"
              onPress={() => Alert.alert('Left button pressed')}
            />
            </View>
            <View style={styles.fixToText}>
            <Button
              title="Left button"
              onPress={() => Alert.alert('Left button pressed')}
            />
            </View>
            <View style={styles.fixToText}>
            <Button
              title="Left button"
              onPress={() => Alert.alert('Left button pressed')}
            />
            </View>
        </View>
    )
}

export default MultipleChoice