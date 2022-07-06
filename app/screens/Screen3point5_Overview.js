import React, {useState}  from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Button, Image, TouchableOpacity, Pressable} from 'react-native';
import AudioPlayer from '../components/AudioPlayer';
import { globalStyles } from '../assets/styles/global';

export default function OverviewScreen({navigation}) { 
  let show = true; //[show, setShow] = useState(false); //TODO: show if audio finished playing?
  let audio_explanation = require("../assets/audio/instructions/overview.wav")

  return (      
    <View style={globalStyles.container}>
        <Text style = {globalStyles.header}>ברוכים הבאים לסיור באוסף מיזנה בלומנטל</Text>     
        <View
          style= {
            {
              flex: 1,
              flexDirection: "column",
              alignItems: 'center',
                 
            }
          }>
          <View style={
            {
              flexBasis: 100,
              flexGrow: 0.01,
              flexShrink: 0
            }
          }>
            {/* Just some padding */}
            </View>      
          
          <View style={[{ alignItems: 'center'},
            {
              flexBasis: 100,
              flexGrow: 0.79,
              flexShrink: 1,
            }]  
          }>
          <Image        
            source={require("../assets/images/Sefi.png")}
            style={{ resizeMode: 'contain', width: 200, height: 200}} 
          />
          </View>
          
          <View style={
            {
              flexBasis: 100,
              flexGrow: 0.4,
              flexShrink: 0
            }
          }>
            <AudioPlayer
            soundfile={audio_explanation}
            />
          </View>
          <View style={
            {
              flexBasis: 100,
              flexGrow: 0.01,
              flexShrink: 0
            }
          }>
            <Button 
          title='המשך'
          onPress={() => {navigation.navigate("ArrivalInstructions")}}>
            </Button>
          </View>

        </View>

        

        
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
    text: {
        fontWeight:'bold',
        fontSize:30,
        marginBottom:25,
        textDecorationLine: 'underline',
        textAlign: "right"
    },

    attributesView: {       
        marginTop:20,      
        borderColor: "black",      
        
    },    

    attributesText: {
      marginRight:20,
      fontSize:30,
      fontWeight: 'bold',
      textAlign: 'right'
    },
});

  
  