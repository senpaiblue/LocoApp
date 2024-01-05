import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from '../Screens/SignUp';
import Profile from '../Screens/Profile';


const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Signup" options={{headerShown:false}} component={SignUp} />
      <Stack.Screen name="Profile" options={{headerShown:false}} component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}