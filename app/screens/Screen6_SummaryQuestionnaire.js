import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, ScrollView } from 'react-native';
import RadioForm from 'react-native-simple-radio-button';

class SummaryQuestionnaireData {    
    constructor(im1Liking=0, im2Liking=0, im3Liking=0, im4Liking=0, im5Liking=0, experience=0, additionalInfo=0, tourType=0) {
        this.im1Liking = im1Liking;
        this.im2Liking = im2Liking;
        this.im3Liking = im3Liking;
        this.im4Liking = im4Liking;
        this.im5Liking = im5Liking;
        this.experience = experience;
        this.additionalInfo = additionalInfo;
        this.tourType = tourType;
    }
}

export let summaryQuestionnaireData = new SummaryQuestionnaireData();
export let summaryQuestionnaireTotalTime;

export default function SummaryQuestionnaire({navigation}) {    
    let startingTime = performance.now();
    let imagesNames = ["pic1.png", "pic2.jpg","pic3.jpg", "pic4.jpg"]    
    
    let artPiecesNames = ["פרדריקה מריה בר של גוסטב קלימט (1916)",
                        "קייס ואן דונגן, נסיכת בבל (1916)",
                        "סירה בנמל בנטוורפן של ז'ורז' בראק",
                        "תולעי אדמה של ג'קסון פולוק",
                        "אלברטו ג'אקומטי אישה ונציאנית (1956-1957)"];

    let [im1Liking, setIm1Liking] = useState(0);
    let [im2Liking, setIm2Liking] = useState(0);
    let [im3Liking, setIm3Liking] = useState(0);
    let [im4Liking, setIm4Liking] = useState(0);
    let [im5Liking, setIm5Liking] = useState(0);

    summaryQuestionnaireData.im1Liking = im1Liking;    
    summaryQuestionnaireData.im2Liking = im2Liking;    
    summaryQuestionnaireData.im3Liking = im3Liking;    
    summaryQuestionnaireData.im4Liking = im4Liking;    
    summaryQuestionnaireData.im5Liking = im5Liking;     
    
    let likingArray = [
        {label: "לא אהבתי בכלל", value:1},
        {label: "לא אהבתי", value:2},
        {label: "ניטרלי", value:3},
        {label: "אהבתי", value:4},
        {label: "אהבתי מאוד", value:5},
      ];              

    return (      
      <View style={styles.container}>   
        <ScrollView>
            <Text style = {styles.header}>שאלון סיכום ניסוי</Text>
            <Text style = {styles.text}> אנא דרגו את מידת ההנאה מכל אחת מהיצירות שראיתם במהלך הסיור (כאשר 5 זהו הציון הגבוה)</Text>
            
            <View style={styles.oddViewWrapper}>       
                <View style={{alignItems:"center"}}>
                    <Text style = {styles.text}>{artPiecesNames[0]}</Text>
                </View>     
                <View style= {styles.oddView}>
                    
                    <Image
                        source={require(`../assets/images/pic1.png`)}
                        style={styles.pieces}    
                    />
                    <RadioForm
                        style = {styles.radiobutton}                   
                        radio_props={likingArray}
                        initial={-1}
                        onPress={(value) => setIm1Liking(value)}
                        buttonSize = {5}
                    />
                </View>
            </View>
            
            <View style={styles.evenViewWrapper}>       
                <View style={{alignItems:"center"}}>
                    <Text style = {styles.text}>{artPiecesNames[1]}</Text>
                </View>     
                <View style= {styles.block}>
                    <Image
                        source={require(`../assets/images/pic2.jpg`)}
                        style={styles.pieces}    
                    />
                    <RadioForm
                        style = {styles.radiobutton}                   
                        radio_props={likingArray}
                        initial={-1}
                        onPress={(value) => setIm2Liking(value)}
                        buttonSize = {5}
                    />
                </View>
            </View>

            <View style={styles.oddViewWrapper}>       
                <View style={{alignItems:"center"}}>
                    <Text style = {styles.text}>{artPiecesNames[2]}</Text>
                </View>     
                <View style= {styles.oddView}>
                    <Image
                        source={require('../assets/images/pic3.jpg')}
                        style={styles.pieces}    
                    />
                    <RadioForm
                        style = {styles.radiobutton}                   
                        radio_props={likingArray}
                        initial={-1}
                        onPress={(value) => setIm3Liking(value)}
                        buttonSize = {5}
                    />
                </View>
            </View>

            <View style={styles.evenViewWrapper}>       
                <View style={{alignItems:"center"}}>
                    <Text style = {styles.text}>{artPiecesNames[3]}</Text>
                </View>     
                <View style= {styles.block}>
                    <Image
                        source={require(`../assets/images/pic4.jpg`)}
                        style={styles.pieces}    
                    />
                    <RadioForm
                        style = {styles.radiobutton}                   
                        radio_props={likingArray}
                        initial={-1}
                        onPress={(value) => setIm4Liking(value)}
                        buttonSize = {5}
                    />
                </View>
            </View>

            <View style={styles.oddViewWrapper}>       
                <View style={{alignItems:"center"}}>
                    <Text style = {styles.text}>{artPiecesNames[4]}</Text>
                </View>     
                <View style= {styles.block}>
                    <Image
                        source={require(`../assets/images/pic5.jpg`)}
                        style={styles.pieces}    
                    />
                    <RadioForm
                        style = {styles.radiobutton}                   
                        radio_props={likingArray}
                        initial={-1}
                        onPress={(value) => setIm5Liking(value)}
                        buttonSize = {5}
                    />
                </View>
            </View>

            
            
            
            <Button 
            title="המשך"
            onPress={() => {
                let finishingTime = performance.now();
                summaryQuestionnaireTotalTime = finishingTime - startingTime;
                navigation.navigate("SummaryQuestionnaireAdditional")
                }
            }>
            </Button>
        </ScrollView>    
        <StatusBar style="auto" />

      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',    
    },    

    header: {
        textDecorationLine:'underline',
        fontSize:20,
        fontWeight:"bold",
        color: "dodgerblue",  
        marginBottom:15
      },
    
    text: {
        fontWeight:"bold",
        fontSize:17,
        marginBottom:15
        
    },

    pieces: {
        width:150,
        height:150,
        marginLeft:15        
    },
    radiobutton: {
        
    },

    block: {
        flexDirection:"row",
        justifyContent:"space-between",
        marginBottom:15
    },


    oddViewWrapper: {
        borderColor:"black",
        borderRadius:10,
        borderWidth:2,
        backgroundColor:"aliceblue",    
        marginBottom:10  
    },

    evenViewWrapper: {
        borderColor:"black",
        borderRadius:10,
        borderWidth:2,
        backgroundColor:"#fff",
        marginBottom:10  
    },

    oddView: {
        flexDirection:"row",
        justifyContent:"space-between",
        backgroundColor:"aliceblue",      
        marginBottom:10,    
      },
  
      evenView: {
        flexDirection:"row",
        justifyContent:"space-between",
        backgroundColor:"#fff",      
        marginBottom:10,
        borderRadius:10,
        borderWidth:2
      },
    
  });