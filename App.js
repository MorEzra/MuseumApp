import React from 'react';
import { AppRegistry, StyleSheet, Text, Button, View, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScreenStackHeaderBackButtonImage } from 'react-native-screens';
import { Audio } from 'expo-av';

import WelcomeScreen from './app/screens/Screen1_WelcomeScreen';
import Questionnaire from './app/screens/Screen2_Questionnaire';
import ResearchGuidelines from './app/screens/Screen3_ResearchGuidelines';
import FirstArtPiece from './app/screens/Screen4_FirstArtPiece';
import CameraScreen from './app/screens/CameraScreen';
import FirstArtPieceChoices from './app/screens/Screen5_FirstArtPieceChoices';
import ThanksForParticipating from './app/screens/Screen8_ThanksForParticipating';
import PlayerScreen from './app/screens/PlayerScreen';


import MultipleChoice from './app/components/multiple_choice';
import SummaryQuestionnaire from './app/screens/Screen7_SummaryQuestionnaireScreen';


const styles = StyleSheet.create({
  container: {
    flex: 1,
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
        source={require('./app/assets/images/Sefi.png')}
      />
      <Image
        style={styles.tinyLogo}
        source={require('./app/assets/images/felizia.png')}
      />
    </View>
  );
}


function SefyHello({navigation}) {
  const [sound, setSound] = React.useState();
  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(
       require('./app/assets/audio/pictures_at_an_exhibition_mussorgsky.mp3')
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
      <DisplayAnImage />
      <View style={styles.container}>
      <Button title="Play Sound" onPress={playSound} style={{flex: 1}} /> 
      {/* Todo - Convert this to a nice player they can move forward and back with, stop and start. */}
      </View>
      <View style={styles.container}>
        <MultipleChoice
          picture = "1"
        />
      </View>

      <Button 
          title="to temp screen"
          onPress={() => navigation.navigate('F')}>
        </Button>
    </View>
  );
}


const Stack = createNativeStackNavigator();

function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
         name="WelcomeScreen"
         component= {PlayerScreen}
         options={{ title: 'Welcome' }}
         initialParams={{item: 42}}
        // headerBackVisible: false
        />
        <Stack.Screen
        name="Questionnaire"
        component={Questionnaire}        
        />
        <Stack.Screen
         name="ResearchGuidelines"
         component={ResearchGuidelines}
         options={{ title: 'Guidelines'}}
        />
        <Stack.Screen
        name="FirstArtPiece"
        component={FirstArtPiece}        
        options={{ title: 'FirstArtPiece'}}
        />
         <Stack.Screen
        name="CameraScreen"
        component={CameraScreen}        
        options={{ title: 'CameraScreen'}}
        />
        <Stack.Screen
        name="FirstArtPieceChoices"
        component={FirstArtPieceChoices}        
        options={{ title: 'FirstArtPieceChoices'}}
        />
        <Stack.Screen
         name="SummaryQuestionnaire"
         component= {SummaryQuestionnaire}
         options={{ title: 'Summary Questionnaire'}}
        />
        <Stack.Screen
         name="ThanksForParticipating"
         component= {ThanksForParticipating}
         options={{ title: 'Thanks!'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;