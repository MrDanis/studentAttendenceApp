import React from 'react'
import { View,Text,Button } from 'react-native';

const StudentAttendenceScreen = ({onUserUpdate,currentLoginUserData}) => {
  console.log('User Data from the parent is : ',currentLoginUserData);
  const handleLogout = ()=>{
     onUserUpdate({activeStatus:false,userData:{}});
  }
  return (
    <View style={{flex:1,padding:10,backgroundColor:'#FFFFFF'}}>
      <View style={{flex:1,padding:5}}>
       <Text style={{color:'#000000',marginBottom:5}}>
          User Name : {currentLoginUserData?.name} 
       </Text>
       <Text style={{color:'#000000',marginBottom:5}}>
          Attendence Count : {+' '+currentLoginUserData?.total_attendance} 
       </Text>
       <Text style={{color:'#000000',marginBottom:5}}>
          Joining Year : {+' '+currentLoginUserData?.starting_year }
       </Text>
       <Text style={{color:'#000000',marginBottom:5}}>
          Performance Grade : {currentLoginUserData?.standing }
       </Text>
       <Text style={{color:'#000000',marginBottom:5}}>
          Major : {currentLoginUserData?.major }
       </Text>
       <Text style={{color:'#000000',marginBottom:5}}>
          Last Attandence Time : {currentLoginUserData?.last_attendance_time }
       </Text>
       <Text style={{color:'#000000',marginBottom:5}}>
          Starting Year : {currentLoginUserData?.starting_year }
       </Text>
      </View>
       <Button
        title="Logout"
        onPress={handleLogout}
       >
        </Button> 
    </View>
  )
}

export default StudentAttendenceScreen