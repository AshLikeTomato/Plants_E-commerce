import { Text, View} from "react-native";
import '../global.css';
import {StatusBar} from "expo-status-bar";
import LoginScreen from "@/app/screens/LoginScreen";


export default function Index() {
  return (
      <View  className="flex-1 bg-white">
          <StatusBar style="auto"/>
          <LoginScreen/>
      </View>
  );
}
