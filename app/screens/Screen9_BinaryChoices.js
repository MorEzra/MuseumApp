import React, { useState }  from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { globalStyles } from '../assets/styles/global';
import { active, debugMode } from './Screen1_WelcomeScreen';

/* Data Variables*/


/* ------------------------------------- Timing Variables ------------------------------------- */
import { tExperimentBegin, tFinishWelcomeScreen }          from './Screen1_WelcomeScreen';
import { tFinishFirstQuestionnaire }                       from './Screen2_Questionnaire';
import { tBeginGuidelines, tFinishGuidelines }             from './Screen3_ResearchGuidelines';
import { playPauseSefiExplanationAudio }                             from './Screen3point5_Overview';
import { artPiecesData }                 from './Screen4_ArrivalInstructions';

import { rate1, tBeginBinaryChoicesV1Q1, tFinishBinaryChoicesV1Q1 }                         from './Screen8_BinaryChoices/1';
import { rate2, tBeginBinaryChoicesV1Q2, tFinishBinaryChoicesV1Q2 }                         from './Screen8_BinaryChoices/2';
import { rate3, tBeginBinaryChoicesV1Q3, tFinishBinaryChoicesV1Q3 }                         from './Screen8_BinaryChoices/3';
import { rate4, tBeginBinaryChoicesV1Q4, tFinishBinaryChoicesV1Q4 }                         from './Screen8_BinaryChoices/4';
import { rate5, tBeginBinaryChoicesV1Q5, tFinishBinaryChoicesV1Q5 }                         from './Screen8_BinaryChoices/5';
import { rate6, tBeginBinaryChoicesV1Q6, tFinishBinaryChoicesV1Q6 }                         from './Screen8_BinaryChoices/6';
import { rate7, tBeginBinaryChoicesV1Q7, tFinishBinaryChoicesV1Q7 }                         from './Screen8_BinaryChoices/7';
import { rate8, tBeginBinaryChoicesV1Q8, tFinishBinaryChoicesV1Q8 }                         from './Screen8_BinaryChoices/8';


import { tStartSefiQuestion1 } from './Screen6.5_AdditionalQuestions/1';
import { tStartSefiQuestion2 } from './Screen6.5_AdditionalQuestions/2';
import { tStartSefiQuestion3 } from './Screen6.5_AdditionalQuestions/3';
import { tStartSefiQuestion4 } from './Screen6.5_AdditionalQuestions/4';
import { tStartSefiQuestion5 } from './Screen6.5_AdditionalQuestions/5';
import { tStartSefiQuestion6 } from './Screen6.5_AdditionalQuestions/6';
import { tStartSefiQuestion7 } from './Screen6.5_AdditionalQuestions/7';

import { tFinishSefiQuestion1 } from './Screen6.5_AdditionalQuestions/1';
import { tFinishSefiQuestion2 } from './Screen6.5_AdditionalQuestions/2';
import { tFinishSefiQuestion3 } from './Screen6.5_AdditionalQuestions/3';
import { tFinishSefiQuestion4 } from './Screen6.5_AdditionalQuestions/4';
import { tFinishSefiQuestion5 } from './Screen6.5_AdditionalQuestions/5';
import { tFinishSefiQuestion6 } from './Screen6.5_AdditionalQuestions/6';
import { tFinishSefiQuestion7 } from './Screen6.5_AdditionalQuestions/7';

/* ------------------------------------- Data -------------------------------------  */

import { questionnaireData, tBeginFirstQuestionnaire }            from './Screen2_Questionnaire';

import { rateQ1 } from './Screen6.5_AdditionalQuestions/1';
import { rateQ2 } from './Screen6.5_AdditionalQuestions/2';
import { rateQ3 } from './Screen6.5_AdditionalQuestions/3';
import { rateQ4 } from './Screen6.5_AdditionalQuestions/4';
import { rateQ5 } from './Screen6.5_AdditionalQuestions/5';
import { rateQ6 } from './Screen6.5_AdditionalQuestions/6';
import { rateQ7 } from './Screen6.5_AdditionalQuestions/7';

