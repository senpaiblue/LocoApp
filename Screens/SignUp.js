import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';

export default function SignUp() {
  const navigation= useNavigation()
  return (
    <SafeAreaView className="flex-1 bg-white">
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
        paddingHorizontal: 10,
      }}
    >
        <View className="flex-1 items-center justify-center">
          <Text className="text-orange-400 text-center text-6xl font-bold">Loco</Text>
          <LottieView
            source={require("../lottie-animations/Animation - 1704440966123.json")}
            style={{
              width: 400,
              height: 400,
              alignSelf: "center",
            }}
            autoPlay={true}
            loop={true}
          />
          <View className="flex-col items-center">
            <TouchableOpacity
            className="bg-orange-400 px-16 py-4 rounded-3xl w-[300]"
              onPress={()=>navigation.navigate("Profile")}
            >
              <Text
              className="text-center text-white text-xl font-medium"
              >
                Sign up
              </Text>
            </TouchableOpacity>
            <View className="flex-row gap-4 pt-4" >
              <Text
              className="text-center font-light text-[16px] text-black "
              >
                Already have an account?
              </Text>
              <TouchableOpacity onPress={()=> navigation.navigate("Login")}>
              <Text
              className="text-center font-bold text-[16px] text-black "
              >
                Log in
              </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

