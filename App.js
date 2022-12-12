import React,  { useState, useEffect } from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Asset } from 'expo-asset';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

import WelcomeScreen, { debugMode } from   './app/screens/Screen1_WelcomeScreen';
import Questionnaire from                  './app/screens/Screen2_Questionnaire';
import ResearchGuidelines from             './app/screens/Screen3_ResearchGuidelines';
import OverviewScreen from                 './app/screens/Screen3point5_Overview';
import ArrivalInstructions from            './app/screens/Screen4_ArrivalInstructions';
import ArtPieces from                      './app/screens/Screen5_ArtPieces';

// "Additional questions"
import AdditionalQuestions_1 from          './app/screens/Screen6.5_AdditionalQuestions/1';
import AdditionalQuestions_2 from          './app/screens/Screen6.5_AdditionalQuestions/2';
import AdditionalQuestions_3 from          './app/screens/Screen6.5_AdditionalQuestions/3';
import AdditionalQuestions_4 from          './app/screens/Screen6.5_AdditionalQuestions/4';
import AdditionalQuestions_5 from          './app/screens/Screen6.5_AdditionalQuestions/5';
import AdditionalQuestions_6 from          './app/screens/Screen6.5_AdditionalQuestions/6';
import AdditionalQuestions_7 from          './app/screens/Screen6.5_AdditionalQuestions/7';

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

import Images from './app/assets/images/images'// for web compatibilty just comment this line and do "doCaching = false"! everything else is ok.

const Stack = createNativeStackNavigator();
const doCaching = true


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

