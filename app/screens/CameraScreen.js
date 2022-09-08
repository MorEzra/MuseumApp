import React, {useState, useRef, useEffect}  from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';
import { Camera } from 'expo-camera';
import { artPiecesData } from './Screen4_ArrivalInstructions';
import { artPiecesCounterReference } from './Screen4_ArrivalInstructions';
import * as MediaLibrary from 'expo-media-library';
import { questionnaireData }            from './Screen2_Questionnaire';

export default function CameraScreen({navigation}) {
  let tBegin = new Date();
  artPiecesData[Math.min(artPiecesCounterReference-1, 7)].tBeginCameraScreen = tBegin.getHours() + ":" + tBegin.getMinutes() + ":" + tBegin.getSeconds() + ":" + tBegin.getMilliseconds();

	const [count1, setCount1] = useState(0);
  const onPress = () => setCount1(prevCount => prevCount + 1);

  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [image, setImage] = useState(null);
  const [useCamera, setUseCamera] = useState(false);
  const cameraRef = useRef(null);
  useEffect(() => {
  (async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    setHasPermission(status === 'granted');
  })();
  }, []);

  if (hasPermission === null) {
  return <View />;
  }
  if (hasPermission === false) {
  return <Text>No access to camera</Text>;
  }	

  const takePicture = async () => {
    if (cameraRef) {
      console.log('in take picture');
      try {
      let photo = await cameraRef.current.takePictureAsync({
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      return photo;
      } catch (e) {
      console.log(e);
      }
    }
    };

    const SaveToiPad = async (item) => {
    // Remember, here item is a file uri which looks like this. file://..
    const permission = await MediaLibrary.requestPermissionsAsync();
    if (permission.granted) {
      try {
        const asset = await MediaLibrary.createAssetAsync(item);
        MediaLibrary.createAlbumAsync('MuseumAppImages' + questionnaireData.name + artPiecesCounterReference, asset, false)
          .then(() => {
            console.log('File Saved Successfully!');
          })
          .catch(() => {
            console.log('Error In Saving File!');
          });
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log('Need Storage permission to save file');
    }
  };

  return (
    <View style={styles.container} >
      {/* ------------------------------------------------ camera ------------------------------------------------ */}
      <View style={styles.container}>

      <Camera style={styles.camera} type={type} ref={cameraRef}>
      </Camera>
      {/*<View>
        <Text>time:{artPiecesData[artPiecesCounterReference-1].tBeginCameraScreen}</Text>
        <Text>{artPiecesCounterReference-1}</Text>
        </View>
      */}
      <View style={styles.buttonContainer}>
      
        
        <Button
                  style={[styles.button]}
                  onPress={async () => {
                    let tFinish = new Date();
                    artPiecesData[Math.min(artPiecesCounterReference-1, 7)].tFinishCameraScreen = tFinish.getHours() + ":" + tFinish.getMinutes() + ":" + tFinish.getSeconds() + ":" + tFinish.getMilliseconds();                    
                    console.log('in take pic');
                    const r = await takePicture();
                    setUseCamera(false);
                    if (!r.cancelled) {
                      setImage(r.uri);
                    }
                    console.log('response', JSON.stringify(r));
                    SaveToiPad(r.uri)
                    navigation.navigate("ArtPieces")
                  }}
          title={"צלמ/י"}
          >
        </Button>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>    
    
  );
}


const styles = StyleSheet.create({

	camera: {
		flex: 1,
		justifyContent: 'space-evenly',
		width: 700
	  },
	  buttonContainer: {
		width: 200,
	  	height: 50,
		paddingTop: 5,
		backgroundColor: 'transparent',
		borderColor: 'black',
		borderWidth: 1,
		flexDirection: 'row',
		alignSelf: 'center',
		alignItems: 'center',
		justifyContent: 'center',
		margin: 20,
	  },
	  button: {
		flex: 1,
		alignSelf: 'flex-end',
		alignItems: 'center',
	  },
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
      color: "lightblue",            
    },

    text: {
        fontWeight:'bold',
        fontSize:15,
        textDecorationLine: 'underline',
    },

    attributes: {
        backgroundColor:"orange",
        fontSize:20,
        marginTop:20,
    },
  });
  