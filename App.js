import React from 'react';
import { StyleSheet, Text, Button, View, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Audio } from 'expo-av';

import WelcomeScreen from                  './app/screens/Screen1_WelcomeScreen';
import Questionnaire from                  './app/screens/Screen2_Questionnaire';
import ResearchGuidelines from             './app/screens/Screen3_ResearchGuidelines';
import ArtPieces from                      './app/screens/Screen4_ArtPieces';
import ArtPiecesChoices from               './app/screens/Screen4.5_ArtPiecesChoices';
import SummaryQuestionnaire from           './app/screens/Screen5_SummaryQuestionnaire';
import SummaryQuestionnaireAdditional from './app/screens/Screen5.5_SummaryQuestionnaireAdditional';
import BinaryChoicesExplanation from       './app/screens/Screen6_BinaryChoicesExplanation';
import BinaryChoices from                  './app/screens/Screen7_BinaryChoices';
import ThanksForParticipating from         './app/screens/Screen8_ThanksForParticipating';
import MultipleChoice from                 './app/components/multiple_choice';
import CameraScreen from                   './app/screens/CameraScreen';

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
        source={require('./app/assets/images/pic1.png')}
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
         component= {WelcomeScreen}
         options={{ title: 'ברוכים הבאים' }}        
        />

        <Stack.Screen
        name="Questionnaire"
        component={Questionnaire}        
        options={{ title: "שאלון פרטים אישיים" }}
        />

        <Stack.Screen
         name="ResearchGuidelines"
         component={ResearchGuidelines}
         options={{ title: 'הנחיות לסיור'}}
        />

        <Stack.Screen
        name="ArtPieces"
        component={ArtPieces}        
        options={{ title: "יצירות"}}
        />

        <Stack.Screen
        name="CameraScreen"
        component={CameraScreen}        
        />

        <Stack.Screen
        name="ArtPiecesChoices"
        component={ArtPiecesChoices}        
        options={{ title: 'בחרו את היצירה הבאה'}}
        />
        
        <Stack.Screen
         name="SummaryQuestionnaire"
         component= {SummaryQuestionnaire}
         options={{ title: "שאלון סיכום"}}
        />

        <Stack.Screen
         name="SummaryQuestionnaireAdditional"
         component= {SummaryQuestionnaireAdditional}
         options={{ title: "שאלון סיכום"}}
        />

        <Stack.Screen
        name="BinaryChoicesExplanation"
        component={BinaryChoicesExplanation}        
        options={{ title: 'שלב אחרון בניסוי!'}}
        />

        <Stack.Screen
        name="BinaryChoices"
        component={BinaryChoices}
        options={{ title: 'סמנו אהבתי / לא אהבתי'}}
        />
        
        <Stack.Screen
         name="ThanksForParticipating"
         component= {ThanksForParticipating}
         options={{ title: 'סיימנו!'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;