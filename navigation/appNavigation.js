import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from '../Screens/SignUp';
import Profile from '../Screens/Profile';
import Login from '../Screens/Login';
import Home from '../Screens/Home';
import Location from '../Screens/Location';


const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Signup" options={{headerShown:false}} component={SignUp} />
      <Stack.Screen name="Profile" options={{headerShown:false}} component={Profile} />
      <Stack.Screen name="Login" options={{headerShown:false}} component={Login} />
      <Stack.Screen name="Home" options={{headerShown:false}} component={Home} />
      <Stack.Screen name="location" options={{headerShown:false}} component={Location} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}