function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  
  // Load any resources or data that you need prior to rendering the app
  if (doCaching) {
    useEffect(() => {
      async function loadResourcesAndDataAsync() {
        try {

          SplashScreen.preventAutoHideAsync();
          
          const imageAssets = cacheImages(Images.slice(0,70));
          
          const fontAssets = cacheFonts([{'Hillel':
            require('./app/assets/fonts/hillelclm-medium-webfont.ttf')
            },
            {'simpleclm': 
            require('./app/assets/fonts/simpleclm-bold-webfont.ttf')
            }
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
  }

  if (!appIsReady && doCaching) {
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
        options={{ title: 'שאלון פרטים אישיים', headerBackVisible:false}}
        
        />

        {/*----------------- Screen3 ----------------- */}        
        <Stack.Screen
         name="ResearchGuidelines"
         component={ResearchGuidelines}
         options={{ title: 'הנחיות לסיור', headerBackVisible:false}}
        />
        
        {/*----------------- Screen3point5? ----------------- */}
        <Stack.Screen
         name="OverviewScreen"
         component={OverviewScreen}
         options={{ title: 'הנחיות לסיור', headerBackVisible:false}}
        />

        {/*----------------- Screen4 ----------------- */}
        <Stack.Screen
        name="ArrivalInstructions"
        component={ArrivalInstructions}        
        options={{ title: "הוראות הגעה", headerBackVisible:false}}
        />

        {/*----------------- Screen5 ----------------- */}
        <Stack.Screen
        name="ArtPieces"
        component={ArtPieces}        
        options={{ title: "יצירות", headerBackVisible:false}}
        />                      

        {/* "Additional" questions (sefi's)  */}
        {/*----------------- Screen6.5.1 ----------------- */}
        <Stack.Screen
         name="AdditionalQuestions_1"
         component= {AdditionalQuestions_1}
         options={{ title: "שאלון סיכום", headerBackVisible:false}}
        />

        {/*----------------- Screen 6.5.2 ----------------- */}
        <Stack.Screen
         name="AdditionalQuestions_2"
         component= {AdditionalQuestions_2}
         options={{ title: "שאלון סיכום", headerBackVisible:false}}
        />

        {/*----------------- Screen 6.5.3 ----------------- */}
        <Stack.Screen
         name="AdditionalQuestions_3"
         component= {AdditionalQuestions_3}
         options={{ title: "שאלון סיכום", headerBackVisible:false}}
        />

        {/*----------------- Screen 6.5.4 ----------------- */}
        <Stack.Screen
         name="AdditionalQuestions_4"
         component= {AdditionalQuestions_4}
         options={{ title: "שאלון סיכום", headerBackVisible:false}}
        />

        {/*----------------- Screen 6.5.5 ----------------- */}
        <Stack.Screen
         name="AdditionalQuestions_5"
         component= {AdditionalQuestions_5}
         options={{ title: "שאלון סיכום", headerBackVisible:false}}
        />

        {/*----------------- Screen 6.5.6 ----------------- */}
        <Stack.Screen
         name="AdditionalQuestions_6"
         component= {AdditionalQuestions_6}
         options={{ title: "שאלון סיכום", headerBackVisible:false}}
        />

        {/*----------------- Screen 6.5.7 ----------------- */}
        <Stack.Screen
         name="AdditionalQuestions_7"
         component= {AdditionalQuestions_7}
         options={{ title: "שאלון סיכום", headerBackVisible:false}}
        />

        {/*----------------- Screen6.2 ----------------- */}
        <Stack.Screen
         name="SummaryQuestionnaire2"
         component= {SummaryQuestionnaire2}
         options={{ title: "שאלון סיכום", headerBackVisible:false}}
        />

        {/*----------------- Screen6.3 ----------------- */}
        <Stack.Screen
         name="SummaryQuestionnaire3"
         component= {SummaryQuestionnaire3}
         options={{ title: "שאלון סיכום", headerBackVisible:false}}
        />

        {/*----------------- Screen6.4 ----------------- */}
        <Stack.Screen
         name="SummaryQuestionnaire4"
         component= {SummaryQuestionnaire4}
         options={{ title: "שאלון סיכום", headerBackVisible:false}}
        />

        {/*----------------- Screen5 ----------------- */}
        <Stack.Screen
         name="SummaryQuestionnaire5"
         component= {SummaryQuestionnaire5}
         options={{ title: "שאלון סיכום", headerBackVisible:false}}
        />

        {/*----------------- Screen6.6 ----------------- */}
        <Stack.Screen
         name="SummaryQuestionnaire6"
         component= {SummaryQuestionnaire6}
         options={{ title: "שאלון סיכום", headerBackVisible:false}}
        />

        {/*----------------- Screen6.7 ----------------- */}
        <Stack.Screen
         name="SummaryQuestionnaire7"
         component= {SummaryQuestionnaire7}
         options={{ title: "שאלון סיכום", headerBackVisible:false}}
        />

        {/*----------------- Screen6.8 ----------------- */}
        <Stack.Screen
         name="SummaryQuestionnaire8"
         component= {SummaryQuestionnaire8}
         options={{ title: "שאלון סיכום", headerBackVisible:false}}
        />

        {/*----------------- Screen6.5 ----------------- */}
        <Stack.Screen
         name="SummaryQuestionnaireAdditional"
         component= {SummaryQuestionnaireAdditional}
         options={{ title: "שאלון סיכום", headerBackVisible:false}}
        />

        {/*----------------- Screen7 ----------------- */}
        <Stack.Screen
        name="BinaryChoicesExplanation"
        component={BinaryChoicesExplanation}        
        options={{ title: 'שלב אחרון בניסוי!', headerBackVisible:false}}
        />

        {/*----------------- Screen8.1 ----------------- */}
        
        <Stack.Screen
        name="BinaryChoices1_1"
        component={BinaryChoices1_1}
        options={{ title: "דרגו כמה אהבתם את היצירה", headerBackVisible:false}}
        />

        {/*----------------- Screen8.2 ----------------- */}
        
        <Stack.Screen
        name="BinaryChoices1_2"
        component={BinaryChoices1_2}
        options={{ title: "דרגו כמה אהבתם את היצירה", headerBackVisible:false}}

        />

        {/*----------------- Screen8.3 ----------------- */}
        
        <Stack.Screen
        name="BinaryChoices1_3"
        component={BinaryChoices1_3}
        options={{ title: "דרגו כמה אהבתם את היצירה", headerBackVisible:false}}

        />

        {/*----------------- Screen8.4 ----------------- */}
        
        <Stack.Screen
        name="BinaryChoices1_4"
        component={BinaryChoices1_4}
        options={{ title: "דרגו כמה אהבתם את היצירה", headerBackVisible:false}}

        />

        {/*----------------- Screen8.5 ----------------- */}
        
        <Stack.Screen
        name="BinaryChoices1_5"
        component={BinaryChoices1_5}
        options={{ title: "דרגו כמה אהבתם את היצירה", headerBackVisible:false}}

        />

        {/*----------------- Screen8.6 ----------------- */}
        
        <Stack.Screen
        name="BinaryChoices1_6"
        component={BinaryChoices1_6}
        options={{ title: "דרגו כמה אהבתם את היצירה", headerBackVisible:false}}

        />
        
        {/*----------------- Screen8.7 ----------------- */}
        
        <Stack.Screen
        name="BinaryChoices1_7"
        component={BinaryChoices1_7}
        options={{ title: "דרגו כמה אהבתם את היצירה", headerBackVisible:false}}

        />

        {/*----------------- Screen8.8 ----------------- */}
        
        <Stack.Screen
        name="BinaryChoices1_8"
        component={BinaryChoices1_8}
        options={{ title: "דרגו כמה אהבתם את היצירה", headerBackVisible:false}}

        />       
        
        {/*----------------- Screen9 ----------------- */}
        <Stack.Screen
        name="BinaryChoices2"
        component={BinaryChoices2}
        options={{ title: 'לחצו על התמונה שאתם מעדיפים', headerBackVisible:false}}
        />

        {/*----------------- Screen10 ----------------- */}
        <Stack.Screen
         name="ThanksForParticipating"
         component= {ThanksForParticipating}
         options={{ title: 'סיימנו!', headerBackVisible:false}}
        />
        
        {/*-------------- Other Screens -------------- */}
        {/*----------------- Screen ----------------- */}
        <Stack.Screen
        name="CameraScreen"
        component={CameraScreen}
        options={{ headerBackVisible:false}}        
        />    
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;