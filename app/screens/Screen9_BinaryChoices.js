import React, { useState }  from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { globalStyles } from '../assets/styles/global';
import { debugMode } from './Screen1_WelcomeScreen';

/* Data Variables*/


/* Timing Variables */
import { tExperimentBegin, tFinishWelcomeScreen }          from './Screen1_WelcomeScreen';
import { tFinishFirstQuestionnaire }                       from './Screen2_Questionnaire';
import { tFinishGuidelines }                               from './Screen3_ResearchGuidelines';
import { tFinishSefiOverview }                             from './Screen3point5_Overview';
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

import { tFinishBinaryChoices1Q1 }                         from './Screen8_BinaryChoices/1';
import { tFinishBinaryChoices1Q2 }                         from './Screen8_BinaryChoices/2';
import { tFinishBinaryChoices1Q3 }                         from './Screen8_BinaryChoices/3';
import { tFinishBinaryChoices1Q4 }                         from './Screen8_BinaryChoices/4';
import { tFinishBinaryChoices1Q5 }                         from './Screen8_BinaryChoices/5';
import { tFinishBinaryChoices1Q6 }                         from './Screen8_BinaryChoices/6';
import { tFinishBinaryChoices1Q7 }                         from './Screen8_BinaryChoices/7';
import { tFinishBinaryChoices1Q8 }                         from './Screen8_BinaryChoices/8';
/* tFinishBinaryChoices2Array in this file*/

class TimingsData {
  constructor() 
  {
    //(x / 1000).toFixed(2)    
    this.tExperimentBegin               = (tExperimentBegin/ 1000).toFixed(2)    
    this.tFinishWelcomeScreen           = (tFinishWelcomeScreen/ 1000).toFixed(2)    
    this.tFinishFirstQuestionnaire      = (tFinishFirstQuestionnaire/ 1000).toFixed(2)    
    this.tFinishGuidelines              = (tFinishGuidelines/ 1000).toFixed(2)        
    this.tFinishSefiOverview            = (tFinishSefiOverview/ 1000).toFixed(2)    
    this.tFinishArrivalInstructions     = tFinishArrivalInstructionsArray
    this.tFinishArtPieces               = tFinishArtPiecesArray
    this.tFinishSummaryQuestionnaire = [
      (tFinishSummaryQuestionnaireQ1/ 1000).toFixed(2)    ,
      (tFinishSummaryQuestionnaireQ2/ 1000).toFixed(2)    ,
      (tFinishSummaryQuestionnaireQ3/ 1000).toFixed(2)    ,
      (tFinishSummaryQuestionnaireQ4/ 1000).toFixed(2)    ,
      (tFinishSummaryQuestionnaireQ5/ 1000).toFixed(2)    ,
      (tFinishSummaryQuestionnaireQ6/ 1000).toFixed(2)    ,
      (tFinishSummaryQuestionnaireQ7/ 1000).toFixed(2)    ,
      (tFinishSummaryQuestionnaireQ8/ 1000).toFixed(2)    
    ]
    this.tFinishQuestionnaireAdditionalArray = tFinishQuestionnaireAdditionalArray
    this.tFinishBinaryChoicesExplanation     = (tFinishBinaryChoicesExplanation/ 1000).toFixed(2)    
    this.tFinishBinaryChoices1 = [
      (tFinishBinaryChoices1Q1/ 1000).toFixed(2)    ,
      (tFinishBinaryChoices1Q2/ 1000).toFixed(2)    ,
      (tFinishBinaryChoices1Q3/ 1000).toFixed(2)    ,
      (tFinishBinaryChoices1Q4/ 1000).toFixed(2)    ,
      (tFinishBinaryChoices1Q5/ 1000).toFixed(2)    ,
      (tFinishBinaryChoices1Q6/ 1000).toFixed(2)    ,
      (tFinishBinaryChoices1Q7/ 1000).toFixed(2)    ,
      (tFinishBinaryChoices1Q8/ 1000).toFixed(2)    
    ]
    this.tFinishBinaryChoices2Array = tFinishBinaryChoices2Array
  }
}
/*
class OtherData {
  constructor(questionnaireData,
    summaryQuestionnaireData,
    summaryQuestionnaireAdditionalData,
    binaryChoicesData,
    binaryChoices2Data,)
    {
      this.questionnaireData    = questionnaireData
      this.summaryQuestionnaireData     = summaryQuestionnaireData
      this.summaryQuestionnaireAdditionalData     = summaryQuestionnaireAdditionalData
      this.binaryChoicesData    = binaryChoicesData
      this.binaryChoices2Data     = binaryChoices2Data
    }
}
*/


/*class BinaryChoices2Data {
    constructor(n) {        
        this.likings2 = new Array(n).fill(-1)
    }
}*/


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

let tFinishBinaryChoices2Array = new Array(pair1.length.length).fill(0);

export default function BinaryChoices2({navigation}) {  
  let [artPiecesCounter, setArtPiecesCounter] = useState(0);
  let timingData = new TimingsData()

  return (      
    <View style={globalStyles.container}>
      <ScrollView>
        <Text style = {globalStyles.header}>אנא לחצו על התמונות שאתם מעדיפים</Text>     
        {
          debugMode  && artPiecesCounter == pair1.length ? (
            <View>
              <Text>Data:</Text>
              <Text>Time:</Text>
              <Text>{JSON.stringify(timingData, null, "\t")}</Text>              
            </View>
          ) : null
        }       
        <View style={styles.imagesView}>
          <TouchableOpacity
          onPress={() => {                
                  //binaryChoices2Data.likings2[artPiecesCounter] = 0;
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
                  //binaryChoices2Data.likings2[artPiecesCounter] = 1; 
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
      </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
    imagesView: {
        flexDirection:"row",
    },

    pieces: {
        width: 400,
        height: 400,
        marginRight: 20,
        resizeMode: 'contain'
    }
  });
  