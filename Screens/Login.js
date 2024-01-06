import { View, Text, SafeAreaView, TextInput, Image, TouchableOpacity } from "react-native";
import React from "react";
import { themeColors } from "../theme";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const navigation=useNavigation()
  return (
    <View
      className="flex-1 bg-white"
      style={{ backgroundColor: themeColors.bg }}
    >
      <SafeAreaView className="flex">
        <View className="flex-row justify-center">
          <Image
            source={require("../assets/login.png")}
            style={{ width: 165, height: 110 }}
          />
        </View>
      </SafeAreaView>
      <View
        className="flex-1 bg-white px-8 pt-8"
        style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }}
      >
        <View className="form space-y-2">
          <Text className="text-gray-700 ml-4">Full Name</Text>
          <TextInput
            className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
            value="Jessica Mich"
            placeholder="Enter Name"
          />
          <Text className="text-gray-700 ml-4">Email Address</Text>
          <TextInput
            className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
            value="Jessica@gmail.com"
            placeholder="Enter Email"
          />
          <TouchableOpacity
            className="py-3 bg-orange-400 rounded-xl"
            onPress={() => navigation.navigate("location")}
          >
            <Text className="font-2xl font-bold text-center text-black">
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
