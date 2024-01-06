import { View, Text, SafeAreaView, TextInput, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { themeColors } from "../theme";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

export default function Login() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const navigation=useNavigation()
  const handleData = (name, value) => {
    setUserData((prev) => ({ ...prev, [name]: value }));
  };
  const handleUser = async () => {
    try {
      const res = await axios.post("https://api.apptask.thekaspertech.com/api/users/login", {
        email: userData.email,
        password: userData.password,
      });
      console.log("res+++", res);
      // Handle successful response
    } catch (error) {
      console.log("error raised", error);
      // Handle error response
    }
  };

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
        <Text className="text-gray-700 ml-4">Email Address</Text>
          <TextInput
            className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
            value={userData.email}
            name="email"
            onChangeText={(value) => handleData("email", value)}
            placeholder="Enter Email"
            required
          />
          <Text className="text-gray-700 ml-4">Password</Text>
          <TextInput
            className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-7"
            secureTextEntry
            value={userData.password}
            name="password"
            onChangeText={(value) => handleData("password", value)}
            placeholder="Enter Password"
            required
          />
          <TouchableOpacity
            className="py-3 bg-orange-400 rounded-xl"
            onPress={() => 
              handleUser()}
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
