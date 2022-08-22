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
import { playPauseSefiExplanationAudio, tFinishSefiOverview }                             from './Screen3point5_Overview';
import { tFinishArrivalInstructionsArray }                 from './Screen4_ArrivalInstructions';
import { tFinishArtPiecesArray }                           from './Screen5_ArtPieces';

import { tFinishSummaryQuestionnaireQ1 }                   from './Screen6_SummaryQuestionnaire/q1';
import { tFinishSummaryQuestionnaireQ2 }                   from './Screen6_SummaryQuestionnaire/q2';
import { tFinishSummaryQuestionnaireQ3 }                   from './Screen6_SummaryQuestionnaire/q3';
import { tFinishSummaryQuestionnaireQ4 }                   from './Screen6_SummaryQuestionnaire/q4';
import { tFinishSummaryQuestionnaireQ5 }                   from './Screen6_SummaryQuestionnaire/q5';
import { tFinishSummaryQuestionnaireQ6 }                   from './Screen6_SummaryQuestionnaire/q6';
import { tFinishSummaryQuestionnaireQ7 }                   from './Screen6_SummaryQuestionnaire/q7';
import { tFinishSummaryQuestionnaireQ8 }                   from './Screen6_SummaryQuestionnaire/q8';

import { tFinishQuestionnaireAdditionalArray }             from './Screen6.5_SummaryQuestionnaireAdditional';
import { tFinishBinaryChoicesExplanation }                 from './Screen7_BinaryChoicesExplanation';

import { rate1, tBeginBinaryChoicesV1Q1, tFinishBinaryChoicesV1Q1 }                         from './Screen8_BinaryChoices/1';
import { rate2, tBeginBinaryChoicesV1Q2, tFinishBinaryChoicesV1Q2 }                         from './Screen8_BinaryChoices/2';
import { rate3, tBeginBinaryChoicesV1Q3, tFinishBinaryChoicesV1Q3 }                         from './Screen8_BinaryChoices/3';
import { rate4, tBeginBinaryChoicesV1Q4, tFinishBinaryChoicesV1Q4 }                         from './Screen8_BinaryChoices/4';
import { rate5, tBeginBinaryChoicesV1Q5, tFinishBinaryChoicesV1Q5 }                         from './Screen8_BinaryChoices/5';
import { rate6, tBeginBinaryChoicesV1Q6, tFinishBinaryChoicesV1Q6 }                         from './Screen8_BinaryChoices/6';
import { rate7, tBeginBinaryChoicesV1Q7, tFinishBinaryChoicesV1Q7 }                         from './Screen8_BinaryChoices/7';
import { rate8, tBeginBinaryChoicesV1Q8, tFinishBinaryChoicesV1Q8 }                         from './Screen8_BinaryChoices/8';

/* ------------------------------------- Data -------------------------------------  */

import { questionnaireData, tBeginFirstQuestionnaire }            from './Screen2_Questionnaire';

import { summaryQuestionnaireQ1Rating } from './Screen6_SummaryQuestionnaire/q1';
import { summaryQuestionnaireQ2Rating } from './Screen6_SummaryQuestionnaire/q2';
import { summaryQuestionnaireQ3Rating } from './Screen6_SummaryQuestionnaire/q3';
import { summaryQuestionnaireQ4Rating } from './Screen6_SummaryQuestionnaire/q4';
import { summaryQuestionnaireQ5Rating } from './Screen6_SummaryQuestionnaire/q5';
import { summaryQuestionnaireQ6Rating } from './Screen6_SummaryQuestionnaire/q6';
import { summaryQuestionnaireQ7Rating } from './Screen6_SummaryQuestionnaire/q7';
import { summaryQuestionnaireQ8Rating } from './Screen6_SummaryQuestionnaire/q8';

import { ratingArray } from './Screen6.5_SummaryQuestionnaireAdditional';
import { sessionTimer } from './Screen1_WelcomeScreen';


