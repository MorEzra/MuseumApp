import React , {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image} from 'react-native';

export let artPiecesCounterReference = 0;
export default function ArrivalInstructions({navigation}) {  
  let instructionsTexts = ["------------------------------------------------הוראות1------------------------------------------------",
  "------------------------------------------------הוראות2------------------------------------------------",
  "------------------------------------------------הוראות3------------------------------------------------",
  "------------------------------------------------הוראות4------------------------------------------------",
  ] 
  
  let [artPiecesCounter, setArtPiecesCounter] = useState(0);
  let artPiecesNames = ["פרדריקה מריה בר של גוסטב קלימט (1916)",
                        "קייס ואן דונגן, נסיכת בבל (1916)",
                        "סירה בנמל בנטוורפן של ז'ורז' בראק",
                        "תולעי אדמה של ג'קסון פולוק",
                       ];
  let imagesNames = ["pic1.png", "pic2.jpg", "pic3.jpg", "pic4.jpg"]
  artPiecesCounterReference = artPiecesCounter;
  return (      
    <View style={styles.container}>
     
      <Text style = {styles.header}>{artPiecesNames[artPiecesCounter]}</Text>
      


      {/* ------------------------------------------------ art piece ------------------------------------------------ */}
      <Image        
        source={require("../assets/images/" + imagesNames[artPiecesCounterReference])}
        style={{ width: 200, height: 200, marginBottom:10}} 
      />

      {/* ------------------------------------------------ instructions ------------------------------------------------ */}
      <Text style={styles.text}>הוראות הגעה:</Text>
      <Text>{instructionsTexts[artPiecesCounter]}</Text>


      {/* ------------------------------------------------ camera ------------------------------------------------ */}
      <Text>בהגיעך אל התמונה, אנא צלם אותה</Text>    
      <TouchableOpacity
      onPress={() => navigation.navigate("CameraScreen")}
      >
        <Image
          source={require("../assets/images/camera.png")}
          style={{ width: 100, height: 100 }}
        />
      </TouchableOpacity>         

      {/* NOTE: arrival button is redundant because the image is being verified. Is here temporary for debugging purposes  */}
      <Button 
          title="הגעתי"        
          onPress={() =>  {
              artPiecesCounterReference = artPiecesCounterReference;  
              setArtPiecesCounter(artPiecesCounter+1);              
              navigation.navigate("ArtPieces")
            }
          }>
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
      color: "dodgerblue",            
      marginBottom:15,
    },

    text: {
      fontWeight:'bold',
      fontSize:15,
      textDecorationLine: 'underline',
    },
  });
  