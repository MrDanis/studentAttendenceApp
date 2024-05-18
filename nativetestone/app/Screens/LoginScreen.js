import React,{useEffect,useState} from 'react'
import { View, TextInput, Text, Button, StyleSheet } from 'react-native';
import database from '@react-native-firebase/database';
// import { getUsersData } from '../Utils/FirebaseDataReducers';
// import { useDispatch } from 'react-redux';
const LoginScreen = ({onUserUpdate}) => {
  const [data, setData] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(true);
  // const dispatch = useDispatch();
  const handleSubmit = () => {
    let dataPayload = {
      name:name.split('-')[2],
      email:email
    }
    let actualDbData = data[dataPayload.name];
    console.log('Current user : ',actualDbData);
    console.log('user submit data is :',dataPayload);
    onUserUpdate({activeStatus:true,userData:actualDbData});
  };
  useEffect(() => {

    const reference = database().ref('/Students');
    const onValueChange = reference.on('value', snapshot => {
      console.log('data',snapshot.val())
      setData(snapshot.val());
      setLoading(false);
    });
    return () => reference.off('value', onValueChange);S
  }, []);
  useEffect(()=>{
    if(data)
      {
        console.log('data is : ',data);
      }
    // dispatch(getUsersData({userData:data}));
  },[data])
  return (
    <View style={styles.container}>
    <Text style={styles.label}>Enter your registration number:</Text>
    <TextInput
      style={styles.input}
      placeholder="Registration# (FA20-BEE-000)"
      placeholderTextColor="#000000"
      value={name}
      onChangeText={text => setName(text)}
    />
    <Text style={styles.label}>Enter your password:</Text>
    <TextInput
      style={styles.input}
      placeholder="Type your password"
      placeholderTextColor="#000000"
      value={email}
      onChangeText={text => setEmail(text)}
    />
    <Button style={{width:'100%'}} title="Submit" onPress={handleSubmit} />
  </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    borderWidth:0,
    borderColor:'blue',
    backgroundColor:'#FFFFFF'
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
    color:'black'
  },
  input: {
    width: '80%',
    padding: 8,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 4,
    marginBottom: 16,
    color:'black'
  },
  result: {
    marginTop: 16,
    fontSize: 18,
  },
});
export default LoginScreen