import { sessionTimer } from './Screen1_WelcomeScreen';


class SessionData {
  constructor() {
    let today = new Date();
    
    // ------- Screen 1 - Welcome Screen Data -------
    this.date = today.getDay() + "-" + today.getMonth() + "-" + today.getFullYear();
    this.tExperimentBegin = sessionTimer.getHours() + ":" + sessionTimer.getMinutes() + ":" + sessionTimer.getSeconds() + ":" + sessionTimer.getMilliseconds();
    this.tFinishWelcomeScreen = tFinishWelcomeScreen;
    this.active = active;

    // ------- Screen 2 - First Questionaire Data -------
    this.tBeginFirstQuestionnaire = tBeginFirstQuestionnaire;    
    this.name = questionnaireData.name;
    this.age = questionnaireData.age;
    this.gender = (questionnaireData.gender == "זכר") ? "male" : "female";
    
    let finalMuseumFrequency = "not filled"
    switch(questionnaireData.museumVisitsFrequency) {
      case 0:
        finalMuseumFrequency = "Few times a month"
      break;
      case 1:
        finalMuseumFrequency = "Few times a years"
      break;
      case 2:
        finalMuseumFrequency = "Few times generally"
      break;
      case 3:
        finalMuseumFrequency = "Dont visit at all"
      break;
      /*default:
        finalMuseumFrequency = "not filled - default"*/
    }
    this.museumVisitsFrequency = finalMuseumFrequency;

    let finalLastMuseumVisit = "not filled"        
    switch(questionnaireData.lastMuseumVisit) {
      case 0:
        finalLastMuseumVisit = "Last month"
      break;
      case 1:
        finalLastMuseumVisit = "In the past half year"
      break;
      case 2:
        finalLastMuseumVisit = "Last year"
      break;
      case 3:
        finalLastMuseumVisit = "A few years ago"
      break;
      /*default:
        finalLastMuseumVisit = "not filled - default"*/
    }
    this.lastMuseumVisit = finalLastMuseumVisit
    this.telAvivMuseumVisit = questionnaireData.telAvivMuseumVisit == 0 ? "yes" : "no";
    this.thisExhibitionVisit = questionnaireData.exhibitionVisit == 0 ? "yes" : "no";
    this.tFinishFirstQuestionnaire = tFinishFirstQuestionnaire;

    // ------- Screen 3 - Research Guidelines -------
    this.tBeginGuidelines = tBeginGuidelines;
    this.tFinishGuidelines = tFinishGuidelines;

    // ------- Screen 3.5 - Research Guidelines -------
    this.tBeginSefiOverview = this.tBeginSefiOverview;
    this.playPauseSefisExplanation = playPauseSefiExplanationAudio;
    this.tFinishSefiOverview = this.tFinishSefiOverview;

    // ------- Screens 4, 5 - Arrival Instructions & Art Pieces -------
    this.artPiecesData = artPiecesData;
    

    // ------- Screen 6.5 - Sefi's Summary Questionnaire -------
    this.tBeginSefiQuestion1 = tStartSefiQuestion1
    this.sefiQuestion1 = rateQ1.toFixed(2);
    this.tFinishSefiQuestion1 = tFinishSefiQuestion1
    
    this.tBeginSefiQuestion2 = tStartSefiQuestion2
    this.sefiQuestion2 = rateQ2.toFixed(2);
    this.tFinishSefiQuestion2 = tFinishSefiQuestion2
    
    this.tBeginSefiQuestion3 = tStartSefiQuestion3
    this.sefiQuestion3 = rateQ3.toFixed(2);
    this.tFinishSefiQuestion3 = tFinishSefiQuestion3
    
    this.tBeginSefiQuestion4 = tStartSefiQuestion4
    this.sefiQuestion4 = rateQ4.toFixed(2);
    this.tFinishSefiQuestion4 = tFinishSefiQuestion4
    
    this.tBeginSefiQuestion5 = tStartSefiQuestion5
    this.sefiQuestion5 = rateQ5.toFixed(2);
    this.tFinishSefiQuestion5 = tFinishSefiQuestion5
    
    this.tBeginSefiQuestion6 = tStartSefiQuestion6
    this.sefiQuestion6 = rateQ6.toFixed(2);
    this.tFinishSefiQuestion6 = tFinishSefiQuestion6
    
    this.tBeginSefiQuestion7 = tStartSefiQuestion7
    this.sefiQuestion7 = rateQ7.toFixed(2);
    this.tFinishSefiQuestion7 = tFinishSefiQuestion7

    // ------- Screen 7 - Binary choices explanation -------
    
    // ------- Screen 8 - Binary choices -------
    this.tBeginBinaryChoicesV1Q1  = tBeginBinaryChoicesV1Q1;
    this.rate1  = rate1.toFixed(2);
    this.tFinishBinaryChoicesV1Q1 = tFinishBinaryChoicesV1Q1;

    this.tBeginBinaryChoicesV1Q2  = tBeginBinaryChoicesV1Q2;
    this.rate2  = rate2.toFixed(2);
    this.tFinishBinaryChoicesV1Q2 = tFinishBinaryChoicesV1Q2;

    this.tBeginBinaryChoicesV1Q3  = tBeginBinaryChoicesV1Q3;
    this.rate3  = rate3.toFixed(2);
    this.tFinishBinaryChoicesV1Q3 = tFinishBinaryChoicesV1Q3;

    this.tBeginBinaryChoicesV1Q4  = tBeginBinaryChoicesV1Q4;
    this.rate4  = rate4.toFixed(2);
    this.tFinishBinaryChoicesV1Q4 = tFinishBinaryChoicesV1Q4;

    this.tBeginBinaryChoicesV1Q5  = tBeginBinaryChoicesV1Q5;
    this.rate5  = rate5.toFixed(2);
    this.tFinishBinaryChoicesV1Q5 = tFinishBinaryChoicesV1Q5;

    this.tBeginBinaryChoicesV1Q6  = tBeginBinaryChoicesV1Q6;
    this.rate6  = rate6.toFixed(2);
    this.tFinishBinaryChoicesV1Q6 = tFinishBinaryChoicesV1Q6;

    this.tBeginBinaryChoicesV1Q7  = tBeginBinaryChoicesV1Q7;
    this.rate7  = rate7.toFixed(2);
    this.tFinishBinaryChoicesV1Q7 = tFinishBinaryChoicesV1Q7;

    this.tBeginBinaryChoicesV1Q8  = tBeginBinaryChoicesV1Q8;
    this.rate8  = rate8.toFixed(2);
    this.tFinishBinaryChoicesV1Q8 = tFinishBinaryChoicesV1Q8;

    // ------- Screen 9 - Binary choices version 2-------
  }
}


