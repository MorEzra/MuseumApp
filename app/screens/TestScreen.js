import React from 'react';
import { AppRegistry, StyleSheet, Text, Button, View, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScreenStackHeaderBackButtonImage } from 'react-native-screens';
import { Audio } from 'expo-av';





export default function TestScreen({navigation}) {
  
  const [sound, setSound] = React.useState();
  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(
       require('./../assets/audio/pictures_at_an_exhibition_mussorgsky.mp3')
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync(); }

  React.useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync(); }
      : undefined;
  }, [sound]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>ברוכים הבאים לאוסף מינזה בלומנטל</Text>
      <Button 
        title='Bye Sef'
        onPress={() => navigation.navigate('Welcome')}> </Button> 
      <View style={styles.container}>
      <Button title="Play Sound" onPress={playSound} style={{flex: 1}} /> 
      {/* Todo - Convert this to a nice player they can move forward and back with, stop and start. */}
      </View>
      <View style={styles.container}>
        <MultipleChoice
          picture = "1"
        />
      </View>

      <Button >
          title="to temp screen"
          onPress={() => navigation.navigate('F')}
      </Button>
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
  