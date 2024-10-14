import { View, Text, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from 'expo-router'
import { Colors } from './../../constants/Colors';
import {SelectTravelestList} from './../../constants/Options'
import OptionCard from '../../components/CreateTrip/OptionCard';


export default function SelectTraveler() {
  const navigation=useNavigation();

  
  useEffect(()=>{
navigation.setOptions({
  headerShown:true,
  headerTransparent:true,
  headerTitle:'Select Traveler',
  
})
  }
  )
  return (
    
    <View style={{ 
      padding:25,
      paddingTop:75,
      backgroundColor:Colors.WHITE,
      height: '100%'
    }}>
      <Text
      style={{ 
        fontSize:35,
        fontFamily:'outfit-bold',
        marginTop:20
      }}
      >Who's Travelling</Text>

      <View>
        <Text style={{
          fontFamily:'outfit-bold',
          fontSize:23
        }}>
          Choose your traveles
        </Text>

        <FlatList
        data={SelectTravelestList}
        renderItem={({item,index}) =>(
          <View style={{
            marginVertical:10
          }}>
            <OptionCard option={item}/>
            </View>
        )}  
        />
      </View>
    </View>
  )
}