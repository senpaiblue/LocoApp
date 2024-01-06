import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Modal,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { themeColors } from "../theme";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import UploadImage from "../Componets/UploadImage";
import axios from "axios";

export default function SignUpScreen() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    profile_picture: "",
  });
  const [activeModal, setactiveModal] = useState(false);
  const navigation = useNavigation();

  const handleData = (name, value) => {
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCreateUser = async () => {
    console.log("UserData before sending:", userData);
    const formData = new FormData();
  
    formData.append("name", userData.name);
    formData.append("email", userData.email);
    formData.append("password", userData.password);
    formData.append("age", userData.age);
  
    if (userData.profile_picture) {
      formData.append("profile_picture", {
        uri: userData.profile_picture,
        type: "image/png",
        name: "profile_picture.png",
      });
    }

try {
  const response = await axios.post(
    "https://api.apptask.thekaspertech.com/api/users/register",
    formData
  );
  console.log("Response Data:", response.data);
} catch (err) {
  console.error("Error occurred:", err.response ? err.response.data : err);
}
};
 
  function renderModal() {
    return (
      <Modal visible={activeModal} animationType="fade" transparent={true}>
        <View className="flex-1 justify-center items-center bg-white/70">
          <View className="w-[80%] h-[35%] bg-[#ECECEC] border border-[#B0B0B0] rounded-2xl p-8">
            <Text className="text-[#ea3737] font-semibold text-xl text-center">
              Location Permission Requiured
            </Text>
            <Text className="text-neutral-500 font-semibold text-sm text-center mt-2">
              You need to allow the app to fetch your location to use Loco,
              otherwise you will be logged out!
            </Text>
            <View className="flex-row w-full justify-between p-8">
              <TouchableOpacity onPress={() => setactiveModal(false)}>
                <Text className="text-[#ea3737] font-bold text-sm">Logout</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("location")}>
                <Text className="text-[#FFA500] font-bold text-sm">Allow</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  }

  return (
    <View
      className="flex-1 bg-white"
      style={{ backgroundColor: themeColors.bg }}
    >
      <SafeAreaView className="flex">
        <View className="flex-row justify-center">
          <Image
            source={require("../assets/signup.png")}
            style={{ width: 165, height: 110 }}
          />
        </View>
      </SafeAreaView>
      <ScrollView
        className="flex-1 bg-white px-8 pt-8"
        style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }}
      >
        <View className="px-4 pt-4">
          <View className="mb-4 flex-row items-center gap-4">
            <UploadImage handleData={handleData} />
            {/* <Image source={require('../assets/profile.png')}/> */}
            <View className="flex-col ">
              <Text className="pb-2 text-sm font-bold">Profile Picture</Text>
              <View className="flex-row gap-4">
                <TouchableOpacity className="bg-neutral-500 rounded-2xl px-4 py-2">
                  <Text className="text-sm text-white font-medium">
                    Take Photo
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity className="bg-neutral-500 rounded-2xl px-4 py-2">
                  <Text className="text-sm text-white font-medium">
                    Gallery
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View className="form space-y-2">
          <Text className="text-gray-700 ml-4">Full Name</Text>
          <TextInput
            className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
            value={userData.name}
            name="name"
            type="text"
            onChangeText={(value) => handleData("name", value)}
            placeholder="Enter Name"
            required
          />
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
          <Text className="text-gray-700 ml-4">Age</Text>
          <TextInput
            className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-7"
            value={userData.age}
            name="age"
            onChangeText={(value) => handleData("age", value)}
            placeholder="Enter Age"
            required
          />
          <TouchableOpacity
            className="py-3 bg-orange-400 rounded-xl"
            onPress={() => {
              handleCreateUser();
              setactiveModal(true);
            }}
          >
            <Text className="font-2xl font-bold text-center text-black">
              create Account
            </Text>
          </TouchableOpacity>
        </View>
        <Text className="text-lg text-gray-700 font-bold text-center py-2">
          Or
        </Text>
        <View className="flex-row justify-center ">
          <Text className="text-gray-500 font-semibold">
            Already have an account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text className="font-semibold text-yellow-500"> Login</Text>
          </TouchableOpacity>
          {renderModal()}
        </View>
      </ScrollView>
    </View>
  );
}
