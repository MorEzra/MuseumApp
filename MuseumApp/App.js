import React from 'react';
import { AppRegistry, StyleSheet, Text, Button, View, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScreenStackHeaderBackButtonImage } from 'react-native-screens';
import WelcomeScreen from './app/screens/WelcomeScreen';
import { Audio } from 'expo-av';

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
});




const DisplayAnImage = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={require('./app/assets/Sefi.png')}
      />
      <Image
        style={styles.tinyLogo}
        source={require('./app/assets/felizia.png')}
      />
    </View>
  );
}


function SefyHello({navigation}) {
  const [sound, setSound] = React.useState();
  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(
       require('./app/assets/WhatsApp_Ptt.mp3')
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
      <DisplayAnImage></DisplayAnImage>    
    </View>,
    <View style={styles.container}>
    <Button title="Play Sound" onPress={playSound} />
  </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
         name="Welcome"
         component= {WelcomeScreen}
         options={{ title: 'what', headerBackVisible: false }}
        />
        <Stack.Screen
         name="SefyHello"
         component={SefyHello}
         options={{ title: 'whatwhat', headerBackVisible: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;