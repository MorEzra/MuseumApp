import React, {useState}  from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity} from 'react-native';

import AudioPlayer from '../components/AudioPlayer';



export default function FirstArtPiece({navigation}) {
    const [attribute, setAttribute] = useState([
        {name:"attribute 1", key:1},
        {name:"attribute 2", key:2},
        {name:"attribute 3", key:3}               
    ]);

  return (
    <View style={styles.container} >
      <Text style = {styles.header}>יצירה 1</Text>
      {/* ------------------------------------------------ instructions ------------------------------------------------ */}
      <Text style={styles.text}>הוראות הגעה:</Text>
      <Text>------------------------------------------------הוראות------------------------------------------------</Text>

      {/* ------------------------------------------------ camera ------------------------------------------------ */}
      <Text>בהגיעך אל התמונה, אנא צלם אותה</Text>
      <Button 
          title="open camera"
          onPress={() => navigation.navigate("CameraScreen")}>
      </Button>
      <Image
        source={require("../assets/images/camera.png")}
        style={{ width: 100, height: 100 }} 
      />

      {/* ------------------------------------------------ audio ------------------------------------------------ */}
      <Text>מעולה! כעת, ניתן לשמוע הסבר</Text>
      <AudioPlayer />
      {/* ------------------------------------------------ art piece ------------------------------------------------ */}
      <Image        
        source={require("../assets/images/felizia.png")}
        style={{ width: 400, height: 400 }} 
      />
            
      <Button 
          title="המשך"
          onPress={() => navigation.navigate("FirstArtPieceChoices")}>
      </Button>

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

    text: {
        fontWeight:'bold',
        fontSize:15,
        textDecorationLine: 'underline',
    },

    attributes: {
        backgroundColor:"orange",
        fontSize:20,
        marginTop:20,
    },
  });
  