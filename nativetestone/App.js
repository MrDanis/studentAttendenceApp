import React,{useState} from 'react';
import {Platform,View,Text,SafeAreaView} from 'react-native'
import StudentAttendenceScreen from './app/Screens/StudentAttendenceScreen.js';
import LoginScreen from './app/Screens/LoginScreen.js';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import { enableScreens } from 'react-native-screens';
// enableScreens(true);
const Stack = createNativeStackNavigator();
const App = () => {
  const [isLogin,setisLogin] = useState({isActive:false,userData:{}});
  const updateUserStatus =(userDat)=>{
   console.log('retriving the user data : ',userDat);
   setisLogin({...isLogin,isActive:userDat?.activeStatus,userData:userDat?.userData})
    // setisLogin(val);
  }
  return (
    <SafeAreaView style={{flex:1,borderWidth:0,borderColor:'red',padding:2}}>
    <View style={{flex:1,borderWidth:0,borderColor:'green',padding:2}}>
         {
           !isLogin.isActive?<LoginScreen onUserUpdate={updateUserStatus}/>:
           <StudentAttendenceScreen onUserUpdate={updateUserStatus} currentLoginUserData={isLogin?.userData}/>
         }
    </View>  
    </SafeAreaView>
    //   <NavigationContainer>
    //      <Stack.Navigator initialRouteName="Login"  screenOptions={{
    //       gestureEnabled: false,
    //       animation: 'fade',
    //     }}>
    //       <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
    //       <Stack.Screen name="StudentDashboard" component={StudentAttendenceScreen} options={{headerShown: false}} />
    //      </Stack.Navigator>
    // </NavigationContainer>
  )
}

export default App