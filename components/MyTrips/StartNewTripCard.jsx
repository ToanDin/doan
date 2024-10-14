import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from './../../constants/Colors';
import { useRouter } from 'expo-router';

export default function StartNewTripCard() {

    const router=useRouter();
  return (
    <View
    style={{ 
        padding:20,
        marginTop:50,
        display:'flex',
        alignItems: 'center',
        gap:5
    }}
    >
      <Ionicons name="location" size={30} color="black" />
      <Text style={{
        fontSize:25,
        fontFamily: 'outfit-medium',marginTop:10
      }}>
        Chua co chuyen di nao
      </Text>

      <Text style={{
        fontSize:20,
        fontFamily: 'outfit',
        textAlign: 'center',
        color:Colors.GRAY
      }}>
        Hay tim cho minh mot noi de co the tan huong. Bat dau chon nao!
      </Text>

      <TouchableOpacity
      onPress={()=>router.push('/create-trip/search-place')}
      style={{
        padding:15,
        backgroundColor:Colors.PRIMARY,
        borderRadius:15,
        paddingHorizontal:30
      }}
      >
        <Text
        style={{
            color:Colors.WHITE,
            fontFamily:'outfit-medium'
        }}
        >Bat dau chuyen hanh trinh</Text>
      </TouchableOpacity>
    </View>
  )
}