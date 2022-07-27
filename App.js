import React from 'react';
import { StyleSheet, Text, Button, View, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from                  './app/screens/Screen1_WelcomeScreen';
import Questionnaire from                  './app/screens/Screen2_Questionnaire';
import ResearchGuidelines from             './app/screens/Screen3_ResearchGuidelines';
import OverviewScreen from                 './app/screens/Screen3point5_Overview';
import ArrivalInstructions from            './app/screens/Screen4_ArrivalInstructions';
import ArtPieces from                      './app/screens/Screen5_ArtPieces';

//import SummaryQuestionnaire from           './app/screens/Screen6_SummaryQuestionnaire';
import SummaryQuestionnaire1 from          './app/screens/Screen6_SummaryQuestionnaire/q1';
import SummaryQuestionnaire2 from          './app/screens/Screen6_SummaryQuestionnaire/q2';
import SummaryQuestionnaire3 from          './app/screens/Screen6_SummaryQuestionnaire/q3';
import SummaryQuestionnaire4 from          './app/screens/Screen6_SummaryQuestionnaire/q4';
import SummaryQuestionnaire5 from          './app/screens/Screen6_SummaryQuestionnaire/q5';
import SummaryQuestionnaire6 from          './app/screens/Screen6_SummaryQuestionnaire/q6';
import SummaryQuestionnaire7 from          './app/screens/Screen6_SummaryQuestionnaire/q7';
import SummaryQuestionnaire8 from          './app/screens/Screen6_SummaryQuestionnaire/q8';

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
        {/*----------------- Screen1 ----------------- */}
        <Stack.Screen
         name="WelcomeScreen"
         component= {WelcomeScreen}
         options={{ title: 'ברוכים הבאים' }}        
        />
        
        {/*----------------- Screen2 ----------------- */}
        <Stack.Screen
        name="Questionnaire"
        component={Questionnaire}        
        options={{ title: "שאלון פרטים אישיים" }}
        />

        {/*----------------- Screen3 ----------------- */}        
        <Stack.Screen
         name="ResearchGuidelines"
         component={ResearchGuidelines}
         options={{ title: 'הנחיות לסיור'}}
        />
        
        {/*----------------- Screen3point5? ----------------- */}
        <Stack.Screen
         name="OverviewScreen"
         component={OverviewScreen}
         options={{ title: 'הנחיות לסיור'}}
        />

        {/*----------------- Screen4 ----------------- */}
        <Stack.Screen
        name="ArrivalInstructions"
        component={ArrivalInstructions}        
        options={{ title: "הוראות הגעה"}}
        />

        {/*----------------- Screen5 ----------------- */}
        <Stack.Screen
        name="ArtPieces"
        component={ArtPieces}        
        options={{ title: "יצירות"}}
        />        
        
        {/*----------------- Screen6.1 ----------------- */}
        <Stack.Screen
         name="SummaryQuestionnaire1"
         component= {SummaryQuestionnaire1}
         options={{ title: "שאלון סיכום"}}
        />

        {/*----------------- Screen6.2 ----------------- */}
        <Stack.Screen
         name="SummaryQuestionnaire2"
         component= {SummaryQuestionnaire2}
         options={{ title: "שאלון סיכום"}}
        />

        {/*----------------- Screen6.3 ----------------- */}
        <Stack.Screen
         name="SummaryQuestionnaire3"
         component= {SummaryQuestionnaire3}
         options={{ title: "שאלון סיכום"}}
        />

        {/*----------------- Screen6.4 ----------------- */}
        <Stack.Screen
         name="SummaryQuestionnaire4"
         component= {SummaryQuestionnaire4}
         options={{ title: "שאלון סיכום"}}
        />

        {/*----------------- Screen5 ----------------- */}
        <Stack.Screen
         name="SummaryQuestionnaire5"
         component= {SummaryQuestionnaire5}
         options={{ title: "שאלון סיכום"}}
        />

        {/*----------------- Screen6.6 ----------------- */}
        <Stack.Screen
         name="SummaryQuestionnaire6"
         component= {SummaryQuestionnaire6}
         options={{ title: "שאלון סיכום"}}
        />

        {/*----------------- Screen6.7 ----------------- */}
        <Stack.Screen
         name="SummaryQuestionnaire7"
         component= {SummaryQuestionnaire7}
         options={{ title: "שאלון סיכום"}}
        />

        {/*----------------- Screen6.8 ----------------- */}
        <Stack.Screen
         name="SummaryQuestionnaire8"
         component= {SummaryQuestionnaire8}
         options={{ title: "שאלון סיכום"}}
        />

        {/*----------------- Screen6.5 ----------------- */}
        <Stack.Screen
         name="SummaryQuestionnaireAdditional"
         component= {SummaryQuestionnaireAdditional}
         options={{ title: "שאלון סיכום"}}
        />

        {/*----------------- Screen7 ----------------- */}
        <Stack.Screen
        name="BinaryChoicesExplanation"
        component={BinaryChoicesExplanation}        
        options={{ title: 'שלב אחרון בניסוי!'}}
        />

        {/*----------------- Screen8 ----------------- */}
        <Stack.Screen
        name="BinaryChoices"
        component={BinaryChoices}
        options={{ title: 'סמנו אהבתי / לא אהבתי'}}
        />
        
        {/*----------------- Screen9 ----------------- */}
        <Stack.Screen
        name="BinaryChoices2"
        component={BinaryChoices2}
        options={{ title: 'לחצו על התמונה שאתם מעדיפים'}}
        />

        {/*----------------- Screen10 ----------------- */}
        <Stack.Screen
         name="ThanksForParticipating"
         component= {ThanksForParticipating}
         options={{ title: 'סיימנו!'}}         
        />
        
        {/*-------------- Other Screens -------------- */}
        {/*----------------- Screen ----------------- */}
        <Stack.Screen
        name="CameraScreen"
        component={CameraScreen}        
        />    
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;