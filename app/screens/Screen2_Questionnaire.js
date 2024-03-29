import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { globalStyles } from '../assets/styles/global';
import { debugMode, setActive, setActivePassiveCombined, setDebugMode } from './Screen1_WelcomeScreen';

class QuestionnaireData {
  constructor(examineeNum = 0, age = 0, gender = 0, museumVisitsFrequency = 0, lastMuseumVisit = 0, telAvivMuseumVisit = 0, thisExhibitionVisit = 0) {
    this.tBegin = -1;
    this.tFinish = -1;
    this.examineeNum = examineeNum;
    this.age = age;
    this.gender = gender;
    this.museumVisitsFrequency = museumVisitsFrequency;
    this.lastMuseumVisit = lastMuseumVisit;
    this.telAvivMuseumVisit = telAvivMuseumVisit;
    this.exhibitionVisit = thisExhibitionVisit;
  }
}
export let questionnaireData = new QuestionnaireData();
export let tBeginFirstQuestionnaire;
export let tFinishFirstQuestionnaire;

export default function Questionnaire({ navigation }) {
  let tBegin = new Date();
  tBeginFirstQuestionnaire = tBegin.getHours() + ":" + tBegin.getMinutes() + ":" + tBegin.getSeconds() + ":" + tBegin.getMilliseconds();
  let [examineeNum, setExamineeNum] = useState(0);
  let [age, setAge] = useState(0);
  let [gender, setGender] = useState(3);
  let [museumVisitsFrequency, setMuseumVisitsFrequency] = useState(9);
  let [lastMuseumVisit, setLastMuseumVisit] = useState(9);
  let [telAvivMuseumVisit, setTelAvivMuseumVisit] = useState(9);
  let [thisExhibitionVisit, setThisExhibitionVisit] = useState(9);




  let genderArray = [
    { label: "זכר", value: 0 },
    { label: "נקבה", value: 1 },
    { label: "אחר", value: 2 },
    { label: "טרם_מולא", value: 3 }
  ]

  let museumVisitsFrequencyArray = [
    { label: "מספר פעמים בחודש", value: 0 },
    { label: "מספר פעמים בשנה", value: 1 },
    { label: "מספר פעמים בודדות", value: 2 },
    { label: "לא מבקר", value: 3 },
    { label: "טרם מולא", value: 9 }
  ]

  let lastMuseumVisitArray = [
    { label: "בחודש האחרון", value: 0 },
    { label: "בחצי שנה האחרונה", value: 1 },
    { label: "בשנה האחרונה", value: 2 },
    { label: "לפני מס' שנים", value: 3 },
    { label: "טרם מולא", value: 9 }
  ]

  let telAvivMuseumVisitArray = [
    { label: "כן", value: 0 },
    { label: "לא", value: 1 },
    { label: "טרם מולא", value: 9 }
  ]

  let thisExhibitionVisitArray = [
    { label: "כן", value: 0 },
    { label: "לא", value: 1 },
    { label: "טרם מולא", value: 9 }
  ]

  questionnaireData.examineeNum = examineeNum;


  function setQuestionnaireModeByExamineeNum(value) {
    setExamineeNum(value);

    setActivePassiveCombined(0);
    
    if (value < 990) {
      if (value >= 100 && value <= 199) {
        setActive(1);
      } else if (value >= 200 && value <= 299 || value === 0) {
        setActive(0);
      } else if (value >= 300 && value <= 399) {
        setActive(0);
        setActivePassiveCombined(1);
      }
      setDebugMode(0);
    } else {
      if (value == 991) {
        setActive(1);
      } else if (value == 992) {
        setActive(0);
      } else if (value == 993) {
        setActive(0);
        setActivePassiveCombined(1);
      }
      setDebugMode(1);
    }
  }

  questionnaireData.age = age;
  questionnaireData.gender = genderArray[gender].label;
  questionnaireData.museumVisitsFrequency = museumVisitsFrequency;
  questionnaireData.lastMuseumVisit = lastMuseumVisit;

  questionnaireData.telAvivMuseumVisit = telAvivMuseumVisit;
  questionnaireData.thisExhibitionVisit = thisExhibitionVisit;

  let [finishQuestionnaireMessage, setFinishQuestionnaireMessage] = useState(false);
  questionnaireData.tBeginFirstQuestionnaire = 0;

  function finishedQuestionnaire(examineeNum, age, gender, museumVisitsFrequency, lastMuseumVisit, telAvivMuseumVisit, thisExhibitionVisit) {
    return examineeNum != 0 &&
      age != 0 &&
      gender != 3 &&
      museumVisitsFrequency != 9 &&
      lastMuseumVisit != 9 &&
      telAvivMuseumVisit != 9 &&
      thisExhibitionVisit != 9;
  }


  return (
    <View style={globalStyles.questionnaireContainer}>
      <ScrollView style={{ width: 400, alignSelf: "center" }} >
        <View style={{ marginBottom: 10 }}>
          <Text style={globalStyles.header} >שאלון פרטים אישיים</Text>
        </View>
        {/*------------------------------------------------------- examinee number -------------------------------------------------------*/}
        <View style={styles.oddView}>
          <Text style={globalStyles.questionnaireHeader}>מספר נבחן</Text>
          <TextInput
            style={styles.textInput}
            keyboardType="numeric"
            onChangeText={(value) => setQuestionnaireModeByExamineeNum(value)}
          />

          {/*------------------------------------------------------- age -------------------------------------------------------*/}
          <Text style={globalStyles.questionnaireHeader}>גיל</Text>
          <TextInput
            style={styles.textInput}
            keyboardType="numeric"
            onChangeText={(value) => setAge(value)}

          />
        </View>
        {/*------------------------------------------------------- gender -------------------------------------------------------*/}

        <View style={styles.evenView}>
          <Text style={globalStyles.questionnaireHeader}>מגדר</Text>
          <RadioButton.Group
            onValueChange={(value) => { setGender(value) }}>
            <RadioButton.Item status={gender === 0 ? 'checked' : 'unchecked'} label={genderArray[0]['label']} value={genderArray[0]['value']} style={globalStyles.radioItem} />
            <RadioButton.Item status={gender === 1 ? 'checked' : 'unchecked'} label={genderArray[1]['label']} value={genderArray[1]['value']} style={globalStyles.radioItem} />
            <RadioButton.Item status={gender === 2 ? 'checked' : 'unchecked'} label={genderArray[2]['label']} value={genderArray[2]['value']} style={globalStyles.radioItem} />
          </RadioButton.Group>
        </View>

        {/*------------------------------------------------- museum visits frequency ------------------------------------------------*/}

        <View style={styles.oddView}>
          <Text style={globalStyles.questionnaireHeader}>מהי תדירות הגעתכם למוזיאונים</Text>
          <RadioButton.Group
            onValueChange={(value) => { setMuseumVisitsFrequency(value) }}>
            <RadioButton.Item status={museumVisitsFrequency === 0 ? 'checked' : 'unchecked'} label={museumVisitsFrequencyArray[0]['label']} value={museumVisitsFrequencyArray[0]['value']} style={globalStyles.radioItem} />
            <RadioButton.Item status={museumVisitsFrequency === 1 ? 'checked' : 'unchecked'} label={museumVisitsFrequencyArray[1]['label']} value={museumVisitsFrequencyArray[1]['value']} style={globalStyles.radioItem} />
            <RadioButton.Item status={museumVisitsFrequency === 2 ? 'checked' : 'unchecked'} label={museumVisitsFrequencyArray[2]['label']} value={museumVisitsFrequencyArray[2]['value']} style={globalStyles.radioItem} />
            <RadioButton.Item status={museumVisitsFrequency === 3 ? 'checked' : 'unchecked'} label={museumVisitsFrequencyArray[3]['label']} value={museumVisitsFrequencyArray[3]['value']} style={globalStyles.radioItem} />
          </RadioButton.Group>
        </View>
        {/*--------------------------------------------------- last museum visit --------------------------------------------------*/}

        <View style={styles.evenView}>
          <Text style={globalStyles.questionnaireHeader}>מתי פעם אחרונה ביקרתם במוזיאון</Text>
          <RadioButton.Group
            onValueChange={(value) => { setLastMuseumVisit(value) }}>
            <RadioButton.Item status={lastMuseumVisit === 0 ? 'checked' : 'unchecked'} label={lastMuseumVisitArray[0]['label']} value={lastMuseumVisitArray[0]['value']} style={globalStyles.radioItem} />
            <RadioButton.Item status={lastMuseumVisit === 1 ? 'checked' : 'unchecked'} label={lastMuseumVisitArray[1]['label']} value={lastMuseumVisitArray[1]['value']} style={globalStyles.radioItem} />
            <RadioButton.Item status={lastMuseumVisit === 2 ? 'checked' : 'unchecked'} label={lastMuseumVisitArray[2]['label']} value={lastMuseumVisitArray[2]['value']} style={globalStyles.radioItem} />
            <RadioButton.Item status={lastMuseumVisit === 3 ? 'checked' : 'unchecked'} label={lastMuseumVisitArray[3]['label']} value={lastMuseumVisitArray[3]['value']} style={globalStyles.radioItem} />
          </RadioButton.Group>
        </View>
        {/*---------------------------------------------------- TA museum visit ---------------------------------------------------*/}

        <View style={styles.oddView}>
          <Text style={globalStyles.questionnaireHeader}>האם ביקרתם במוזיאון תל אביב בעבר?</Text>
          <RadioButton.Group
            onValueChange={(value) => { setTelAvivMuseumVisit(value) }}>
            <RadioButton.Item status={telAvivMuseumVisit === 0 ? 'checked' : 'unchecked'} label={telAvivMuseumVisitArray[0]['label']} value={telAvivMuseumVisitArray[0]['value']} style={globalStyles.radioItem} />
            <RadioButton.Item status={telAvivMuseumVisit === 1 ? 'checked' : 'unchecked'} label={telAvivMuseumVisitArray[1]['label']} value={telAvivMuseumVisitArray[1]['value']} style={globalStyles.radioItem} />
          </RadioButton.Group>
        </View>

        {/*--------------------------------------------------- this exhibition visit --------------------------------------------------*/}

        <View style={styles.evenView}>
          <Text style={globalStyles.questionnaireHeader}>האם ביקרתם בתערוכה זו בעבר?</Text>
          <RadioButton.Group
            onValueChange={(value) => { setThisExhibitionVisit(value) }}>
            <RadioButton.Item status={thisExhibitionVisit === 0 ? 'checked' : 'unchecked'} label={thisExhibitionVisitArray[0]['label']} value={thisExhibitionVisitArray[0]['value']} style={globalStyles.radioItem} />
            <RadioButton.Item status={thisExhibitionVisit === 1 ? 'checked' : 'unchecked'} label={thisExhibitionVisitArray[1]['label']} value={thisExhibitionVisitArray[1]['value']} style={globalStyles.radioItem} />
          </RadioButton.Group>
        </View>
        {
          finishQuestionnaireMessage ?
            (
              <Text style={globalStyles.completionMessage}>
                אנא סיים למלא את השאלון</Text>
            ) : null
        }
        <View style={globalStyles.buttonView}>
          <TouchableOpacity
            onPress={() => {
              if (debugMode || finishedQuestionnaire(examineeNum, age, gender, museumVisitsFrequency, lastMuseumVisit, telAvivMuseumVisit, thisExhibitionVisit)) {
                tFinishFirstQuestionnaireDate = new Date();
                tFinishFirstQuestionnaire = tFinishFirstQuestionnaireDate.getHours() + ":" + tFinishFirstQuestionnaireDate.getMinutes() + ":" + tFinishFirstQuestionnaireDate.getSeconds() + ":" + tFinishFirstQuestionnaireDate.getMilliseconds();

                questionnaireData.tFinish = tFinishFirstQuestionnaire;
                navigation.navigate("ResearchGuidelines")
              }
              else {
                setFinishQuestionnaireMessage(true);
              }
            }
            }
          >
            <Text style={globalStyles.buttonText}>המשך</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{ height: 50 }}>

        </View>
        <StatusBar style="auto" />
      </ScrollView>
    </View>);
}

const styles = StyleSheet.create({
  textInput: {
    borderColor: "black",
    width: 230,
    borderWidth: 1,
    marginBottom: 10,
    marginRight: 2,
    marginLeft: 7,
    direction: "rtl",
    alignSelf: "center",
  },

  oddView: {
    backgroundColor: "aliceblue",
    marginBottom: 10,
    borderColor: "black",
    borderRadius: 10,
    borderWidth: 2,
    direction: "rtl",
  },

  evenView: {
    backgroundColor: "#fff",
    marginBottom: 10,
    borderRadius: 10,
    borderWidth: 2,
    direction: "rtl"
  },
});
