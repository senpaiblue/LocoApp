import React, { useEffect, useState } from "react";
import { View, TouchableOpacity,Text, PermissionsAndroid } from "react-native";
import Geolocation from "react-native-geolocation-service";
import MapView, { Marker } from "react-native-maps";

const GetLocation = () => {
  const[mLat,setMLat]=useState(0)
  const [mLong,setMlong]=useState(0)
  useEffect(() => {
    requestLocationPermission();
  }, []);
  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Loco App Location Permission",
          message:
            "Loco App needs access to your Location " +
            "so we can show your location.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK",
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the Location");
      } else {
        console.log("Location permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const getLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        setMLat(position.coords.latitude);
        setMlong(position.coords.longitude);
      },
      (error) => {
        // See error code charts below.
        console.log(error.code, error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ width: "100%", height: "100%" }}
        initialRegion={{
          latitude: 28.693602091083623,
          longitude: 77.21464383448563,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        onRegionChange={(x) => {
          console.log(x);
        }}
      >
        <Marker
        coordinate={{latitude:mLat,longitude:mLong}}
        />
      </MapView>
      <TouchableOpacity className="py-3 bg-orange-400 rounded-xl"
      onPress={()=>getLocation()}
      >
        <Text className="font-2xl font-bold text-center text-black">
          Get Current Location
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default GetLocation;