let pair1 = [require("../assets/images/pairs/1/1.png"),
require("../assets/images/pairs/2/1.png"),
require("../assets/images/pairs/3/1.png"),
require("../assets/images/pairs/4/1.png"),
require("../assets/images/pairs/5/1.png"),
require("../assets/images/pairs/6/1.png"),
require("../assets/images/pairs/7/1.png"),
require("../assets/images/pairs/8/1.png"),
require("../assets/images/pairs/9/1.png"),
require("../assets/images/pairs/10/1.png"),
require("../assets/images/pairs/11/1.png"),
require("../assets/images/pairs/12/1.png"),
require("../assets/images/pairs/13/1.png"),
require("../assets/images/pairs/14/1.png")];
let pair2 = [require("../assets/images/pairs/1/2.png"),
require("../assets/images/pairs/2/2.png"),
require("../assets/images/pairs/3/2.png"),
require("../assets/images/pairs/4/2.png"),
require("../assets/images/pairs/5/2.png"),
require("../assets/images/pairs/6/2.png"),
require("../assets/images/pairs/7/2.png"),
require("../assets/images/pairs/8/2.png"),
require("../assets/images/pairs/9/2.png"),
require("../assets/images/pairs/10/2.png"),
require("../assets/images/pairs/11/2.png"),
require("../assets/images/pairs/12/2.png"),
require("../assets/images/pairs/13/2.png"),
require("../assets/images/pairs/14/2.png")];