class SessionData {
  constructor() {
    today = new Date();
    
    // ------- Screen 1 - Welcome Screen Data -------
    this.date = today.getDay() + "-" + today.getMonth() + "-" + today.getFullYear();
    this.tExperimentBegin = sessionTimer.getHours() + ":" + sessionTimer.getMinutes() + ":" + sessionTimer.getSeconds() + ":" + sessionTimer.getMilliseconds();
    this.tFinishWelcomeScreen = tFinishWelcomeScreen;
    this.active = active;

    // ------- Screen 2 - First Questionaire Data -------
    this.tBeginFirstQuestionnaire = tBeginFirstQuestionnaire;    
    this.name = questionnaireData.name;
    this.age = questionnaireData.age;
    this.gender = questionnaireData.gender;
    this.museumVisitsFrequency = questionnaireData.museumVisitsFrequency;
    this.lastMuseumVisit = questionnaireData.lastMuseumVisit;
    this.telAvivMuseumVisit = questionnaireData.telAvivMuseumVisit;
    this.thisExhibitionVisit = questionnaireData.exhibitionVisit; // TODO: add description
    this.tFinishFirstQuestionnaire = tFinishFirstQuestionnaire;

    // ------- Screen 3 - Research Guidelines -------
    this.tBeginGuidelines = tBeginGuidelines;
    this.tFinishGuidelines = tFinishGuidelines;

    // ------- Screen 3.5 - Research Guidelines -------
    this.tBeginSefiOverview = this.tBeginSefiOverview;
    this.playPauseSefisExplanation = playPauseSefiExplanationAudio;
    this.tFinishSefiOverview = this.tFinishSefiOverview;

    // ------- Screens 4, 5 - Arrival Instructions & Art Pieces -------
    this.tFinishArrivalInstructionsArray = tFinishArrivalInstructionsArray

    // ------- Screen 6.5 - Sefi's Summary Questionnaire -------
    
    // ------- Screen 7 - Binary choices explanation -------
    
    // ------- Screen 8 - Binary choices -------
    this.tBeginBinaryChoicesV1Q1  = tBeginBinaryChoicesV1Q1;
    this.rate1  = rate1;
    this.tFinishBinaryChoicesV1Q1 = tFinishBinaryChoicesV1Q1;

    this.tBeginBinaryChoicesV1Q2  = tBeginBinaryChoicesV1Q2;
    this.rate2  = rate2;
    this.tFinishBinaryChoicesV1Q2 = tFinishBinaryChoicesV1Q2;

    this.tBeginBinaryChoicesV1Q3  = tBeginBinaryChoicesV1Q3;
    this.rate3  = rate3;
    this.tFinishBinaryChoicesV1Q3 = tFinishBinaryChoicesV1Q3;

    this.tBeginBinaryChoicesV1Q4  = tBeginBinaryChoicesV1Q4;
    this.rate4  = rate4;
    this.tFinishBinaryChoicesV1Q4 = tFinishBinaryChoicesV1Q4;

    this.tBeginBinaryChoicesV1Q5  = tBeginBinaryChoicesV1Q5;
    this.rate5  = rate5;
    this.tFinishBinaryChoicesV1Q5 = tFinishBinaryChoicesV1Q5;

    this.tBeginBinaryChoicesV1Q6  = tBeginBinaryChoicesV1Q6;
    this.rate6  = rate6;
    this.tFinishBinaryChoicesV1Q6 = tFinishBinaryChoicesV1Q6;

    this.tBeginBinaryChoicesV1Q7  = tBeginBinaryChoicesV1Q7;
    this.rate7  = rate7;
    this.tFinishBinaryChoicesV1Q7 = tFinishBinaryChoicesV1Q7;

    this.tBeginBinaryChoicesV1Q8  = tBeginBinaryChoicesV1Q8;
    this.rate8  = rate8;
    this.tFinishBinaryChoicesV1Q8 = tFinishBinaryChoicesV1Q8;

    // ------- Screen 9 - Binary choices version 2-------
  }
}

class TimingsData {
  constructor() 
  {
    this.tExperimentBegin               = (tExperimentBegin/ 1000).toFixed(2);
    this.tFinishWelcomeScreen           = (tFinishWelcomeScreen/ 1000).toFixed(2); 
    this.tFinishFirstQuestionnaire      = (tFinishFirstQuestionnaire/ 1000).toFixed(2);  
    this.tFinishGuidelines              = (tFinishGuidelines/ 1000).toFixed(2);   
    this.tFinishSefiOverview            = (tFinishSefiOverview/ 1000).toFixed(2); 
    this.tFinishArrivalInstructions     = tFinishArrivalInstructionsArray;
    this.tFinishArtPieces               = tFinishArtPiecesArray;
    this.tFinishSummaryQuestionnaire = [
      (tFinishSummaryQuestionnaireQ1/ 1000).toFixed(2)    ,
      (tFinishSummaryQuestionnaireQ2/ 1000).toFixed(2)    ,
      (tFinishSummaryQuestionnaireQ3/ 1000).toFixed(2)    ,
      (tFinishSummaryQuestionnaireQ4/ 1000).toFixed(2)    ,
      (tFinishSummaryQuestionnaireQ5/ 1000).toFixed(2)    ,
      (tFinishSummaryQuestionnaireQ6/ 1000).toFixed(2)    ,
      (tFinishSummaryQuestionnaireQ7/ 1000).toFixed(2)    ,
      (tFinishSummaryQuestionnaireQ8/ 1000).toFixed(2)    
    ];
    this.tFinishQuestionnaireAdditionalArray = tFinishQuestionnaireAdditionalArray;
    this.tFinishBinaryChoicesExplanation     = (tFinishBinaryChoicesExplanation/ 1000).toFixed(2);
    
    this.tFinishBinaryChoices2Array = tFinishBinaryChoices2Array;
  }
}

class Data {
  constructor()
    {
      this.active = active;
      this.questionnaireData = questionnaireData;   
      this.summaryQuestionnaireRating = [
        summaryQuestionnaireQ1Rating,
        summaryQuestionnaireQ2Rating,
        summaryQuestionnaireQ3Rating,
        summaryQuestionnaireQ4Rating,
        summaryQuestionnaireQ5Rating,
        summaryQuestionnaireQ6Rating,
        summaryQuestionnaireQ7Rating,
        summaryQuestionnaireQ8Rating
      ];
      this.ratingArray = ratingArray;
      this.binaryChoices1Ratings = [        
        rate1,
        rate2,
        rate3,
        rate4,
        rate5,
        rate6,
        rate7,
        rate8,
      ];

      this.binaryChoices2Ratings = binaryChoices2Ratings;
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
  let timingData = new TimingsData();
  let data = new Data();
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

              <Text>Data:</Text>
              <Text>{JSON.stringify(data, null, "\t")}</Text>

              <Text></Text>
              <Text>Time:</Text>
              <Text>{JSON.stringify(timingData, null, "\t")}</Text>              
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
                    if (artPiecesCounter == pair1.length - 1 && !debugMode) {                  
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
                    if (artPiecesCounter == pair1.length - 1 && !debugMode) {                        
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
  