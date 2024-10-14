import { View, Text, Button, TouchableOpacity } from 'react-native';
import React, { useContext, useEffect } from 'react';
import { router, useNavigation } from 'expo-router'; // Bạn có thể giữ nguyên import này
import { Colors } from './../../constants/Colors';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { CreateTripContext } from './../../context/CreateTripContext';

export default function SearchPlace() {
    const navigation = useNavigation(); // Sử dụng navigation từ useNavigation
    const { tripData, setTripData } = useContext(CreateTripContext);

    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerTitle: 'Search'
        });
    }, []);

    return (
        <View
            style={{
                padding: 25,
                paddingTop: 75,
                backgroundColor: Colors.WHITE,
                height: '100%'
            }}
        >
            <GooglePlacesAutocomplete
                placeholder='Search'
                fetchDetails={true}
                onPress={(data, details = null) => {
                    console.log(data.description);
                    console.log(details?.geometry.location);
                    console.log(details?.photos[0]?.photo_reference);
                    console.log(details?.url);
                    setTripData({
                        locationInfo: {
                            name: data.description,
                            coordinates: details?.geometry.location,
                            photoRef: details?.photos[0]?.photo_reference,
                            url: details?.url
                        }
                    });
                }}
                query={{
                    key: process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY,
                    language: 'en',
                }}
                styles={{
                    textInputContainer: {
                        borderWidth: 1,
                        borderRadius: 5,
                        marginTop: 25
                    }
                }}
            />
            <TouchableOpacity onPress={()=>router.push('/create-trip/select-travaler')}
      style={{
        padding:15,
        backgroundColor:Colors.PRIMARY,
        borderRadius:15,
        paddingHorizontal:30,
        textAlign: 'center'
      }}
      >
        <Text
        style={{
            color:Colors.WHITE,
            fontFamily:'outfit-medium'
        }}
        >travaler</Text>
                </TouchableOpacity>
        </View>
    );
}
