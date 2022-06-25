import React  from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, View} from 'react-native';
import { globalStyles } from '../assets/styles/global';

import { active } from './Screen1_WelcomeScreen';

/* Data Variables*/
import { questionnaireData }                  from './Screen2_Questionnaire';
import { summaryQuestionnaireData }           from './Screen6_SummaryQuestionnaire';
import { summaryQuestionnaireAdditionalData } from './Screen6.5_SummaryQuestionnaireAdditional';
import { binaryChoicesData }                  from './Screen8_BinaryChoices';
import { binaryChoices2Data }                 from './Screen9_BinaryChoices';

/* Timing Variables */
import { welcomeScreenTotalTime }                  from './Screen1_WelcomeScreen';
import { questionnaireTotalTime }                  from './Screen2_Questionnaire';
import { researchGuidelinesTotalTime }             from './Screen3_ResearchGuidelines';
import { summaryQuestionnaireTotalTime }           from './Screen6_SummaryQuestionnaire';
import { summaryQuestionnaireAdditionalTotalTime } from './Screen6.5_SummaryQuestionnaireAdditional';
import { binaryChoicesExplanationTotalTime }       from './Screen7_BinaryChoicesExplanation';
import { binaryChoicesTotalTimeArray }             from './Screen8_BinaryChoices';
import { binaryChoices2TotalTimeArray }            from './Screen9_BinaryChoices';

class TimingsData {
  constructor(welcomeScreenTotalTime,
              questionnaireTotalTime,
              researchGuidelinesTotalTime,
              summaryQuestionnaireTotalTime,
              summaryQuestionnaireAdditionalTotalTime,
              binaryChoicesExplanationTotalTime,
              binaryChoicesTotalTimeArray,
              binaryChoices2TotalTimeArray) 
  {
    this.welcomeScreenTotalTime                  = (welcomeScreenTotalTime / 1000).toFixed(2);
    this.questionnaireTotalTime                  = (questionnaireTotalTime / 1000).toFixed(2);
    this.researchGuidelinesTotalTime             = (researchGuidelinesTotalTime / 1000).toFixed(2);
    this.summaryQuestionnaireTotalTime           = (summaryQuestionnaireTotalTime / 1000).toFixed(2);
    this.summaryQuestionnaireAdditionalTotalTime = (summaryQuestionnaireAdditionalTotalTime / 1000).toFixed(2);
    this.binaryChoicesExplanationTotalTime       = (binaryChoicesExplanationTotalTime / 1000).toFixed(2);
    this.binaryChoicesTotalTimeArray             = binaryChoicesTotalTimeArray;
    this.binaryChoices2TotalTimeArray            = binaryChoices2TotalTimeArray;
  }
}

export default function ThanksForParticipating({navigation}) {
  let timingsData = new TimingsData(welcomeScreenTotalTime, questionnaireTotalTime, researchGuidelinesTotalTime, summaryQuestionnaireTotalTime, summaryQuestionnaireAdditionalTotalTime, binaryChoicesExplanationTotalTime, binaryChoicesTotalTimeArray, binaryChoices2TotalTimeArray)
  return (      
    <View style={globalStyles.container}>           
      <ScrollView>
        <Text style = {globalStyles.header}>תודה על השתתפותך!</Text>
        <Text
        style = {
          globalStyles.instructionsText
        }>
          אנא החזירו את האייפד לכניסה, שם תקבלו את שובר המתנה
        </Text>
        
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text>FOR DEBUGGING PURPOSES:</Text>
        <Text>active : {JSON.stringify(active, null, "\t")}</Text>
        <Text>{JSON.stringify(questionnaireData, null, "\t")}</Text>
        <Text>{JSON.stringify(summaryQuestionnaireData, null, "\t")}</Text>
        <Text>{JSON.stringify(summaryQuestionnaireAdditionalData, null, "\t")}</Text>
        <Text>{JSON.stringify(binaryChoicesData, null, "\t")}</Text>
        <Text>{JSON.stringify(binaryChoices2Data, null, "\t")}</Text>
        <Text>{JSON.stringify(timingsData, null, "\t")}</Text>            
         
        <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
}
  