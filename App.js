import { StatusBar, StyleSheet, Text } from 'react-native';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Sign_in from './src/screens/Sign_in';
import Sign_up from './src/screens/Sign_up';
import Create from './src/screens/Create';
import React, { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase.init';
import Update from './src/screens/Update';


const AppTheme = {
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    background:"#fff"
  }
}

const Stack = createNativeStackNavigator();

export default function App() {
  const [user, setUser]  = React.useState(false)
  const [loading, setLoading] = React.useState(true)



  useEffect(() => {
    const authSubcription = onAuthStateChanged(auth, (user) => {
      if(user){
        setUser(user)
        setLoading(false)
      } else {
        setUser(null)
        setLoading(false)
      }
    }) 
    return authSubcription;
  }, [])

  if(loading){
    return<Text>Loadinng</Text>
  }
  
  return (
   <>
    <NavigationContainer theme={AppTheme}>
      <Stack.Navigator>
        {
          user ? (
          <>
            <Stack.Screen name='Home' options={{headerShown:false}}>
                {(props) => <Home {...props} user={user} />}
            </Stack.Screen>
            <Stack.Screen name='Create' >
                {(props) => <Create {...props} user={user} />}
            </Stack.Screen>
            <Stack.Screen name='Update'>
              {(props) => <Update  {...props} user={user}/>}
            </Stack.Screen>
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
