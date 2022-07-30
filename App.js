import React,  { useState, useEffect } from 'react';
import { StyleSheet, Text, Button, View, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Asset } from 'expo-asset';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

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

//import BinaryChoices from                  './app/screens/Screen8_BinaryChoices';
import BinaryChoices1_1 from './app/screens/Screen8_BinaryChoices/1';
import BinaryChoices1_2 from './app/screens/Screen8_BinaryChoices/2';
import BinaryChoices1_3 from './app/screens/Screen8_BinaryChoices/3';
import BinaryChoices1_4 from './app/screens/Screen8_BinaryChoices/4';
import BinaryChoices1_5 from './app/screens/Screen8_BinaryChoices/5';
import BinaryChoices1_6 from './app/screens/Screen8_BinaryChoices/6';
import BinaryChoices1_7 from './app/screens/Screen8_BinaryChoices/7';
import BinaryChoices1_8 from './app/screens/Screen8_BinaryChoices/8';

import BinaryChoices2 from                 './app/screens/Screen9_BinaryChoices';
import ThanksForParticipating from         './app/screens/Screen10_ThanksForParticipating';
import CameraScreen from                   './app/screens/CameraScreen';

import Images from './app/assets/images/images'

function cacheImages(images) {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}


function cacheFonts(fonts) {
  return fonts.map(font => Font.loadAsync(font));
}

const Stack = createNativeStackNavigator();

function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  
  // Load any resources or data that you need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {

        SplashScreen.preventAutoHideAsync();
        
        const imageAssets = cacheImages(Images.slice(0,70));
        
        const fontAssets = cacheFonts([MaterialCommunityIcons.font,
          {'Hillel':
          require('./app/assets/fonts/hillelclm-medium-webfont.ttf')},
          {'Suez':
          require('./app/assets/fonts/SuezOne-Regular.ttf')}
          ]);

        await Promise.all([...imageAssets, ...fontAssets]);
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  if (!appIsReady) {
    return null;
  }

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

        {/*----------------- Screen8.1 ----------------- */}
        
        <Stack.Screen
        name="BinaryChoices1_1"
        component={BinaryChoices1_1}
        options={{ title: "דרגו כמה אהבתם את היצירה"}}
        />

        {/*----------------- Screen8.2 ----------------- */}
        
        <Stack.Screen
        name="BinaryChoices1_2"
        component={BinaryChoices1_2}
        options={{ title: "דרגו כמה אהבתם את היצירה"}}

        />

        {/*----------------- Screen8.3 ----------------- */}
        
        <Stack.Screen
        name="BinaryChoices1_3"
        component={BinaryChoices1_3}
        options={{ title: "דרגו כמה אהבתם את היצירה"}}

        />

        {/*----------------- Screen8.4 ----------------- */}
        
        <Stack.Screen
        name="BinaryChoices1_4"
        component={BinaryChoices1_4}
        options={{ title: "דרגו כמה אהבתם את היצירה"}}

        />

        {/*----------------- Screen8.5 ----------------- */}
        
        <Stack.Screen
        name="BinaryChoices1_5"
        component={BinaryChoices1_5}
        options={{ title: "דרגו כמה אהבתם את היצירה"}}

        />

        {/*----------------- Screen8.6 ----------------- */}
        
        <Stack.Screen
        name="BinaryChoices1_6"
        component={BinaryChoices1_6}
        options={{ title: "דרגו כמה אהבתם את היצירה"}}

        />
        
        {/*----------------- Screen8.7 ----------------- */}
        
        <Stack.Screen
        name="BinaryChoices1_7"
        component={BinaryChoices1_7}
        options={{ title: "דרגו כמה אהבתם את היצירה"}}

        />

        {/*----------------- Screen8.8 ----------------- */}
        
        <Stack.Screen
        name="BinaryChoices1_8"
        component={BinaryChoices1_8}
        options={{ title: "דרגו כמה אהבתם את היצירה"}}

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