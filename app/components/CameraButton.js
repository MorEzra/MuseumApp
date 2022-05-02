import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';

const CameraButton = (props) =>{  
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

	return (<View style={styles.container}>
		<Camera style={styles.camera} type={type} ref={cameraRef}>
		  <View style={styles.buttonContainer}>
			<TouchableOpacity
			  style={styles.button}
			  onPress={() => {
				setType(
				  type === Camera.Constants.Type.back
					? Camera.Constants.Type.front
					: Camera.Constants.Type.back
				);
			  }}>
			  <Text style={styles.text}> Flip </Text>
			</TouchableOpacity>
			<TouchableOpacity
                style={[styles.button]}
                onPress={async () => {
                  console.log('in take pic');
                  const r = await takePicture();
                  setUseCamera(false);
                  if (!r.cancelled) {
                    setImage(r.uri);
                  }
                  console.log('response', JSON.stringify(r));
                }}>
                <Text style={styles.text}>PICTURE</Text>
			</TouchableOpacity>
		  </View>
		</Camera>
	  </View>);
};
const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      justifyContent: 'space-evenly',
	  width: 500,
	  height: 360  
    },
	camera: {
		flex: 1,
		justifyContent: 'space-evenly'
	  },
	  buttonContainer: {
		width: 200,
	  	height: 100,
		paddingTop: 50,
		backgroundColor: 'transparent',
		flexDirection: 'row',
		margin: 20,
	  },
	  button: {
		flex: 1,
		alignSelf: 'flex-end',
		alignItems: 'center',
	  },
	  text: {
		fontSize: 18,
		color: 'white',
	  },
    header: {
      textDecorationLine:'underline',
      fontSize:20,
      fontWeight:"bold",
      color: "lightblue",            
    },

  });

export default CameraButton