let tFinishBinaryChoices2Array = new Array(pair1.length).fill(0);
let binaryChoices2Ratings = new Array(pair1.length).fill(0);

export default function BinaryChoices2({navigation}) {  
  let [artPiecesCounter, setArtPiecesCounter] = useState(0);
  let sessionData = new SessionData();
  
  return (      
    <View style={globalStyles.container}>
        <Text style = {globalStyles.header}>במסך זה מוצגות בפניכם זוג תמונות. אנא לחצו על התמונה שאתם מעדיפים</Text>             
        <Text></Text>        
        {
          debugMode  && artPiecesCounter == pair1.length ? (
            <ScrollView>
              <Text>SessionData:</Text>
              <Text>{JSON.stringify(sessionData, null, "\t")}</Text>                      
            </ScrollView>
          ) : null
        }       
        { 
            artPiecesCounter != pair1.length ? (
            <View style={styles.imagesView}>
            <TouchableOpacity
            onPress={() => {                
                    binaryChoices2Ratings[artPiecesCounter] = 0;
                    tFinishBinaryChoices2Array[artPiecesCounter] = ((performance.now() - tExperimentBegin ) / 1000).toFixed(2);
                    if (artPiecesCounter == pair1.length - 1) {                       
                      fetch("https://experiments.schonberglab.org/v2/workers-api/sessions?key=ef7aa5b5d2568f69488169a322aeeb0a407f9740a1b5fc0bf83bf3c4efb21ffae6ede40343a17748621118857e5822a4d174148d04a432d3b8cb85f2bd2c4188", {
                          method: "POST",
                          mode: 'cors',
                          headers: {
                            "Content-Type": "application/json"
                          },
                          body: JSON.stringify({"sessionsData":sessionData}),
                        }
                      )
                      navigation.navigate("ThanksForParticipating");
                  }
                  else {
                      setArtPiecesCounter(artPiecesCounter+1)
                  }                                   
                  }
                }>
                <Image
                source={pair1[artPiecesCounter]}
                style={styles.pieces} 
                />
            </TouchableOpacity>       
  
            <TouchableOpacity
              onPress={() => {                
                    binaryChoices2Ratings[artPiecesCounter] = 1; 
                    tFinishBinaryChoices2Array[artPiecesCounter] = ((performance.now() - tExperimentBegin) / 1000).toFixed(2)    ;   
                    if (artPiecesCounter == pair1.length - 1) {                              
                      fetch("https://experiments.schonberglab.org/v2/workers-api/sessions?key=ef7aa5b5d2568f69488169a322aeeb0a407f9740a1b5fc0bf83bf3c4efb21ffae6ede40343a17748621118857e5822a4d174148d04a432d3b8cb85f2bd2c4188", {
                          method: "POST",
                          mode: 'cors',
                          headers: {
                            "Content-Type": "application/json"
                          },
                          body: JSON.stringify({"sessionsData":sessionData}),
                        }
                      )
                      navigation.navigate("ThanksForParticipating");
                  }
                  else {
                      setArtPiecesCounter(artPiecesCounter+1)
                  }                                   
                  }
                }>
                <Image
                source={pair2[artPiecesCounter]}
                style={styles.pieces} 
                />
            </TouchableOpacity>       
          </View>   
          ) : null
        }
            
        {/*
        //TODO: yonatan, send data to server
                      if (artPiecesCounter == pair1.length - 1) {                        
                          fetch("https://secure-tor-66457.herokuapp.com/https://experiments.schonberglab.org/v2/workers-api/sessions?key=test-worker-key", {
                              method: "POST",
                              mode: 'cors',
                              headers: {
                                "Content-Type": "application/json"
                              },
                              body: JSON.stringify({"timingsData": timingsData, "otherData": otherData}),
                            }
                          )
                          navigation.navigate("ThanksForParticipating");
                      }
                      else {
                          setArtPiecesCounter(artPiecesCounter+1)
                      }
        */}
        <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
    imagesView: {
        flexDirection:"row",
    },

    pieces: {
        width: 300,
        height: 300,
        marginRight: 20,
        resizeMode: 'contain'
    }
  });
  