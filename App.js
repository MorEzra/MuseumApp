import React from 'react';
import { AppRegistry, StyleSheet, Text, Button, View, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScreenStackHeaderBackButtonImage } from 'react-native-screens';

import WelcomeScreen from './app/screens/Screen1_WelcomeScreen';
import Questionnaire from './app/screens/Screen2_Questionnaire';
import ResearchGuidelines from './app/screens/Screen3_ResearchGuidelines';
import FirstArtPiece from './app/screens/Screen4_FirstArtPiece';
import CameraScreen from './app/screens/CameraScreen';
import FirstArtPieceChoices from './app/screens/Screen5_FirstArtPieceChoices';
import ThanksForParticipating from './app/screens/Screen8_ThanksForParticipating';
import SummaryQuestionnaire from './app/screens/Screen7_SummaryQuestionnaireScreen';


const Stack = createNativeStackNavigator();

function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
         name="WelcomeScreen"
         component= {WelcomeScreen}
         options={{ title: 'Welcome' }}
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