
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Sign_in from './src/screens/Sign_in';
import Sign_up from './src/screens/Sign_up';
import Edit from './src/screens/Edit';
import Create from './src/screens/Create';
import { initializeApp } from "firebase/app";


// FIREBASE SETUP-------------------------------------
const firebaseConfig = {
  apiKey: "AIzaSyB4x0M8RUuctl0yPZfdCuQfeiaRhwqLbgw",
  authDomain: "aac-note-app-6d553.firebaseapp.com",
  projectId: "aac-note-app-6d553",
  storageBucket: "aac-note-app-6d553.appspot.com",
  messagingSenderId: "816317025413",
  appId: "1:816317025413:web:54a9c886a6ccb483152dec"
};

const app = initializeApp(firebaseConfig);

// FIREBASE SETUP ENDED-----------------------

const AppTheme = {
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    background:"#fff"
  }
}

const Stack = createNativeStackNavigator();

export default function App() {

  const user = false //NOT Authenticated

  return (
   <>
    <NavigationContainer theme={AppTheme}>
      <Stack.Navigator>
        {
          user ? (
          <>
            <Stack.Screen name='Home' component={Home}  />
            <Stack.Screen name='Edit' component={Edit} />
            <Stack.Screen name='Create' component={Create} />
          </>
          ) : (
            <>
              <Stack.Screen
               name='Signin'
                component={Sign_in}
                options={{headerShown:false}} />
               <Stack.Screen name='Signup' component={Sign_up} />
            </>
          ) 
        }
        
      </Stack.Navigator>
    </NavigationContainer>
    <StatusBar />
   </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
