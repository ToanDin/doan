import { View, Text,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from './../constants/Colors'
import { StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';


export default function Login() {

  const router=useRouter();
  return (
    <View>
      <Image source={require('./../assets/images/login.jpeg')}
        style={{ 
            width:'100%',
            height:350
        }}
      />
      <View style={styles.container}>
        <Text style={{ 
            fontSize:28,
            fontFamily: 'outfit-bold',
            textAlign:'center',
            marginTop: 10
        }}>AI TRAVEL PLANNER</Text>

        <Text style={{ 
            fontFamily: 'outfit',
            fontSize:17,
            textAlign:'center',
            color:Colors.GRAY,
            marginTop:20
        }}>Noi Den Cua Moi Nha</Text>
        
        <TouchableOpacity style={styles.button}
        
        onPress={()=>router.push('auth/sign-in')}
        >
            <Text style={{color:Colors.WHITE,
                textAlign:'center',
                fontFamily: 'outfit',
                fontSize:17
            }} >Dang Nhap Bang Google</Text>

        </TouchableOpacity>
      </View>
    </View>
  )
}
 const styles = StyleSheet.create({
    container: {
        backgroundColor:Colors.WHITE,
        marginTop:-20,
        height:'100%',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        padding:25
    },
    button:{
        padding:15,
        backgroundColor:Colors.PRIMARY,
        borderRadius:99,
        marginTop:'20%'
    }
 })