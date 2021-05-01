import { StyleSheet } from "react-native";
import {
  useFonts,
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black,
} from "@expo-google-fonts/inter";

export const globalStyles = StyleSheet.create({
  container: {
    padding: 24,
  },
  titleText: {
    //fontFamily: "Inter_600SemiBold",
    fontSize: 25,
    color: "#333",
    margin: 10,
    fontWeight: "bold",
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
  titleDetails: {
    backgroundColor: "lightskyblue",
    fontSize: 25,
    color: "#333",
    margin: 10,
    fontWeight: "bold",
    borderStyle: "dashed",
    borderRadius: 10,
    borderWidth: 2,
  },
  resultTip1: {
    backgroundColor: "coral",
    fontSize: 25,
    color: "#333",
    margin: 10,
    fontWeight: "bold",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "grey",
  },
});
