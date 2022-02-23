import React from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScreenStackHeaderBackButtonImage } from 'react-native-screens';


function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button 
        title="Flug screen"
        onPress={() => navigation.navigate('SefyHello')}> </Button>
    </View>
  );
}

function SefyHello({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Hey Sef</Text>
      <Button 
        title='Bye Sef'
        onPress={() => navigation.navigate('Home')}> </Button>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
         name="Home"
         component= {HomeScreen}
         options={{ title: 'what', headerBackVisible: false }}
        />
        <Stack.Screen
         name="SefyHello"
         component={SefyHello}
         options={{ title: 'whatwhat', headerBackVisible: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;