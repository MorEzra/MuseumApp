import React from 'react';
import { StyleSheet, Text, Button, View, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from                  './app/screens/Screen1_WelcomeScreen';
import Questionnaire from                  './app/screens/Screen2_Questionnaire';
import ResearchGuidelines from             './app/screens/Screen3_ResearchGuidelines';
import ArrivalInstructions from            './app/screens/Screen4_ArrivalInstructions';
import ArtPieces from                      './app/screens/Screen5_ArtPieces';
import SummaryQuestionnaire from           './app/screens/Screen6_SummaryQuestionnaire';
import SummaryQuestionnaireAdditional from './app/screens/Screen6.5_SummaryQuestionnaireAdditional';
import BinaryChoicesExplanation from       './app/screens/Screen7_BinaryChoicesExplanation';
import BinaryChoices from                  './app/screens/Screen8_BinaryChoices';
import BinaryChoices2 from                 './app/screens/Screen9_BinaryChoices';
import ThanksForParticipating from         './app/screens/Screen10_ThanksForParticipating';
import CameraScreen from                   './app/screens/CameraScreen';


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
        component={SummaryQuestionnaire}        
        options={{ title: "שאלון פרטים אישיים" }}
        />

        <Stack.Screen
         name="ResearchGuidelines"
         component={ResearchGuidelines}
         options={{ title: 'הנחיות לסיור'}}
        />

        <Stack.Screen
        name="ArrivalInstructions"
        component={ArrivalInstructions}        
        options={{ title: "הוראות הגעה"}}
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
        name="BinaryChoices2"
        component={BinaryChoices2}
        options={{ title: 'לחצו על התמונה שאתם מעדיפים'}}
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