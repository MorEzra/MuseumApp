import React  from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';
//import { RNCamera } from 'react-native-camera';
import { useCamera } from 'react-native-camera-hooks';


export default function CameraScreen({navigation}) {
  //[picture, takePicture] = useCamera(null);
  return (      
    <View style={styles.container}>
     
      <Text style = {styles.header}>camera screen</Text>      
      <Button 
          title="המשך"
          onPress={() => navigation.navigate("FirstArtPiece")}>
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

    preview: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',    
      },

  });
  